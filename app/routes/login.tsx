import { Link, useActionData, useNavigate } from "@remix-run/react";
import { useAtom } from "jotai";
import { useState } from "react";
import { userAtom } from "~/store/store";

export default function LoginPage() {
  const actionData = useActionData<{ errors?: Record<string, string> }>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form validation states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validate email format
  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    
    setEmailError("");
    return true;
  };

  // Validate password
  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    
    if (password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    
    setPasswordError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) validateEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) validatePassword(e.target.value);
  };

  const submitLogin = async (email: string, password: string) => {
    // Validate inputs before submission
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      const response = await fetch("/api/login", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      
      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          setError("Invalid email or password");
        } else if (response.status === 404) {
          setError("Account not found. Please sign up first.");
        } else {
          setError(`Login failed: ${result.message || response.statusText}`);
        }
        throw new Error(result.message || response.statusText);
      }

      if (result) {
        setUser(result.user);
        // If login is successful, redirect to OTP page
        navigate("/otp", { state: { email } });
      }
      return result;
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-lg transform rounded-3xl bg-white p-10 shadow-2xl transition-all duration-500 hover:scale-105">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900">
          Sign In
        </h2>
        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-3">
            <p className="text-center text-sm font-medium text-red-800">{error}</p>
          </div>
        )}
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            await submitLogin(email, password);
          }}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
              className={`mt-1 w-full rounded-lg border ${
                emailError ? "border-red-500" : "border-gray-300"
              } px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
              required
            />
            {emailError && (
              <p className="mt-1 text-xs text-red-600">{emailError}</p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => validatePassword(password)}
              className={`mt-1 w-full rounded-lg border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
            {passwordError && (
              <p className="mt-1 text-xs text-red-600">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 ${
              isLoading ? "cursor-not-allowed opacity-70" : "hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline">
            Forgot password?
          </Link>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}