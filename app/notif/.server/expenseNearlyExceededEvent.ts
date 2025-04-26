import { gql } from "gql";
import { Client } from "urql";
import {  ExpenseExeceededType, Push } from "../types";
import { pushToUsers } from "./helper";

export const expenseNearlyExceededEvent = async (
  gqlClient: Client,
  data: { userIds: string[]; type: ExpenseExeceededType },
) => {
  console.log("==>expenseNearlyExceededEvent", data);
  await pushToUsers({
    
    gqlClient,
    usersIds: data.userIds,
    notifType: "expenseNearlyExceeded",
    data: {
      t: new Date(),
      //budget: 100,
      //exponse: 200,
      title: "Expense Nearly Exceeded",
    },
    //sendInternal: data.type === ExpenseExeceededType.Exceeded,
    sendInternal: true, // Force database storage
    
  })
  console.log("expenseNearlyExceededEvent", data);
};
