import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
  IconLogout,
  IconShield,
  IconUserEdit,
  IconKey,
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
  const [resetPasswordDialog, setResetPasswordDialog] = useState(false);
  const [connectedUser, setConnectedUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("connected_user");
    if (storedUser) {
      setConnectedUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = async () => {
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

  const handleResetPassword = async () => {
    // Placeholder for password reset logic
    try {
      // This would typically send a reset email or trigger a reset flow
      console.log("Password reset requested for:", auth?.email);
      setResetPasswordDialog(false);
      // Add toast notification here if you have one
    } catch (error) {
      console.error("Password reset error:", error);
    }
  };

  return (
    <Block className="max-w-2xl mx-auto my-6 p-6 bg-white rounded-xl shadow-lg">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 mt-10">
              <img src="/images/avatar-man.png" alt="Profile Avatar" />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {auth?.firstName} {auth?.lastName}
          </h2>
          <p className="text-gray-600 mt-1">{auth?.email}</p>
        </div>
      </div>

      {/* Profile Options */}
      <List strong inset className="rounded-lg overflow-hidden">
        <ListItem
          title="Edit Profile"
          media={<IconUserEdit className="text-blue-500" />}
          link
          onClick={() => navigate("/profile/edit")}
          className="hover:bg-gray-50 transition-colors"
        />
        
        <ListItem
          title="Security"
          media={<IconShield className="text-green-500" />}
          link
          onClick={() => navigate("/security")}
          className="hover:bg-gray-50 transition-colors"
        />
        
        <ListItem
          title="Reset Password"
          media={<IconKey className="text-yellow-500" />}
          link
          onClick={() => setResetPasswordDialog(true)}
          className="hover:bg-gray-50 transition-colors"
        />
        
        <ListItem
          title="Logout"
          media={<IconLogout className={`${dir === "ltr" ? "-scale-x-100" : ""} text-red-500`} />}
          link
          chevronIos={false}
          chevronMaterial={false}
          onClick={() => setLogoutDialog(true)}
          className="hover:bg-gray-50 transition-colors"
        />
      </List>

      {/* Logout Dialog */}
      <Dialog
        opened={logoutDialog}
        onBackdropClick={() => setLogoutDialog(false)}
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
            <DialogButton
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setLogoutDialog(false)}
            >
              Cancel
            </DialogButton>
            <DialogButton
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              onClick={logout}
            >
              Logout
            </DialogButton>
          </div>
        </div>
      </Dialog>

      {/* Reset Password Dialog */}
      <Dialog
        opened={resetPasswordDialog}
        onBackdropClick={() => setResetPasswordDialog(false)}
        className="max-w-md mx-auto rounded-lg"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Reset Password
          </h2>
          <p className="text-gray-600 mb-6">
            We'll send a password reset link to {auth?.email}.
          </p>
          <div className="flex justify-end gap-4">
            <DialogButton
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setResetPasswordDialog(false)}
            >
              Cancel
            </DialogButton>
            <DialogButton
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              onClick={handleResetPassword}
            >
              Send Reset Link
            </DialogButton>
          </div>
        </div>
      </Dialog>
    </Block>
  );
}