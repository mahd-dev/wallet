import { gql } from "gql";
import { NotifsSubscription } from "gql/graphql";

import { useMutation } from "urql";
import { pushHandlers } from "~/notif/.client";
import { Push } from "~/notif/types";

import { Link } from "@remix-run/react";
import { IconPoint, IconPointFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { localeAtom } from "~/store/store";

export const NotificationCmp = (props: {
  notification: Omit<
    NonNullable<NotifsSubscription["notifications"]>["nodes"][0],
    "data"
  > & {
    data: Push;
  };
  short?: boolean;
}) => {
  const { notification, short = false } = props;
  const [locale] = useAtom(localeAtom);

  const [type, data] = Object.entries(notification.data).find(
    (d) => d[0] !== "id"
  ) as [keyof Push, NonNullable<Push[keyof Push]>];

  const rendered = pushHandlers[type](
    { dayjs, store: { origin: window.location.origin, locale } },
    data as any
  );

  const [respToggleIsRead, toggleIsRead] = useMutation(
    gql(`
      mutation ToggleIsRead($id: String!, $isRead: Boolean!) {
        updateNotification(input: {id: $id, patch: {isRead: $isRead}}){clientMutationId}
      }
    `)
  );

  const link = useMemo(() => {
    switch (type) {
      case "expenseExceeded":
        if (rendered.options?.data.orgId)
          return `/budget`;
        return "#";

      default:
        return rendered.options?.data.link || "#";
    }
  }, [
    rendered.options?.data.etbId,
    rendered.options?.data.link,
    rendered.options?.data.orderId,
    rendered.options?.data.orgId,
    type,
  ]);

  return (
    <Link
      className={`flex min-h-16 w-full flex-row gap-3 rounded-2xl p-${short ? 2 : 3} ${
        notification.isRead
          ? "bg-md-light-surface-2 text-black/50 dark:bg-md-dark-surface-2 dark:text-white/50"
          : "bg-md-light-surface-5 dark:bg-md-dark-surface-5"
      }`}
      to={link}
      onClick={() => {
        toggleIsRead({ id: notification.id, isRead: true });
      }}
    >
      {rendered.options?.icon && (
        <img
          className="size-12 rounded-full"
          src={rendered.options.icon}
          alt=""
        />
      )}
      <div className="flex grow flex-col">
        <span className="font-bold">{rendered.title}</span>
        {!short && <span>{rendered.options?.body}</span>}
        <span className={`${short ? "" : "mt-2"}  text-gray-500`}>
          {dayjs(`${notification.t}Z`).fromNow()}
        </span>
      </div>
      <button
        disabled={respToggleIsRead.fetching}
        className="m-2"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleIsRead({ id: notification.id, isRead: !notification.isRead });
        }}
      >
        {respToggleIsRead.fetching ? (
          <span className="loading loading-ring loading-xs" />
        ) : (
          <>{notification.isRead ? <IconPoint /> : <IconPointFilled />}</>
        )}
      </button>
    </Link>
  );
};
