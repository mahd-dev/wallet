import type { ActionFunctionArgs } from "@remix-run/node";
import { notifTriggers } from "~/notif/.server/index";
import { gqlSsrClient } from "~/utils/gql_ssr_client";

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.json();
  const gqlClient = gqlSsrClient(process.env.SYS_TOKEN);

  return await Promise.all(
    Object.entries(body).map(([trigger, data]) =>
      notifTriggers[trigger as keyof typeof notifTriggers](
        gqlClient,
        data as any,
      ),
    ),
  );
};
