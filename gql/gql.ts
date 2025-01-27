/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n        mutation InitProfile(\n          $oidcId: String!\n          $firstName: String\n          $lastName: String\n          $email: String\n          $tel: String\n          $picture: String\n        ) {\n          createUser(\n            input: {\n              user: {\n                oidcId: $oidcId\n                firstName: $firstName\n                lastName: $lastName\n                email: $email\n                tel: $tel\n                picture: $picture\n              }\n            }\n          ) {\n            clientMutationId\n          }\n        }\n      ": types.InitProfileDocument,
    "\n  fragment Profile on User {\n    firstName\n    lastName\n    gender\n    email\n    tel\n    picture\n    birthDay\n  }\n": types.ProfileFragmentDoc,
    "\n      query GetProfile($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    ": types.GetProfileDocument,
    "\n      subscription ProfileSub($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    ": types.ProfileSubDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation InitProfile(\n          $oidcId: String!\n          $firstName: String\n          $lastName: String\n          $email: String\n          $tel: String\n          $picture: String\n        ) {\n          createUser(\n            input: {\n              user: {\n                oidcId: $oidcId\n                firstName: $firstName\n                lastName: $lastName\n                email: $email\n                tel: $tel\n                picture: $picture\n              }\n            }\n          ) {\n            clientMutationId\n          }\n        }\n      "): (typeof documents)["\n        mutation InitProfile(\n          $oidcId: String!\n          $firstName: String\n          $lastName: String\n          $email: String\n          $tel: String\n          $picture: String\n        ) {\n          createUser(\n            input: {\n              user: {\n                oidcId: $oidcId\n                firstName: $firstName\n                lastName: $lastName\n                email: $email\n                tel: $tel\n                picture: $picture\n              }\n            }\n          ) {\n            clientMutationId\n          }\n        }\n      "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Profile on User {\n    firstName\n    lastName\n    gender\n    email\n    tel\n    picture\n    birthDay\n  }\n"): (typeof documents)["\n  fragment Profile on User {\n    firstName\n    lastName\n    gender\n    email\n    tel\n    picture\n    birthDay\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GetProfile($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    "): (typeof documents)["\n      query GetProfile($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      subscription ProfileSub($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    "): (typeof documents)["\n      subscription ProfileSub($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;