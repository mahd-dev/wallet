import { useEffect, useState, useCallback } from "react";
import { useAtom } from "jotai";
import { Link, useNavigate, useSearchParams } from "@remix-run/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { gql } from "gql";
import { Block, Dialog, DialogButton, Link as Klink } from "konsta/react";
import { UAParser } from "ua-parser-js";
import { useMutation } from "urql";
import { authAtom, dirAtom, userAtom } from "~/store/store";
import { pushSubscribe } from "~/utils/client/pwa-utils.client";

export default function AuthSuccessPage() {
  const [dir] = useAtom(dirAtom);
  const [awaitCheckNotif, setAwaitCheckNotif] = useState(false);
  const [askNotif, setAskNotif] = useState(false);
  const [loadingNotif, setLoadingNotif] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true); // Manage loading state for user

  const [searchParams] = useSearchParams();
  const cbLink = searchParams.get("next");

  const [user] = useAtom(userAtom); // Get user data
  const navigate = useNavigate();
  

  const [, setDevice] = useMutation(
    gql(`
      mutation SetUserToken($userId: String!, $token: String!, $ua: JSON) {
        upsertUserDevice(
          input: { userDevice: { userId: $userId, token: $token, ua: $ua } }
          where: { token: $token, userId: $userId }
        ) {
          clientMutationId
        }
      }
    `)
  );

  const pushSub = useCallback(
    async (request: boolean) => {
      // Ensure user is fully loaded before proceeding
      if (!user?.oidcId) {
        console.warn("User oidcId is undefined — skipping pushSub");
        return;  // Exit early if user ID is not available
      }

      console.log('Current userId:', user?.oidcId);  // Log the user ID for debugging

      try {
        const token = await pushSubscribe(request);
        if (!token) {
          console.warn("Push token not received");
          return;
        }

        const ua = new UAParser(navigator.userAgent).getResult();

        console.log("Sending mutation with:", {
          userId: user.oidcId,
          token,
          ua,
        });

        const res = await setDevice({
          userId: user.oidcId,
          token,
          ua,
        });

        // Handle response or errors
        if (res.error) {
          console.error("Error adding device token to database", res.error);
        } else {
          console.log("Device token added successfully:", res);
          localStorage?.setItem("deviceToken", token);
        }
      } catch (error) {
        console.error("Error in pushSub:", error);
      } finally {
        if (cbLink) {
          navigate(cbLink.replace(location.origin, ""));
        }
      }
    },
    [cbLink, navigate, setDevice, user?.oidcId]
  );

  

  // Use an effect to track user state and manage loading status
  useEffect(() => {
    if (user && user?.oidcId) {
      setLoadingUser(false); // User data loaded, stop loading state
    }
  }, [user]); // Trigger only when user data changes

  useEffect(() => {
    if (loadingUser || !user?.oidcId) {
      console.log("User data is not loaded yet...");
      return; // Don't proceed if the user data is still loading
    }

    // Notification logic only proceeds when user is fully loaded
    if (Notification.permission !== "granted") {
      console.log("Notification permission not granted — asking...");
      setAskNotif(true);
      setAwaitCheckNotif(false);
    } else if (user?.oidcId) {
      console.log("Notification already granted — subscribing...");
      pushSub(false)
        .then(() => setAwaitCheckNotif(false))
        .catch(() => {
          setAskNotif(true);
          setAwaitCheckNotif(false);
        });
    }
  }, [pushSub, user?.oidcId, loadingUser]); // Ensure this effect only runs when `loadingUser` is false and `user` is ready

  // Show loading state if user data is not loaded yet
  if (loadingUser) {
    return <div>Loading user...</div>; // Display loading message if user is not ready
  }

  return (
    <>
      <Block className="!my-0 mx-auto h-full max-w-5xl">
        <div className="flex h-full flex-col justify-center space-y-8">
          <img className="mx-auto max-w-36 lg:mt-40" src="/logoWallet.png" alt="sawi" />
          <div>
            <h1 className="mx-auto mb-3 text-center text-2xl">
              {`Hello ${user?.firstName || "User"} 😊`}
            </h1>
            <p className="mx-auto text-center text-lg">Manage your wallet</p>
          </div>

          <Klink component="span">
            <Link to="/">
              Go Home page &nbsp;
              {dir === "ltr" ? (
                <IconArrowRight className="inline w-4 translate-y-0.5" />
              ) : (
                <IconArrowLeft className="inline w-4 translate-y-0.5" />
              )}
            </Link>
          </Klink>

          <div className="h-1/3" />
        </div>
      </Block>

      {askNotif && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <Dialog
      opened
      title="Allow Notifications"
      content="Would you like to Allow Notifications?"
      buttons={
        <>
          <DialogButton
            onClick={() => {
              setAskNotif(false);
              if (cbLink) navigate(cbLink.replace(location.origin, ""));
            }}
            disabled={loadingNotif}
          >
            No
          </DialogButton>
          <DialogButton
            strong
            onClick={async () => {
              if (!user?.oidcId) return;
              setLoadingNotif(true);
              try {
                await pushSub(true);
                setAskNotif(false);
              } catch (error) {
                console.error("Dialog subscription error:", error);
              }
              setLoadingNotif(false);
            }}
            disabled={loadingNotif}
          >
            Yes
          </DialogButton>
        </>
      }
    />
  </div>
)}
    </>
  );
}
