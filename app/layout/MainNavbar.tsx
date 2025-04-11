import { Link, useLocation, useNavigate } from "@remix-run/react";
import {
  IconBell,
  IconLogin2,
  IconMenu3,
  IconUser,
  IconLogout,
  IconHome,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import {
  Icon,
  Button as KButton,
  Link as KLink,
  Popover as KPopover,
  Dialog as KDialog,
} from "konsta/react";
import { useRef, useState } from "react";
import {
  authAtom,
  cartAtom,
  mainLayoutPropsAtom,
  mainPanelAtom,
  userAtom,
} from "~/store/store";

const menu = [
  { path: "/", name: "Acceuil" },
  { path: "/transactions", name: "transactions" },
  { path: "/statistiques", name: "statistiques" },
  { path: "/categorie", name: "categorie" },
  { path: "/budget", name: "budget" },
];

export default function MainNavbar() {
  const [auth] = useAtom(authAtom);
  const [mainPanel, setMainPanel] = useAtom(mainPanelAtom);
  const [propsAtm] = useAtom(mainLayoutPropsAtom);
  const location = useLocation();
  const [user] = useAtom(userAtom);
  const [notifications, setNotifications] = useState(3);
  const [userPopover, setUserPopoverOpened] = useState(false);
  const userPopoverRef = useRef(null);
  const [logoutDialogOpened, setLogoutDialogOpened] = useState(false);
  
  const openUserPopover = (targetRef: any) => {
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
      if (!response.ok) throw new Error(`Logout failed: ${response.statusText}`);
      
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
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="absolute h-12" alt="GCI" />
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            {user && (
              <div className="relative mr-4">
                <Link
                  to="/notifications"
                  className="relative inline-block p-2 text-gray-800 transition-colors hover:text-secondary"
                >
                  <IconBell size={24} stroke={1.5} />
                  {notifications > 0 && (
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
                className="user-popover-link text-secondary-content flex items-center gap-2 rounded-lg px-4 py-2 text-center text-sm font-medium hover:text-secondary"
                onClick={() => openUserPopover(".user-popover-link")}
              >
                <span className="mr-1">{user.firstName}</span>
                <Icon ios={<IconUser size={24} />} material={<IconUser size={24} />} />
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
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
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
          to={propsAtm.navbarLink || ""}
          className={`grow overflow-x-hidden ${mainPanel ? "opacity-0" : ""}`}
        >
          <div className="mt-2 text-2xl">
            <h1 className="truncate">{propsAtm.navbarTitle}</h1>
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
            >
              <div
                className="absolute inset-0 -z-10 rounded-full backdrop-blur-md"
                style={{
                  maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                  WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                }}
              />
              <IconBell stroke={1.5} size={28} className="m-4" />
              {notifications > 0 && (
                <span className="absolute right-1 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {notifications}
                </span>
              )}
            </Link>
          </div>
        )}
        {user ? (
          <button
            onClick={() => openUserPopover(".user-mobile-link")}
            className="user-mobile-link mr-3"
          >
            <Icon ios={<IconUser size={28} />} material={<IconUser size={28} />} />
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
              onClick={() => setUserPopoverOpened(false)}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100"
            >
              <IconBell size={22} />
              <span>Notifications</span>
              {notifications > 0 && (
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
      <KDialog
        opened={logoutDialogOpened}
        onBackdropClick={() => setLogoutDialogOpened(false)}
        className="max-w-md mx-auto rounded-lg"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Confirm Logout
          </h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to logout from your account?
          </p>
          <div className="flex justify-end gap-4">
            <KButton
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setLogoutDialogOpened(false)}
            >
              Cancel
            </KButton>
            <KButton
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </KButton>
          </div>
        </div>
      </KDialog>
    </>
  );
}