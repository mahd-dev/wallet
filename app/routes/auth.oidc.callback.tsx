import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/auth.server";
import { cbStorage } from "~/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  let next = url.searchParams.get("next");

  if (!next) {
    next = await cbStorage.parse(request.headers.get("Cookie"));
  }

  return await authenticator.authenticate("oidc", request, {
    successRedirect: `/auth/success${next ? `?next=${next}` : ""}`,
    failureRedirect: `/login${next ? `?next=${next}` : ""}`,
  });
};
