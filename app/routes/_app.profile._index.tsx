import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";

import {
  IconLogout,
  IconShield,
  IconUserEdit,
  IconUserShield,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { Block, Dialog, DialogButton, List, ListItem } from "konsta/react";

import { useMainLayoutProps } from "~/layout/MainLayout";
import { dirAtom, userAtom } from "~/store/store";

export default function ProfilePage() {
  const [dir] = useAtom(dirAtom);
  const [auth] = useAtom(userAtom);
  useMainLayoutProps({ navbarTitle: "My Profile" });

  const navigate = useNavigate();
  const [logoutDialog, setLogoutDialog] = useState(false);

  const logout = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        credentials: "include", // ✅ Ensures session cookies are sent and cleared
      });

      if (!response.ok) {
        throw new Error(`Logout failed: ${response.statusText}`);
      }

      // ✅ Remove user from localStorage
      localStorage.removeItem("connected_user");
      localStorage.removeItem("validOtp");

      // ✅ Force a full reload to clear client-side state
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [connectedUser, setConnectedUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("connected_user");
    if (storedUser) {
      setConnectedUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Block className="!my-0 mx-auto flex max-w-3xl flex-col md:flex-row">
      <div className="flex flex-col items-center gap-1">
        <div className="relative">
          <div
            className="avatar mb-3 cursor-pointer"
            onClick={() => setShowUserInfo(!showUserInfo)}
          >
            <div className="mask mask-squircle size-24">
              <img src={"/images/avatar-man.png"} alt="Profile Avatar" />
            </div>
          </div>

          {showUserInfo && connectedUser && (
            <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 transform rounded-lg bg-white p-3 text-center shadow-md">
              <h3 className="text-lg font-semibold">{auth?.firstName}</h3>
              <p className="text-sm text-gray-600">{auth?.lastName}</p>
            </div>
          )}
        </div>

        <h3 className="text-xl">
          {auth?.firstName}
          {auth?.lastName}
        </h3>
        <span>{auth?.email}</span>
      </div>
      <div className="w-7"></div>
      <List strong inset className="flex-1 md:my-0">
        <ListItem
          title={"Edit my profile"}
          media={<IconUserEdit />}
          link
          onClick={(e) => {
            e.preventDefault();
            navigate("/profile/edit");
          }}
          linkProps={{ href: "/profile/edit" }}
        />
        <ListItem title={"Security"} media={<IconShield />} link />
        <ListItem
          title={"Privacy Policy"}
          media={<IconUserShield />}
          link
          onClick={(e) => {
            e.preventDefault();
            navigate("/legal/terms");
          }}
          linkProps={{ href: "/legal/terms" }}
        />
        <ListItem
          title={"Logout"}
          media={
            <IconLogout className={`${dir === "ltr" ? "-scale-x-100" : ""}`} />
          }
          link
          chevronIos={false}
          chevronMaterial={false}
          onClick={() => setLogoutDialog(true)}
        />
      </List>

      {/* Centered Logout Confirmation Dialog */}
      {logoutDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Dialog
            opened={logoutDialog}
            onBackdropClick={() => setLogoutDialog(false)}
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg"
          >
            <h2 className="mb-4 text-center text-lg font-semibold">
              Confirm logout
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-between">
              <DialogButton strong onClick={() => setLogoutDialog(false)}>
                No
              </DialogButton>
              <DialogButton onClick={logout}>Log me out</DialogButton>
            </div>
          </Dialog>
        </div>
      )}
    </Block>
  );
}
