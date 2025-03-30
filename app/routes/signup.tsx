import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
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
  const firstName = formData.get("firstName") as string | null;
  const lastName = formData.get("lastName") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const confirmPassword = formData.get("confirmPassword") as string | null;

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
  const [, mutate] = useMutation(signup);
  const actionData = useActionData<{ errors?: Record<string, string> }>();
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const transactionData = Object.fromEntries(formData) as Record<string, string>;
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl transform hover:scale-105 transition-all duration-500">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900">Create Account</h2>
        <Form onSubmit={handleSubmit} method="post" className="space-y-6">
          {['firstName', 'lastName', 'email'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold capitalize text-gray-700" htmlFor={field}>
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                name={field}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                required
              />
              {actionData?.errors?.[field] && (
                <p className="mt-1 text-xs text-red-500">{actionData.errors[field]}</p>
              )}
            </div>
          ))}
          
          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
            {actionData?.errors?.password && (
              <p className="mt-1 text-xs text-red-500">{actionData.errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
              Confirm Password
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {confirmPasswordVisible ? "🙈" : "👁️"}
            </button>
            {actionData?.errors?.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{actionData.errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </Form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? 
          <Link to="/login" className="ml-1 font-semibold text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
