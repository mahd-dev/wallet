import { Link, useLocation, useNavigate } from "@remix-run/react";
import {
  IconBell,
  IconHome,
  IconLogin2,
  IconLogout,
  IconMenu3,
  IconUser,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import {
  Icon,
  Button as KButton,
  Dialog as KDialog,
  Popover as KPopover,
} from "konsta/react";
import { useRef, useState, useEffect } from "react";
import {
  authAtom,
  mainLayoutPropsAtom,
  mainPanelAtom,
  userAtom,
} from "~/store/store";
import { gql, useMutation, useQuery } from "urql";

// Create a global reference to store the refresh function
let notificationRefreshFunction: (() => void) | null = null;

// Update this function in MainNavbar.js
export function refreshNotifications() {
  if (notificationRefreshFunction) {
    console.log("Executing notification refresh function");
    notificationRefreshFunction();
  } else {
    console.warn("Notification refresh function not available");
  }
}

const menu = [
  { path: "/", name: "Home" },
  { path: "/transactions", name: "Transactions" },
  { path: "/statistiques", name: "Statistics" },
  { path: "/categorie", name: "Categories" },
  { path: "/budget", name: "Budget" },
];

// GraphQL query to get unread notifications count
const GET_UNREAD_NOTIFICATIONS = gql`
  query GetUnreadNotifications ($userId: String!){
    notifications(filter: { isRead: { equalTo: false }, userId: { equalTo: $userId } }) {
      totalCount
      nodes {
        id
        isRead
      }
    }
  }
`;

// Mutation to toggle notification read status
const TOGGLE_IS_READ = gql`
  mutation ToggleIsRead($id: String!, $isRead: Boolean!) {
    updateNotification(input: {id: $id, patch: {isRead: $isRead}}) {
      clientMutationId
    }
  }
`;

export default function MainNavbar() {
  const [auth] = useAtom(authAtom);
  const [mainPanel, setMainPanel] = useAtom(mainPanelAtom);
  const [propsAtm] = useAtom(mainLayoutPropsAtom);
  const location = useLocation();
  const [user] = useAtom(userAtom);
  const [notifications, setNotifications] = useState(0);
  const [userPopover, setUserPopoverOpened] = useState(false);
  const userPopoverRef = useRef<HTMLElement | null>(null);
  const [logoutDialogOpened, setLogoutDialogOpened] = useState(false);

  // URQL hooks for notifications
  const [notificationsResult, reexecuteQuery] = useQuery({
    query: GET_UNREAD_NOTIFICATIONS,
    variables: { userId: user?.oidcId || "" },
    pause: !user, // Pause query if no user is logged in
    requestPolicy: 'network-only' // Make sure we always get fresh data
  });

  const { data: notificationsData, fetching: notificationsLoading } = notificationsResult;

  const [toggleIsReadResult, toggleIsRead] = useMutation(TOGGLE_IS_READ);

  // Store the refresh function in the global reference
  useEffect(() => {
    console.log("Setting up notification refresh function for user:", user?.oidcId);
    
    notificationRefreshFunction = () => {
      if (user) {
        console.log("Refreshing notifications for user:", user.oidcId);
        reexecuteQuery({ requestPolicy: 'network-only' });
      } else {
        console.warn("Cannot refresh notifications - no user logged in");
      }
    };

    // Initial fetch when component mounts (if user is logged in)
    if (user) {
      reexecuteQuery({ requestPolicy: 'network-only' });
    }

    return () => {
      notificationRefreshFunction = null;
    };
  }, [user, reexecuteQuery]);

  // Update notifications count whenever data changes
  useEffect(() => {
    if (notificationsData && notificationsData.notifications) {
      setNotifications(notificationsData.notifications.totalCount);
    }
  }, [notificationsData]);

  const markNotificationAsRead = async (id: string) => {
    try {
      await toggleIsRead({
        id,
        isRead: true
      });
      // Refetch to update the unread count
      reexecuteQuery({ requestPolicy: 'network-only' });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllNotificationsAsRead = async () => {
    if (notificationsData && notificationsData.notifications) {
      const promises = notificationsData.notifications.nodes.map((notification: { id: string; isRead: boolean }) => 
        toggleIsRead({
          id: notification.id,
          isRead: true
        })
      );
      
      try {
        await Promise.all(promises);
        // Refetch to update the unread count
        reexecuteQuery({ requestPolicy: 'network-only' });
      } catch (error) {
        console.error("Error marking all notifications as read:", error);
      }
    }
  };

  const openUserPopover = (targetRef: HTMLElement | null) => {
    userPopoverRef.current = targetRef;
    setUserPopoverOpened(true);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok)
        throw new Error(`Logout failed: ${response.statusText}`);

      localStorage.removeItem("connected_user");
      localStorage.removeItem("validOtp");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <nav className="fixed start-0 top-0 z-20 hidden w-full border-b border-gray-200 bg-white lg:block">
  <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
    <div className="flex items-center rtl:space-x-reverse">
      <a href="/" className="flex items-center">
        <img src="/logoWallet.png" className="absolute h-24" alt="GCI" />
      </a>
    </div>
    <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
      {user && (
        <div className="relative mr-4">
          <Link
            to="/notifications"
            className="hover:text-secondary relative inline-block p-2 text-gray-800 transition-colors"
            onClick={() => notifications > 0 && markAllNotificationsAsRead()}
          >
            <IconBell size={24} stroke={1.5} />
            {notifications > 0 && !notificationsLoading && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {notifications}
              </span>
            )}
          </Link>
        </div>
      )}
      {user ? (
        <button
          type="button"
          className="user-popover-link text-secondary-content hover:text-secondary flex items-center gap-2 rounded-lg px-4 py-2 text-center text-sm font-medium"
          onClick={() => openUserPopover(document.querySelector(".user-popover-link"))}
        >
          <span className="mr-1">{user.firstName}</span>
          <Icon
            ios={<IconUser size={24} />}
            material={<IconUser size={24} />}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          <IconLogin2 className="inline w-4" /> Login
        </button>
      )}
    </div>
    <div
      className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
      id="navbar-sticky"
    >
      <ul className="mt-1 flex flex-row rounded-lg border bg-white p-0 font-medium md:space-x-8 md:border-0 rtl:space-x-reverse">
        {menu.map((m, indx) => (
          <li key={`menu-${indx}`}>
            <Link
              to={m.path}
              className={`hover:text-secondary text-gray-800 ${location.pathname === m.path ? "text-secondary" : ""}`}
            >
              {m.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

      {/* Mobile View */}
      <div className="fixed top-0 z-20 flex w-full max-w-full flex-nowrap items-center transition-opacity lg:hidden">
        <div className="material:from-[#F4EEEB] material:via-[#F4EEEB]/90 ios:from-[#F5F5F8] ios:via-[#F5F5F8]/95 material:dark:from-[#17140C] material:dark:via-[#17140C]/95 ios:dark:from-[#0E0E0E] ios:dark:via-[#0E0E0E]/90 absolute inset-x-0 top-0 -z-10 h-10 w-full bg-gradient-to-b via-30% to-transparent" />
        <button
          className={`relative ${mainPanel ? "opacity-0" : ""}`}
          onClick={() => setMainPanel(true)}
        >
          <div
            className="absolute inset-0 -z-10 rounded-full backdrop-blur-md"
            style={{
              maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
              WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
            }}
          />
          <IconMenu3 stroke={1.75} size={32} className="m-4" />
        </button>
        <Link
          to="/"
          className={`grow overflow-x-hidden ${mainPanel ? "opacity-0" : ""}`}
        >
          <div className="mt-2 text-2xl">
            <h1 className="truncate">My Wallet</h1>
            <div
              className="absolute -inset-x-16 -inset-y-4 -z-10 rounded-full backdrop-blur-md"
              style={{
                maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
              }}
            />
          </div>
        </Link>
        {user && (
          <div className="relative mr-2">
            <Link
              to="/notifications"
              className={`relative ${mainPanel ? "opacity-0" : ""}`}
              onClick={() => notifications > 0 && markAllNotificationsAsRead()}
            >
              <div
                className="absolute inset-0 -z-10 rounded-full backdrop-blur-md"
                style={{
                  maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                  WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                }}
              />
              <IconBell stroke={1.5} size={28} className="m-4" />
              {notifications > 0 && !notificationsLoading && (
                <span className="absolute right-1 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {notifications}
                </span>
              )}
            </Link>
          </div>
        )}
        {user ? (
          <button
            onClick={() => openUserPopover(document.querySelector(".user-mobile-link"))}
            className="user-mobile-link mr-3"
          >
            <Icon
              ios={<IconUser size={28} />}
              material={<IconUser size={28} />}
            />
          </button>
        ) : (
          !location.pathname.startsWith("/auth") && (
            <Link to={`/login?next=${location.pathname}`} className="mr-3">
              <Icon
                className="mx-2 mt-1"
                ios={<IconLogin2 size={28} />}
                material={<IconLogin2 size={28} />}
              />
            </Link>
          )
        )}
      </div>

      {/* User Popover */}
      <KPopover
        opened={userPopover}
        target={userPopoverRef.current}
        onBackdropClick={() => setUserPopoverOpened(false)}
        className="z-50"
      >
        <div className="z-[99999] w-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="bg-blue-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white/10">
                <Icon
                  ios={<IconUser size={32} className="text-white" />}
                  material={<IconUser size={32} className="text-white" />}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-sm opacity-90">{user?.email}</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <Link
              to="/profile"
              onClick={() => setUserPopoverOpened(false)}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100"
            >
              <IconUser size={22} />
              <span>My Profile</span>
            </Link>
            <Link
              to="/"
              onClick={() => setUserPopoverOpened(false)}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100"
            >
              <IconHome size={22} />
              <span>Home</span>
            </Link>
            <Link
              to="/notifications"
              onClick={() => {
                setUserPopoverOpened(false);
                if (notifications > 0) markAllNotificationsAsRead();
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100"
            >
              <IconBell size={22} />
              <span>Notifications</span>
              {notifications > 0 && !notificationsLoading && (
                <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {notifications}
                </span>
              )}
            </Link>
            <div className="my-2 border-t border-gray-200"></div>
            <button
              onClick={() => {
                setUserPopoverOpened(false);
                setLogoutDialogOpened(true);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-red-600 hover:bg-red-50"
            >
              <IconLogout size={22} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </KPopover>

      {/* Updated Logout Dialog matching ProfilePage style */}
      <div className="flex items-center justify-center">
        <KDialog
          opened={logoutDialogOpened}
          onBackdropClick={() => setLogoutDialogOpened(false)}
        >
          <div className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Confirm Logout
            </h2>
            <p className="mb-6 text-gray-600">
              Are you sure you want to logout from your account?
            </p>
            <div className="flex justify-end gap-4">
              <KButton
                className="rounded-lg bg-gray-400 px-4 py-2 text-gray-900 hover:bg-gray-500"
                onClick={() => setLogoutDialogOpened(false)}
              >
                Cancel
              </KButton>
              <KButton
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </KButton>
            </div>
          </div>
        </KDialog>
      </div>
    </>
  );
}