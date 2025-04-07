import type { Push } from "~/notif/types";
import { generateWebPushMessage } from "./lib/webpush";

export const sendPush = (device: string, data: Push) =>
  generateWebPushMessage(
    {
      data: String(JSON.stringify(data)),
      urgency: "normal",
      sub: "mailto:contact@zayn.tn",
      ttl: 60 * 24 * 7,
    },
    JSON.parse(atob(device)),
    JSON.parse(process.env.VAPID_KEYS as string),
  );

export const sendNotification = (
  device: string,
  data: { id: string; title: string; options?: NotificationOptions },
) => sendPush(device, { notification: data });
