import { Link, useActionData, useNavigate } from "@remix-run/react";
import { useAtom } from "jotai";
import { Block } from "konsta/react";
import { useState } from "react";
import { userAtom } from "~/store/store"; 
/*
export const action: ActionFunction = async ({ request }) => {

  const formData = await request.formData();
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  const errors: Record<string, string> = {};
  if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email";
  if (!password || password.trim().length < 6) errors.password = "Password must be at least 6 characters";

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  // ✅ Call the GraphQL API with the correct query
  const response = await fetch(process.env.GRAPHQL_API_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: LOGIN_USER.loc?.source.body, // Use correct query
      variables: { email, password },
    }),
  });

  const { data, errors: queryErrors } = await response.json();

  // ✅ Check if user exists
  if (queryErrors || !data?.users?.nodes?.length) {
    return json({ errors: { email: "Invalid credentials" } }, { status: 401 });
  }

  const user = data.users.nodes[0]; // Get the first matched user

  console.log("==============> USER", user);
  
  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId", user.id);
return {
  user
}
  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};
*/
export default function LoginPage() {
  // const [, setCurrentUserId] = useAtom(userIdAtom);

  const actionData = useActionData<{ errors?: Record<string, string> }>();
  const [passwordVisible, setPasswordVisible  ] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // const [{ data }, submitLogin] = useQuery({
  //   query: LOGIN_USER,
  //   variables: {
  //     email: email,
  //     password: password,
  //   },
  // });

  // useEffect(() => {
  //   if (data?.users?.nodes?.length) {
  //     setCurrentUserId(data?.users?.nodes[0]?.oidcId);
  //     navigate("/");
  //   }
  // }, [data?.users?.nodes?.length]);
  console.log("user", user);

  const submitLogin = async (email: string, password: string) => {
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      const response = await fetch("/api/login", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const result = await response.json();
      if (result) {
        setUser(result.user);
        // If login is successful, redirect to OTP page
        navigate("/otp", { state: { email } });
      }
      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl transform hover:scale-105 transition-all duration-500">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900">Sign In</h2>
        {error && <p className="mb-4 text-center text-sm text-red-500">{error}</p>}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await submitLogin(email, password);
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? 
          <Link to="/signup" className="ml-1 font-semibold text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
