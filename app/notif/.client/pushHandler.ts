/// <reference lib="WebWorker" />
import { WebWorkerSelfType } from "~/entry.worker";

import dayts from "dayjs";
import { store } from "~/store/worker";
import { fromBinary } from "~/utils/webpush/lib/util";
import { pushHandlers } from ".";
import { Push } from "../types";

declare let self: WebWorkerSelfType;

if (!self.store) self.store = store;


export const handlePush = async (event: PushEvent) => {
  const rawData = event?.data?.text();
  const pushData: Push = JSON.parse(fromBinary(atob(rawData || "")));

  dayts.locale(self.store.locale === "ar" ? "ar-tn" : self.store.locale);

  //const t = await i18next.changeLanguage(store.locale);

  Object.entries(pushData).map(([pushType, data]): void => {
    if (pushType === "id") return;
    const notif = pushHandlers[pushType as keyof typeof pushHandlers](
      {
        event,
        dayjs: dayts,
        store: { ...self.store, origin: self.location.origin } as any,
      },
      data as any,
    );

    if (notif) {
      if (!notif.options) notif.options = {};
      if (!notif.options.icon)
        notif.options.icon = `${self.location.origin}/icons/icon${
          self.store.dark === ""
        }.svg`;
      if (!notif.options.lang) notif.options.lang = self.store.locale;
      if (!notif.options.lang)
        notif.options.dir = (
          self.store.locale === "ar" ? "rtl" : "ltr"
        ) as NotificationDirection;
      if (!notif.options.lang)
        notif.options.badge = `${self.location.origin}/icons/badge.png`;

      event.waitUntil(
        self.registration.showNotification(notif.title, notif.options),
      );
    }
  });
};

export type NotfiHandlerUtils = {
  event?: PushEvent;
  dayjs: typeof dayts;
  store: { origin: string; locale: string; };
};
export type NotifHanderRes = { title: string; options?: NotificationOptions };
