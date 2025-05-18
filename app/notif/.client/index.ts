import { expenseExceeded, expenseNearlyExceeded } from "./expenseExceeded";
import { NotfiHandlerUtils, NotifHanderRes } from "./pushHandler";

const notification = (
  _utils: NotfiHandlerUtils,
  data: { title: string; options?: NotificationOptions },
): NotifHanderRes => {
  return data;
};


export const pushHandlers = {
  notification,
  expenseExceeded,
  expenseNearlyExceeded
};
