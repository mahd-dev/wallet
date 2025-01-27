import type {  ProfileFragment } from "gql/graphql";
import { atom } from "jotai";
import {
  AvailableLanguageTag,
  languageTag,
  setLanguageTag,
} from "lang/gen/runtime";
import type { User } from "~/types";
import { atomWithBroadcast, atomWithStoredBroadcast } from "./broadcast";

// const defLang =
//   typeof window !== "undefined" &&
//   Object.fromEntries(
//     document.cookie
//       .replaceAll("; ", ";")
//       .split(";")
//       .map((cookie) => cookie.split("=")) ?? [],
//   ).lang &&
//   navigator.language.slice(0, 2) || languageTag();

export const langAtom = atomWithStoredBroadcast<AvailableLanguageTag>(
  "lang",
  languageTag(),
  undefined,
  undefined,
  (v) => {
    if (typeof window !== "undefined") {
      document.cookie = `lang=${v}; secure; SameSite=Strict; expires=Thu, 01 Jan 10000 00:00:00 UTC; path=/;`;
    }
    setLanguageTag(v);
  },
);

export enum NavbarType {
  None,
  All,
  Mobile,
  Desktop,
  TransparentMobile,
}
export interface MainLayoutProps {
  navbarType?: NavbarType;
  navbarTitle?: string;
  navbarPicture?: string;
  navbarLink?: string;
  tabbarEnabled?: boolean;
}
export const mainLayoutPropsAtom = atom<MainLayoutProps>({});

export const dirAtom = atom((get) =>
  ["ar"].includes(get(langAtom)) ? "rtl" : "ltr",
);

export const authAtom = atom<User | null>(null);
export const currUserAtom = atomWithBroadcast<string | null>("currUser", null);

export const profileAtom = atom<ProfileFragment | null>(null);

export const mainPanelAtom = atom(false);
export const localeAtom = atomWithStoredBroadcast<string>("locale", "en");
export type CartComposition = { qty: number; id: string };
export type CartItem = {
  qty: number;
  id: string;
  compositions?: CartComposition[];
  variantId?: string;
  garnishes?: string[];
};
export const cartAtom = atomWithStoredBroadcast<CartItem[]>("gf_cart", []);
export const favsAtom = atomWithStoredBroadcast<
  { prdId: string; compositions?: CartComposition[] }[]
>("favs", []);

export type Scope = `${string}:${string}`;
export const scopeAtom = atomWithStoredBroadcast<Scope | undefined>(
  "scope",
  typeof window !== "undefined" ? window.__GQL_STATE__.scope : undefined,
  undefined,
  (v) => {
    if (typeof document !== "undefined")
      document.cookie = `scope=${v}; secure; SameSite=Strict; expires=Thu, 01 Jan 10000 00:00:00 UTC; path=/`;
    return v;
  },
);

export const tagsPreferencesAtom = atomWithStoredBroadcast<string[]>(
  "tagsPreferences",
  [],
);

export const pricesPreferencesAtom = atomWithStoredBroadcast<{
  from: number;
  to?: number;
  max?: number;
}>("pricesPreferences", { from: 0, max: 9999 });

const currLocationBackendAtom = atomWithStoredBroadcast<string>(
  "currLocation",
  `JTdCJTIwYWRkcmVzcyUzQSUyMCUyMiUyMiUyQyUyMGxhdCUzQSUyMDAlMkMlMjBsbmclM0ElMjAwJTIwJTdE`,
);
export const currLocationAtom = atom<
  {
    address: string;
    lat: number;
    lng: number;
  },
  [
    {
      address: string;
      lat: number;
      lng: number;
    },
  ],
  unknown
>(
  (get) => JSON.parse(decodeURIComponent(atob(get(currLocationBackendAtom)))),
  (_get, set, newValue) => {
    set(
      currLocationBackendAtom,
      btoa(encodeURIComponent(JSON.stringify(newValue))),
    );
  },
);
