import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation } from "urql";
import { commitSession, getSession } from "~/session.server";
import { IconCheck, IconEye, IconEyeOff, IconUser, IconMail, IconLock } from "@tabler/icons-react";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing

// Email regex that only allows Gmail addresses
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

// Default categories updated with English names, new categories, and icon picker icons/colors
const DEFAULT_CATEGORIES = [
  // Expense categories
  {
    name: "Food & Dining",
    icon: "food",
    iconColor: "#F59E0B",
    type: "EXPENSE"
  },
  {
    name: "Transport",
    icon: "transport",
    iconColor: "#805AD5",
    type: "EXPENSE"
  },
  {
    name: "Shopping",
    icon: "shopping",
    iconColor: "#3B82F6",
    type: "EXPENSE"
  },
  {
    name: "Entertainment",
    icon: "entertainment",
    iconColor: "#4F46E5",
    type: "EXPENSE"
  },
  {
    name: "Bills & Utilities",
    icon: "bills",
    iconColor: "#9D174D",
    type: "EXPENSE"
  },
  {
    name: "Health",
    icon: "health",
    iconColor: "#22C55E",
    type: "EXPENSE"
  },
  {
    name: "Travel",
    icon: "travel",
    iconColor: "#EC4899",
    type: "EXPENSE"
  },
  {
    name: "Education",
    icon: "education",
    iconColor: "#38B2AC",
    type: "EXPENSE"
  },
  {
    name: "Rent",
    icon: "rent",
    iconColor: "#B45309",
    type: "EXPENSE"
  },
  // Income categories
  {
    name: "Salary",
    icon: "salary",
    iconColor: "#047857",
    type: "INCOME"
  },
  {
    name: "Freelance",
    icon: "work",
    iconColor: "#8B5CF6",
    type: "INCOME"
  },
  {
    name: "Investments",
    icon: "investments",
    iconColor: "#65A30D",
    type: "INCOME"
  },
  {
    name: "Gifts",
    icon: "gifts",
    iconColor: "#FF7F50",
    type: "INCOME"
  },
  {
    name: "Commission",
    icon: "commission",
    iconColor: "#0E7490",
    type: "INCOME"
  },
  {
    name: "Cash",
    icon: "cash",
    iconColor: "#15803D",
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

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid Gmail address";
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

  try {
    // Generate a unique user ID - in a real app this would be handled by the backend
    const userId = nanoid();
    
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password!, 10);
    
    // Here you would typically call your backend API to create the user with the hashed password
    // For now we'll just assume it succeeded and redirect to login
    
    const user = { id: userId, firstName, lastName, email };
    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", user.id);

    return redirect("/login", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  } catch (error) {
    console.error("Server error:", error);
    return json({ errors: { server: "Failed to create account. Please try again." } }, { status: 500 });
  }
};

export default function SignupPage() {
  const [, mutate] = useMutation(signup);
  const [, addCategory] = useMutation(createCategory);
  const transition = useNavigation();
  const isSubmitting = transition.state === "submitting";
  const actionData = useActionData<{ errors?: Record<string, string> }>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!firstName || firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters";
    }

    if (!lastName || lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid Gmail address";
    }

    if (!password || password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Perform client-side validation
    const validationErrors = validateForm(formData);
    setClientErrors(validationErrors);
    
    // If there are validation errors, don't proceed with submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    // Generate a unique user ID
    const userId = nanoid();
    
    try {
      // Hash the password before sending it to the server
      const password = formData.get("password") as string;
      const hashedPassword = await bcrypt.hash(password, 10); // Using a salt round of 10
      
      const variables = {
        id: userId,
        email: formData.get("email") as string,
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        password: hashedPassword, // Send the hashed password to the server
      };
      
      // Create the user
      const response = await mutate(variables);
      
      if (response.error) {
        console.error("Signup error:", response.error);
        setClientErrors({ server: "Failed to create account. Please try again." });
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
          window.location.href = "/login";
        }, 2000);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setClientErrors({ server: "An unexpected error occurred. Please try again." });
    }
  };

  // Combine client and server errors
  const errors = { ...clientErrors, ...actionData?.errors };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-300 filter blur-xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-purple-400 filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-400 filter blur-xl"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-center z-10">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="bg-white/95 p-8">
              {signupSuccess ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <IconCheck size={32} className="text-green-600" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">Account Created!</h2>
                  <p className="text-gray-600">Redirecting to sign in...</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-3">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">
                      My Wallet
                    </h2>
                    <p className="text-gray-600 text-sm">Track your finances easily</p>
                  </div>
                  
                  {errors.server && (
                    <div className="mb-4 rounded-lg bg-red-50 p-3 text-center border-l-4 border-red-500">
                      <p className="text-sm text-red-600">{errors.server}</p>
                    </div>
                  )}
                  
                  <Form onSubmit={handleSubmit} method="post" className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-1"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IconUser size={16} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="firstName"
                            className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                              errors.firstName ? "border-red-500 bg-red-50" : "border-gray-300"
                            } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                            placeholder="First Name"
                            required
                          />
                        </div>
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-1"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IconUser size={16} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="lastName"
                            className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                              errors.lastName ? "border-red-500 bg-red-50" : "border-gray-300"
                            } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="email"
                      >
                        Email Address <span className="text-indigo-600 text-xs">(Gmail only)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IconMail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                            errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                          } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                          placeholder="yourname@gmail.com"
                          pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
                          title="Please enter a valid Gmail address"
                          required
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password Input */}
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IconLock size={16} className="text-gray-400" />
                        </div>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          className={`w-full pl-9 pr-10 py-2 rounded-lg border ${
                            errors.password ? "border-red-500 bg-red-50" : "border-gray-300"
                          } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                          placeholder="Min. 6 characters"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                        >
                          {passwordVisible ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IconLock size={16} className="text-gray-400" />
                        </div>
                        <input
                          type={confirmPasswordVisible ? "text" : "password"}
                          name="confirmPassword"
                          className={`w-full pl-9 pr-10 py-2 rounded-lg border ${
                            errors.confirmPassword ? "border-red-500 bg-red-50" : "border-gray-300"
                          } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                        >
                          {confirmPasswordVisible ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full rounded-lg py-2.5 px-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
                        isSubmitting 
                          ? "bg-indigo-400 cursor-not-allowed" 
                          : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating Account...
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  
                    <div className="text-center">
                      <p className="text-xs text-gray-600">
                        Already have an account?
                        <Link
                          to="/login"
                          className="ml-1 font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}