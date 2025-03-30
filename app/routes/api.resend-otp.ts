import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { gql } from "@urql/core";
import { gqlSsrClient } from "~/utils/gql_ssr_client";
import { sendEmail } from "./mailer";

const GET_USER = gql(`  query GET_USER($email: String!) {
    users(
      filter: { email: { equalTo: $email } } 
    ) {
      nodes {
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
// Mutation to delete OTP verification
const DELETE_OTP = gql`
  mutation MyMutation($id: String!) {
    deleteOtpVerification(input: { id: $id }) {
      clientMutationId
      deletedOtpVerificationNodeId
    }
  }
`;

// Generate a 4-digit OTP
const generateOtp = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email")?.toString();

    if (!email) {
      throw new Error("Email is required");
    }

    const client = gqlSsrClient();

    const resp = await client.query(GET_USER, { email });

    if (resp.error) {
      return json({ error: resp.error.message }, { status: 400 });
    }

    if (!resp.data?.users?.nodes?.length) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = resp?.data?.users?.nodes[0];

    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes

    const otpResp = await client
      .mutation(CREATE_OTP_VERIFICATION, {
        input: {
          otpVerification: {
            id: crypto.randomUUID(),
            userId: user.oidcId,
            otp,
            expiresAt: expiresAt.toISOString(),
            email: user.email,
            createdAt: new Date().toISOString(), // Timestamp when OTP is created
          },
        },
      })
      .toPromise();

    if (otpResp.error) {
      console.error("OTP Mutation Error:", otpResp.error);
      return json({ error: otpResp.error.message }, { status: 500 });
    }

    if (otpResp.error) {
      return json({ error: otpResp.error.message }, { status: 500 });
    }

    console.log("Sending OTP to:", user.email);
    await sendEmail(
      user.email, // Recipient's email
      "Your OTP for Login", // Subject
      `Your OTP code is: ${otp}. It expires in 5 minutes.`, // Message
    );

    return json({
      success: true,
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
