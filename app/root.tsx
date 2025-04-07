import { LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "@remix-run/react";

import dayjs from "dayjs";
import "dayjs/locale/ar-tn";
import "dayjs/locale/en";
import "dayjs/locale/fr";
import duration from "dayjs/plugin/duration";
import isoWeek from "dayjs/plugin/isoWeek";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { useEffect } from "react";
import { gql as graphql, useQuery, useSubscription } from "urql";
import { authenticator } from "./auth.server";
import {
  authAtom,
  currUserAtom,
  dirAtom,
  langAtom,
  profileAtom,
  userAtom,
} from "./store/store";

import "./tailwind.css";

import toSorted from "array.prototype.tosorted";
import {
  GetProfileQuery,
  ProfileFragment,
  ProfileSubSubscription,
} from "gql/graphql";
import { AvailableLanguageTag } from "lang/gen/runtime";
import { Profile } from "./gql_common/ProfileFragment";
toSorted.shim();

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(LocalizedFormat);
dayjs.extend(isoWeek);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookie = Object.fromEntries(
    request.headers
      .get("Cookie")
      ?.replaceAll("; ", ";")
      .split(";")
      .map((cookie) => cookie.split("=")) ?? [],
  ) as {
    lang?: AvailableLanguageTag;
    dark?: string;
    genderPreferences?: string;
    tagsPreferences?: string;
    distancePreferences?: string;
    currLocation?: string;
  };
  const [auth] = await Promise.all([authenticator.isAuthenticated(request)]);

  return {
    ...cookie,
    dark: cookie.dark ? parseInt(cookie.dark) : 0,
    auth,
  };
};

export const handle = {
  i18n: "common",
};

export default function App() {
  const {
    auth,
    // ...data
  } = useLoaderData<typeof loader>();

  const navigate = useNavigate();

  const revalidator = useRevalidator();
  useEffect(() => {
    revalidator.revalidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [profileQ] = useQuery<GetProfileQuery>({
    query: graphql`
      query GetProfile($oidcId: String!) {
        user(oidcId: $oidcId) { ...Profile }
        ${Profile}
      }
    `,
    variables: {
      oidcId: auth?.sub,
    },
  });

  const [profileSub] = useSubscription<ProfileSubSubscription>({
    query: graphql`
      subscription ProfileSub($oidcId: String!) {
        user(oidcId: $oidcId) { ...Profile }
        ${Profile}
      }
    `,
    variables: {
      oidcId: auth?.sub,
    },
  });

  useHydrateAtoms(
    [
      [currUserAtom, auth?.sub || null],
      [profileAtom, profileQ.data?.user as ProfileFragment],
      [authAtom, auth],

      // [langAtom, languageTag()],
    ],
    {
      dangerouslyForceHydrate: typeof document === "undefined", // force re-hydrate on SSR, else the SSR version will always use the first value across all users
    },
  );

  // force reload all pages on the same session when user changed
  const [currUser] = useAtom(currUserAtom);
  const [user] = useAtom(userAtom);
  useEffect(() => {
    if (currUser !== (auth?.sub || null)) window.location.reload();
  }, [auth?.sub, currUser]);

  useEffect(() => {
    const usr = localStorage?.getItem("connected_user");
    const validOtp = localStorage.getItem("validOtp");

    if (!usr) return navigate("/login");
    if (validOtp !== "true") {
      return navigate("/otp");
    }
  }, []);

  const [, setProfile] = useAtom(profileAtom);

  useEffect(() => {
    setProfile(
      (profileSub.data?.user as ProfileFragment) || profileQ.data?.user,
    );
  }, [profileQ.data?.user, profileSub.data?.user, setProfile]);

  const [lang] = useAtom(langAtom);

  const [dir] = useAtom(dirAtom);

  dayjs.locale(lang === "ar" ? "ar-tn" : lang);

  return (
    <html lang={lang} dir={dir} translate="no">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/ios/72.png" />
        <link rel="apple-touch-icon" href="/icons/ios/100.png" />
        <link rel="apple-touch-icon" href="/icons/ios/128.png" />
        <link rel="apple-touch-icon" href="/icons/ios/144.png" />
        <link rel="apple-touch-icon" href="/icons/ios/192.png" />
        <link rel="apple-touch-icon" href="/icons/ios/256.png" />
        <link rel="apple-touch-icon" href="/icons/ios/512.png" />
        <link rel="apple-touch-icon" href="/icons/ios/1024.png" />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={"black-translucent"}
        />
        <meta name="theme-color" content={"#000000"} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <Meta />
        {/* <ManifestLink /> */}
        <Links />
      </head>
      <body
        style={{
          opacity: 0,
          transitionProperty: "opacity",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
          fontFamily: "Tajawal-Medium",
          fontSize: "1.2rem",
          lineHeight: 1,
        }}
        // className="text-base"
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
