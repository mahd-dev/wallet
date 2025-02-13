import { ActionFunction } from "@remix-run/node";
// import { gql } from "gql";
import { gqlSsrClient } from "~/utils/gql_ssr_client";

// const LOGIN =  gql(`  query LOGIN_USER($email: String!, $password: String!) {
//     users(
//       filter: { email: { equalTo: $email }, password: { equalTo: $password } }
//     ) {
//       nodes {
//         password
//         email
//       }
//     }
//   }`)
export const action: ActionFunction = async ({ request }) => {
  console.log(request);

  const client = gqlSsrClient();
  console.log(client);

  // const resp =  client.query(LOGIN);
};
