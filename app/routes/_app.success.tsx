import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useNavigate, useSearchParams } from "@remix-run/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { gql } from "gql";
import { useAtom } from "jotai";
import { Block, Dialog, DialogButton, Link as Klink } from "konsta/react";
import m from "lang";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import { useMutation } from "urql";
import { authenticator } from "~/auth.server";
import { cbStorage } from "~/session.server";
import { authAtom, dirAtom, userAtom } from "~/store/store";
import { pushSubscribe } from "~/utils/client/pwa-utils.client";


export default function AuthSuccessPage() {
  const [dir] = useAtom(dirAtom);
  const [awaitCheckNotif, setAwaitCheckNotif] = useState(false);
  const [askNotif, setAskNotif] = useState(false);

  const [searchParams] = useSearchParams();
  const cbLink = searchParams.get("next");
const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  // const [profile] = useAtom(profileAtom);
  const [auth] = useAtom(authAtom);
console.log(user?.oidcId);

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
    `),
  );

  const pushSub = useCallback(
    async (request: boolean) => {
      try {
        const token = await pushSubscribe(request);

        const ua = new UAParser(navigator.userAgent).getResult();

        
        const res = await setDevice({
          token,
          userId: user?.oidcId || "_TkB85JdMbAxeGsFTXTGk",
          ua,
        });

        if (res.error) {
          console.error("error adding device token to database", res.error);
        } else {
          localStorage?.setItem("deviceToken", token);
        }

        if (cbLink) {
          navigate(cbLink.replace(location.origin, ""));
        }
      } catch (error) {
        console.log("error SET DEVICE", error);
        if (cbLink) {
          navigate(cbLink.replace(location.origin, ""));
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cbLink, navigate],
  );

  // useEffect(() => {
  //   if (Notification.permission !== "granted") {
  //     setAskNotif(true);
  //   } else {
  //     pushSub(false);
  //   }
  // }, [pushSub]);

  const [loadingNotif, setLoadingNotif] = useState(false);
  useEffect(() => {
    if (Notification.permission !== "granted") {
      setAskNotif(true);
      setAwaitCheckNotif(false);
    } else {
      if(user?.oidcId){
      pushSub(false)
        .then(() => setAwaitCheckNotif(false))
        .catch(() => {
          setAskNotif(true);
          setAwaitCheckNotif(false);
        });
      }
    }
  }, [pushSub, user?.oidcId]);

  if (awaitCheckNotif)
    return (
      <div className="fixed flex h-screen w-screen place-content-center lg:ps-56">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  return (
    <>
      <Block className="!my-0 mx-auto h-full max-w-5xl">
        <div className="flex h-full flex-col justify-center space-y-8">
          <img
            className="mx-auto max-w-36 lg:mt-40"
            src="/logoWallet.png"
            alt="sawi"
          />
          <div>
            <h1 className="mx-auto mb-3 text-center text-2xl">{`Hello ${user?.firstName}😊`}</h1>
            <p className="mx-auto text-center text-lg">{ "Manage your wallet" }</p>
          </div>
          <Klink component="span">
            <Link to="/">
              Go Home page &nbsp;
              {dir === "ltr" ? (
                <IconArrowRight className="inline w-4 translate-y-0.5" />
              ) : (
                <IconArrowLeft className="inline w-4 translate-y-0.5" />
              )}
              {/* <i
                className={`las translate-y-0.5 !text-sm ${
                  dir === "ltr" ? "la-arrow-right" : "la-arrow-left"
                }`}
              ></i> */}
            </Link>
          </Klink>

          <div className="h-1/3" />
        </div>
      </Block>
      {/* <Dialog
        opened={askNotif}
        title={"Allow Notifications"}
        content={"Would you like to Allow Notifications ?"}
        buttons={
          <>
            <DialogButton
              onClick={() => {
                setAskNotif(false);
                console.log("cbLink", cbLink);
                
                if (cbLink) navigate(cbLink.replace(location.origin, ""));
              }}
            >
              {m.no()}
            </DialogButton>
            <DialogButton
              strong
              onClick={async () => {
                await pushSub(true);
                setAskNotif(false);
              }}
            >
              {m.yes()}
            </DialogButton>
          </>
        }
      /> */}

      <Dialog
        opened={askNotif}
        title={"Allow Notifications"}
        content={"Would you like to Allow Notifications ?"}
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
                setLoadingNotif(true);
                try {
                  await pushSub(true);
                  setAskNotif(false);
                } catch (error) {
                  console.error(error);
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
    </>
  );
}
