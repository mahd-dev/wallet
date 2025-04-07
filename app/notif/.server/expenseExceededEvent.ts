import { gql } from "gql";
import { Client } from "urql";
import {  ExpenseExeceededType, Push } from "../types";
import { pushToUsers } from "./helper";

export const expenseExeceededEvent = async (
  gqlClient: Client,
  data: { userIds: string[]; type: ExpenseExeceededType },
) => {

  await pushToUsers({
    gqlClient,
    usersIds: data.userIds,
    notifType: "expenseExceeded",
    data: {
      t: new Date(),
      //budget: 100,
      //exponse: 200,
      title: "Expense exceeded",
    },
    sendInternal: data.type === ExpenseExeceededType.Exceeded,
  })
};
