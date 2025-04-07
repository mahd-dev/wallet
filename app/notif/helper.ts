import { NotifTriggers } from "./.server/index";

export const triggerNotifEvent = <K extends keyof NotifTriggers>(
  notif: K,
  event: NonNullable<NotifTriggers[K]>,
) =>
  fetch("/api/notif/send", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ [notif]: event }),
  }).then((res) => res.json());
