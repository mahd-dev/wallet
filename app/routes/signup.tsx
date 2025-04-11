import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation } from "urql";
import { commitSession, getSession } from "~/session.server";
import { IconCheck } from "@tabler/icons-react";

// Catégories par défaut à ajouter pour les nouveaux utilisateurs
const DEFAULT_CATEGORIES = [
  // Catégories de dépenses
  {
    name: "Alimentation & Restauration",
    icon: "food",           
    iconColor: "#FF5722",
    type: "EXPENSE"
  },
  {
    name: "Transport",
    icon: "car",             
    iconColor: "#2196F3",
    type: "EXPENSE"
  },
  {
    name: "Shopping",
    icon: "shopping",        
    iconColor: "#9C27B0",
    type: "EXPENSE"
  },
  {
    name: "Divertissement",
    icon: "music",           
    iconColor: "#673AB7",
    type: "EXPENSE"
  },
  {
    name: "Factures & Services",
    icon: "home",            
    iconColor: "#F44336",
    type: "EXPENSE"
  },
  {
    name: "Santé",
    icon: "health",          
    iconColor: "#4CAF50",
    type: "EXPENSE"
  },
  // Catégories de revenus
  {
    name: "Salaire",
    icon: "work",            
    iconColor: "#4CAF50",
    type: "INCOME"
  },
  {
    name: "Freelance",
    icon: "work",            
    iconColor: "#009688",
    type: "INCOME"
  },
  {
    name: "Investissements",
    icon: "savings",         
    iconColor: "#2196F3",
    type: "INCOME"
  },
  {
    name: "Cadeaux",
    icon: "gifts",           
    iconColor: "#E91E63",
    type: "INCOME"
  }
];


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

const createCategory = gql`
  mutation ADD_CATEGORY(
    $id: String!
    $userId: String!
    $name: String!
    $icon: String!
    $iconColor: String!
    $type: Typetransaction!
  ) {
    createCategory(
      input: {
        category: {
          id: $id
          userId: $userId
          name: $name
          icon: $icon
          iconColor: $iconColor
          type: $type
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

  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export default function SignupPage() {
  const [, mutate] = useMutation(signup);
  const [, addCategory] = useMutation(createCategory);
  const transition = useNavigation ();
  const isSubmitting = transition.state === "submitting";
  const actionData = useActionData<{ errors?: Record<string, string> }>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const transactionData = Object.fromEntries(formData) as Record<
      string,
      string
    >;
    
    // Generate a unique user ID
    const userId = nanoid();
    
    const variables = {
      id: userId,
      email: transactionData.email,
      firstName: transactionData.firstName,
      lastName: transactionData.lastName,
      password: transactionData.password,
    };
    
    try {
      // Create the user
      const response = await mutate(variables);
      
      if (response.error) {
        console.error("Signup error:", response.error);
      } else {
        console.log("User created successfully", response.data);
        
        // Create default categories for the new user
        await Promise.all(
          DEFAULT_CATEGORIES.map(async (category) => {
            try {
              await addCategory({
                id: nanoid(),
                userId: userId,
                name: category.name,
                icon: category.icon,
                iconColor: category.iconColor,
                type: category.type,
              });
            } catch (categoryError) {
              console.error(`Error creating category ${category.name}:`, categoryError);
            }
          })
        );
        
        // Show success message
        setSignupSuccess(true);
        
        // Redirect after showing success message
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-lg transform rounded-3xl bg-white p-10 shadow-2xl transition-all duration-500 hover:shadow-xl">
        {signupSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <IconCheck size={40} className="text-green-600" />
            </div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Account Created!</h2>
            <p className="mb-6 text-lg text-gray-600">
              Your account has been successfully created with default transaction categories.
            </p>
            <p className="text-sm text-gray-500">Redirecting to sign in..</p>
          </div>
        ) : (
          <>
            <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900">
              Sign up
            </h2>
            <Form onSubmit={handleSubmit} method="post" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  {actionData?.errors?.firstName && (
                    <p className="mt-1 text-xs text-red-500">
                      {actionData.errors.firstName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  {actionData?.errors?.lastName && (
                    <p className="mt-1 text-xs text-red-500">
                      {actionData.errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                {actionData?.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {actionData.errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {passwordVisible ? "🙈" : "👁️"}
                  </button>
                </div>
                {actionData?.errors?.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {actionData.errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {confirmPasswordVisible ? "🙈" : "👁️"}
                  </button>
                </div>
                {actionData?.errors?.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {actionData.errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="mt-2 text-xs text-gray-500">
                <p>By signing up, you'll have access to default transaction categories to help you get started.</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 ${
                  isSubmitting ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </button>
            </Form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="ml-1 font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline"
              >
                Log in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}