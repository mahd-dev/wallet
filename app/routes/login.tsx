import { Link, useActionData, useNavigate } from "@remix-run/react";
import { Block } from "konsta/react";
import { useState } from "react";
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
  const [
    passwordVisible,
    // , setPasswordVisible
  ] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");
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
        navigate("/");
      }
      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return (
    <Block className="!my-0 mx-auto max-w-7xl pt-5">
      <div className="bg-white-500 flex h-screen items-center justify-center">
        <div className="bg-white-500 w-full max-w-md rounded-lg p-6 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                await submitLogin(email, password);
              } catch (error) {
                setError("Login failed. Please try again.");
                console.error("Login error:", error);
              }
            }}
            method="post"
            className="space-y-4"
          >
            <div>
              <label htmlFor="fEmail" className="block text-sm font-medium">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e?.target?.value)}
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
              <label htmlFor="fPass" className="block text-sm font-medium">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e?.target?.value)}
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
            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don&apost have an account?
            <Link to="/signup" className="ml-1 text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Block>
  );
}
