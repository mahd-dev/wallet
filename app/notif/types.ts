import { pushHandlers } from "./.client";

export type Push = {
  [K in keyof typeof pushHandlers]?: Parameters<(typeof pushHandlers)[K]>[1];
};


export enum ExpenseExeceededType {
  Exceeded = "expenseExceeded",
  NearlyExceeded = "expenseNearlyExceeded",
}
