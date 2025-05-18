import { Link, useActionData, useNavigate } from "@remix-run/react";
import { useAtom } from "jotai";
import { useState } from "react";
import { userAtom } from "~/store/store";
import { IconCheck, IconEye, IconEyeOff, IconUser, IconMail, IconLock } from "@tabler/icons-react";

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
        console.log("User set in atom:", result.user);
      
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
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-1">
                  Welcome Back
                </h2>
                <p className="text-gray-600 text-sm">Sign in to My Wallet</p>
              </div>

              {error && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-center border-l-4 border-red-500">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <form
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  await submitLogin(email, password);
                }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IconMail size={16} className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => validateEmail(email)}
                      className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                        emailError ? "border-red-500 bg-red-50" : "border-gray-300"
                      } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                      placeholder="yourname@gmail.com"
                      required
                    />
                  </div>
                  {emailError && (
                    <p className="mt-1 text-xs text-red-600">{emailError}</p>
                  )}
                </div>

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
                      id="password"
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      onBlur={() => validatePassword(password)}
                      className={`w-full pl-9 pr-10 py-2 rounded-lg border ${
                        passwordError ? "border-red-500 bg-red-50" : "border-gray-300"
                      } text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200`}
                      placeholder="Min. 6 characters"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                    >
                      {passwordVisible ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="mt-1 text-xs text-red-600">{passwordError}</p>
                  )}
                </div>



                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full rounded-lg py-2.5 px-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
                    isLoading 
                      ? "bg-indigo-400 cursor-not-allowed" 
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="text-center pt-1">
                  <p className="text-xs text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}