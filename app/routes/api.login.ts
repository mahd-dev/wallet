import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { gql } from "gql";
import { gqlSsrClient } from "~/utils/gql_ssr_client";

const LOGIN = gql(`  query LOGIN_USER($email: String!, $password: String!) {
    users(
      filter: { email: { equalTo: $email }, password: { equalTo: $password } }
    ) {
      nodes {
        password
        email
        oidcId
        firstName
        lastName
        gender
      }
    }
  }`);
export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const client = gqlSsrClient();

    const resp = await client.query(LOGIN, { email, password });

    if (resp.error) {
      return json({ error: resp.error.message }, { status: 400 });
    }

    if (!resp.data?.users?.nodes?.length) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    return json({
      success: true,
      user: resp.data.users.nodes[0],
    });
  } catch (error) {
    console.log("error", error);
    return json(
      {
        error: "An unexpected error occurred",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};
