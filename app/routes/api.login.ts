import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { gql } from "@urql/core";
import { gqlSsrClient } from "~/utils/gql_ssr_client";
import { sendEmail } from "./mailer";

// GraphQL query to authenticate the user

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

const CREATE_OTP_VERIFICATION =
  gql(`  mutation CreateOtpVerification($input: CreateOtpVerificationInput!) {
    createOtpVerification(input: $input) {
      otpVerification {
        id
        otp
        expiresAt
        email
      }
    }
  }
`);

// Generate a 4-digit OTP
const generateOtp = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const client = gqlSsrClient();

    // Check user credentials
    const resp = await client.query(LOGIN, { email, password });

    console.log("login response", resp?.data?.users?.nodes[0]);
    if (resp.error) {
      return json({ error: resp.error.message }, { status: 400 });
    }

    if (!resp.data?.users?.nodes?.length) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = resp?.data?.users?.nodes[0];

    // Generate OTP and expiration time
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes

    // Create OTP verification entry
    const otpResp = await client
      .mutation<{ createOtpVerification?: { otpVerification?: { id: string; otp: string; expiresAt: string; email: string } }; error?: { message?: string } | null }>(CREATE_OTP_VERIFICATION, {
        input: {
          otpVerification: {
            id: crypto.randomUUID(),
            userId: user.oidcId,
            otp,
            expiresAt: expiresAt.toISOString(),
            email: user.email,
            createdAt: new Date().toISOString(),
          },
        },
      })
      .toPromise();

    if (otpResp.error) {
      console.error("OTP Mutation Error:", otpResp.error);
      return json({ error: otpResp.error?.message || "Unknown error" }, { status: 500 });
    }

    if (otpResp.error) {
      const errorMessage = (otpResp.error as { message?: string }).message || "Unknown error";
      return json({ error: errorMessage }, { status: 500 });
    }

    console.log("Sending OTP to:", user.email);
    await sendEmail(
      user.email, // Recipient's email
      "Your OTP for Login", // Subject
      `Your OTP code is: ${otp}. It expires in 5 minutes.`, // Message
    );

    return json({
      success: true,
      user: resp.data.users.nodes[0],
    });
  } catch (error) {
    console.log("Error:", error);
    return json(
      {
        error: "An unexpected error occurred",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};