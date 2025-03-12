import { gql as graphql } from "gql";
// import { gql } from "urql";

export const Profile = graphql(`
  fragment Profile on User {
    firstName
    lastName
    gender
    email
    tel
    picture
    date
  }
`);

// export const NOTIF_COUNT = gql(`
//   subscription NotifCount($userId: String!) {
//     notifications(condition: {userId: $userId, isRead: false}) {
//       nodes {
//         id
//       }
//     }
//   }
// `);
