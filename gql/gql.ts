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
    "\n      mutation ToggleIsRead($id: String!, $isRead: Boolean!) {\n        updateNotification(input: {id: $id, patch: {isRead: $isRead}}){clientMutationId}\n      }\n    ": types.ToggleIsReadDocument,
    "\n  query GET_CATEGORIES($userId: String!) {\n    categories(condition: { userId: $userId }) {\n      nodes {\n        type\n        id\n        name\n        icon\n        iconColor\n      }\n    }\n  }\n": types.Get_CategoriesDocument,
    "\n  mutation AddTransaction(\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $date: Datetime!\n    $description: String\n    $transaction_id: String!\n    $type: Typetransaction!\n  ) {\n    createTransaction(\n      input: {\n        transaction: {\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          date: $date\n          description: $description\n          transactionId: $transaction_id\n          type: $type\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n": types.AddTransactionDocument,
    "\n  mutation EDIT_TRANSACTION1(\n    $id: String!\n    $amount: Float!\n    $date: Datetime!\n    $categoryId: String!\n    $description: String!\n    $type: Typetransaction!\n    $clientMutationId: String!\n  ) {\n    updateTransaction(\n      input: {\n        patch: {\n          amount: $amount\n          date: $date\n          categoryId: $categoryId\n          description: $description\n          type: $type\n        }\n        transactionId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      transaction {\n        transactionId\n        type\n        date\n        categoryId\n        description\n        amount\n      }\n    }\n  }\n": types.Edit_Transaction1Document,
    "\n  query GET_BUDGET_FOR_CATEGORY($userId: String!, $categoryId: String!,$month: Datetime!) {\n    budgets(\n      condition: { userId: $userId, categoryId: $categoryId }\n      filter: { month: { equalTo: $month } }\n    ) {\n      nodes {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n      }\n    }\n  }\n": types.Get_Budget_For_CategoryDocument,
    "\n  query GET_TRANSACTIONS_FOR_CATEGORY($userId: String!, $categoryId: String!, $start: Datetime!, $end: Datetime!) {\n  transactions(\n    condition: {userId: $userId, categoryId: $categoryId, type: EXPENSE}\n    filter: {date: {greaterThanOrEqualTo: $start, lessThanOrEqualTo: $end}}\n  ) {\n    nodes {\n      transactionId\n      amount\n      date\n    }\n    aggregates {\n      sum {\n        amount\n      }\n    }\n  }\n}\n": types.Get_Transactions_For_CategoryDocument,
    "\n  fragment Profile on User {\n    firstName\n    lastName\n    gender\n    email\n    tel\n    picture\n    date\n  }\n": types.ProfileFragmentDoc,
    "\n      query GetUsersDevices($usersIds: [String!]!) {\n        userDevices(filter: { userId: { in: $usersIds } }) {\n          nodes {\n            userId\n            token\n          }\n        }\n      }\n    ": types.GetUsersDevicesDocument,
    "\n        mutation NotifyUsers($notifications: [NotificationInput!]) {\n          mnCreateNotification(input: { mnNotification: $notifications }) {\n            clientMutationId\n          }\n        }\n      ": types.NotifyUsersDocument,
    "\n      query GetProfile($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    ": types.GetProfileDocument,
    "\n      subscription ProfileSub($oidcId: String!) {\n        user(oidcId: $oidcId) { ...Profile }\n        \n      }\n    ": types.ProfileSubDocument,
    "\n  query GET_USER_TRANSACTIONS($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        date\n        amount\n      }\n    }\n  }\n": types.Get_User_TransactionsDocument,
    "\n  query GET_USER_CATEGORIES($userId: String!) {\n    categories(condition: { userId: $userId, type: EXPENSE }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n": types.Get_User_CategoriesDocument,
    "\n  mutation AddBudget(\n    $budget_id: String!\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $month: Datetime!\n    $alert_threshold: Int\n    $created_at: Datetime!\n  ) {\n    createBudget(\n      input: {\n        budget: {\n          budgetId: $budget_id\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          month: $month\n          alertThreshold: $alert_threshold\n          createdAt: $created_at\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n": types.AddBudgetDocument,
    "\n  query GET_BUDGETS($userId: String!) {\n    budgets(orderBy: CREATED_AT_DESC, condition: { userId: $userId }) {\n      nodes {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n        createdAt\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n  }\n": types.Get_BudgetsDocument,
    "\n  query GET_USER_TRANSACTIONS2($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        categoryId\n        date\n        amount\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n  }\n": types.Get_User_Transactions2Document,
    "\n  mutation DELETE_BUDGET($id: String!) {\n    deleteBudget(input: { budgetId: $id }) {\n      clientMutationId\n    }\n  }\n": types.Delete_BudgetDocument,
    "\n  mutation EDIT_BUDGET(\n    $id: String!\n    $amount: Float!\n    $categoryId: String!\n    $month: Datetime!\n    $alertThreshold: Int\n    $clientMutationId: String!\n  ) {\n    updateBudget(\n      input: {\n        patch: {\n          amount: $amount\n          categoryId: $categoryId\n          month: $month\n          alertThreshold: $alertThreshold\n        }\n        budgetId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      budget {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n      }\n    }\n  }\n": types.Edit_BudgetDocument,
    "\n  query CHECK_CATEGORY_TRANSACTIONS($category_id: String!) {\n    transactions(condition: { categoryId: $category_id }) {\n      nodes {\n       transactionId\n      }\n    }\n  }\n": types.Check_Category_TransactionsDocument,
    "\n  query GET_USER_CATEGORIES3($userId: String!) {\n    categories(condition: { userId: $userId }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n": types.Get_User_Categories3Document,
    "\n  mutation ADD_CATEGORY(\n    $id: String!\n    $userId: String!\n    $name: String!\n    $icon: String!\n    $iconColor: String!\n    $type: Typetransaction!\n  ) {\n    createCategory(\n      input: {\n        category: {\n          id: $id\n          userId: $userId\n          name: $name\n          icon: $icon\n          iconColor: $iconColor\n          type: $type\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n": types.Add_CategoryDocument,
    "\n  mutation DELETE_CATEGORY($id: String!) {\n    deleteCategory(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n": types.Delete_CategoryDocument,
    "\n  mutation UPDATE_CATEGORY(\n    $id: String!\n    $name: String!\n    $icon: String!\n    $iconColor: String!\n    $type: Typetransaction!\n  ) {\n    updateCategory(\n      input: {\n        id: $id\n        patch: { name: $name, icon: $icon, iconColor: $iconColor, type: $type }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n": types.Update_CategoryDocument,
    "\n    subscription Notifs($userId: String!) {\n      notifications(condition: {userId: $userId}, orderBy: T_DESC) {\n        nodes {\n          id\n          t\n          isRead\n          data\n        }\n      }\n    }\n    ": types.NotifsDocument,
    "\n  query GET_TRANSACTIONS3($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        date\n        amount\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.Get_Transactions3Document,
    "\n      mutation SetUserToken($userId: String!, $token: String!, $ua: JSON) {\n        upsertUserDevice(\n          input: { userDevice: { userId: $userId, token: $token, ua: $ua } }\n          where: { token: $token, userId: $userId }\n        ) {\n          clientMutationId\n        }\n      }\n    ": types.SetUserTokenDocument,
    "\n  query GET_TRANSACTIONS4($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        userId\n        categoryId\n        date\n        description\n        amount\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n    \n    categories (condition: { userId: $userId }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n": types.Get_Transactions4Document,
    "\n  mutation DELETE_TRANSACTION($id: String!) {\n    deleteTransaction(input: { transactionId: $id }) {\n      clientMutationId\n    }\n  }\n": types.Delete_TransactionDocument,
    "\n  mutation EDIT_TRANSACTION2(\n    $id: String!\n    $amount: Float!\n    $categoryId: String!\n    $date: Datetime!\n    $description: String!\n    $type: Typetransaction!\n    $clientMutationId: String!\n  ) {\n    updateTransaction(\n      input: {\n        patch: {\n          amount: $amount\n          categoryId: $categoryId\n          date: $date\n          description: $description\n          type: $type\n        }\n        transactionId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      transaction {\n        transactionId\n        type\n        categoryId\n        date\n        description\n        amount\n      }\n    }\n  }\n": types.Edit_Transaction2Document,
    "  query LOGIN_USER($email: String!, $password: String!) {\n    users(\n      filter: { email: { equalTo: $email }, password: { equalTo: $password } }\n    ) {\n      nodes {\n        password\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }": types.Login_UserDocument,
    "  mutation CreateOtpVerification($input: CreateOtpVerificationInput!) {\n    createOtpVerification(input: $input) {\n      otpVerification {\n        id\n        otp\n        expiresAt\n        email\n      }\n    }\n  }\n": types.CreateOtpVerificationDocument,
    "  query GET_USER($email: String!) {\n    users(\n      filter: { email: { equalTo: $email } } \n    ) {\n      nodes {\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }": types.Get_UserDocument,
    "\n  mutation MyMutation($id: String!) {\n    deleteOtpVerification(input: { id: $id }) {\n      clientMutationId\n      deletedOtpVerificationNodeId\n    }\n  }\n": types.MyMutationDocument,
    "\n  query CHECK_OTP($email: String!, $otp: String!) {\n    otpVerifications(\n      filter: { email: { equalTo: $email }, otp: { equalTo: $otp } }\n    ) {\n      nodes {\n        id\n        otp\n        email\n        expiresAt\n      }\n    }\n  }\n": types.Check_OtpDocument,
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
export function gql(source: "\n      mutation ToggleIsRead($id: String!, $isRead: Boolean!) {\n        updateNotification(input: {id: $id, patch: {isRead: $isRead}}){clientMutationId}\n      }\n    "): (typeof documents)["\n      mutation ToggleIsRead($id: String!, $isRead: Boolean!) {\n        updateNotification(input: {id: $id, patch: {isRead: $isRead}}){clientMutationId}\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_CATEGORIES($userId: String!) {\n    categories(condition: { userId: $userId }) {\n      nodes {\n        type\n        id\n        name\n        icon\n        iconColor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_CATEGORIES($userId: String!) {\n    categories(condition: { userId: $userId }) {\n      nodes {\n        type\n        id\n        name\n        icon\n        iconColor\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddTransaction(\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $date: Datetime!\n    $description: String\n    $transaction_id: String!\n    $type: Typetransaction!\n  ) {\n    createTransaction(\n      input: {\n        transaction: {\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          date: $date\n          description: $description\n          transactionId: $transaction_id\n          type: $type\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation AddTransaction(\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $date: Datetime!\n    $description: String\n    $transaction_id: String!\n    $type: Typetransaction!\n  ) {\n    createTransaction(\n      input: {\n        transaction: {\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          date: $date\n          description: $description\n          transactionId: $transaction_id\n          type: $type\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_TRANSACTION1(\n    $id: String!\n    $amount: Float!\n    $date: Datetime!\n    $categoryId: String!\n    $description: String!\n    $type: Typetransaction!\n    $clientMutationId: String!\n  ) {\n    updateTransaction(\n      input: {\n        patch: {\n          amount: $amount\n          date: $date\n          categoryId: $categoryId\n          description: $description\n          type: $type\n        }\n        transactionId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      transaction {\n        transactionId\n        type\n        date\n        categoryId\n        description\n        amount\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_TRANSACTION1(\n    $id: String!\n    $amount: Float!\n    $date: Datetime!\n    $categoryId: String!\n    $description: String!\n    $type: Typetransaction!\n    $clientMutationId: String!\n  ) {\n    updateTransaction(\n      input: {\n        patch: {\n          amount: $amount\n          date: $date\n          categoryId: $categoryId\n          description: $description\n          type: $type\n        }\n        transactionId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      transaction {\n        transactionId\n        type\n        date\n        categoryId\n        description\n        amount\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_BUDGET_FOR_CATEGORY($userId: String!, $categoryId: String!,$month: Datetime!) {\n    budgets(\n      condition: { userId: $userId, categoryId: $categoryId }\n      filter: { month: { equalTo: $month } }\n    ) {\n      nodes {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_BUDGET_FOR_CATEGORY($userId: String!, $categoryId: String!,$month: Datetime!) {\n    budgets(\n      condition: { userId: $userId, categoryId: $categoryId }\n      filter: { month: { equalTo: $month } }\n    ) {\n      nodes {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_TRANSACTIONS_FOR_CATEGORY($userId: String!, $categoryId: String!, $start: Datetime!, $end: Datetime!) {\n  transactions(\n    condition: {userId: $userId, categoryId: $categoryId, type: EXPENSE}\n    filter: {date: {greaterThanOrEqualTo: $start, lessThanOrEqualTo: $end}}\n  ) {\n    nodes {\n      transactionId\n      amount\n      date\n    }\n    aggregates {\n      sum {\n        amount\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  query GET_TRANSACTIONS_FOR_CATEGORY($userId: String!, $categoryId: String!, $start: Datetime!, $end: Datetime!) {\n  transactions(\n    condition: {userId: $userId, categoryId: $categoryId, type: EXPENSE}\n    filter: {date: {greaterThanOrEqualTo: $start, lessThanOrEqualTo: $end}}\n  ) {\n    nodes {\n      transactionId\n      amount\n      date\n    }\n    aggregates {\n      sum {\n        amount\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Profile on User {\n    firstName\n    lastName\n    gender\n    email\n    tel\n    picture\n    date\n  }\n"): (typeof documents)["\n  fragment Profile on User {\n    firstName\n    lastName\n    gender\n    email\n    tel\n    picture\n    date\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GetUsersDevices($usersIds: [String!]!) {\n        userDevices(filter: { userId: { in: $usersIds } }) {\n          nodes {\n            userId\n            token\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetUsersDevices($usersIds: [String!]!) {\n        userDevices(filter: { userId: { in: $usersIds } }) {\n          nodes {\n            userId\n            token\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation NotifyUsers($notifications: [NotificationInput!]) {\n          mnCreateNotification(input: { mnNotification: $notifications }) {\n            clientMutationId\n          }\n        }\n      "): (typeof documents)["\n        mutation NotifyUsers($notifications: [NotificationInput!]) {\n          mnCreateNotification(input: { mnNotification: $notifications }) {\n            clientMutationId\n          }\n        }\n      "];
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
export function gql(source: "\n  query GET_USER_TRANSACTIONS($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        date\n        amount\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_USER_TRANSACTIONS($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        date\n        amount\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_USER_CATEGORIES($userId: String!) {\n    categories(condition: { userId: $userId, type: EXPENSE }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_USER_CATEGORIES($userId: String!) {\n    categories(condition: { userId: $userId, type: EXPENSE }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddBudget(\n    $budget_id: String!\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $month: Datetime!\n    $alert_threshold: Int\n    $created_at: Datetime!\n  ) {\n    createBudget(\n      input: {\n        budget: {\n          budgetId: $budget_id\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          month: $month\n          alertThreshold: $alert_threshold\n          createdAt: $created_at\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation AddBudget(\n    $budget_id: String!\n    $user_id: String!\n    $category_id: String!\n    $amount: Float!\n    $month: Datetime!\n    $alert_threshold: Int\n    $created_at: Datetime!\n  ) {\n    createBudget(\n      input: {\n        budget: {\n          budgetId: $budget_id\n          userId: $user_id\n          categoryId: $category_id\n          amount: $amount\n          month: $month\n          alertThreshold: $alert_threshold\n          createdAt: $created_at\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_BUDGETS($userId: String!) {\n    budgets(orderBy: CREATED_AT_DESC, condition: { userId: $userId }) {\n      nodes {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n        createdAt\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_BUDGETS($userId: String!) {\n    budgets(orderBy: CREATED_AT_DESC, condition: { userId: $userId }) {\n      nodes {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n        createdAt\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_USER_TRANSACTIONS2($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        categoryId\n        date\n        amount\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_USER_TRANSACTIONS2($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        categoryId\n        date\n        amount\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_BUDGET($id: String!) {\n    deleteBudget(input: { budgetId: $id }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation DELETE_BUDGET($id: String!) {\n    deleteBudget(input: { budgetId: $id }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_BUDGET(\n    $id: String!\n    $amount: Float!\n    $categoryId: String!\n    $month: Datetime!\n    $alertThreshold: Int\n    $clientMutationId: String!\n  ) {\n    updateBudget(\n      input: {\n        patch: {\n          amount: $amount\n          categoryId: $categoryId\n          month: $month\n          alertThreshold: $alertThreshold\n        }\n        budgetId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      budget {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_BUDGET(\n    $id: String!\n    $amount: Float!\n    $categoryId: String!\n    $month: Datetime!\n    $alertThreshold: Int\n    $clientMutationId: String!\n  ) {\n    updateBudget(\n      input: {\n        patch: {\n          amount: $amount\n          categoryId: $categoryId\n          month: $month\n          alertThreshold: $alertThreshold\n        }\n        budgetId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      budget {\n        budgetId\n        userId\n        categoryId\n        amount\n        month\n        alertThreshold\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CHECK_CATEGORY_TRANSACTIONS($category_id: String!) {\n    transactions(condition: { categoryId: $category_id }) {\n      nodes {\n       transactionId\n      }\n    }\n  }\n"): (typeof documents)["\n  query CHECK_CATEGORY_TRANSACTIONS($category_id: String!) {\n    transactions(condition: { categoryId: $category_id }) {\n      nodes {\n       transactionId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_USER_CATEGORIES3($userId: String!) {\n    categories(condition: { userId: $userId }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_USER_CATEGORIES3($userId: String!) {\n    categories(condition: { userId: $userId }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_CATEGORY(\n    $id: String!\n    $userId: String!\n    $name: String!\n    $icon: String!\n    $iconColor: String!\n    $type: Typetransaction!\n  ) {\n    createCategory(\n      input: {\n        category: {\n          id: $id\n          userId: $userId\n          name: $name\n          icon: $icon\n          iconColor: $iconColor\n          type: $type\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_CATEGORY(\n    $id: String!\n    $userId: String!\n    $name: String!\n    $icon: String!\n    $iconColor: String!\n    $type: Typetransaction!\n  ) {\n    createCategory(\n      input: {\n        category: {\n          id: $id\n          userId: $userId\n          name: $name\n          icon: $icon\n          iconColor: $iconColor\n          type: $type\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_CATEGORY($id: String!) {\n    deleteCategory(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation DELETE_CATEGORY($id: String!) {\n    deleteCategory(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UPDATE_CATEGORY(\n    $id: String!\n    $name: String!\n    $icon: String!\n    $iconColor: String!\n    $type: Typetransaction!\n  ) {\n    updateCategory(\n      input: {\n        id: $id\n        patch: { name: $name, icon: $icon, iconColor: $iconColor, type: $type }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation UPDATE_CATEGORY(\n    $id: String!\n    $name: String!\n    $icon: String!\n    $iconColor: String!\n    $type: Typetransaction!\n  ) {\n    updateCategory(\n      input: {\n        id: $id\n        patch: { name: $name, icon: $icon, iconColor: $iconColor, type: $type }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    subscription Notifs($userId: String!) {\n      notifications(condition: {userId: $userId}, orderBy: T_DESC) {\n        nodes {\n          id\n          t\n          isRead\n          data\n        }\n      }\n    }\n    "): (typeof documents)["\n    subscription Notifs($userId: String!) {\n      notifications(condition: {userId: $userId}, orderBy: T_DESC) {\n        nodes {\n          id\n          t\n          isRead\n          data\n        }\n      }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_TRANSACTIONS3($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        date\n        amount\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_TRANSACTIONS3($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        date\n        amount\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation SetUserToken($userId: String!, $token: String!, $ua: JSON) {\n        upsertUserDevice(\n          input: { userDevice: { userId: $userId, token: $token, ua: $ua } }\n          where: { token: $token, userId: $userId }\n        ) {\n          clientMutationId\n        }\n      }\n    "): (typeof documents)["\n      mutation SetUserToken($userId: String!, $token: String!, $ua: JSON) {\n        upsertUserDevice(\n          input: { userDevice: { userId: $userId, token: $token, ua: $ua } }\n          where: { token: $token, userId: $userId }\n        ) {\n          clientMutationId\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_TRANSACTIONS4($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        userId\n        categoryId\n        date\n        description\n        amount\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n    \n    categories (condition: { userId: $userId }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_TRANSACTIONS4($userId: String!) {\n    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {\n      nodes {\n        transactionId\n        type\n        userId\n        categoryId\n        date\n        description\n        amount\n        category {\n          id\n          name\n          icon\n          iconColor\n          type\n        }\n      }\n    }\n    \n    categories (condition: { userId: $userId }) {\n      nodes {\n        id\n        name\n        icon\n        iconColor\n        type\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_TRANSACTION($id: String!) {\n    deleteTransaction(input: { transactionId: $id }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation DELETE_TRANSACTION($id: String!) {\n    deleteTransaction(input: { transactionId: $id }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_TRANSACTION2(\n    $id: String!\n    $amount: Float!\n    $categoryId: String!\n    $date: Datetime!\n    $description: String!\n    $type: Typetransaction!\n    $clientMutationId: String!\n  ) {\n    updateTransaction(\n      input: {\n        patch: {\n          amount: $amount\n          categoryId: $categoryId\n          date: $date\n          description: $description\n          type: $type\n        }\n        transactionId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      transaction {\n        transactionId\n        type\n        categoryId\n        date\n        description\n        amount\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_TRANSACTION2(\n    $id: String!\n    $amount: Float!\n    $categoryId: String!\n    $date: Datetime!\n    $description: String!\n    $type: Typetransaction!\n    $clientMutationId: String!\n  ) {\n    updateTransaction(\n      input: {\n        patch: {\n          amount: $amount\n          categoryId: $categoryId\n          date: $date\n          description: $description\n          type: $type\n        }\n        transactionId: $id\n        clientMutationId: $clientMutationId\n      }\n    ) {\n      transaction {\n        transactionId\n        type\n        categoryId\n        date\n        description\n        amount\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "  query LOGIN_USER($email: String!, $password: String!) {\n    users(\n      filter: { email: { equalTo: $email }, password: { equalTo: $password } }\n    ) {\n      nodes {\n        password\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }"): (typeof documents)["  query LOGIN_USER($email: String!, $password: String!) {\n    users(\n      filter: { email: { equalTo: $email }, password: { equalTo: $password } }\n    ) {\n      nodes {\n        password\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "  mutation CreateOtpVerification($input: CreateOtpVerificationInput!) {\n    createOtpVerification(input: $input) {\n      otpVerification {\n        id\n        otp\n        expiresAt\n        email\n      }\n    }\n  }\n"): (typeof documents)["  mutation CreateOtpVerification($input: CreateOtpVerificationInput!) {\n    createOtpVerification(input: $input) {\n      otpVerification {\n        id\n        otp\n        expiresAt\n        email\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "  query GET_USER($email: String!) {\n    users(\n      filter: { email: { equalTo: $email } } \n    ) {\n      nodes {\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }"): (typeof documents)["  query GET_USER($email: String!) {\n    users(\n      filter: { email: { equalTo: $email } } \n    ) {\n      nodes {\n        email\n        oidcId\n        firstName\n        lastName\n        gender\n      }\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MyMutation($id: String!) {\n    deleteOtpVerification(input: { id: $id }) {\n      clientMutationId\n      deletedOtpVerificationNodeId\n    }\n  }\n"): (typeof documents)["\n  mutation MyMutation($id: String!) {\n    deleteOtpVerification(input: { id: $id }) {\n      clientMutationId\n      deletedOtpVerificationNodeId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CHECK_OTP($email: String!, $otp: String!) {\n    otpVerifications(\n      filter: { email: { equalTo: $email }, otp: { equalTo: $otp } }\n    ) {\n      nodes {\n        id\n        otp\n        email\n        expiresAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query CHECK_OTP($email: String!, $otp: String!) {\n    otpVerifications(\n      filter: { email: { equalTo: $email }, otp: { equalTo: $otp } }\n    ) {\n      nodes {\n        id\n        otp\n        email\n        expiresAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signup(\n    $id: String!\n    $email: String!\n    $firstName: String!\n    $lastName: String!\n    $password: String!\n  ) {\n    createUser(\n      input: {\n        user: {\n          oidcId: $id\n          email: $email\n          firstName: $firstName\n          lastName: $lastName\n          password: $password\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation signup(\n    $id: String!\n    $email: String!\n    $firstName: String!\n    $lastName: String!\n    $password: String!\n  ) {\n    createUser(\n      input: {\n        user: {\n          oidcId: $id\n          email: $email\n          firstName: $firstName\n          lastName: $lastName\n          password: $password\n        }\n      }\n    ) {\n      clientMutationId\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;