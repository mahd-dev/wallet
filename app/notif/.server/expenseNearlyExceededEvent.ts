import { gql } from "gql";
import { Client } from "urql";
import {  ExpenseExeceededType, Push } from "../types";
import { pushToUsers } from "./helper";

export const expenseNearlyExceededEvent = async (
  gqlClient: Client,
  data: { userIds: string[]; type: ExpenseExeceededType },
) => {

  await pushToUsers({
    gqlClient,
    usersIds: data.userIds,
    notifType: "expenseNearlyExceeded",
    data: {
      t: new Date(),
      //budget: 100,
      //exponse: 200,
      title: "Expense Nearly exceeded",
    },
    sendInternal: data.type === ExpenseExeceededType.Exceeded,
  })
};
