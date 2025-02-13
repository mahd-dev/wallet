import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Block } from "konsta/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation } from "urql";
import { commitSession, getSession } from "~/session.server";
const signup = gql`
  mutation signup(
    $id: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    createUser(
      input: {
        user: {
          oidcId: $id
          email: $email
          firstName: $firstName
          lastName: $lastName
          password: $password
        }
      }
    ) {
      clientMutationId
    }
  }
`;
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Ensure values are strings
  const firstName = formData.get("firstName") as string | null;
  const lastName = formData.get("lastName") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const confirmPassword = formData.get("confirmPassword") as string | null;

  // Collect errors instead of returning early
  const errors: Record<string, string> = {};

  if (!firstName || firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  }

  if (!lastName || lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!password || password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Return all collected errors
  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  const user = { id: "123", firstName, lastName, email }; // Mock user

  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId", user.id);

  return redirect("/dashboard", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export default function SignupPage() {
  const [
    ,
    // result
    mutate,
  ] = useMutation(signup);
  const actionData = useActionData<{ errors?: Record<string, string> }>();
  const [
    passwordVisible,
    // , setPasswordVisible
  ] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const transactionData = Object.fromEntries(formData) as Record<
      string,
      string
    >;
    const variables = {
      id: nanoid(), // Generate a unique ID
      email: transactionData.email,
      firstName: transactionData.firstName,
      lastName: transactionData.lastName,
      password: transactionData.password,
    };
    try {
      const response = await mutate(variables);
      if (response.error) {
        console.error("Signup error:", response.error);
      } else {
        console.log("User created successfully", response.data);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };

  return (
    <Block className="!my-0 mx-auto max-w-7xl pt-5">
      <div className="bg-white-500 flex h-screen items-center justify-center">
        {/* Sign-up Card */}
        <div className="bg-white-500 w-full max-w-md rounded-lg p-6 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>
          <Form onSubmit={handleSubmit} method="post" className="space-y-4">
            <div>
              <label htmlFor="fFisrtName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full rounded border p-2"
                required
              />
              {actionData?.errors?.firstName && (
                <p className="text-xs text-red-500">
                  {actionData.errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="fLAstName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full rounded border p-2"
                required
              />
              {actionData?.errors?.lastName && (
                <p className="text-xs text-red-500">
                  {actionData.errors.lastName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="FEmail" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded border p-2"
                required
              />
              {actionData?.errors?.email && (
                <p className="text-xs text-red-500">
                  {actionData.errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="Fpassword" className="block text-sm font-medium">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="w-full rounded border p-2"
                required
              />
              {actionData?.errors?.password && (
                <p className="text-xs text-red-500">
                  {actionData.errors.password}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="Fconfirmpassword"
                className="block text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="confirmPassword"
                className="w-full rounded border p-2"
                required
              />
              {actionData?.errors?.confirmPassword && (
                <p className="text-xs text-red-500">
                  {actionData.errors.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Sign Up
            </button>
          </Form>
        </div>
      </div>
    </Block>
  );
}
