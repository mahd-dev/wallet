import { redirect, type LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/auth.server";
import { cbStorage } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const cb = new URL(request.url).searchParams.get("next");

  await authenticator.isAuthenticated(request, {
    successRedirect: cb || "/",
  });

  const response = redirect("/auth/oidc");
  response.headers.append("Set-Cookie", await cbStorage.serialize(cb));
  return response;
};
