import jwt from "jsonwebtoken";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import type { User } from "./types";
import { gqlSsrClient } from "./utils/gql_ssr_client";

// import { ZitadelStrategy } from "./utils/zitadel";
import { OAuth2Strategy } from "remix-auth-oauth2";

import { gql } from "gql";
import { uploadBlob } from "./routes/api.upload";

export const authenticator = new Authenticator<User>(sessionStorage);

export const getCallback = (provider: "google" | "oidc") =>
  `${process.env.PUBLIC_HOST}/auth/${provider}/callback`;

const genSocialToken = (sub: string, provider: string) =>
  jwt.sign(
    {
      provider,
      role: "reg_user",
    },
    process.env.JWT_SECRET_SOCIAL || "",
    {
      algorithm: "HS256",
      subject: sub,
      issuer: "social",
      expiresIn: 3155760000,
    },
  );

const registerUser = (args: {
  oidcId: string;
  email?: string;
  tel?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
}) =>
  gqlSsrClient(process.env.SYS_TOKEN)
    .mutation(
      gql(`
        mutation InitProfile(
          $oidcId: String!
          $firstName: String
          $lastName: String
          $email: String
          $tel: String
          $picture: String
        ) {
          createUser(
            input: {
              user: {
                oidcId: $oidcId
                firstName: $firstName
                lastName: $lastName
                email: $email
                tel: $tel
                picture: $picture
              }
            }
          ) {
            clientMutationId
          }
        }
      `),
      args,
    )
    .toPromise()
    .catch((e) => {
      console.log(e);
      return;
    });

authenticator.use(
  new OAuth2Strategy<
    User,
    {
      provider: "google";
      id: string;
      _json: {
        picture: string;
        email: string;
        given_name: string;
        family_name: string;
      };
    },
    { id_token: string }
  >(
    {
      clientId: process.env.OIDC_GOOGLE_CLIENT || "",
      clientSecret: process.env.OIDC_GOOGLE_SECRET || "",

      authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
      tokenEndpoint: "https://oauth2.googleapis.com/token",
      redirectURI: getCallback("google"),

      tokenRevocationEndpoint: "https://oauth2.googleapis.com/revoke",

      codeChallengeMethod: "S256",
      scopes: ["openid", "email", "profile"],

      authenticateWith: "request_body",
    },
    async ({ profile }) => {
      const img = await fetch(profile._json.picture)
        .then((r) => r.blob())
        .then((f) => uploadBlob(f));

      const oidcId = `gl-${profile.id}`;

      await registerUser({
        oidcId,
        email: profile._json.email,
        firstName: profile._json.given_name,
        lastName: profile._json.family_name,
        picture: img.Key,
      });

      return {
        provider: "google",
        sub: oidcId,
        role: "reg_user",
        id_token: genSocialToken(oidcId, "google"),
      };
    },
  ),
  "google",
);

// authenticator.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.OIDC_GOOGLE_CLIENT || "",
//       clientSecret: process.env.OIDC_GOOGLE_SECRET || "",
//       callbackURL: getCallback(SocialsProvider.GOOGLE),
//     },
//     async ({ profile }) => {
//       const img = await fetch(profile._json.picture)
//         .then((r) => r.blob())
//         .then((f) => uploadBlob(f));

//       const oidcId = `gl-${profile.id}`;

//       await registerUser({
//         oidcId,
//         email: profile._json.email,
//         firstName: profile._json.given_name,
//         lastName: profile._json.family_name,
//         picture: img.Key,
//       });

//       return {
//         provider: "google",
//         sub: oidcId,
//         role: "reg_user",
//         id_token: genSocialToken(oidcId, SocialsProvider.GOOGLE),
//       };
//     }
//   ),
//   SocialsProvider.GOOGLE
// );

// authenticator.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.OIDC_FACEBOOK_CLIENT || "",
//       clientSecret: process.env.OIDC_FACEBOOK_SECRET || "",
//       callbackURL: getCallback(SocialsProvider.FACEBOOK),
//     },
//     async ({ profile }) => {
//       const img = await fetch(profile._json.picture.data.url)
//         .then((r) => r.blob())
//         .then((f) => uploadBlob(f));

//       const oidcId = `fb-${profile.id}`;

//       // await registerUser({
//       //   oidcId,
//       //   email: profile._json.email,
//       //   firstName: profile._json.first_name,
//       //   lastName: profile._json.last_name,
//       //   picture: img.Key,
//       // });

//       return {
//         provider: "facebook",
//         sub: oidcId,
//         role: "reg_user",
//         id_token: genSocialToken(oidcId, SocialsProvider.FACEBOOK),
//       };
//     }
//   ),
//   SocialsProvider.FACEBOOK
// );

// authenticator.use(
//   new ZitadelStrategy(
//     {
//       authorizationURL: `${process.env.OIDC_AUTH_URL}`,
//       tokenURL: process.env.OIDC_TOKEN_URL || "",
//       clientID: process.env.OIDC_CLIENT || "",
//       clientSecret: process.env.OIDC_SECRET || "",
//       callbackURL: getCallback("oidc"),
//       scope: "openid email phone profile",
//       useBasicAuthenticationHeader: true,
//     },
//     async ({ extraParams }) => {
//       const decToken = jwt.decode(extraParams.id_token) as JwtPayload & {
//         email?: string;
//         given_name?: string;
//         family_name?: string;
//         phone_number?: string;
//         role?: string;
//         gender?: string;
//       };

//       const oidcId = `zd-${decToken.sub}`;

//       await registerUser({
//         oidcId,
//         email: decToken.email,
//         tel: decToken.phone_number,
//         firstName: decToken.given_name,
//         lastName: decToken.family_name,
//         gender:
//           decToken.gender === "male"
//             ? UserGender.Male
//             : decToken.gender === "female"
//             ? UserGender.Female
//             : undefined,
//       });

//       return {
//         provider: "oidc",
//         sub: oidcId,
//         role: decToken.role || "reg_user",
//         id_token: genSocialToken(oidcId, "oidc"),
//       };
//     }
//   ),
//   "oidc"
// );
