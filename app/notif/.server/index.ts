/* eslint-disable no-use-before-define */
import { Client } from "urql";
import { notifyUsers } from "./helper";
import { expenseExeceededEvent } from "./expenseExceededEvent";

export type NotifTriggers = {
  [K in keyof typeof notifTriggers]: Parameters<(typeof notifTriggers)[K]>[1];
};

const manualUsersNotif = (
  gqlClient: Client,
  data: { usersIds: string[]; title: string; options?: NotificationOptions },
) => {
  notifyUsers(gqlClient, data.usersIds, data);
};

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️ ADD your triggers BELOW ⬇️⬇️⬇️⬇️⬇️⬇️⬇️ //

export const notifTriggers = {
  manualUsersNotif,
  expenseExeceededEvent
};
