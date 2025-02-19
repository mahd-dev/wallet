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
    "\n  mutation AddTransaction(\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $date: Datetime!\n    $description: String\n    $transaction_id: String!\n  ) {\n    createTransaction(\n      input: {\n        transaction: {\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          date: $date\n          description: $description\n          transactionId: $transaction_id\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n": types.AddTransactionDocument,
    "\n  subscription CategorySubscription {\n    categories {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n": types.CategorySubscriptionDocument,
    "\n  mutation ADD_CATEGORY($id: String!, $name: String!) {\n    createCategory(input: { category: { id: $id, name: $name } }) {\n      clientMutationId\n    }\n  }\n": types.Add_CategoryDocument,
    "\n    query GET_TRANSACTIONS {\n      transactions {\n        nodes {\n          transactionId\n          type\n          userId\n          categoryId\n          date\n        }\n      }\n    }\n  ": types.Get_TransactionsDocument,
    "  query LOGIN_USER($email: String!, $password: String!) {\n    users(\n      filter: { email: { equalTo: $email }, password: { equalTo: $password } }\n    ) {\n      nodes {\n        password\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }": types.Login_UserDocument,
    "\n  mutation signup(\n    $id: String!\n    $email: String!\n    $firstName: String!\n    $lastName: String!\n    $password: String!\n  ) {\n    createUser(\n      input: {\n        user: {\n          oidcId: $id\n          email: $email\n          firstName: $firstName\n          lastName: $lastName\n          password: $password\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n": types.SignupDocument,
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
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddTransaction(\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $date: Datetime!\n    $description: String\n    $transaction_id: String!\n  ) {\n    createTransaction(\n      input: {\n        transaction: {\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          date: $date\n          description: $description\n          transactionId: $transaction_id\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation AddTransaction(\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $date: Datetime!\n    $description: String\n    $transaction_id: String!\n  ) {\n    createTransaction(\n      input: {\n        transaction: {\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          date: $date\n          description: $description\n          transactionId: $transaction_id\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription CategorySubscription {\n    categories {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription CategorySubscription {\n    categories {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_CATEGORY($id: String!, $name: String!) {\n    createCategory(input: { category: { id: $id, name: $name } }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_CATEGORY($id: String!, $name: String!) {\n    createCategory(input: { category: { id: $id, name: $name } }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_TRANSACTIONS {\n      transactions {\n        nodes {\n          transactionId\n          type\n          userId\n          categoryId\n          date\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_TRANSACTIONS {\n      transactions {\n        nodes {\n          transactionId\n          type\n          userId\n          categoryId\n          date\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "  query LOGIN_USER($email: String!, $password: String!) {\n    users(\n      filter: { email: { equalTo: $email }, password: { equalTo: $password } }\n    ) {\n      nodes {\n        password\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }"): (typeof documents)["  query LOGIN_USER($email: String!, $password: String!) {\n    users(\n      filter: { email: { equalTo: $email }, password: { equalTo: $password } }\n    ) {\n      nodes {\n        password\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signup(\n    $id: String!\n    $email: String!\n    $firstName: String!\n    $lastName: String!\n    $password: String!\n  ) {\n    createUser(\n      input: {\n        user: {\n          oidcId: $id\n          email: $email\n          firstName: $firstName\n          lastName: $lastName\n          password: $password\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation signup(\n    $id: String!\n    $email: String!\n    $firstName: String!\n    $lastName: String!\n    $password: String!\n  ) {\n    createUser(\n      input: {\n        user: {\n          oidcId: $id\n          email: $email\n          firstName: $firstName\n          lastName: $lastName\n          password: $password\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;