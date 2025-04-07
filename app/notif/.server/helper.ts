import { gql } from "gql";
import { nanoid } from "nanoid";
import { Client } from "urql";
import { sendPush as sendPushAction } from "~/utils/webpush/send";
import { Push } from "../types";

export const pushToUsers = async (props: {
  gqlClient: Client;
  usersIds: string[];
  notifType: keyof Push;
  data: NonNullable<Push[keyof Push]>;
  sendInternal?: boolean;
  sendPush?: boolean;
}) => {
  const {
    gqlClient,
    usersIds,
    notifType: notif,
    data,
    sendInternal,
    sendPush,
  } = props;
  const notifications = usersIds.reduce<{
    [userId: string]: { id: string } & Push;
  }>(
    (acc, userId) => ({
      ...acc,
      [userId]: { [notif]: data, id: nanoid() },
    }),
    {},
  );
  return await Promise.all([
    gqlClient
      .query(
        gql(`
      query GetUsersDevices($usersIds: [String!]!) {
        userDevices(filter: { userId: { in: $usersIds } }) {
          nodes {
            userId
            token
          }
        }
      }
    `),
        { usersIds },
      )
      .then((devices) =>
        !(sendPush === false)
          ? Promise.allSettled(
              devices.data?.userDevices?.nodes.map((device) => {
                sendPushAction(device.token, notifications[device.userId]);
              }) || [],
            )
          : undefined,
      ),
    !(sendInternal === false)
      ? gqlClient.mutation(
          gql(`
        mutation NotifyUsers($notifications: [NotificationInput!]) {
          mnCreateNotification(input: { mnNotification: $notifications }) {
            clientMutationId
          }
        }
      `),
          {
            notifications: Object.entries(notifications).map(
              ([userId, notif]) => ({
                id: notif.id,
                data: notif,
                userId,
              }),
            ),
          },
        )
      : undefined,
  ]);
};

export const notifyUsers = (
  gqlClient: Client,
  usersIds: string[],
  notification: { title: string; options?: NotificationOptions },
) => {
  pushToUsers({
    gqlClient,
    usersIds,
    notifType: "notification",
    data: notification,
  });
};
