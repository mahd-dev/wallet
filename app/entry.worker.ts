/// <reference lib="WebWorker" />

// import { RemixNavigationHandler } from "@remix-pwa/sw";
import dayjs from "dayjs";
//import i18next from "i18next";
import { handlePush } from "./notif/.client/pushHandler";
import { handleNotif } from "./utils/webpush/notif";

import duration from "dayjs/plugin/duration";
import isoWeek from "dayjs/plugin/isoWeek";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import minMax from "dayjs/plugin/minMax";
import relativeTime from "dayjs/plugin/relativeTime";
import { store } from "./store/worker";

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(LocalizedFormat);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

export type {};
export type WebWorkerSelfType = ServiceWorkerGlobalScope & {
  store: { [k: string]: any };
};
declare let self: WebWorkerSelfType;

if (!self.store) self.store = store;

// const PAGES = "page-cache";
// const DATA = "data-cache";
// const ASSETS = "assets-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// const messageHandler = new RemixNavigationHandler({
//   dataCacheName: DATA,
//   documentCacheName: PAGES,
// });

// self.addEventListener("message", (event) => {
//   event.waitUntil(messageHandler.handle(event));
// });
// const assetCache = new CacheFirst({
//   cacheName: ASSETS,
//   matchOptions: {
//     ignoreSearch: false,
//   },
// });

// const fetchHandler = (event: FetchEvent) => {
//   const matched: MatchResponse = matchRequest(event.request, [
//     "/build/",
//     "/icons/",
//     "/locales/",
//     "/favicon.ico",
//   ]);

//   switch (matched) {
//     case "asset":
//       event.respondWith(assetCache.handle(event.request));
//       break;
//     case "loader":
//     case "document":
//     default:
//       event.respondWith(fetch(event.request));
//       break;
//   }
// };

// self.addEventListener("fetch", (event: FetchEvent) => {
//   if (!event.request.url.match(/(\/api\/|\/api\.)/)) fetchHandler(event);
// });

self.addEventListener("push", handlePush);

self.addEventListener("notificationclick", handleNotif);

self.addEventListener("message", (e) => {
  if (e.data.storeAtomValue) {
    self.store = { ...self.store, ...e.data.storeAtomValue };

    if (e.data.storeAtomValue.locale) {
      const locale = e.data.storeAtomValue.locale;
      //i18next.changeLanguage(locale);
      dayjs.locale(locale === "ar" ? "ar-tn" : locale);
    }
  }
});

// self.addEventListener("notificationclose", (event: NotificationEvent) => {
//   return;
// });

// self.addEventListener("error", (error: ErrorEvent) => {
//   return;
// });
