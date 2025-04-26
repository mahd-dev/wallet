import jwt from "jsonwebtoken";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import type { User } from "./types";
import { gqlSsrClient } from "./utils/gql_ssr_client";

// import { ZitadelStrategy } from "./utils/zitadel";
import { OAuth2Strategy } from "remix-auth-oauth2";

import { gql } from "gql";

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

      const oidcId = `gl-${profile.id}`;

      await registerUser({
        oidcId,
        email: profile._json.email,
        firstName: profile._json.given_name,
        lastName: profile._json.family_name,
        picture: "image",
      });

      return {
        provider: "google",
        sub: oidcId,
        role: "reg_user",
        id_token: genSocialToken(oidcId, "google"),
        oidcId,
        email: profile._json.email,
        bio: "",
        phone: "",
        firstName: profile._json.given_name,
        lastName: profile._json.family_name,
        picture: profile._json.picture,
      };
    },
  ),
  "google",
);
