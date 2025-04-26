import { gql } from "gql";
import { NotifsSubscription } from "gql/graphql";

import { useMutation } from "urql";
import { pushHandlers } from "~/notif/.client";
import { Push } from "~/notif/types";

import { Link } from "@remix-run/react";
import { IconPoint, IconPointFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useAtom } from "jotai";
import { useMemo, useEffect, useState, useRef } from "react";
import { localeAtom } from "~/store/store";

// Initialize dayjs plugins
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(utc);
dayjs.extend(timezone);

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
  const [refreshCounter, setRefreshCounter] = useState(0);
  
  // Keep track of the component's mount status to prevent memory leaks
  const isMounted = useRef(true);
  

  // Configure dayjs locale based on user's locale
  useEffect(() => {
    if (locale === "fr") {
      dayjs.updateLocale("fr", {
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        }
      });
    }
    
    return () => {
      isMounted.current = false;
    };
  }, [locale]);

  // Add interval to refresh timestamps every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isMounted.current) {
        setRefreshCounter(prev => prev + 1);
      }
    }, 30000);
    
    return () => {
      clearInterval(intervalId);
      isMounted.current = false;
    };
  }, []);

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
      case "expenseNearlyExceeded":
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

  // Fixed timestamp calculation logic - the main issue was here!
  const formattedTime = useMemo(() => {
    if (!notification.t) {
      return locale === "fr" ? "à l'instant" : "just now";
    }

    try {
      const now = new Date().getTime();
      
      // Extract timestamp as number regardless of format
      let timestamp: number;
      
      if (typeof notification.t === 'string') {
        // Check if it's an ISO string (contains T)
        if (notification.t.includes('T')) {
          timestamp = new Date(notification.t).getTime();
        } else {
          // It's likely a unix timestamp as string
          timestamp = parseInt(notification.t);
        }
      } else {
        // It's already a number
        timestamp = notification.t;
      }
      
      // Fix for potential server-client time difference
      // Ensure timestamps are in the past to avoid "in X minutes" displays
      if (timestamp > now) {
        timestamp = now;
      }
      
      // Calculate difference in milliseconds
      const diff = now - timestamp;
      
      // Convert to appropriate units
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      // Format based on the difference
      if (seconds < 30) {
        return locale === "fr" ? "à l'instant" : "just now";
      } else if (minutes < 1) {
        return locale === "fr" ? "quelques secondes" : "few seconds ago";
      } else if (minutes < 60) {
        if (minutes === 1) {
          return locale === "fr" ? "1 minute" : "1 minute ago";
        } else {
          return locale === "fr" ? `${minutes} minutes` : `${minutes} minutes ago`;
        }
      } else if (hours < 24) {
        if (hours === 1) {
          return locale === "fr" ? "1 heure" : "1 hour ago";
        } else {
          return locale === "fr" ? `${hours} heures` : `${hours} hours ago`;
        }
      } else {
        if (days === 1) {
          return locale === "fr" ? "1 jour" : "1 day ago";
        } else {
          return locale === "fr" ? `${days} jours` : `${days} days ago`;
        }
      }
    } catch (error) {
      return locale === "fr" ? "à l'instant" : "just now";
    }
  }, [notification.t, locale, refreshCounter]);

  return (
    <Link
      className={`group flex w-full items-center gap-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
        notification.isRead
          ? "border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
          : "border-blue-100 bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/10"
      } p-4`}
      to={link}
      onClick={() => {
        toggleIsRead({ id: notification.id, isRead: true });
      }}
    >
      {rendered.options?.icon && (
        <div className="shrink-0">
          <img
            className="size-12 rounded-full object-cover shadow-sm"
            src={rendered.options.icon}
            alt=""
          />
        </div>
      )}
      
      <div className="flex grow flex-col gap-1">
        <span className={`font-medium ${notification.isRead ? "text-gray-700 dark:text-gray-300" : "text-gray-900 dark:text-white"}`}>
          {rendered.title}
        </span>
        
        {!short && rendered.options?.body && (
          <span className={`text-sm ${notification.isRead ? "text-gray-500 dark:text-gray-400" : "text-gray-700 dark:text-gray-200"}`}>
            {rendered.options.body}
          </span>
        )}
        
        <div className="mt-1 flex items-center gap-2">
          <span className={`inline-block h-2 w-2 rounded-full ${!notification.isRead ? "bg-blue-500" : "bg-transparent"}`}></span>
          <span className="text-xs text-gray-500">{dayjs(notification.t).format("llll")}</span>
        </div>
      </div>
      
      <button
        disabled={respToggleIsRead.fetching}
        className={`ml-auto flex shrink-0 items-center justify-center rounded-full p-2 transition-colors ${
          notification.isRead 
            ? "text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800" 
            : "text-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleIsRead({ id: notification.id, isRead: !notification.isRead });
        }}
        aria-label={notification.isRead ? "Mark as unread" : "Mark as read"}
      >
        {respToggleIsRead.fetching ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          <>
            {notification.isRead ? (
              <IconPoint className="size-5" />
            ) : (
              <IconPointFilled className="size-5" />
            )}
          </>
        )}
      </button>
    </Link>
  );
};