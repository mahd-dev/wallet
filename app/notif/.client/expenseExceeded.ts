import { NotfiHandlerUtils, NotifHanderRes } from "./pushHandler";

export const expenseExceeded = (
  utils: NotfiHandlerUtils,
  data: {
    t: Date;
    budget?: number;
    exponse?: number
  },
): NotifHanderRes => ({
  title: "Expense exceeded",
  options: {
    body: "You have exceeded your budget",
    requireInteraction: true,
    data: {
      link: `${utils.store.origin}/budget`,
    },
  },
});
