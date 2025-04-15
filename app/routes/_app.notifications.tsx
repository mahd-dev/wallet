import type { LoaderFunctionArgs } from "@remix-run/node";
import { gql } from "gql";
import { useAtom } from "jotai";
import { Block } from "konsta/react";
import { useSubscription } from "urql";
import { NotificationCmp } from "~/components/Notification/Notification";
import { useMainLayoutProps } from "~/layout/MainLayout";
import { userAtom } from "~/store/store";
import { Inbox } from "lucide-react";

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

  const notifications = notifs.data?.notifications?.nodes || [];
  const isLoading = notifs.fetching;
  const isEmpty = !isLoading && !notifications.length;

  return (
    <Block className="mx-auto max-w-2xl px-4 pt-6 pb-14">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="loading loading-ring loading-lg mb-4"></div>
          <p className="text-gray-500">Loading notifications...</p>
        </div>
      )}

      {isEmpty && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900">
          <Inbox className="mb-4 text-gray-400" size={48} />
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">No notifications yet</p>
          <p className="mt-1 text-sm text-gray-500">When you receive notifications, they'll appear here</p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {notifications.map((item) => (
          <NotificationCmp key={item.id} notification={item} />
        ))}
      </div>

      {notifications.length > 0 && (
        <div className="mt-10 flex items-center justify-center">
          <div className="w-20 border-t border-gray-200 dark:border-gray-700"></div>
          <p className="mx-4 text-sm text-gray-500">
            You're all caught up!
          </p>
          <div className="w-20 border-t border-gray-200 dark:border-gray-700"></div>
        </div>
      )}
    </Block>
  );
}