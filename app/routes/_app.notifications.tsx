import type { LoaderFunctionArgs } from "@remix-run/node";
import { gql } from "gql";
import { useAtom } from "jotai";
import { Block } from "konsta/react";
import { useSubscription } from "urql";
import { NotificationCmp } from "~/components/Notification/Notification";
import { useMainLayoutProps } from "~/layout/MainLayout";
import {  userAtom } from "~/store/store";


export default function NotificationsPage() {
  const [user] = useAtom(userAtom);
  useMainLayoutProps({ navbarTitle: "Notifications" });

  const [notifs] = useSubscription({
    query: gql(`
    subscription Notifs($userId: String!) {
      notifications(condition: {userId: $userId}, orderBy: T_DESC) {
        nodes {
          id
          t
          isRead
          data
        }
      }
    }
    `),
    variables: {
      userId: user?.oidcId || "",
    },
  });

  return (
    <Block className="!mt-8 mx-auto max-w-5xl pb-14 pt-8">
      {notifs.fetching && (
        <div className="my-2 text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}

      {!notifs.fetching && !notifs.data?.notifications?.nodes?.length && (
        <span className="text-xl opacity-50">Empty </span>
      )}

      <div className="flex flex-col gap-4">
        {notifs.data?.notifications?.nodes?.map((item) => (
          <NotificationCmp key={item.id} notification={item} />
        ))}
      </div>
      {(notifs?.data?.notifications?.nodes?.length || undefined) && (
        <div className="justiyf-between flex items-center">
          <hr className="w-full" />
          <p className="flex shrink-0 px-3 py-16 text-sm leading-normal text-gray-500 focus:outline-none">
            Thats it for now! Check back later for more notifications.
          </p>
          <hr className="w-full" />
        </div>
      )}
    </Block>
  );
}
