import { expenseExceeded, expenseNearlyExceeded } from "./expenseExceeded";
import { NotfiHandlerUtils, NotifHanderRes } from "./pushHandler";

const notification = (
  _utils: NotfiHandlerUtils,
  data: { title: string; options?: NotificationOptions },
): NotifHanderRes => {
  return data;
};

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️ ADD your push handler BELOW ⬇️⬇️⬇️⬇️⬇️⬇️⬇️ //

export const pushHandlers = {
  notification,
  expenseExceeded,
  expenseNearlyExceeded
};
