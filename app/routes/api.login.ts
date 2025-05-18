import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { gql } from "@urql/core";
import { gqlSsrClient } from "~/utils/gql_ssr_client";
import { sendEmail } from "./mailer";
import bcrypt from "bcrypt"; // Import bcrypt
import { nanoid } from "nanoid";

// GraphQL query to fetch user by email only
const GET_USER_BY_EMAIL = gql(`
  query GET_USER_BY_EMAIL($email: String!) {
    users(filter: { email: { equalTo: $email } }) {
      nodes {
        password
        email
        oidcId
        firstName
        lastName
        gender
      }
    }
  }
`);

const CREATE_OTP_VERIFICATION = gql(`
  mutation CreateOtpVerification($input: CreateOtpVerificationInput!) {
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
    
    // Get user by email only
    const resp = await client.query(GET_USER_BY_EMAIL, { email });
    
    console.log("User found:", resp?.data?.users?.nodes[0]);
    if (resp.error) {
      return json({ error: resp.error.message }, { status: 400 });
    }
    
    if (!resp.data?.users?.nodes?.length) {
      return json({ error: "User not found" }, { status: 404 });
    }
    
    const user = resp?.data?.users?.nodes[0];
    
    // Compare password with bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return json({ error: "Invalid password" }, { status: 401 });
    }
    
    // Generate OTP and expiration time
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
    
    // Create OTP verification entry
    const otpResp = await client
      .mutation(CREATE_OTP_VERIFICATION, {
        input: {
          otpVerification: {
            id: nanoid(),
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