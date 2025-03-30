import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { gql } from "@urql/core";
import { gqlSsrClient } from "~/utils/gql_ssr_client";

function isExpired(expirationString: string) {
  const expirationDate = new Date(expirationString + "Z");
  const currentDate = new Date();

  const expirationUTC = expirationDate.getTime();
  const currentUTC = currentDate.getTime();

  return expirationUTC < currentUTC;
}
// Query to check OTP
const CHECK_OTP = gql`
  query CHECK_OTP($email: String!, $otp: String!) {
    otpVerifications(
      filter: { email: { equalTo: $email }, otp: { equalTo: $otp } }
    ) {
      nodes {
        id
        otp
        email
        expiresAt
      }
    }
  }
`;

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const otp = formData.get("otp")?.toString();

    if (!email || !otp) {
      return json({ error: "Email and OTP are required" }, { status: 400 });
    }

    const client = gqlSsrClient();

    // Query to check OTP
    const resp = await client.query(CHECK_OTP, { email, otp });

    const data = resp?.data?.otpVerifications?.nodes[0];

    if (!data) {
      return json({ error: "OTP invalid" }, { status: 400 });
    }

    // Check if OTP is expired
    const otpExpired = isExpired(data?.expiresAt);

    if (otpExpired) {
      return json({ error: "OTP expired" }, { status: 403 });
    }

    return json({ success: true });
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
