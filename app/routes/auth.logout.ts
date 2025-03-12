import { type ActionFunction, redirect } from "@remix-run/node";
import { destroySession, getSession } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const headers = {
    "Set-Cookie": await destroySession(session), // ✅ Ensure the session is being destroyed
  };

  console.log("Logout Headers:", headers); // ✅ Debugging: Check if Set-Cookie is set

  return redirect("/login", { headers });
};
