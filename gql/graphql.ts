/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: { input: any; output: any; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: { [key: string]: any }; output: { [key: string]: any }; }
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** A filter to be used against aggregates of `Budget` object types. */
export type BudgetAggregatesFilter = {
  /** Mean average aggregate over matching `Budget` objects. */
  average?: InputMaybe<BudgetAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Budget` objects. */
  distinctCount?: InputMaybe<BudgetDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Budget` object to be included within the aggregate. */
  filter?: InputMaybe<BudgetFilter>;
  /** Maximum aggregate over matching `Budget` objects. */
  max?: InputMaybe<BudgetMaxAggregateFilter>;
  /** Minimum aggregate over matching `Budget` objects. */
  min?: InputMaybe<BudgetMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Budget` objects. */
  stddevPopulation?: InputMaybe<BudgetStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Budget` objects. */
  stddevSample?: InputMaybe<BudgetStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Budget` objects. */
  sum?: InputMaybe<BudgetSumAggregateFilter>;
  /** Population variance aggregate over matching `Budget` objects. */
  variancePopulation?: InputMaybe<BudgetVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Budget` objects. */
  varianceSample?: InputMaybe<BudgetVarianceSampleAggregateFilter>;
};

export type BudgetAverageAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

/** A condition to be used against `Budget` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BudgetCondition = {
  /** Checks for equality with the object’s `alertThreshold` field. */
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `budgetId` field. */
  budgetId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `month` field. */
  month?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BudgetDistinctCountAggregateFilter = {
  alertThreshold?: InputMaybe<BigIntFilter>;
  amount?: InputMaybe<BigIntFilter>;
  budgetId?: InputMaybe<BigIntFilter>;
  categoryId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  month?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Budget` object types. All fields are combined with a logical ‘and.’ */
export type BudgetFilter = {
  /** Filter by the object’s `alertThreshold` field. */
  alertThreshold?: InputMaybe<IntFilter>;
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BudgetFilter>>;
  /** Filter by the object’s `budgetId` field. */
  budgetId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** A related `category` exists. */
  categoryExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `month` field. */
  month?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BudgetFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BudgetFilter>>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Budget` for usage during aggregation. */
export enum BudgetGroupBy {
  AlertThreshold = 'ALERT_THRESHOLD',
  Amount = 'AMOUNT',
  CategoryId = 'CATEGORY_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Month = 'MONTH',
  MonthTruncatedToDay = 'MONTH_TRUNCATED_TO_DAY',
  MonthTruncatedToHour = 'MONTH_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type BudgetHavingAverageInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingDistinctCountInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Budget` aggregates. */
export type BudgetHavingInput = {
  AND?: InputMaybe<Array<BudgetHavingInput>>;
  OR?: InputMaybe<Array<BudgetHavingInput>>;
  average?: InputMaybe<BudgetHavingAverageInput>;
  distinctCount?: InputMaybe<BudgetHavingDistinctCountInput>;
  max?: InputMaybe<BudgetHavingMaxInput>;
  min?: InputMaybe<BudgetHavingMinInput>;
  stddevPopulation?: InputMaybe<BudgetHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<BudgetHavingStddevSampleInput>;
  sum?: InputMaybe<BudgetHavingSumInput>;
  variancePopulation?: InputMaybe<BudgetHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<BudgetHavingVarianceSampleInput>;
};

export type BudgetHavingMaxInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingMinInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevPopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingSumInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVariancePopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVarianceSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Budget` */
export type BudgetInput = {
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  month?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BudgetMaxAggregateFilter = {
  alertThreshold?: InputMaybe<IntFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetMinAggregateFilter = {
  alertThreshold?: InputMaybe<IntFilter>;
  amount?: InputMaybe<FloatFilter>;
};

/** Represents an update to a `Budget`. Fields that are set will be updated. */
export type BudgetPatch = {
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  month?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BudgetStddevPopulationAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetStddevSampleAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetSumAggregateFilter = {
  alertThreshold?: InputMaybe<BigIntFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetVariancePopulationAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetVarianceSampleAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

/** Methods to use when ordering `Budget`. */
export enum BudgetsOrderBy {
  AlertThresholdAsc = 'ALERT_THRESHOLD_ASC',
  AlertThresholdDesc = 'ALERT_THRESHOLD_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  BudgetIdAsc = 'BUDGET_ID_ASC',
  BudgetIdDesc = 'BUDGET_ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  BudgetsByCategoryIdAverageAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdAverageAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdAverageAmountAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_AMOUNT_ASC',
  BudgetsByCategoryIdAverageAmountDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_AMOUNT_DESC',
  BudgetsByCategoryIdAverageBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_BUDGET_ID_ASC',
  BudgetsByCategoryIdAverageBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_BUDGET_ID_DESC',
  BudgetsByCategoryIdAverageCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_ASC',
  BudgetsByCategoryIdAverageCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_DESC',
  BudgetsByCategoryIdAverageCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CREATED_AT_ASC',
  BudgetsByCategoryIdAverageCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CREATED_AT_DESC',
  BudgetsByCategoryIdAverageMonthAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_MONTH_ASC',
  BudgetsByCategoryIdAverageMonthDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_MONTH_DESC',
  BudgetsByCategoryIdAverageUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_USER_ID_ASC',
  BudgetsByCategoryIdAverageUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_USER_ID_DESC',
  BudgetsByCategoryIdCountAsc = 'BUDGETS_BY_CATEGORY_ID_COUNT_ASC',
  BudgetsByCategoryIdCountDesc = 'BUDGETS_BY_CATEGORY_ID_COUNT_DESC',
  BudgetsByCategoryIdDistinctCountAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdDistinctCountAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdDistinctCountAmountAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_ASC',
  BudgetsByCategoryIdDistinctCountAmountDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_DESC',
  BudgetsByCategoryIdDistinctCountBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_BUDGET_ID_ASC',
  BudgetsByCategoryIdDistinctCountBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_BUDGET_ID_DESC',
  BudgetsByCategoryIdDistinctCountCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  BudgetsByCategoryIdDistinctCountCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  BudgetsByCategoryIdDistinctCountCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  BudgetsByCategoryIdDistinctCountCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  BudgetsByCategoryIdDistinctCountMonthAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_MONTH_ASC',
  BudgetsByCategoryIdDistinctCountMonthDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_MONTH_DESC',
  BudgetsByCategoryIdDistinctCountUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_ASC',
  BudgetsByCategoryIdDistinctCountUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_DESC',
  BudgetsByCategoryIdMaxAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdMaxAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdMaxAmountAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_AMOUNT_ASC',
  BudgetsByCategoryIdMaxAmountDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_AMOUNT_DESC',
  BudgetsByCategoryIdMaxBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_BUDGET_ID_ASC',
  BudgetsByCategoryIdMaxBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_BUDGET_ID_DESC',
  BudgetsByCategoryIdMaxCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_CATEGORY_ID_ASC',
  BudgetsByCategoryIdMaxCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_CATEGORY_ID_DESC',
  BudgetsByCategoryIdMaxCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_CREATED_AT_ASC',
  BudgetsByCategoryIdMaxCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_CREATED_AT_DESC',
  BudgetsByCategoryIdMaxMonthAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_MONTH_ASC',
  BudgetsByCategoryIdMaxMonthDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_MONTH_DESC',
  BudgetsByCategoryIdMaxUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_USER_ID_ASC',
  BudgetsByCategoryIdMaxUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_USER_ID_DESC',
  BudgetsByCategoryIdMinAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdMinAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdMinAmountAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_AMOUNT_ASC',
  BudgetsByCategoryIdMinAmountDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_AMOUNT_DESC',
  BudgetsByCategoryIdMinBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_BUDGET_ID_ASC',
  BudgetsByCategoryIdMinBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_BUDGET_ID_DESC',
  BudgetsByCategoryIdMinCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_CATEGORY_ID_ASC',
  BudgetsByCategoryIdMinCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_CATEGORY_ID_DESC',
  BudgetsByCategoryIdMinCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_CREATED_AT_ASC',
  BudgetsByCategoryIdMinCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_CREATED_AT_DESC',
  BudgetsByCategoryIdMinMonthAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_MONTH_ASC',
  BudgetsByCategoryIdMinMonthDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_MONTH_DESC',
  BudgetsByCategoryIdMinUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_USER_ID_ASC',
  BudgetsByCategoryIdMinUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_USER_ID_DESC',
  BudgetsByCategoryIdStddevPopulationAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdStddevPopulationAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdStddevPopulationAmountAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_ASC',
  BudgetsByCategoryIdStddevPopulationAmountDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_DESC',
  BudgetsByCategoryIdStddevPopulationBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_BUDGET_ID_ASC',
  BudgetsByCategoryIdStddevPopulationBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_BUDGET_ID_DESC',
  BudgetsByCategoryIdStddevPopulationCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  BudgetsByCategoryIdStddevPopulationCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  BudgetsByCategoryIdStddevPopulationCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  BudgetsByCategoryIdStddevPopulationCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  BudgetsByCategoryIdStddevPopulationMonthAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_MONTH_ASC',
  BudgetsByCategoryIdStddevPopulationMonthDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_MONTH_DESC',
  BudgetsByCategoryIdStddevPopulationUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_ASC',
  BudgetsByCategoryIdStddevPopulationUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_DESC',
  BudgetsByCategoryIdStddevSampleAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdStddevSampleAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdStddevSampleAmountAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  BudgetsByCategoryIdStddevSampleAmountDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  BudgetsByCategoryIdStddevSampleBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_BUDGET_ID_ASC',
  BudgetsByCategoryIdStddevSampleBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_BUDGET_ID_DESC',
  BudgetsByCategoryIdStddevSampleCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByCategoryIdStddevSampleCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByCategoryIdStddevSampleCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  BudgetsByCategoryIdStddevSampleCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  BudgetsByCategoryIdStddevSampleMonthAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_MONTH_ASC',
  BudgetsByCategoryIdStddevSampleMonthDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_MONTH_DESC',
  BudgetsByCategoryIdStddevSampleUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BudgetsByCategoryIdStddevSampleUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BudgetsByCategoryIdSumAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdSumAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdSumAmountAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_AMOUNT_ASC',
  BudgetsByCategoryIdSumAmountDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_AMOUNT_DESC',
  BudgetsByCategoryIdSumBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_BUDGET_ID_ASC',
  BudgetsByCategoryIdSumBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_BUDGET_ID_DESC',
  BudgetsByCategoryIdSumCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_CATEGORY_ID_ASC',
  BudgetsByCategoryIdSumCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_CATEGORY_ID_DESC',
  BudgetsByCategoryIdSumCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_CREATED_AT_ASC',
  BudgetsByCategoryIdSumCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_CREATED_AT_DESC',
  BudgetsByCategoryIdSumMonthAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_MONTH_ASC',
  BudgetsByCategoryIdSumMonthDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_MONTH_DESC',
  BudgetsByCategoryIdSumUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_USER_ID_ASC',
  BudgetsByCategoryIdSumUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_USER_ID_DESC',
  BudgetsByCategoryIdVariancePopulationAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdVariancePopulationAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdVariancePopulationAmountAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  BudgetsByCategoryIdVariancePopulationAmountDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  BudgetsByCategoryIdVariancePopulationBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_BUDGET_ID_ASC',
  BudgetsByCategoryIdVariancePopulationBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_BUDGET_ID_DESC',
  BudgetsByCategoryIdVariancePopulationCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  BudgetsByCategoryIdVariancePopulationCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  BudgetsByCategoryIdVariancePopulationCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  BudgetsByCategoryIdVariancePopulationCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  BudgetsByCategoryIdVariancePopulationMonthAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_MONTH_ASC',
  BudgetsByCategoryIdVariancePopulationMonthDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_MONTH_DESC',
  BudgetsByCategoryIdVariancePopulationUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BudgetsByCategoryIdVariancePopulationUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BudgetsByCategoryIdVarianceSampleAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdVarianceSampleAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdVarianceSampleAmountAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  BudgetsByCategoryIdVarianceSampleAmountDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  BudgetsByCategoryIdVarianceSampleBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_BUDGET_ID_ASC',
  BudgetsByCategoryIdVarianceSampleBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_BUDGET_ID_DESC',
  BudgetsByCategoryIdVarianceSampleCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByCategoryIdVarianceSampleCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByCategoryIdVarianceSampleCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  BudgetsByCategoryIdVarianceSampleCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  BudgetsByCategoryIdVarianceSampleMonthAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByCategoryIdVarianceSampleMonthDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByCategoryIdVarianceSampleUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByCategoryIdVarianceSampleUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  IconAsc = 'ICON_ASC',
  IconColorAsc = 'ICON_COLOR_ASC',
  IconColorDesc = 'ICON_COLOR_DESC',
  IconDesc = 'ICON_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TransactionsByCategoryIdAverageAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_AMOUNT_ASC',
  TransactionsByCategoryIdAverageAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_AMOUNT_DESC',
  TransactionsByCategoryIdAverageCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_ASC',
  TransactionsByCategoryIdAverageCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_DESC',
  TransactionsByCategoryIdAverageDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DATE_ASC',
  TransactionsByCategoryIdAverageDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DATE_DESC',
  TransactionsByCategoryIdAverageDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DESCRIPTION_ASC',
  TransactionsByCategoryIdAverageDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DESCRIPTION_DESC',
  TransactionsByCategoryIdAverageTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdAverageTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdAverageTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TYPE_ASC',
  TransactionsByCategoryIdAverageTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TYPE_DESC',
  TransactionsByCategoryIdAverageUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_USER_ID_ASC',
  TransactionsByCategoryIdAverageUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_USER_ID_DESC',
  TransactionsByCategoryIdCountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_COUNT_ASC',
  TransactionsByCategoryIdCountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_COUNT_DESC',
  TransactionsByCategoryIdDistinctCountAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_ASC',
  TransactionsByCategoryIdDistinctCountAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_DESC',
  TransactionsByCategoryIdDistinctCountCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  TransactionsByCategoryIdDistinctCountCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  TransactionsByCategoryIdDistinctCountDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DATE_ASC',
  TransactionsByCategoryIdDistinctCountDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DATE_DESC',
  TransactionsByCategoryIdDistinctCountDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  TransactionsByCategoryIdDistinctCountDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  TransactionsByCategoryIdDistinctCountTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdDistinctCountTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdDistinctCountTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TYPE_ASC',
  TransactionsByCategoryIdDistinctCountTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TYPE_DESC',
  TransactionsByCategoryIdDistinctCountUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_ASC',
  TransactionsByCategoryIdDistinctCountUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_DESC',
  TransactionsByCategoryIdMaxAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_AMOUNT_ASC',
  TransactionsByCategoryIdMaxAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_AMOUNT_DESC',
  TransactionsByCategoryIdMaxCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_CATEGORY_ID_ASC',
  TransactionsByCategoryIdMaxCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_CATEGORY_ID_DESC',
  TransactionsByCategoryIdMaxDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DATE_ASC',
  TransactionsByCategoryIdMaxDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DATE_DESC',
  TransactionsByCategoryIdMaxDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DESCRIPTION_ASC',
  TransactionsByCategoryIdMaxDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DESCRIPTION_DESC',
  TransactionsByCategoryIdMaxTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdMaxTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdMaxTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TYPE_ASC',
  TransactionsByCategoryIdMaxTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TYPE_DESC',
  TransactionsByCategoryIdMaxUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_USER_ID_ASC',
  TransactionsByCategoryIdMaxUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_USER_ID_DESC',
  TransactionsByCategoryIdMinAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_AMOUNT_ASC',
  TransactionsByCategoryIdMinAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_AMOUNT_DESC',
  TransactionsByCategoryIdMinCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_CATEGORY_ID_ASC',
  TransactionsByCategoryIdMinCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_CATEGORY_ID_DESC',
  TransactionsByCategoryIdMinDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DATE_ASC',
  TransactionsByCategoryIdMinDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DATE_DESC',
  TransactionsByCategoryIdMinDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DESCRIPTION_ASC',
  TransactionsByCategoryIdMinDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DESCRIPTION_DESC',
  TransactionsByCategoryIdMinTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdMinTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdMinTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TYPE_ASC',
  TransactionsByCategoryIdMinTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TYPE_DESC',
  TransactionsByCategoryIdMinUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_USER_ID_ASC',
  TransactionsByCategoryIdMinUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_USER_ID_DESC',
  TransactionsByCategoryIdStddevPopulationAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_ASC',
  TransactionsByCategoryIdStddevPopulationAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_DESC',
  TransactionsByCategoryIdStddevPopulationCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  TransactionsByCategoryIdStddevPopulationCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  TransactionsByCategoryIdStddevPopulationDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DATE_ASC',
  TransactionsByCategoryIdStddevPopulationDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DATE_DESC',
  TransactionsByCategoryIdStddevPopulationDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  TransactionsByCategoryIdStddevPopulationDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  TransactionsByCategoryIdStddevPopulationTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdStddevPopulationTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdStddevPopulationTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TYPE_ASC',
  TransactionsByCategoryIdStddevPopulationTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TYPE_DESC',
  TransactionsByCategoryIdStddevPopulationUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_ASC',
  TransactionsByCategoryIdStddevPopulationUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_DESC',
  TransactionsByCategoryIdStddevSampleAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  TransactionsByCategoryIdStddevSampleAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  TransactionsByCategoryIdStddevSampleCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByCategoryIdStddevSampleCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByCategoryIdStddevSampleDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DATE_ASC',
  TransactionsByCategoryIdStddevSampleDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DATE_DESC',
  TransactionsByCategoryIdStddevSampleDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  TransactionsByCategoryIdStddevSampleDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  TransactionsByCategoryIdStddevSampleTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdStddevSampleTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdStddevSampleTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TYPE_ASC',
  TransactionsByCategoryIdStddevSampleTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TYPE_DESC',
  TransactionsByCategoryIdStddevSampleUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TransactionsByCategoryIdStddevSampleUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TransactionsByCategoryIdSumAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_AMOUNT_ASC',
  TransactionsByCategoryIdSumAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_AMOUNT_DESC',
  TransactionsByCategoryIdSumCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_CATEGORY_ID_ASC',
  TransactionsByCategoryIdSumCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_CATEGORY_ID_DESC',
  TransactionsByCategoryIdSumDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DATE_ASC',
  TransactionsByCategoryIdSumDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DATE_DESC',
  TransactionsByCategoryIdSumDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DESCRIPTION_ASC',
  TransactionsByCategoryIdSumDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DESCRIPTION_DESC',
  TransactionsByCategoryIdSumTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdSumTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdSumTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TYPE_ASC',
  TransactionsByCategoryIdSumTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TYPE_DESC',
  TransactionsByCategoryIdSumUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_USER_ID_ASC',
  TransactionsByCategoryIdSumUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_USER_ID_DESC',
  TransactionsByCategoryIdVariancePopulationAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  TransactionsByCategoryIdVariancePopulationAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  TransactionsByCategoryIdVariancePopulationCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  TransactionsByCategoryIdVariancePopulationCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  TransactionsByCategoryIdVariancePopulationDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DATE_ASC',
  TransactionsByCategoryIdVariancePopulationDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DATE_DESC',
  TransactionsByCategoryIdVariancePopulationDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  TransactionsByCategoryIdVariancePopulationDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  TransactionsByCategoryIdVariancePopulationTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdVariancePopulationTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdVariancePopulationTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TYPE_ASC',
  TransactionsByCategoryIdVariancePopulationTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TYPE_DESC',
  TransactionsByCategoryIdVariancePopulationUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TransactionsByCategoryIdVariancePopulationUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TransactionsByCategoryIdVarianceSampleAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  TransactionsByCategoryIdVarianceSampleAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  TransactionsByCategoryIdVarianceSampleCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByCategoryIdVarianceSampleCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByCategoryIdVarianceSampleDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DATE_ASC',
  TransactionsByCategoryIdVarianceSampleDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DATE_DESC',
  TransactionsByCategoryIdVarianceSampleDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  TransactionsByCategoryIdVarianceSampleDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  TransactionsByCategoryIdVarianceSampleTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdVarianceSampleTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdVarianceSampleTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TYPE_ASC',
  TransactionsByCategoryIdVarianceSampleTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TYPE_DESC',
  TransactionsByCategoryIdVarianceSampleUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TransactionsByCategoryIdVarianceSampleUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against aggregates of `Category` object types. */
export type CategoryAggregatesFilter = {
  /** Distinct count aggregate over matching `Category` objects. */
  distinctCount?: InputMaybe<CategoryDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Category` object to be included within the aggregate. */
  filter?: InputMaybe<CategoryFilter>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `icon` field. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `iconColor` field. */
  iconColor?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Typetransaction>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDistinctCountAggregateFilter = {
  icon?: InputMaybe<BigIntFilter>;
  iconColor?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  type?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `budgetsByCategoryId` relation. */
  budgetsByCategoryId?: InputMaybe<CategoryToManyBudgetFilter>;
  /** Some related `budgetsByCategoryId` exist. */
  budgetsByCategoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `icon` field. */
  icon?: InputMaybe<StringFilter>;
  /** Filter by the object’s `iconColor` field. */
  iconColor?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `transactionsByCategoryId` relation. */
  transactionsByCategoryId?: InputMaybe<CategoryToManyTransactionFilter>;
  /** Some related `transactionsByCategoryId` exist. */
  transactionsByCategoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<TypetransactionFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Category` for usage during aggregation. */
export enum CategoryGroupBy {
  Icon = 'ICON',
  IconColor = 'ICON_COLOR',
  Name = 'NAME',
  Type = 'TYPE',
  UserId = 'USER_ID'
}

/** Conditions for `Category` aggregates. */
export type CategoryHavingInput = {
  AND?: InputMaybe<Array<CategoryHavingInput>>;
  OR?: InputMaybe<Array<CategoryHavingInput>>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  iconColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  icon?: InputMaybe<Scalars['String']['input']>;
  iconColor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Budget` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyBudgetFilter = {
  /** Aggregates across related `Budget` match the filter criteria. */
  aggregates?: InputMaybe<BudgetAggregatesFilter>;
  /** Every related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BudgetFilter>;
  /** No related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BudgetFilter>;
  /** Some related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BudgetFilter>;
};

/** A filter to be used against many `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyTransactionFilter = {
  /** Aggregates across related `Transaction` match the filter criteria. */
  aggregates?: InputMaybe<TransactionAggregatesFilter>;
  /** Every related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TransactionFilter>;
  /** No related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TransactionFilter>;
  /** Some related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TransactionFilter>;
};

/** All input for the create `Budget` mutation. */
export type CreateBudgetInput = {
  /** The `Budget` to be created by this mutation. */
  budget: BudgetInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `Notification` mutation. */
export type CreateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Notification` to be created by this mutation. */
  notification: NotificationInput;
};

/** All input for the create `OtpVerification` mutation. */
export type CreateOtpVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OtpVerification` to be created by this mutation. */
  otpVerification: OtpVerificationInput;
};

/** All input for the create `Report` mutation. */
export type CreateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Report` to be created by this mutation. */
  report: ReportInput;
};

/** All input for the create `Transaction` mutation. */
export type CreateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Transaction` to be created by this mutation. */
  transaction: TransactionInput;
};

/** All input for the create `UserDevice` mutation. */
export type CreateUserDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `UserDevice` to be created by this mutation. */
  userDevice: UserDeviceInput;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

/** All input for the `deleteBudgetByNodeId` mutation. */
export type DeleteBudgetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Budget` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteBudget` mutation. */
export type DeleteBudgetInput = {
  budgetId: Scalars['String']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteCategoryByNodeId` mutation. */
export type DeleteCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteNotificationByNodeId` mutation. */
export type DeleteNotificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Notification` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteNotification` mutation. */
export type DeleteNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteOtpVerificationByNodeId` mutation. */
export type DeleteOtpVerificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OtpVerification` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOtpVerification` mutation. */
export type DeleteOtpVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteReportByNodeId` mutation. */
export type DeleteReportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Report` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteReport` mutation. */
export type DeleteReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['String']['input'];
};

/** All input for the `deleteTransactionByNodeId` mutation. */
export type DeleteTransactionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteTransaction` mutation. */
export type DeleteTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['String']['input'];
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteUserDeviceByNodeId` mutation. */
export type DeleteUserDeviceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserDevice` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteUserDeviceByToken` mutation. */
export type DeleteUserDeviceByTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

/** All input for the `deleteUserDevice` mutation. */
export type DeleteUserDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
};

export type HavingFloatFilter = {
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
};

export type HavingIntFilter = {
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified key. */
  containsKey?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

/** A filter to be used against aggregates of `Notification` object types. */
export type NotificationAggregatesFilter = {
  /** Distinct count aggregate over matching `Notification` objects. */
  distinctCount?: InputMaybe<NotificationDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Notification` object to be included within the aggregate. */
  filter?: InputMaybe<NotificationFilter>;
};

/**
 * A condition to be used against `Notification` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type NotificationCondition = {
  /** Checks for equality with the object’s `data` field. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isRead` field. */
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `t` field. */
  t?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationDistinctCountAggregateFilter = {
  data?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  isRead?: InputMaybe<BigIntFilter>;
  t?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Notification` object types. All fields are combined with a logical ‘and.’ */
export type NotificationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NotificationFilter>>;
  /** Filter by the object’s `data` field. */
  data?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isRead` field. */
  isRead?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NotificationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NotificationFilter>>;
  /** Filter by the object’s `t` field. */
  t?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Notification` for usage during aggregation. */
export enum NotificationGroupBy {
  Data = 'DATA',
  IsRead = 'IS_READ',
  T = 'T',
  TTruncatedToDay = 'T_TRUNCATED_TO_DAY',
  TTruncatedToHour = 'T_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type NotificationHavingAverageInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingDistinctCountInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Notification` aggregates. */
export type NotificationHavingInput = {
  AND?: InputMaybe<Array<NotificationHavingInput>>;
  OR?: InputMaybe<Array<NotificationHavingInput>>;
  average?: InputMaybe<NotificationHavingAverageInput>;
  distinctCount?: InputMaybe<NotificationHavingDistinctCountInput>;
  max?: InputMaybe<NotificationHavingMaxInput>;
  min?: InputMaybe<NotificationHavingMinInput>;
  stddevPopulation?: InputMaybe<NotificationHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<NotificationHavingStddevSampleInput>;
  sum?: InputMaybe<NotificationHavingSumInput>;
  variancePopulation?: InputMaybe<NotificationHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<NotificationHavingVarianceSampleInput>;
};

export type NotificationHavingMaxInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingMinInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingStddevPopulationInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingStddevSampleInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingSumInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingVariancePopulationInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingVarianceSampleInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Notification` */
export type NotificationInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  t?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['String']['input'];
};

/** Represents an update to a `Notification`. Fields that are set will be updated. */
export type NotificationPatch = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  t?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Notification`. */
export enum NotificationsOrderBy {
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsReadAsc = 'IS_READ_ASC',
  IsReadDesc = 'IS_READ_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TAsc = 'T_ASC',
  TDesc = 'T_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against aggregates of `OtpVerification` object types. */
export type OtpVerificationAggregatesFilter = {
  /** Distinct count aggregate over matching `OtpVerification` objects. */
  distinctCount?: InputMaybe<OtpVerificationDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `OtpVerification` object to be included within the aggregate. */
  filter?: InputMaybe<OtpVerificationFilter>;
};

/**
 * A condition to be used against `OtpVerification` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OtpVerificationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `expiresAt` field. */
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `otp` field. */
  otp?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OtpVerificationDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  email?: InputMaybe<BigIntFilter>;
  expiresAt?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  otp?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `OtpVerification` object types. All fields are combined with a logical ‘and.’ */
export type OtpVerificationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OtpVerificationFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `expiresAt` field. */
  expiresAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OtpVerificationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OtpVerificationFilter>>;
  /** Filter by the object’s `otp` field. */
  otp?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `OtpVerification` for usage during aggregation. */
export enum OtpVerificationGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  ExpiresAt = 'EXPIRES_AT',
  ExpiresAtTruncatedToDay = 'EXPIRES_AT_TRUNCATED_TO_DAY',
  ExpiresAtTruncatedToHour = 'EXPIRES_AT_TRUNCATED_TO_HOUR',
  Otp = 'OTP',
  UserId = 'USER_ID'
}

export type OtpVerificationHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `OtpVerification` aggregates. */
export type OtpVerificationHavingInput = {
  AND?: InputMaybe<Array<OtpVerificationHavingInput>>;
  OR?: InputMaybe<Array<OtpVerificationHavingInput>>;
  average?: InputMaybe<OtpVerificationHavingAverageInput>;
  distinctCount?: InputMaybe<OtpVerificationHavingDistinctCountInput>;
  max?: InputMaybe<OtpVerificationHavingMaxInput>;
  min?: InputMaybe<OtpVerificationHavingMinInput>;
  stddevPopulation?: InputMaybe<OtpVerificationHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<OtpVerificationHavingStddevSampleInput>;
  sum?: InputMaybe<OtpVerificationHavingSumInput>;
  variancePopulation?: InputMaybe<OtpVerificationHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<OtpVerificationHavingVarianceSampleInput>;
};

export type OtpVerificationHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `OtpVerification` */
export type OtpVerificationInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['Datetime']['input'];
  id: Scalars['String']['input'];
  otp: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** Represents an update to a `OtpVerification`. Fields that are set will be updated. */
export type OtpVerificationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `OtpVerification`. */
export enum OtpVerificationsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  ExpiresAtAsc = 'EXPIRES_AT_ASC',
  ExpiresAtDesc = 'EXPIRES_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OtpAsc = 'OTP_ASC',
  OtpDesc = 'OTP_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against aggregates of `Report` object types. */
export type ReportAggregatesFilter = {
  /** Distinct count aggregate over matching `Report` objects. */
  distinctCount?: InputMaybe<ReportDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Report` object to be included within the aggregate. */
  filter?: InputMaybe<ReportFilter>;
};

/** A condition to be used against `Report` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ReportCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `filePath` field. */
  filePath?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reportId` field. */
  reportId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ReportDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  filePath?: InputMaybe<BigIntFilter>;
  reportId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Report` object types. All fields are combined with a logical ‘and.’ */
export type ReportFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ReportFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<StringFilter>;
  /** Filter by the object’s `filePath` field. */
  filePath?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ReportFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ReportFilter>>;
  /** Filter by the object’s `reportId` field. */
  reportId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Report` for usage during aggregation. */
export enum ReportGroupBy {
  CreatedAt = 'CREATED_AT',
  FilePath = 'FILE_PATH',
  UserId = 'USER_ID'
}

/** Conditions for `Report` aggregates. */
export type ReportHavingInput = {
  AND?: InputMaybe<Array<ReportHavingInput>>;
  OR?: InputMaybe<Array<ReportHavingInput>>;
};

/** An input for mutations affecting `Report` */
export type ReportInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Report`. Fields that are set will be updated. */
export type ReportPatch = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  reportId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Report`. */
export enum ReportsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FilePathAsc = 'FILE_PATH_ASC',
  FilePathDesc = 'FILE_PATH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReportIdAsc = 'REPORT_ID_ASC',
  ReportIdDesc = 'REPORT_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against aggregates of `Transaction` object types. */
export type TransactionAggregatesFilter = {
  /** Mean average aggregate over matching `Transaction` objects. */
  average?: InputMaybe<TransactionAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Transaction` objects. */
  distinctCount?: InputMaybe<TransactionDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Transaction` object to be included within the aggregate. */
  filter?: InputMaybe<TransactionFilter>;
  /** Maximum aggregate over matching `Transaction` objects. */
  max?: InputMaybe<TransactionMaxAggregateFilter>;
  /** Minimum aggregate over matching `Transaction` objects. */
  min?: InputMaybe<TransactionMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Transaction` objects. */
  stddevPopulation?: InputMaybe<TransactionStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Transaction` objects. */
  stddevSample?: InputMaybe<TransactionStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Transaction` objects. */
  sum?: InputMaybe<TransactionSumAggregateFilter>;
  /** Population variance aggregate over matching `Transaction` objects. */
  variancePopulation?: InputMaybe<TransactionVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Transaction` objects. */
  varianceSample?: InputMaybe<TransactionVarianceSampleAggregateFilter>;
};

export type TransactionAverageAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

/**
 * A condition to be used against `Transaction` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TransactionCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Typetransaction>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionDistinctCountAggregateFilter = {
  amount?: InputMaybe<BigIntFilter>;
  categoryId?: InputMaybe<BigIntFilter>;
  date?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  transactionId?: InputMaybe<BigIntFilter>;
  type?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type TransactionFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TransactionFilter>>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** A related `category` exists. */
  categoryExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TransactionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TransactionFilter>>;
  /** Filter by the object’s `transactionId` field. */
  transactionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<TypetransactionFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Transaction` for usage during aggregation. */
export enum TransactionGroupBy {
  Amount = 'AMOUNT',
  CategoryId = 'CATEGORY_ID',
  Date = 'DATE',
  DateTruncatedToDay = 'DATE_TRUNCATED_TO_DAY',
  DateTruncatedToHour = 'DATE_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  Type = 'TYPE',
  UserId = 'USER_ID'
}

export type TransactionHavingAverageInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingDistinctCountInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Transaction` aggregates. */
export type TransactionHavingInput = {
  AND?: InputMaybe<Array<TransactionHavingInput>>;
  OR?: InputMaybe<Array<TransactionHavingInput>>;
  average?: InputMaybe<TransactionHavingAverageInput>;
  distinctCount?: InputMaybe<TransactionHavingDistinctCountInput>;
  max?: InputMaybe<TransactionHavingMaxInput>;
  min?: InputMaybe<TransactionHavingMinInput>;
  stddevPopulation?: InputMaybe<TransactionHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TransactionHavingStddevSampleInput>;
  sum?: InputMaybe<TransactionHavingSumInput>;
  variancePopulation?: InputMaybe<TransactionHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TransactionHavingVarianceSampleInput>;
};

export type TransactionHavingMaxInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingMinInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingStddevPopulationInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingStddevSampleInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingSumInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingVariancePopulationInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingVarianceSampleInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Transaction` */
export type TransactionInput = {
  amount: Scalars['Float']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['String']['input'];
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionMaxAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionMinAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

/** Represents an update to a `Transaction`. Fields that are set will be updated. */
export type TransactionPatch = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionStddevPopulationAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionStddevSampleAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionSumAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionVariancePopulationAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionVarianceSampleAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

/** Methods to use when ordering `Transaction`. */
export enum TransactionsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export enum Typetransaction {
  Expense = 'EXPENSE',
  Income = 'INCOME'
}

/** A filter to be used against Typetransaction fields. All fields are combined with a logical ‘and.’ */
export type TypetransactionFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Typetransaction>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Typetransaction>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Typetransaction>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Typetransaction>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Typetransaction>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Typetransaction>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Typetransaction>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Typetransaction>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Typetransaction>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Typetransaction>>;
};

/** All input for the `updateBudgetByNodeId` mutation. */
export type UpdateBudgetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Budget` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Budget` being updated. */
  patch: BudgetPatch;
};

/** All input for the `updateBudget` mutation. */
export type UpdateBudgetInput = {
  budgetId: Scalars['String']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Budget` being updated. */
  patch: BudgetPatch;
};

/** All input for the `updateCategoryByNodeId` mutation. */
export type UpdateCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateNotificationByNodeId` mutation. */
export type UpdateNotificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Notification` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Notification` being updated. */
  patch: NotificationPatch;
};

/** All input for the `updateNotification` mutation. */
export type UpdateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Notification` being updated. */
  patch: NotificationPatch;
};

/** All input for the `updateOtpVerificationByNodeId` mutation. */
export type UpdateOtpVerificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OtpVerification` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OtpVerification` being updated. */
  patch: OtpVerificationPatch;
};

/** All input for the `updateOtpVerification` mutation. */
export type UpdateOtpVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `OtpVerification` being updated. */
  patch: OtpVerificationPatch;
};

/** All input for the `updateReportByNodeId` mutation. */
export type UpdateReportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Report` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Report` being updated. */
  patch: ReportPatch;
};

/** All input for the `updateReport` mutation. */
export type UpdateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Report` being updated. */
  patch: ReportPatch;
  reportId: Scalars['String']['input'];
};

/** All input for the `updateTransactionByNodeId` mutation. */
export type UpdateTransactionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  patch: TransactionPatch;
};

/** All input for the `updateTransaction` mutation. */
export type UpdateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  patch: TransactionPatch;
  transactionId: Scalars['String']['input'];
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserDeviceByNodeId` mutation. */
export type UpdateUserDeviceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserDevice` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `UserDevice` being updated. */
  patch: UserDevicePatch;
};

/** All input for the `updateUserDeviceByToken` mutation. */
export type UpdateUserDeviceByTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `UserDevice` being updated. */
  patch: UserDevicePatch;
  token: Scalars['String']['input'];
};

/** All input for the `updateUserDevice` mutation. */
export type UpdateUserDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `UserDevice` being updated. */
  patch: UserDevicePatch;
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the upsert `Budget` mutation. */
export type UpsertBudgetInput = {
  /** The `Budget` to be upserted by this mutation. */
  budget: BudgetInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Where conditions for the upsert `Budget` mutation. */
export type UpsertBudgetWhere = {
  budgetId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Category` mutation. */
export type UpsertCategoryInput = {
  /** The `Category` to be upserted by this mutation. */
  category: CategoryInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Where conditions for the upsert `Category` mutation. */
export type UpsertCategoryWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Notification` mutation. */
export type UpsertNotificationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Notification` to be upserted by this mutation. */
  notification: NotificationInput;
};

/** Where conditions for the upsert `Notification` mutation. */
export type UpsertNotificationWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `OtpVerification` mutation. */
export type UpsertOtpVerificationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OtpVerification` to be upserted by this mutation. */
  otpVerification: OtpVerificationInput;
};

/** Where conditions for the upsert `OtpVerification` mutation. */
export type UpsertOtpVerificationWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Report` mutation. */
export type UpsertReportInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Report` to be upserted by this mutation. */
  report: ReportInput;
};

/** Where conditions for the upsert `Report` mutation. */
export type UpsertReportWhere = {
  reportId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Transaction` mutation. */
export type UpsertTransactionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Transaction` to be upserted by this mutation. */
  transaction: TransactionInput;
};

/** Where conditions for the upsert `Transaction` mutation. */
export type UpsertTransactionWhere = {
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `UserDevice` mutation. */
export type UpsertUserDeviceInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `UserDevice` to be upserted by this mutation. */
  userDevice: UserDeviceInput;
};

/** Where conditions for the upsert `UserDevice` mutation. */
export type UpsertUserDeviceWhere = {
  token?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `User` mutation. */
export type UpsertUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be upserted by this mutation. */
  user: UserInput;
};

/** Where conditions for the upsert `User` mutation. */
export type UpsertUserWhere = {
  oidcId?: InputMaybe<Scalars['String']['input']>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `gender` field. */
  gender?: InputMaybe<UserGender>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `oidcId` field. */
  oidcId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `picture` field. */
  picture?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tel` field. */
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against aggregates of `UserDevice` object types. */
export type UserDeviceAggregatesFilter = {
  /** Distinct count aggregate over matching `UserDevice` objects. */
  distinctCount?: InputMaybe<UserDeviceDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `UserDevice` object to be included within the aggregate. */
  filter?: InputMaybe<UserDeviceFilter>;
};

/**
 * A condition to be used against `UserDevice` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserDeviceCondition = {
  /** Checks for equality with the object’s `token` field. */
  token?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `ua` field. */
  ua?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserDeviceDistinctCountAggregateFilter = {
  token?: InputMaybe<BigIntFilter>;
  ua?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `UserDevice` object types. All fields are combined with a logical ‘and.’ */
export type UserDeviceFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserDeviceFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<UserDeviceFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserDeviceFilter>>;
  /** Filter by the object’s `token` field. */
  token?: InputMaybe<StringFilter>;
  /** Filter by the object’s `ua` field. */
  ua?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `UserDevice` for usage during aggregation. */
export enum UserDeviceGroupBy {
  Ua = 'UA',
  UserId = 'USER_ID'
}

/** Conditions for `UserDevice` aggregates. */
export type UserDeviceHavingInput = {
  AND?: InputMaybe<Array<UserDeviceHavingInput>>;
  OR?: InputMaybe<Array<UserDeviceHavingInput>>;
};

/** An input for mutations affecting `UserDevice` */
export type UserDeviceInput = {
  token: Scalars['String']['input'];
  ua?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

/** Represents an update to a `UserDevice`. Fields that are set will be updated. */
export type UserDevicePatch = {
  token?: InputMaybe<Scalars['String']['input']>;
  ua?: InputMaybe<Scalars['JSON']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `UserDevice`. */
export enum UserDevicesOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TokenAsc = 'TOKEN_ASC',
  TokenDesc = 'TOKEN_DESC',
  UaAsc = 'UA_ASC',
  UaDesc = 'UA_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `budgetsByUserId` relation. */
  budgetsByUserId?: InputMaybe<UserToManyBudgetFilter>;
  /** Some related `budgetsByUserId` exist. */
  budgetsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoriesByUserId` relation. */
  categoriesByUserId?: InputMaybe<UserToManyCategoryFilter>;
  /** Some related `categoriesByUserId` exist. */
  categoriesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `firstName` field. */
  firstName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `gender` field. */
  gender?: InputMaybe<UserGenderFilter>;
  /** Filter by the object’s `lastName` field. */
  lastName?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Filter by the object’s `notificationsByUserId` relation. */
  notificationsByUserId?: InputMaybe<UserToManyNotificationFilter>;
  /** Some related `notificationsByUserId` exist. */
  notificationsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `oidcId` field. */
  oidcId?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `otpVerificationsByUserId` relation. */
  otpVerificationsByUserId?: InputMaybe<UserToManyOtpVerificationFilter>;
  /** Some related `otpVerificationsByUserId` exist. */
  otpVerificationsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `password` field. */
  password?: InputMaybe<StringFilter>;
  /** Filter by the object’s `picture` field. */
  picture?: InputMaybe<StringFilter>;
  /** Filter by the object’s `reportsByUserId` relation. */
  reportsByUserId?: InputMaybe<UserToManyReportFilter>;
  /** Some related `reportsByUserId` exist. */
  reportsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `tel` field. */
  tel?: InputMaybe<StringFilter>;
  /** Filter by the object’s `transactionsByUserId` relation. */
  transactionsByUserId?: InputMaybe<UserToManyTransactionFilter>;
  /** Some related `transactionsByUserId` exist. */
  transactionsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userDevicesByUserId` relation. */
  userDevicesByUserId?: InputMaybe<UserToManyUserDeviceFilter>;
  /** Some related `userDevicesByUserId` exist. */
  userDevicesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserGender {
  Female = 'FEMALE',
  Male = 'MALE'
}

/** A filter to be used against UserGender fields. All fields are combined with a logical ‘and.’ */
export type UserGenderFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<UserGender>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<UserGender>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<UserGender>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<UserGender>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<UserGender>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<UserGender>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<UserGender>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<UserGender>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<UserGender>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<UserGender>>;
};

/** Grouping methods for `User` for usage during aggregation. */
export enum UserGroupBy {
  Date = 'DATE',
  DateTruncatedToDay = 'DATE_TRUNCATED_TO_DAY',
  DateTruncatedToHour = 'DATE_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Gender = 'GENDER',
  LastName = 'LAST_NAME',
  Password = 'PASSWORD',
  Picture = 'PICTURE',
  Tel = 'TEL'
}

export type UserHavingAverageInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingDistinctCountInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `User` aggregates. */
export type UserHavingInput = {
  AND?: InputMaybe<Array<UserHavingInput>>;
  OR?: InputMaybe<Array<UserHavingInput>>;
  average?: InputMaybe<UserHavingAverageInput>;
  distinctCount?: InputMaybe<UserHavingDistinctCountInput>;
  max?: InputMaybe<UserHavingMaxInput>;
  min?: InputMaybe<UserHavingMinInput>;
  stddevPopulation?: InputMaybe<UserHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<UserHavingStddevSampleInput>;
  sum?: InputMaybe<UserHavingSumInput>;
  variancePopulation?: InputMaybe<UserHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<UserHavingVarianceSampleInput>;
};

export type UserHavingMaxInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingMinInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevPopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingSumInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVariancePopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVarianceSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  date?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  date?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Budget` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyBudgetFilter = {
  /** Aggregates across related `Budget` match the filter criteria. */
  aggregates?: InputMaybe<BudgetAggregatesFilter>;
  /** Every related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BudgetFilter>;
  /** No related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BudgetFilter>;
  /** Some related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BudgetFilter>;
};

/** A filter to be used against many `Category` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyCategoryFilter = {
  /** Aggregates across related `Category` match the filter criteria. */
  aggregates?: InputMaybe<CategoryAggregatesFilter>;
  /** Every related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CategoryFilter>;
  /** No related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CategoryFilter>;
  /** Some related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CategoryFilter>;
};

/** A filter to be used against many `Notification` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyNotificationFilter = {
  /** Aggregates across related `Notification` match the filter criteria. */
  aggregates?: InputMaybe<NotificationAggregatesFilter>;
  /** Every related `Notification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NotificationFilter>;
  /** No related `Notification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NotificationFilter>;
  /** Some related `Notification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NotificationFilter>;
};

/** A filter to be used against many `OtpVerification` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyOtpVerificationFilter = {
  /** Aggregates across related `OtpVerification` match the filter criteria. */
  aggregates?: InputMaybe<OtpVerificationAggregatesFilter>;
  /** Every related `OtpVerification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OtpVerificationFilter>;
  /** No related `OtpVerification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OtpVerificationFilter>;
  /** Some related `OtpVerification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OtpVerificationFilter>;
};

/** A filter to be used against many `Report` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyReportFilter = {
  /** Aggregates across related `Report` match the filter criteria. */
  aggregates?: InputMaybe<ReportAggregatesFilter>;
  /** Every related `Report` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ReportFilter>;
  /** No related `Report` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ReportFilter>;
  /** Some related `Report` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ReportFilter>;
};

/** A filter to be used against many `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyTransactionFilter = {
  /** Aggregates across related `Transaction` match the filter criteria. */
  aggregates?: InputMaybe<TransactionAggregatesFilter>;
  /** Every related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TransactionFilter>;
  /** No related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TransactionFilter>;
  /** Some related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TransactionFilter>;
};

/** A filter to be used against many `UserDevice` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyUserDeviceFilter = {
  /** Aggregates across related `UserDevice` match the filter criteria. */
  aggregates?: InputMaybe<UserDeviceAggregatesFilter>;
  /** Every related `UserDevice` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<UserDeviceFilter>;
  /** No related `UserDevice` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<UserDeviceFilter>;
  /** Some related `UserDevice` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<UserDeviceFilter>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  BudgetsByUserIdAverageAlertThresholdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdAverageAlertThresholdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdAverageAmountAsc = 'BUDGETS_BY_USER_ID_AVERAGE_AMOUNT_ASC',
  BudgetsByUserIdAverageAmountDesc = 'BUDGETS_BY_USER_ID_AVERAGE_AMOUNT_DESC',
  BudgetsByUserIdAverageBudgetIdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_BUDGET_ID_ASC',
  BudgetsByUserIdAverageBudgetIdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_BUDGET_ID_DESC',
  BudgetsByUserIdAverageCategoryIdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_CATEGORY_ID_ASC',
  BudgetsByUserIdAverageCategoryIdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_CATEGORY_ID_DESC',
  BudgetsByUserIdAverageCreatedAtAsc = 'BUDGETS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  BudgetsByUserIdAverageCreatedAtDesc = 'BUDGETS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  BudgetsByUserIdAverageMonthAsc = 'BUDGETS_BY_USER_ID_AVERAGE_MONTH_ASC',
  BudgetsByUserIdAverageMonthDesc = 'BUDGETS_BY_USER_ID_AVERAGE_MONTH_DESC',
  BudgetsByUserIdAverageUserIdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  BudgetsByUserIdAverageUserIdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  BudgetsByUserIdCountAsc = 'BUDGETS_BY_USER_ID_COUNT_ASC',
  BudgetsByUserIdCountDesc = 'BUDGETS_BY_USER_ID_COUNT_DESC',
  BudgetsByUserIdDistinctCountAlertThresholdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdDistinctCountAlertThresholdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdDistinctCountAmountAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_ASC',
  BudgetsByUserIdDistinctCountAmountDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_DESC',
  BudgetsByUserIdDistinctCountBudgetIdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_BUDGET_ID_ASC',
  BudgetsByUserIdDistinctCountBudgetIdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_BUDGET_ID_DESC',
  BudgetsByUserIdDistinctCountCategoryIdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  BudgetsByUserIdDistinctCountCategoryIdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  BudgetsByUserIdDistinctCountCreatedAtAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  BudgetsByUserIdDistinctCountCreatedAtDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  BudgetsByUserIdDistinctCountMonthAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_MONTH_ASC',
  BudgetsByUserIdDistinctCountMonthDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_MONTH_DESC',
  BudgetsByUserIdDistinctCountUserIdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  BudgetsByUserIdDistinctCountUserIdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  BudgetsByUserIdMaxAlertThresholdAsc = 'BUDGETS_BY_USER_ID_MAX_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdMaxAlertThresholdDesc = 'BUDGETS_BY_USER_ID_MAX_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdMaxAmountAsc = 'BUDGETS_BY_USER_ID_MAX_AMOUNT_ASC',
  BudgetsByUserIdMaxAmountDesc = 'BUDGETS_BY_USER_ID_MAX_AMOUNT_DESC',
  BudgetsByUserIdMaxBudgetIdAsc = 'BUDGETS_BY_USER_ID_MAX_BUDGET_ID_ASC',
  BudgetsByUserIdMaxBudgetIdDesc = 'BUDGETS_BY_USER_ID_MAX_BUDGET_ID_DESC',
  BudgetsByUserIdMaxCategoryIdAsc = 'BUDGETS_BY_USER_ID_MAX_CATEGORY_ID_ASC',
  BudgetsByUserIdMaxCategoryIdDesc = 'BUDGETS_BY_USER_ID_MAX_CATEGORY_ID_DESC',
  BudgetsByUserIdMaxCreatedAtAsc = 'BUDGETS_BY_USER_ID_MAX_CREATED_AT_ASC',
  BudgetsByUserIdMaxCreatedAtDesc = 'BUDGETS_BY_USER_ID_MAX_CREATED_AT_DESC',
  BudgetsByUserIdMaxMonthAsc = 'BUDGETS_BY_USER_ID_MAX_MONTH_ASC',
  BudgetsByUserIdMaxMonthDesc = 'BUDGETS_BY_USER_ID_MAX_MONTH_DESC',
  BudgetsByUserIdMaxUserIdAsc = 'BUDGETS_BY_USER_ID_MAX_USER_ID_ASC',
  BudgetsByUserIdMaxUserIdDesc = 'BUDGETS_BY_USER_ID_MAX_USER_ID_DESC',
  BudgetsByUserIdMinAlertThresholdAsc = 'BUDGETS_BY_USER_ID_MIN_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdMinAlertThresholdDesc = 'BUDGETS_BY_USER_ID_MIN_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdMinAmountAsc = 'BUDGETS_BY_USER_ID_MIN_AMOUNT_ASC',
  BudgetsByUserIdMinAmountDesc = 'BUDGETS_BY_USER_ID_MIN_AMOUNT_DESC',
  BudgetsByUserIdMinBudgetIdAsc = 'BUDGETS_BY_USER_ID_MIN_BUDGET_ID_ASC',
  BudgetsByUserIdMinBudgetIdDesc = 'BUDGETS_BY_USER_ID_MIN_BUDGET_ID_DESC',
  BudgetsByUserIdMinCategoryIdAsc = 'BUDGETS_BY_USER_ID_MIN_CATEGORY_ID_ASC',
  BudgetsByUserIdMinCategoryIdDesc = 'BUDGETS_BY_USER_ID_MIN_CATEGORY_ID_DESC',
  BudgetsByUserIdMinCreatedAtAsc = 'BUDGETS_BY_USER_ID_MIN_CREATED_AT_ASC',
  BudgetsByUserIdMinCreatedAtDesc = 'BUDGETS_BY_USER_ID_MIN_CREATED_AT_DESC',
  BudgetsByUserIdMinMonthAsc = 'BUDGETS_BY_USER_ID_MIN_MONTH_ASC',
  BudgetsByUserIdMinMonthDesc = 'BUDGETS_BY_USER_ID_MIN_MONTH_DESC',
  BudgetsByUserIdMinUserIdAsc = 'BUDGETS_BY_USER_ID_MIN_USER_ID_ASC',
  BudgetsByUserIdMinUserIdDesc = 'BUDGETS_BY_USER_ID_MIN_USER_ID_DESC',
  BudgetsByUserIdStddevPopulationAlertThresholdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdStddevPopulationAlertThresholdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdStddevPopulationAmountAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_ASC',
  BudgetsByUserIdStddevPopulationAmountDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_DESC',
  BudgetsByUserIdStddevPopulationBudgetIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_BUDGET_ID_ASC',
  BudgetsByUserIdStddevPopulationBudgetIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_BUDGET_ID_DESC',
  BudgetsByUserIdStddevPopulationCategoryIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  BudgetsByUserIdStddevPopulationCategoryIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  BudgetsByUserIdStddevPopulationCreatedAtAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  BudgetsByUserIdStddevPopulationCreatedAtDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  BudgetsByUserIdStddevPopulationMonthAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_MONTH_ASC',
  BudgetsByUserIdStddevPopulationMonthDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_MONTH_DESC',
  BudgetsByUserIdStddevPopulationUserIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  BudgetsByUserIdStddevPopulationUserIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  BudgetsByUserIdStddevSampleAlertThresholdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdStddevSampleAlertThresholdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdStddevSampleAmountAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  BudgetsByUserIdStddevSampleAmountDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  BudgetsByUserIdStddevSampleBudgetIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_BUDGET_ID_ASC',
  BudgetsByUserIdStddevSampleBudgetIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_BUDGET_ID_DESC',
  BudgetsByUserIdStddevSampleCategoryIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByUserIdStddevSampleCategoryIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByUserIdStddevSampleCreatedAtAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  BudgetsByUserIdStddevSampleCreatedAtDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  BudgetsByUserIdStddevSampleMonthAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_MONTH_ASC',
  BudgetsByUserIdStddevSampleMonthDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_MONTH_DESC',
  BudgetsByUserIdStddevSampleUserIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BudgetsByUserIdStddevSampleUserIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BudgetsByUserIdSumAlertThresholdAsc = 'BUDGETS_BY_USER_ID_SUM_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdSumAlertThresholdDesc = 'BUDGETS_BY_USER_ID_SUM_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdSumAmountAsc = 'BUDGETS_BY_USER_ID_SUM_AMOUNT_ASC',
  BudgetsByUserIdSumAmountDesc = 'BUDGETS_BY_USER_ID_SUM_AMOUNT_DESC',
  BudgetsByUserIdSumBudgetIdAsc = 'BUDGETS_BY_USER_ID_SUM_BUDGET_ID_ASC',
  BudgetsByUserIdSumBudgetIdDesc = 'BUDGETS_BY_USER_ID_SUM_BUDGET_ID_DESC',
  BudgetsByUserIdSumCategoryIdAsc = 'BUDGETS_BY_USER_ID_SUM_CATEGORY_ID_ASC',
  BudgetsByUserIdSumCategoryIdDesc = 'BUDGETS_BY_USER_ID_SUM_CATEGORY_ID_DESC',
  BudgetsByUserIdSumCreatedAtAsc = 'BUDGETS_BY_USER_ID_SUM_CREATED_AT_ASC',
  BudgetsByUserIdSumCreatedAtDesc = 'BUDGETS_BY_USER_ID_SUM_CREATED_AT_DESC',
  BudgetsByUserIdSumMonthAsc = 'BUDGETS_BY_USER_ID_SUM_MONTH_ASC',
  BudgetsByUserIdSumMonthDesc = 'BUDGETS_BY_USER_ID_SUM_MONTH_DESC',
  BudgetsByUserIdSumUserIdAsc = 'BUDGETS_BY_USER_ID_SUM_USER_ID_ASC',
  BudgetsByUserIdSumUserIdDesc = 'BUDGETS_BY_USER_ID_SUM_USER_ID_DESC',
  BudgetsByUserIdVariancePopulationAlertThresholdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdVariancePopulationAlertThresholdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdVariancePopulationAmountAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  BudgetsByUserIdVariancePopulationAmountDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  BudgetsByUserIdVariancePopulationBudgetIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_BUDGET_ID_ASC',
  BudgetsByUserIdVariancePopulationBudgetIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_BUDGET_ID_DESC',
  BudgetsByUserIdVariancePopulationCategoryIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  BudgetsByUserIdVariancePopulationCategoryIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  BudgetsByUserIdVariancePopulationCreatedAtAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  BudgetsByUserIdVariancePopulationCreatedAtDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  BudgetsByUserIdVariancePopulationMonthAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_MONTH_ASC',
  BudgetsByUserIdVariancePopulationMonthDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_MONTH_DESC',
  BudgetsByUserIdVariancePopulationUserIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BudgetsByUserIdVariancePopulationUserIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BudgetsByUserIdVarianceSampleAlertThresholdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdVarianceSampleAlertThresholdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdVarianceSampleAmountAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  BudgetsByUserIdVarianceSampleAmountDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  BudgetsByUserIdVarianceSampleBudgetIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_BUDGET_ID_ASC',
  BudgetsByUserIdVarianceSampleBudgetIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_BUDGET_ID_DESC',
  BudgetsByUserIdVarianceSampleCategoryIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByUserIdVarianceSampleCategoryIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByUserIdVarianceSampleCreatedAtAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  BudgetsByUserIdVarianceSampleCreatedAtDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  BudgetsByUserIdVarianceSampleMonthAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByUserIdVarianceSampleMonthDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByUserIdVarianceSampleUserIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByUserIdVarianceSampleUserIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  CategoriesByUserIdAverageIconAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_ASC',
  CategoriesByUserIdAverageIconColorAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_COLOR_ASC',
  CategoriesByUserIdAverageIconColorDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_COLOR_DESC',
  CategoriesByUserIdAverageIconDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_DESC',
  CategoriesByUserIdAverageIdAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_ID_ASC',
  CategoriesByUserIdAverageIdDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_ID_DESC',
  CategoriesByUserIdAverageNameAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_NAME_ASC',
  CategoriesByUserIdAverageNameDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_NAME_DESC',
  CategoriesByUserIdAverageTypeAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_TYPE_ASC',
  CategoriesByUserIdAverageTypeDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_TYPE_DESC',
  CategoriesByUserIdAverageUserIdAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  CategoriesByUserIdAverageUserIdDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  CategoriesByUserIdCountAsc = 'CATEGORIES_BY_USER_ID_COUNT_ASC',
  CategoriesByUserIdCountDesc = 'CATEGORIES_BY_USER_ID_COUNT_DESC',
  CategoriesByUserIdDistinctCountIconAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_ASC',
  CategoriesByUserIdDistinctCountIconColorAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_COLOR_ASC',
  CategoriesByUserIdDistinctCountIconColorDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_COLOR_DESC',
  CategoriesByUserIdDistinctCountIconDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_DESC',
  CategoriesByUserIdDistinctCountIdAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  CategoriesByUserIdDistinctCountIdDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  CategoriesByUserIdDistinctCountNameAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_NAME_ASC',
  CategoriesByUserIdDistinctCountNameDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_NAME_DESC',
  CategoriesByUserIdDistinctCountTypeAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_TYPE_ASC',
  CategoriesByUserIdDistinctCountTypeDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_TYPE_DESC',
  CategoriesByUserIdDistinctCountUserIdAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  CategoriesByUserIdDistinctCountUserIdDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  CategoriesByUserIdMaxIconAsc = 'CATEGORIES_BY_USER_ID_MAX_ICON_ASC',
  CategoriesByUserIdMaxIconColorAsc = 'CATEGORIES_BY_USER_ID_MAX_ICON_COLOR_ASC',
  CategoriesByUserIdMaxIconColorDesc = 'CATEGORIES_BY_USER_ID_MAX_ICON_COLOR_DESC',
  CategoriesByUserIdMaxIconDesc = 'CATEGORIES_BY_USER_ID_MAX_ICON_DESC',
  CategoriesByUserIdMaxIdAsc = 'CATEGORIES_BY_USER_ID_MAX_ID_ASC',
  CategoriesByUserIdMaxIdDesc = 'CATEGORIES_BY_USER_ID_MAX_ID_DESC',
  CategoriesByUserIdMaxNameAsc = 'CATEGORIES_BY_USER_ID_MAX_NAME_ASC',
  CategoriesByUserIdMaxNameDesc = 'CATEGORIES_BY_USER_ID_MAX_NAME_DESC',
  CategoriesByUserIdMaxTypeAsc = 'CATEGORIES_BY_USER_ID_MAX_TYPE_ASC',
  CategoriesByUserIdMaxTypeDesc = 'CATEGORIES_BY_USER_ID_MAX_TYPE_DESC',
  CategoriesByUserIdMaxUserIdAsc = 'CATEGORIES_BY_USER_ID_MAX_USER_ID_ASC',
  CategoriesByUserIdMaxUserIdDesc = 'CATEGORIES_BY_USER_ID_MAX_USER_ID_DESC',
  CategoriesByUserIdMinIconAsc = 'CATEGORIES_BY_USER_ID_MIN_ICON_ASC',
  CategoriesByUserIdMinIconColorAsc = 'CATEGORIES_BY_USER_ID_MIN_ICON_COLOR_ASC',
  CategoriesByUserIdMinIconColorDesc = 'CATEGORIES_BY_USER_ID_MIN_ICON_COLOR_DESC',
  CategoriesByUserIdMinIconDesc = 'CATEGORIES_BY_USER_ID_MIN_ICON_DESC',
  CategoriesByUserIdMinIdAsc = 'CATEGORIES_BY_USER_ID_MIN_ID_ASC',
  CategoriesByUserIdMinIdDesc = 'CATEGORIES_BY_USER_ID_MIN_ID_DESC',
  CategoriesByUserIdMinNameAsc = 'CATEGORIES_BY_USER_ID_MIN_NAME_ASC',
  CategoriesByUserIdMinNameDesc = 'CATEGORIES_BY_USER_ID_MIN_NAME_DESC',
  CategoriesByUserIdMinTypeAsc = 'CATEGORIES_BY_USER_ID_MIN_TYPE_ASC',
  CategoriesByUserIdMinTypeDesc = 'CATEGORIES_BY_USER_ID_MIN_TYPE_DESC',
  CategoriesByUserIdMinUserIdAsc = 'CATEGORIES_BY_USER_ID_MIN_USER_ID_ASC',
  CategoriesByUserIdMinUserIdDesc = 'CATEGORIES_BY_USER_ID_MIN_USER_ID_DESC',
  CategoriesByUserIdStddevPopulationIconAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_ASC',
  CategoriesByUserIdStddevPopulationIconColorAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_COLOR_ASC',
  CategoriesByUserIdStddevPopulationIconColorDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_COLOR_DESC',
  CategoriesByUserIdStddevPopulationIconDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_DESC',
  CategoriesByUserIdStddevPopulationIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  CategoriesByUserIdStddevPopulationIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  CategoriesByUserIdStddevPopulationNameAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_NAME_ASC',
  CategoriesByUserIdStddevPopulationNameDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_NAME_DESC',
  CategoriesByUserIdStddevPopulationTypeAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_TYPE_ASC',
  CategoriesByUserIdStddevPopulationTypeDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_TYPE_DESC',
  CategoriesByUserIdStddevPopulationUserIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  CategoriesByUserIdStddevPopulationUserIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  CategoriesByUserIdStddevSampleIconAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_ASC',
  CategoriesByUserIdStddevSampleIconColorAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_COLOR_ASC',
  CategoriesByUserIdStddevSampleIconColorDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_COLOR_DESC',
  CategoriesByUserIdStddevSampleIconDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_DESC',
  CategoriesByUserIdStddevSampleIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  CategoriesByUserIdStddevSampleIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  CategoriesByUserIdStddevSampleNameAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_NAME_ASC',
  CategoriesByUserIdStddevSampleNameDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_NAME_DESC',
  CategoriesByUserIdStddevSampleTypeAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_TYPE_ASC',
  CategoriesByUserIdStddevSampleTypeDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_TYPE_DESC',
  CategoriesByUserIdStddevSampleUserIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  CategoriesByUserIdStddevSampleUserIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  CategoriesByUserIdSumIconAsc = 'CATEGORIES_BY_USER_ID_SUM_ICON_ASC',
  CategoriesByUserIdSumIconColorAsc = 'CATEGORIES_BY_USER_ID_SUM_ICON_COLOR_ASC',
  CategoriesByUserIdSumIconColorDesc = 'CATEGORIES_BY_USER_ID_SUM_ICON_COLOR_DESC',
  CategoriesByUserIdSumIconDesc = 'CATEGORIES_BY_USER_ID_SUM_ICON_DESC',
  CategoriesByUserIdSumIdAsc = 'CATEGORIES_BY_USER_ID_SUM_ID_ASC',
  CategoriesByUserIdSumIdDesc = 'CATEGORIES_BY_USER_ID_SUM_ID_DESC',
  CategoriesByUserIdSumNameAsc = 'CATEGORIES_BY_USER_ID_SUM_NAME_ASC',
  CategoriesByUserIdSumNameDesc = 'CATEGORIES_BY_USER_ID_SUM_NAME_DESC',
  CategoriesByUserIdSumTypeAsc = 'CATEGORIES_BY_USER_ID_SUM_TYPE_ASC',
  CategoriesByUserIdSumTypeDesc = 'CATEGORIES_BY_USER_ID_SUM_TYPE_DESC',
  CategoriesByUserIdSumUserIdAsc = 'CATEGORIES_BY_USER_ID_SUM_USER_ID_ASC',
  CategoriesByUserIdSumUserIdDesc = 'CATEGORIES_BY_USER_ID_SUM_USER_ID_DESC',
  CategoriesByUserIdVariancePopulationIconAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_ASC',
  CategoriesByUserIdVariancePopulationIconColorAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_COLOR_ASC',
  CategoriesByUserIdVariancePopulationIconColorDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_COLOR_DESC',
  CategoriesByUserIdVariancePopulationIconDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_DESC',
  CategoriesByUserIdVariancePopulationIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  CategoriesByUserIdVariancePopulationIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  CategoriesByUserIdVariancePopulationNameAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_NAME_ASC',
  CategoriesByUserIdVariancePopulationNameDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_NAME_DESC',
  CategoriesByUserIdVariancePopulationTypeAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_TYPE_ASC',
  CategoriesByUserIdVariancePopulationTypeDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_TYPE_DESC',
  CategoriesByUserIdVariancePopulationUserIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  CategoriesByUserIdVariancePopulationUserIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  CategoriesByUserIdVarianceSampleIconAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_ASC',
  CategoriesByUserIdVarianceSampleIconColorAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_COLOR_ASC',
  CategoriesByUserIdVarianceSampleIconColorDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_COLOR_DESC',
  CategoriesByUserIdVarianceSampleIconDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_DESC',
  CategoriesByUserIdVarianceSampleIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  CategoriesByUserIdVarianceSampleIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  CategoriesByUserIdVarianceSampleNameAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_NAME_ASC',
  CategoriesByUserIdVarianceSampleNameDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_NAME_DESC',
  CategoriesByUserIdVarianceSampleTypeAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_TYPE_ASC',
  CategoriesByUserIdVarianceSampleTypeDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_TYPE_DESC',
  CategoriesByUserIdVarianceSampleUserIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  CategoriesByUserIdVarianceSampleUserIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  NotificationsByUserIdAverageDataAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_DATA_ASC',
  NotificationsByUserIdAverageDataDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_DATA_DESC',
  NotificationsByUserIdAverageIdAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_ID_ASC',
  NotificationsByUserIdAverageIdDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_ID_DESC',
  NotificationsByUserIdAverageIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_IS_READ_ASC',
  NotificationsByUserIdAverageIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_IS_READ_DESC',
  NotificationsByUserIdAverageTAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_T_ASC',
  NotificationsByUserIdAverageTDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_T_DESC',
  NotificationsByUserIdAverageUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  NotificationsByUserIdAverageUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  NotificationsByUserIdCountAsc = 'NOTIFICATIONS_BY_USER_ID_COUNT_ASC',
  NotificationsByUserIdCountDesc = 'NOTIFICATIONS_BY_USER_ID_COUNT_DESC',
  NotificationsByUserIdDistinctCountDataAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_DATA_ASC',
  NotificationsByUserIdDistinctCountDataDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_DATA_DESC',
  NotificationsByUserIdDistinctCountIdAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  NotificationsByUserIdDistinctCountIdDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  NotificationsByUserIdDistinctCountIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_IS_READ_ASC',
  NotificationsByUserIdDistinctCountIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_IS_READ_DESC',
  NotificationsByUserIdDistinctCountTAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_T_ASC',
  NotificationsByUserIdDistinctCountTDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_T_DESC',
  NotificationsByUserIdDistinctCountUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  NotificationsByUserIdDistinctCountUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  NotificationsByUserIdMaxDataAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_DATA_ASC',
  NotificationsByUserIdMaxDataDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_DATA_DESC',
  NotificationsByUserIdMaxIdAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_ID_ASC',
  NotificationsByUserIdMaxIdDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_ID_DESC',
  NotificationsByUserIdMaxIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_IS_READ_ASC',
  NotificationsByUserIdMaxIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_IS_READ_DESC',
  NotificationsByUserIdMaxTAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_T_ASC',
  NotificationsByUserIdMaxTDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_T_DESC',
  NotificationsByUserIdMaxUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_USER_ID_ASC',
  NotificationsByUserIdMaxUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_USER_ID_DESC',
  NotificationsByUserIdMinDataAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_DATA_ASC',
  NotificationsByUserIdMinDataDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_DATA_DESC',
  NotificationsByUserIdMinIdAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_ID_ASC',
  NotificationsByUserIdMinIdDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_ID_DESC',
  NotificationsByUserIdMinIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_IS_READ_ASC',
  NotificationsByUserIdMinIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_IS_READ_DESC',
  NotificationsByUserIdMinTAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_T_ASC',
  NotificationsByUserIdMinTDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_T_DESC',
  NotificationsByUserIdMinUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_USER_ID_ASC',
  NotificationsByUserIdMinUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_USER_ID_DESC',
  NotificationsByUserIdStddevPopulationDataAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_DATA_ASC',
  NotificationsByUserIdStddevPopulationDataDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_DATA_DESC',
  NotificationsByUserIdStddevPopulationIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  NotificationsByUserIdStddevPopulationIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  NotificationsByUserIdStddevPopulationIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_IS_READ_ASC',
  NotificationsByUserIdStddevPopulationIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_IS_READ_DESC',
  NotificationsByUserIdStddevPopulationTAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_T_ASC',
  NotificationsByUserIdStddevPopulationTDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_T_DESC',
  NotificationsByUserIdStddevPopulationUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  NotificationsByUserIdStddevPopulationUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  NotificationsByUserIdStddevSampleDataAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_DATA_ASC',
  NotificationsByUserIdStddevSampleDataDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_DATA_DESC',
  NotificationsByUserIdStddevSampleIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  NotificationsByUserIdStddevSampleIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  NotificationsByUserIdStddevSampleIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_IS_READ_ASC',
  NotificationsByUserIdStddevSampleIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_IS_READ_DESC',
  NotificationsByUserIdStddevSampleTAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_T_ASC',
  NotificationsByUserIdStddevSampleTDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_T_DESC',
  NotificationsByUserIdStddevSampleUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  NotificationsByUserIdStddevSampleUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  NotificationsByUserIdSumDataAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_DATA_ASC',
  NotificationsByUserIdSumDataDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_DATA_DESC',
  NotificationsByUserIdSumIdAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_ID_ASC',
  NotificationsByUserIdSumIdDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_ID_DESC',
  NotificationsByUserIdSumIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_IS_READ_ASC',
  NotificationsByUserIdSumIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_IS_READ_DESC',
  NotificationsByUserIdSumTAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_T_ASC',
  NotificationsByUserIdSumTDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_T_DESC',
  NotificationsByUserIdSumUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_USER_ID_ASC',
  NotificationsByUserIdSumUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_USER_ID_DESC',
  NotificationsByUserIdVariancePopulationDataAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_DATA_ASC',
  NotificationsByUserIdVariancePopulationDataDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_DATA_DESC',
  NotificationsByUserIdVariancePopulationIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  NotificationsByUserIdVariancePopulationIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  NotificationsByUserIdVariancePopulationIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_IS_READ_ASC',
  NotificationsByUserIdVariancePopulationIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_IS_READ_DESC',
  NotificationsByUserIdVariancePopulationTAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_T_ASC',
  NotificationsByUserIdVariancePopulationTDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_T_DESC',
  NotificationsByUserIdVariancePopulationUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  NotificationsByUserIdVariancePopulationUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  NotificationsByUserIdVarianceSampleDataAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_DATA_ASC',
  NotificationsByUserIdVarianceSampleDataDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_DATA_DESC',
  NotificationsByUserIdVarianceSampleIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  NotificationsByUserIdVarianceSampleIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  NotificationsByUserIdVarianceSampleIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_IS_READ_ASC',
  NotificationsByUserIdVarianceSampleIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_IS_READ_DESC',
  NotificationsByUserIdVarianceSampleTAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_T_ASC',
  NotificationsByUserIdVarianceSampleTDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_T_DESC',
  NotificationsByUserIdVarianceSampleUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  NotificationsByUserIdVarianceSampleUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  OidcIdAsc = 'OIDC_ID_ASC',
  OidcIdDesc = 'OIDC_ID_DESC',
  OtpVerificationsByUserIdAverageCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  OtpVerificationsByUserIdAverageCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  OtpVerificationsByUserIdAverageEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EMAIL_ASC',
  OtpVerificationsByUserIdAverageEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EMAIL_DESC',
  OtpVerificationsByUserIdAverageExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdAverageExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdAverageIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_ID_ASC',
  OtpVerificationsByUserIdAverageIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_ID_DESC',
  OtpVerificationsByUserIdAverageOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_OTP_ASC',
  OtpVerificationsByUserIdAverageOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_OTP_DESC',
  OtpVerificationsByUserIdAverageUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  OtpVerificationsByUserIdAverageUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  OtpVerificationsByUserIdCountAsc = 'OTP_VERIFICATIONS_BY_USER_ID_COUNT_ASC',
  OtpVerificationsByUserIdCountDesc = 'OTP_VERIFICATIONS_BY_USER_ID_COUNT_DESC',
  OtpVerificationsByUserIdDistinctCountCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  OtpVerificationsByUserIdDistinctCountCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  OtpVerificationsByUserIdDistinctCountEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EMAIL_ASC',
  OtpVerificationsByUserIdDistinctCountEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EMAIL_DESC',
  OtpVerificationsByUserIdDistinctCountExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdDistinctCountExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdDistinctCountIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  OtpVerificationsByUserIdDistinctCountIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  OtpVerificationsByUserIdDistinctCountOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_OTP_ASC',
  OtpVerificationsByUserIdDistinctCountOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_OTP_DESC',
  OtpVerificationsByUserIdDistinctCountUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  OtpVerificationsByUserIdDistinctCountUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  OtpVerificationsByUserIdMaxCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_CREATED_AT_ASC',
  OtpVerificationsByUserIdMaxCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_CREATED_AT_DESC',
  OtpVerificationsByUserIdMaxEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EMAIL_ASC',
  OtpVerificationsByUserIdMaxEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EMAIL_DESC',
  OtpVerificationsByUserIdMaxExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdMaxExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdMaxIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_ID_ASC',
  OtpVerificationsByUserIdMaxIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_ID_DESC',
  OtpVerificationsByUserIdMaxOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_OTP_ASC',
  OtpVerificationsByUserIdMaxOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_OTP_DESC',
  OtpVerificationsByUserIdMaxUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_USER_ID_ASC',
  OtpVerificationsByUserIdMaxUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_USER_ID_DESC',
  OtpVerificationsByUserIdMinCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_CREATED_AT_ASC',
  OtpVerificationsByUserIdMinCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_CREATED_AT_DESC',
  OtpVerificationsByUserIdMinEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EMAIL_ASC',
  OtpVerificationsByUserIdMinEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EMAIL_DESC',
  OtpVerificationsByUserIdMinExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdMinExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdMinIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_ID_ASC',
  OtpVerificationsByUserIdMinIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_ID_DESC',
  OtpVerificationsByUserIdMinOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_OTP_ASC',
  OtpVerificationsByUserIdMinOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_OTP_DESC',
  OtpVerificationsByUserIdMinUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_USER_ID_ASC',
  OtpVerificationsByUserIdMinUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_USER_ID_DESC',
  OtpVerificationsByUserIdStddevPopulationCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  OtpVerificationsByUserIdStddevPopulationCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  OtpVerificationsByUserIdStddevPopulationEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EMAIL_ASC',
  OtpVerificationsByUserIdStddevPopulationEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EMAIL_DESC',
  OtpVerificationsByUserIdStddevPopulationExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdStddevPopulationExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdStddevPopulationIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  OtpVerificationsByUserIdStddevPopulationIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  OtpVerificationsByUserIdStddevPopulationOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_OTP_ASC',
  OtpVerificationsByUserIdStddevPopulationOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_OTP_DESC',
  OtpVerificationsByUserIdStddevPopulationUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  OtpVerificationsByUserIdStddevPopulationUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  OtpVerificationsByUserIdStddevSampleCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  OtpVerificationsByUserIdStddevSampleCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  OtpVerificationsByUserIdStddevSampleEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EMAIL_ASC',
  OtpVerificationsByUserIdStddevSampleEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EMAIL_DESC',
  OtpVerificationsByUserIdStddevSampleExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdStddevSampleExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdStddevSampleIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  OtpVerificationsByUserIdStddevSampleIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  OtpVerificationsByUserIdStddevSampleOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_OTP_ASC',
  OtpVerificationsByUserIdStddevSampleOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_OTP_DESC',
  OtpVerificationsByUserIdStddevSampleUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  OtpVerificationsByUserIdStddevSampleUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  OtpVerificationsByUserIdSumCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_CREATED_AT_ASC',
  OtpVerificationsByUserIdSumCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_CREATED_AT_DESC',
  OtpVerificationsByUserIdSumEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EMAIL_ASC',
  OtpVerificationsByUserIdSumEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EMAIL_DESC',
  OtpVerificationsByUserIdSumExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdSumExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdSumIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_ID_ASC',
  OtpVerificationsByUserIdSumIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_ID_DESC',
  OtpVerificationsByUserIdSumOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_OTP_ASC',
  OtpVerificationsByUserIdSumOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_OTP_DESC',
  OtpVerificationsByUserIdSumUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_USER_ID_ASC',
  OtpVerificationsByUserIdSumUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_USER_ID_DESC',
  OtpVerificationsByUserIdVariancePopulationCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  OtpVerificationsByUserIdVariancePopulationCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  OtpVerificationsByUserIdVariancePopulationEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EMAIL_ASC',
  OtpVerificationsByUserIdVariancePopulationEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EMAIL_DESC',
  OtpVerificationsByUserIdVariancePopulationExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdVariancePopulationExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdVariancePopulationIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  OtpVerificationsByUserIdVariancePopulationIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  OtpVerificationsByUserIdVariancePopulationOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_OTP_ASC',
  OtpVerificationsByUserIdVariancePopulationOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_OTP_DESC',
  OtpVerificationsByUserIdVariancePopulationUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  OtpVerificationsByUserIdVariancePopulationUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  OtpVerificationsByUserIdVarianceSampleCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  OtpVerificationsByUserIdVarianceSampleCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  OtpVerificationsByUserIdVarianceSampleEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EMAIL_ASC',
  OtpVerificationsByUserIdVarianceSampleEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EMAIL_DESC',
  OtpVerificationsByUserIdVarianceSampleExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdVarianceSampleExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdVarianceSampleIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  OtpVerificationsByUserIdVarianceSampleIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  OtpVerificationsByUserIdVarianceSampleOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_OTP_ASC',
  OtpVerificationsByUserIdVarianceSampleOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_OTP_DESC',
  OtpVerificationsByUserIdVarianceSampleUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  OtpVerificationsByUserIdVarianceSampleUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReportsByUserIdAverageCreatedAtAsc = 'REPORTS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  ReportsByUserIdAverageCreatedAtDesc = 'REPORTS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  ReportsByUserIdAverageFilePathAsc = 'REPORTS_BY_USER_ID_AVERAGE_FILE_PATH_ASC',
  ReportsByUserIdAverageFilePathDesc = 'REPORTS_BY_USER_ID_AVERAGE_FILE_PATH_DESC',
  ReportsByUserIdAverageReportIdAsc = 'REPORTS_BY_USER_ID_AVERAGE_REPORT_ID_ASC',
  ReportsByUserIdAverageReportIdDesc = 'REPORTS_BY_USER_ID_AVERAGE_REPORT_ID_DESC',
  ReportsByUserIdAverageUserIdAsc = 'REPORTS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  ReportsByUserIdAverageUserIdDesc = 'REPORTS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  ReportsByUserIdCountAsc = 'REPORTS_BY_USER_ID_COUNT_ASC',
  ReportsByUserIdCountDesc = 'REPORTS_BY_USER_ID_COUNT_DESC',
  ReportsByUserIdDistinctCountCreatedAtAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  ReportsByUserIdDistinctCountCreatedAtDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  ReportsByUserIdDistinctCountFilePathAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_FILE_PATH_ASC',
  ReportsByUserIdDistinctCountFilePathDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_FILE_PATH_DESC',
  ReportsByUserIdDistinctCountReportIdAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_REPORT_ID_ASC',
  ReportsByUserIdDistinctCountReportIdDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_REPORT_ID_DESC',
  ReportsByUserIdDistinctCountUserIdAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  ReportsByUserIdDistinctCountUserIdDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  ReportsByUserIdMaxCreatedAtAsc = 'REPORTS_BY_USER_ID_MAX_CREATED_AT_ASC',
  ReportsByUserIdMaxCreatedAtDesc = 'REPORTS_BY_USER_ID_MAX_CREATED_AT_DESC',
  ReportsByUserIdMaxFilePathAsc = 'REPORTS_BY_USER_ID_MAX_FILE_PATH_ASC',
  ReportsByUserIdMaxFilePathDesc = 'REPORTS_BY_USER_ID_MAX_FILE_PATH_DESC',
  ReportsByUserIdMaxReportIdAsc = 'REPORTS_BY_USER_ID_MAX_REPORT_ID_ASC',
  ReportsByUserIdMaxReportIdDesc = 'REPORTS_BY_USER_ID_MAX_REPORT_ID_DESC',
  ReportsByUserIdMaxUserIdAsc = 'REPORTS_BY_USER_ID_MAX_USER_ID_ASC',
  ReportsByUserIdMaxUserIdDesc = 'REPORTS_BY_USER_ID_MAX_USER_ID_DESC',
  ReportsByUserIdMinCreatedAtAsc = 'REPORTS_BY_USER_ID_MIN_CREATED_AT_ASC',
  ReportsByUserIdMinCreatedAtDesc = 'REPORTS_BY_USER_ID_MIN_CREATED_AT_DESC',
  ReportsByUserIdMinFilePathAsc = 'REPORTS_BY_USER_ID_MIN_FILE_PATH_ASC',
  ReportsByUserIdMinFilePathDesc = 'REPORTS_BY_USER_ID_MIN_FILE_PATH_DESC',
  ReportsByUserIdMinReportIdAsc = 'REPORTS_BY_USER_ID_MIN_REPORT_ID_ASC',
  ReportsByUserIdMinReportIdDesc = 'REPORTS_BY_USER_ID_MIN_REPORT_ID_DESC',
  ReportsByUserIdMinUserIdAsc = 'REPORTS_BY_USER_ID_MIN_USER_ID_ASC',
  ReportsByUserIdMinUserIdDesc = 'REPORTS_BY_USER_ID_MIN_USER_ID_DESC',
  ReportsByUserIdStddevPopulationCreatedAtAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  ReportsByUserIdStddevPopulationCreatedAtDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  ReportsByUserIdStddevPopulationFilePathAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_FILE_PATH_ASC',
  ReportsByUserIdStddevPopulationFilePathDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_FILE_PATH_DESC',
  ReportsByUserIdStddevPopulationReportIdAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_REPORT_ID_ASC',
  ReportsByUserIdStddevPopulationReportIdDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_REPORT_ID_DESC',
  ReportsByUserIdStddevPopulationUserIdAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  ReportsByUserIdStddevPopulationUserIdDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  ReportsByUserIdStddevSampleCreatedAtAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  ReportsByUserIdStddevSampleCreatedAtDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  ReportsByUserIdStddevSampleFilePathAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_FILE_PATH_ASC',
  ReportsByUserIdStddevSampleFilePathDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_FILE_PATH_DESC',
  ReportsByUserIdStddevSampleReportIdAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_REPORT_ID_ASC',
  ReportsByUserIdStddevSampleReportIdDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_REPORT_ID_DESC',
  ReportsByUserIdStddevSampleUserIdAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  ReportsByUserIdStddevSampleUserIdDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  ReportsByUserIdSumCreatedAtAsc = 'REPORTS_BY_USER_ID_SUM_CREATED_AT_ASC',
  ReportsByUserIdSumCreatedAtDesc = 'REPORTS_BY_USER_ID_SUM_CREATED_AT_DESC',
  ReportsByUserIdSumFilePathAsc = 'REPORTS_BY_USER_ID_SUM_FILE_PATH_ASC',
  ReportsByUserIdSumFilePathDesc = 'REPORTS_BY_USER_ID_SUM_FILE_PATH_DESC',
  ReportsByUserIdSumReportIdAsc = 'REPORTS_BY_USER_ID_SUM_REPORT_ID_ASC',
  ReportsByUserIdSumReportIdDesc = 'REPORTS_BY_USER_ID_SUM_REPORT_ID_DESC',
  ReportsByUserIdSumUserIdAsc = 'REPORTS_BY_USER_ID_SUM_USER_ID_ASC',
  ReportsByUserIdSumUserIdDesc = 'REPORTS_BY_USER_ID_SUM_USER_ID_DESC',
  ReportsByUserIdVariancePopulationCreatedAtAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  ReportsByUserIdVariancePopulationCreatedAtDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  ReportsByUserIdVariancePopulationFilePathAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_FILE_PATH_ASC',
  ReportsByUserIdVariancePopulationFilePathDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_FILE_PATH_DESC',
  ReportsByUserIdVariancePopulationReportIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_REPORT_ID_ASC',
  ReportsByUserIdVariancePopulationReportIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_REPORT_ID_DESC',
  ReportsByUserIdVariancePopulationUserIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  ReportsByUserIdVariancePopulationUserIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  ReportsByUserIdVarianceSampleCreatedAtAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  ReportsByUserIdVarianceSampleCreatedAtDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  ReportsByUserIdVarianceSampleFilePathAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_FILE_PATH_ASC',
  ReportsByUserIdVarianceSampleFilePathDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_FILE_PATH_DESC',
  ReportsByUserIdVarianceSampleReportIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_REPORT_ID_ASC',
  ReportsByUserIdVarianceSampleReportIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_REPORT_ID_DESC',
  ReportsByUserIdVarianceSampleUserIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  ReportsByUserIdVarianceSampleUserIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  TelAsc = 'TEL_ASC',
  TelDesc = 'TEL_DESC',
  TransactionsByUserIdAverageAmountAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_AMOUNT_ASC',
  TransactionsByUserIdAverageAmountDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_AMOUNT_DESC',
  TransactionsByUserIdAverageCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_CATEGORY_ID_ASC',
  TransactionsByUserIdAverageCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_CATEGORY_ID_DESC',
  TransactionsByUserIdAverageDateAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DATE_ASC',
  TransactionsByUserIdAverageDateDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DATE_DESC',
  TransactionsByUserIdAverageDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DESCRIPTION_ASC',
  TransactionsByUserIdAverageDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DESCRIPTION_DESC',
  TransactionsByUserIdAverageTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TRANSACTION_ID_ASC',
  TransactionsByUserIdAverageTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TRANSACTION_ID_DESC',
  TransactionsByUserIdAverageTypeAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TYPE_ASC',
  TransactionsByUserIdAverageTypeDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TYPE_DESC',
  TransactionsByUserIdAverageUserIdAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  TransactionsByUserIdAverageUserIdDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  TransactionsByUserIdCountAsc = 'TRANSACTIONS_BY_USER_ID_COUNT_ASC',
  TransactionsByUserIdCountDesc = 'TRANSACTIONS_BY_USER_ID_COUNT_DESC',
  TransactionsByUserIdDistinctCountAmountAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_ASC',
  TransactionsByUserIdDistinctCountAmountDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_DESC',
  TransactionsByUserIdDistinctCountCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  TransactionsByUserIdDistinctCountCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  TransactionsByUserIdDistinctCountDateAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DATE_ASC',
  TransactionsByUserIdDistinctCountDateDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DATE_DESC',
  TransactionsByUserIdDistinctCountDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  TransactionsByUserIdDistinctCountDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  TransactionsByUserIdDistinctCountTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TRANSACTION_ID_ASC',
  TransactionsByUserIdDistinctCountTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TRANSACTION_ID_DESC',
  TransactionsByUserIdDistinctCountTypeAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TYPE_ASC',
  TransactionsByUserIdDistinctCountTypeDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TYPE_DESC',
  TransactionsByUserIdDistinctCountUserIdAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  TransactionsByUserIdDistinctCountUserIdDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  TransactionsByUserIdMaxAmountAsc = 'TRANSACTIONS_BY_USER_ID_MAX_AMOUNT_ASC',
  TransactionsByUserIdMaxAmountDesc = 'TRANSACTIONS_BY_USER_ID_MAX_AMOUNT_DESC',
  TransactionsByUserIdMaxCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_MAX_CATEGORY_ID_ASC',
  TransactionsByUserIdMaxCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_MAX_CATEGORY_ID_DESC',
  TransactionsByUserIdMaxDateAsc = 'TRANSACTIONS_BY_USER_ID_MAX_DATE_ASC',
  TransactionsByUserIdMaxDateDesc = 'TRANSACTIONS_BY_USER_ID_MAX_DATE_DESC',
  TransactionsByUserIdMaxDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_MAX_DESCRIPTION_ASC',
  TransactionsByUserIdMaxDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_MAX_DESCRIPTION_DESC',
  TransactionsByUserIdMaxTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_MAX_TRANSACTION_ID_ASC',
  TransactionsByUserIdMaxTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_MAX_TRANSACTION_ID_DESC',
  TransactionsByUserIdMaxTypeAsc = 'TRANSACTIONS_BY_USER_ID_MAX_TYPE_ASC',
  TransactionsByUserIdMaxTypeDesc = 'TRANSACTIONS_BY_USER_ID_MAX_TYPE_DESC',
  TransactionsByUserIdMaxUserIdAsc = 'TRANSACTIONS_BY_USER_ID_MAX_USER_ID_ASC',
  TransactionsByUserIdMaxUserIdDesc = 'TRANSACTIONS_BY_USER_ID_MAX_USER_ID_DESC',
  TransactionsByUserIdMinAmountAsc = 'TRANSACTIONS_BY_USER_ID_MIN_AMOUNT_ASC',
  TransactionsByUserIdMinAmountDesc = 'TRANSACTIONS_BY_USER_ID_MIN_AMOUNT_DESC',
  TransactionsByUserIdMinCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_MIN_CATEGORY_ID_ASC',
  TransactionsByUserIdMinCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_MIN_CATEGORY_ID_DESC',
  TransactionsByUserIdMinDateAsc = 'TRANSACTIONS_BY_USER_ID_MIN_DATE_ASC',
  TransactionsByUserIdMinDateDesc = 'TRANSACTIONS_BY_USER_ID_MIN_DATE_DESC',
  TransactionsByUserIdMinDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_MIN_DESCRIPTION_ASC',
  TransactionsByUserIdMinDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_MIN_DESCRIPTION_DESC',
  TransactionsByUserIdMinTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_MIN_TRANSACTION_ID_ASC',
  TransactionsByUserIdMinTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_MIN_TRANSACTION_ID_DESC',
  TransactionsByUserIdMinTypeAsc = 'TRANSACTIONS_BY_USER_ID_MIN_TYPE_ASC',
  TransactionsByUserIdMinTypeDesc = 'TRANSACTIONS_BY_USER_ID_MIN_TYPE_DESC',
  TransactionsByUserIdMinUserIdAsc = 'TRANSACTIONS_BY_USER_ID_MIN_USER_ID_ASC',
  TransactionsByUserIdMinUserIdDesc = 'TRANSACTIONS_BY_USER_ID_MIN_USER_ID_DESC',
  TransactionsByUserIdStddevPopulationAmountAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_ASC',
  TransactionsByUserIdStddevPopulationAmountDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_DESC',
  TransactionsByUserIdStddevPopulationCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  TransactionsByUserIdStddevPopulationCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  TransactionsByUserIdStddevPopulationDateAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DATE_ASC',
  TransactionsByUserIdStddevPopulationDateDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DATE_DESC',
  TransactionsByUserIdStddevPopulationDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  TransactionsByUserIdStddevPopulationDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  TransactionsByUserIdStddevPopulationTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByUserIdStddevPopulationTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByUserIdStddevPopulationTypeAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TYPE_ASC',
  TransactionsByUserIdStddevPopulationTypeDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TYPE_DESC',
  TransactionsByUserIdStddevPopulationUserIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  TransactionsByUserIdStddevPopulationUserIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  TransactionsByUserIdStddevSampleAmountAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  TransactionsByUserIdStddevSampleAmountDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  TransactionsByUserIdStddevSampleCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByUserIdStddevSampleCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByUserIdStddevSampleDateAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DATE_ASC',
  TransactionsByUserIdStddevSampleDateDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DATE_DESC',
  TransactionsByUserIdStddevSampleDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  TransactionsByUserIdStddevSampleDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  TransactionsByUserIdStddevSampleTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByUserIdStddevSampleTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByUserIdStddevSampleTypeAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TYPE_ASC',
  TransactionsByUserIdStddevSampleTypeDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TYPE_DESC',
  TransactionsByUserIdStddevSampleUserIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TransactionsByUserIdStddevSampleUserIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TransactionsByUserIdSumAmountAsc = 'TRANSACTIONS_BY_USER_ID_SUM_AMOUNT_ASC',
  TransactionsByUserIdSumAmountDesc = 'TRANSACTIONS_BY_USER_ID_SUM_AMOUNT_DESC',
  TransactionsByUserIdSumCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_SUM_CATEGORY_ID_ASC',
  TransactionsByUserIdSumCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_SUM_CATEGORY_ID_DESC',
  TransactionsByUserIdSumDateAsc = 'TRANSACTIONS_BY_USER_ID_SUM_DATE_ASC',
  TransactionsByUserIdSumDateDesc = 'TRANSACTIONS_BY_USER_ID_SUM_DATE_DESC',
  TransactionsByUserIdSumDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_SUM_DESCRIPTION_ASC',
  TransactionsByUserIdSumDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_SUM_DESCRIPTION_DESC',
  TransactionsByUserIdSumTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_SUM_TRANSACTION_ID_ASC',
  TransactionsByUserIdSumTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_SUM_TRANSACTION_ID_DESC',
  TransactionsByUserIdSumTypeAsc = 'TRANSACTIONS_BY_USER_ID_SUM_TYPE_ASC',
  TransactionsByUserIdSumTypeDesc = 'TRANSACTIONS_BY_USER_ID_SUM_TYPE_DESC',
  TransactionsByUserIdSumUserIdAsc = 'TRANSACTIONS_BY_USER_ID_SUM_USER_ID_ASC',
  TransactionsByUserIdSumUserIdDesc = 'TRANSACTIONS_BY_USER_ID_SUM_USER_ID_DESC',
  TransactionsByUserIdVariancePopulationAmountAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  TransactionsByUserIdVariancePopulationAmountDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  TransactionsByUserIdVariancePopulationCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  TransactionsByUserIdVariancePopulationCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  TransactionsByUserIdVariancePopulationDateAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DATE_ASC',
  TransactionsByUserIdVariancePopulationDateDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DATE_DESC',
  TransactionsByUserIdVariancePopulationDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  TransactionsByUserIdVariancePopulationDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  TransactionsByUserIdVariancePopulationTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByUserIdVariancePopulationTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByUserIdVariancePopulationTypeAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TYPE_ASC',
  TransactionsByUserIdVariancePopulationTypeDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TYPE_DESC',
  TransactionsByUserIdVariancePopulationUserIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TransactionsByUserIdVariancePopulationUserIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TransactionsByUserIdVarianceSampleAmountAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  TransactionsByUserIdVarianceSampleAmountDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  TransactionsByUserIdVarianceSampleCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByUserIdVarianceSampleCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByUserIdVarianceSampleDateAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DATE_ASC',
  TransactionsByUserIdVarianceSampleDateDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DATE_DESC',
  TransactionsByUserIdVarianceSampleDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  TransactionsByUserIdVarianceSampleDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  TransactionsByUserIdVarianceSampleTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByUserIdVarianceSampleTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByUserIdVarianceSampleTypeAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TYPE_ASC',
  TransactionsByUserIdVarianceSampleTypeDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TYPE_DESC',
  TransactionsByUserIdVarianceSampleUserIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TransactionsByUserIdVarianceSampleUserIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  UserDevicesByUserIdAverageTokenAsc = 'USER_DEVICES_BY_USER_ID_AVERAGE_TOKEN_ASC',
  UserDevicesByUserIdAverageTokenDesc = 'USER_DEVICES_BY_USER_ID_AVERAGE_TOKEN_DESC',
  UserDevicesByUserIdAverageUaAsc = 'USER_DEVICES_BY_USER_ID_AVERAGE_UA_ASC',
  UserDevicesByUserIdAverageUaDesc = 'USER_DEVICES_BY_USER_ID_AVERAGE_UA_DESC',
  UserDevicesByUserIdAverageUserIdAsc = 'USER_DEVICES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  UserDevicesByUserIdAverageUserIdDesc = 'USER_DEVICES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  UserDevicesByUserIdCountAsc = 'USER_DEVICES_BY_USER_ID_COUNT_ASC',
  UserDevicesByUserIdCountDesc = 'USER_DEVICES_BY_USER_ID_COUNT_DESC',
  UserDevicesByUserIdDistinctCountTokenAsc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_TOKEN_ASC',
  UserDevicesByUserIdDistinctCountTokenDesc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_TOKEN_DESC',
  UserDevicesByUserIdDistinctCountUaAsc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_UA_ASC',
  UserDevicesByUserIdDistinctCountUaDesc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_UA_DESC',
  UserDevicesByUserIdDistinctCountUserIdAsc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  UserDevicesByUserIdDistinctCountUserIdDesc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  UserDevicesByUserIdMaxTokenAsc = 'USER_DEVICES_BY_USER_ID_MAX_TOKEN_ASC',
  UserDevicesByUserIdMaxTokenDesc = 'USER_DEVICES_BY_USER_ID_MAX_TOKEN_DESC',
  UserDevicesByUserIdMaxUaAsc = 'USER_DEVICES_BY_USER_ID_MAX_UA_ASC',
  UserDevicesByUserIdMaxUaDesc = 'USER_DEVICES_BY_USER_ID_MAX_UA_DESC',
  UserDevicesByUserIdMaxUserIdAsc = 'USER_DEVICES_BY_USER_ID_MAX_USER_ID_ASC',
  UserDevicesByUserIdMaxUserIdDesc = 'USER_DEVICES_BY_USER_ID_MAX_USER_ID_DESC',
  UserDevicesByUserIdMinTokenAsc = 'USER_DEVICES_BY_USER_ID_MIN_TOKEN_ASC',
  UserDevicesByUserIdMinTokenDesc = 'USER_DEVICES_BY_USER_ID_MIN_TOKEN_DESC',
  UserDevicesByUserIdMinUaAsc = 'USER_DEVICES_BY_USER_ID_MIN_UA_ASC',
  UserDevicesByUserIdMinUaDesc = 'USER_DEVICES_BY_USER_ID_MIN_UA_DESC',
  UserDevicesByUserIdMinUserIdAsc = 'USER_DEVICES_BY_USER_ID_MIN_USER_ID_ASC',
  UserDevicesByUserIdMinUserIdDesc = 'USER_DEVICES_BY_USER_ID_MIN_USER_ID_DESC',
  UserDevicesByUserIdStddevPopulationTokenAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_TOKEN_ASC',
  UserDevicesByUserIdStddevPopulationTokenDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_TOKEN_DESC',
  UserDevicesByUserIdStddevPopulationUaAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_UA_ASC',
  UserDevicesByUserIdStddevPopulationUaDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_UA_DESC',
  UserDevicesByUserIdStddevPopulationUserIdAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  UserDevicesByUserIdStddevPopulationUserIdDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  UserDevicesByUserIdStddevSampleTokenAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_TOKEN_ASC',
  UserDevicesByUserIdStddevSampleTokenDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_TOKEN_DESC',
  UserDevicesByUserIdStddevSampleUaAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_UA_ASC',
  UserDevicesByUserIdStddevSampleUaDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_UA_DESC',
  UserDevicesByUserIdStddevSampleUserIdAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  UserDevicesByUserIdStddevSampleUserIdDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  UserDevicesByUserIdSumTokenAsc = 'USER_DEVICES_BY_USER_ID_SUM_TOKEN_ASC',
  UserDevicesByUserIdSumTokenDesc = 'USER_DEVICES_BY_USER_ID_SUM_TOKEN_DESC',
  UserDevicesByUserIdSumUaAsc = 'USER_DEVICES_BY_USER_ID_SUM_UA_ASC',
  UserDevicesByUserIdSumUaDesc = 'USER_DEVICES_BY_USER_ID_SUM_UA_DESC',
  UserDevicesByUserIdSumUserIdAsc = 'USER_DEVICES_BY_USER_ID_SUM_USER_ID_ASC',
  UserDevicesByUserIdSumUserIdDesc = 'USER_DEVICES_BY_USER_ID_SUM_USER_ID_DESC',
  UserDevicesByUserIdVariancePopulationTokenAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_TOKEN_ASC',
  UserDevicesByUserIdVariancePopulationTokenDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_TOKEN_DESC',
  UserDevicesByUserIdVariancePopulationUaAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_UA_ASC',
  UserDevicesByUserIdVariancePopulationUaDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_UA_DESC',
  UserDevicesByUserIdVariancePopulationUserIdAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  UserDevicesByUserIdVariancePopulationUserIdDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  UserDevicesByUserIdVarianceSampleTokenAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_TOKEN_ASC',
  UserDevicesByUserIdVarianceSampleTokenDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_TOKEN_DESC',
  UserDevicesByUserIdVarianceSampleUaAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_UA_ASC',
  UserDevicesByUserIdVarianceSampleUaDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_UA_DESC',
  UserDevicesByUserIdVarianceSampleUserIdAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  UserDevicesByUserIdVarianceSampleUserIdDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC'
}

/** All input for the create mn`Notification` mutation. */
export type MnCreateNotificationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The one or many `Notification` to be created by this mutation. */
  mnNotification?: InputMaybe<Array<NotificationInput>>;
};

/** All input for the delete `mnDeleteNotification` mutation. */
export type MnDeleteNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The one or many `Notification` to be deleted. You must provide the PK values! */
  mnPatch?: InputMaybe<Array<NotificationPatch>>;
};

/** All input for the update `mnUpdateNotification` mutation. */
export type MnUpdateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The one or many `Notification` to be updated. */
  mnPatch?: InputMaybe<Array<NotificationPatch>>;
};

export type InitProfileMutationVariables = Exact<{
  oidcId: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
}>;


export type InitProfileMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };

export type ToggleIsReadMutationVariables = Exact<{
  id: Scalars['String']['input'];
  isRead: Scalars['Boolean']['input'];
}>;


export type ToggleIsReadMutation = { __typename?: 'Mutation', updateNotification?: { __typename?: 'UpdateNotificationPayload', clientMutationId?: string | null } | null };

export type Get_CategoriesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', type: Typetransaction, id: string, name: string, icon?: string | null, iconColor?: string | null }> } | null };

export type AddTransactionMutationVariables = Exact<{
  user_id: Scalars['String']['input'];
  category_id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  date: Scalars['Datetime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  transaction_id: Scalars['String']['input'];
  type: Typetransaction;
}>;


export type AddTransactionMutation = { __typename?: 'Mutation', createTransaction?: { __typename?: 'CreateTransactionPayload', clientMutationId?: string | null } | null };

export type Edit_Transaction1MutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  date: Scalars['Datetime']['input'];
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  type: Typetransaction;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_Transaction1Mutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'UpdateTransactionPayload', transaction?: { __typename?: 'Transaction', transactionId: string, type: Typetransaction, date?: any | null, categoryId?: string | null, description?: string | null, amount: number } | null } | null };

export type Get_Budget_For_CategoryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  month: Scalars['Datetime']['input'];
}>;


export type Get_Budget_For_CategoryQuery = { __typename?: 'Query', budgets?: { __typename?: 'BudgetsConnection', nodes: Array<{ __typename?: 'Budget', budgetId: string, userId?: string | null, categoryId?: string | null, amount?: number | null, month?: any | null, alertThreshold?: number | null }> } | null };

export type Get_Transactions_For_CategoryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  start: Scalars['Datetime']['input'];
  end: Scalars['Datetime']['input'];
}>;


export type Get_Transactions_For_CategoryQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, amount: number, date?: any | null }>, aggregates?: { __typename?: 'TransactionAggregates', sum?: { __typename?: 'TransactionSumAggregates', amount: number } | null } | null } | null };

export type ProfileFragment = { __typename?: 'User', firstName?: string | null, lastName?: string | null, gender?: UserGender | null, email?: string | null, tel?: string | null, picture?: string | null, date?: any | null } & { ' $fragmentName'?: 'ProfileFragment' };

export type GetUsersDevicesQueryVariables = Exact<{
  usersIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetUsersDevicesQuery = { __typename?: 'Query', userDevices?: { __typename?: 'UserDevicesConnection', nodes: Array<{ __typename?: 'UserDevice', userId: string, token: string }> } | null };

export type NotifyUsersMutationVariables = Exact<{
  notifications?: InputMaybe<Array<NotificationInput> | NotificationInput>;
}>;


export type NotifyUsersMutation = { __typename?: 'Mutation', mnCreateNotification?: { __typename?: 'mnCreateNotificationPayload', clientMutationId?: string | null } | null };

export type GetProfileQueryVariables = Exact<{
  oidcId: Scalars['String']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', user?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'ProfileFragment': ProfileFragment } }
  ) | null };

export type ProfileSubSubscriptionVariables = Exact<{
  oidcId: Scalars['String']['input'];
}>;


export type ProfileSubSubscription = { __typename?: 'Subscription', user?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'ProfileFragment': ProfileFragment } }
  ) | null };

export type Get_User_TransactionsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_TransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, date?: any | null, amount: number }> } | null };

export type Get_User_CategoriesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction }> } | null };

export type AddBudgetMutationVariables = Exact<{
  budget_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  category_id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  month: Scalars['Datetime']['input'];
  alert_threshold?: InputMaybe<Scalars['Int']['input']>;
  created_at: Scalars['Datetime']['input'];
}>;


export type AddBudgetMutation = { __typename?: 'Mutation', createBudget?: { __typename?: 'CreateBudgetPayload', clientMutationId?: string | null } | null };

export type Get_BudgetsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_BudgetsQuery = { __typename?: 'Query', budgets?: { __typename?: 'BudgetsConnection', nodes: Array<{ __typename?: 'Budget', budgetId: string, userId?: string | null, categoryId?: string | null, amount?: number | null, month?: any | null, alertThreshold?: number | null, createdAt?: any | null, category?: { __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction } | null }> } | null };

export type Get_User_Transactions2QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_Transactions2Query = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, categoryId?: string | null, date?: any | null, amount: number, category?: { __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction } | null }> } | null };

export type Delete_BudgetMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_BudgetMutation = { __typename?: 'Mutation', deleteBudget?: { __typename?: 'DeleteBudgetPayload', clientMutationId?: string | null } | null };

export type Edit_BudgetMutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  month: Scalars['Datetime']['input'];
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_BudgetMutation = { __typename?: 'Mutation', updateBudget?: { __typename?: 'UpdateBudgetPayload', budget?: { __typename?: 'Budget', budgetId: string, userId?: string | null, categoryId?: string | null, amount?: number | null, month?: any | null, alertThreshold?: number | null } | null } | null };

export type Check_Category_TransactionsQueryVariables = Exact<{
  category_id: Scalars['String']['input'];
}>;


export type Check_Category_TransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string }> } | null };

export type Get_User_Categories3QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_Categories3Query = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction }> } | null };

export type Add_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  iconColor: Scalars['String']['input'];
  type: Typetransaction;
}>;


export type Add_CategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'CreateCategoryPayload', clientMutationId?: string | null } | null };

export type Delete_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_CategoryMutation = { __typename?: 'Mutation', deleteCategory?: { __typename?: 'DeleteCategoryPayload', clientMutationId?: string | null } | null };

export type Update_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  iconColor: Scalars['String']['input'];
  type: Typetransaction;
}>;


export type Update_CategoryMutation = { __typename?: 'Mutation', updateCategory?: { __typename?: 'UpdateCategoryPayload', clientMutationId?: string | null } | null };

export type NotifsSubscriptionVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type NotifsSubscription = { __typename?: 'Subscription', notifications?: { __typename?: 'NotificationsConnection', nodes: Array<{ __typename?: 'Notification', id: string, t: any, isRead: boolean, data: { [key: string]: any } }> } | null };

export type Get_Transactions3QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_Transactions3Query = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, date?: any | null, amount: number, category?: { __typename?: 'Category', id: string, name: string } | null }> } | null };

export type SetUserTokenMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  ua?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type SetUserTokenMutation = { __typename?: 'Mutation', upsertUserDevice?: { __typename?: 'UpsertUserDevicePayload', clientMutationId?: string | null } | null };

export type Get_Transactions4QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_Transactions4Query = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, userId?: string | null, categoryId?: string | null, date?: any | null, description?: string | null, amount: number, category?: { __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction } | null }> } | null, categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction }> } | null };

export type Delete_TransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_TransactionMutation = { __typename?: 'Mutation', deleteTransaction?: { __typename?: 'DeleteTransactionPayload', clientMutationId?: string | null } | null };

export type Edit_Transaction2MutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  date: Scalars['Datetime']['input'];
  description: Scalars['String']['input'];
  type: Typetransaction;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_Transaction2Mutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'UpdateTransactionPayload', transaction?: { __typename?: 'Transaction', transactionId: string, type: Typetransaction, categoryId?: string | null, date?: any | null, description?: string | null, amount: number } | null } | null };

export type Login_UserQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Login_UserQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', password?: string | null, email?: string | null, oidcId: string, firstName?: string | null, lastName?: string | null, gender?: UserGender | null }> } | null };

export type CreateOtpVerificationMutationVariables = Exact<{
  input: CreateOtpVerificationInput;
}>;


export type CreateOtpVerificationMutation = { __typename?: 'Mutation', createOtpVerification?: { __typename?: 'CreateOtpVerificationPayload', otpVerification?: { __typename?: 'OtpVerification', id: string, otp: string, expiresAt: any, email?: string | null } | null } | null };

export type Get_UserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type Get_UserQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', email?: string | null, oidcId: string, firstName?: string | null, lastName?: string | null, gender?: UserGender | null }> } | null };

export type MyMutationMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type MyMutationMutation = { __typename?: 'Mutation', deleteOtpVerification?: { __typename?: 'DeleteOtpVerificationPayload', clientMutationId?: string | null, deletedOtpVerificationNodeId?: string | null } | null };

export type Check_OtpQueryVariables = Exact<{
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type Check_OtpQuery = { __typename?: 'Query', otpVerifications?: { __typename?: 'OtpVerificationsConnection', nodes: Array<{ __typename?: 'OtpVerification', id: string, otp: string, email?: string | null, expiresAt: any }> } | null };

export type SignupMutationVariables = Exact<{
  id: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };

export const ProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<ProfileFragment, unknown>;
export const InitProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"picture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"picture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"picture"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<InitProfileMutation, InitProfileMutationVariables>;
export const ToggleIsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleIsRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isRead"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"patch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isRead"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isRead"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<ToggleIsReadMutation, ToggleIsReadMutationVariables>;
export const Get_CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_CATEGORIES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}}]}}]}}]}}]} as unknown as DocumentNode<Get_CategoriesQuery, Get_CategoriesQueryVariables>;
export const AddTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transaction_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"transaction"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transaction_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<AddTransactionMutation, AddTransactionMutationVariables>;
export const Edit_Transaction1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TRANSACTION1"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"patch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"clientMutationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<Edit_Transaction1Mutation, Edit_Transaction1MutationVariables>;
export const Get_Budget_For_CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_BUDGET_FOR_CATEGORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budgets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"month"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budgetId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Budget_For_CategoryQuery, Get_Budget_For_CategoryQueryVariables>;
export const Get_Transactions_For_CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_TRANSACTIONS_FOR_CATEGORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"EXPENSE"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"greaterThanOrEqualTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lessThanOrEqualTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Transactions_For_CategoryQuery, Get_Transactions_For_CategoryQueryVariables>;
export const GetUsersDevicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersDevices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usersIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDevices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usersIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersDevicesQuery, GetUsersDevicesQueryVariables>;
export const NotifyUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NotifyUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notifications"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mnCreateNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mnNotification"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notifications"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<NotifyUsersMutation, NotifyUsersMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const ProfileSubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ProfileSub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<ProfileSubSubscription, ProfileSubSubscriptionVariables>;
export const Get_User_TransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_TRANSACTIONS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"DATE_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<Get_User_TransactionsQuery, Get_User_TransactionsQueryVariables>;
export const Get_User_CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_CATEGORIES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"EXPENSE"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<Get_User_CategoriesQuery, Get_User_CategoriesQueryVariables>;
export const AddBudgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddBudget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"budget_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alert_threshold"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBudget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"budget"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"budgetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"budget_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"month"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"alertThreshold"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alert_threshold"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<AddBudgetMutation, AddBudgetMutationVariables>;
export const Get_BudgetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_BUDGETS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budgets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budgetId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_BudgetsQuery, Get_BudgetsQueryVariables>;
export const Get_User_Transactions2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_TRANSACTIONS2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"DATE_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_User_Transactions2Query, Get_User_Transactions2QueryVariables>;
export const Delete_BudgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_BUDGET"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBudget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"budgetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Delete_BudgetMutation, Delete_BudgetMutationVariables>;
export const Edit_BudgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_BUDGET"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alertThreshold"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBudget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"patch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"month"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"alertThreshold"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alertThreshold"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"budgetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"clientMutationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budgetId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}}]}}]}}]}}]} as unknown as DocumentNode<Edit_BudgetMutation, Edit_BudgetMutationVariables>;
export const Check_Category_TransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CHECK_CATEGORY_TRANSACTIONS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}}]}}]}}]}}]} as unknown as DocumentNode<Check_Category_TransactionsQuery, Check_Category_TransactionsQueryVariables>;
export const Get_User_Categories3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_CATEGORIES3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<Get_User_Categories3Query, Get_User_Categories3QueryVariables>;
export const Add_CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_CATEGORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"icon"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"iconColor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"icon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"icon"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"iconColor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"iconColor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Add_CategoryMutation, Add_CategoryMutationVariables>;
export const Delete_CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_CATEGORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Delete_CategoryMutation, Delete_CategoryMutationVariables>;
export const Update_CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_CATEGORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"icon"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"iconColor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"patch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"icon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"icon"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"iconColor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"iconColor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Update_CategoryMutation, Update_CategoryMutationVariables>;
export const NotifsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Notifs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"T_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"t"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]} as unknown as DocumentNode<NotifsSubscription, NotifsSubscriptionVariables>;
export const Get_Transactions3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_TRANSACTIONS3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"DATE_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Transactions3Query, Get_Transactions3QueryVariables>;
export const SetUserTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetUserToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ua"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertUserDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userDevice"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ua"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ua"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<SetUserTokenMutation, SetUserTokenMutationVariables>;
export const Get_Transactions4Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_TRANSACTIONS4"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"DATE_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"iconColor"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Transactions4Query, Get_Transactions4QueryVariables>;
export const Delete_TransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TRANSACTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Delete_TransactionMutation, Delete_TransactionMutationVariables>;
export const Edit_Transaction2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TRANSACTION2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"patch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"clientMutationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<Edit_Transaction2Mutation, Edit_Transaction2MutationVariables>;
export const Login_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LOGIN_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"oidcId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<Login_UserQuery, Login_UserQueryVariables>;
export const CreateOtpVerificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOtpVerification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOtpVerificationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOtpVerification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otpVerification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"otp"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CreateOtpVerificationMutation, CreateOtpVerificationMutationVariables>;
export const Get_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"oidcId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<Get_UserQuery, Get_UserQueryVariables>;
export const MyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOtpVerification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedOtpVerificationNodeId"}}]}}]}}]} as unknown as DocumentNode<MyMutationMutation, MyMutationMutationVariables>;
export const Check_OtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CHECK_OTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otpVerifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"otp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"otp"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]}}]} as unknown as DocumentNode<Check_OtpQuery, Check_OtpQueryVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: { input: any; output: any; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: { [key: string]: any }; output: { [key: string]: any }; }
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type Budget = Node & {
  __typename?: 'Budget';
  alertThreshold?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  budgetId: Scalars['String']['output'];
  /** Reads a single `Category` that is related to this `Budget`. */
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  month?: Maybe<Scalars['Datetime']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `User` that is related to this `Budget`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BudgetAggregates = {
  __typename?: 'BudgetAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<BudgetAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BudgetDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<BudgetMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<BudgetMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<BudgetStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<BudgetStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<BudgetSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<BudgetVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<BudgetVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Budget` object types. */
export type BudgetAggregatesFilter = {
  /** Mean average aggregate over matching `Budget` objects. */
  average?: InputMaybe<BudgetAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Budget` objects. */
  distinctCount?: InputMaybe<BudgetDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Budget` object to be included within the aggregate. */
  filter?: InputMaybe<BudgetFilter>;
  /** Maximum aggregate over matching `Budget` objects. */
  max?: InputMaybe<BudgetMaxAggregateFilter>;
  /** Minimum aggregate over matching `Budget` objects. */
  min?: InputMaybe<BudgetMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Budget` objects. */
  stddevPopulation?: InputMaybe<BudgetStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Budget` objects. */
  stddevSample?: InputMaybe<BudgetStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Budget` objects. */
  sum?: InputMaybe<BudgetSumAggregateFilter>;
  /** Population variance aggregate over matching `Budget` objects. */
  variancePopulation?: InputMaybe<BudgetVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Budget` objects. */
  varianceSample?: InputMaybe<BudgetVarianceSampleAggregateFilter>;
};

export type BudgetAverageAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetAverageAggregates = {
  __typename?: 'BudgetAverageAggregates';
  /** Mean average of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

/** A condition to be used against `Budget` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BudgetCondition = {
  /** Checks for equality with the object’s `alertThreshold` field. */
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `budgetId` field. */
  budgetId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `month` field. */
  month?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BudgetDistinctCountAggregateFilter = {
  alertThreshold?: InputMaybe<BigIntFilter>;
  amount?: InputMaybe<BigIntFilter>;
  budgetId?: InputMaybe<BigIntFilter>;
  categoryId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  month?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type BudgetDistinctCountAggregates = {
  __typename?: 'BudgetDistinctCountAggregates';
  /** Distinct count of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of amount across the matching connection */
  amount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of budgetId across the matching connection */
  budgetId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of month across the matching connection */
  month?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Budget` object types. All fields are combined with a logical ‘and.’ */
export type BudgetFilter = {
  /** Filter by the object’s `alertThreshold` field. */
  alertThreshold?: InputMaybe<IntFilter>;
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BudgetFilter>>;
  /** Filter by the object’s `budgetId` field. */
  budgetId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** A related `category` exists. */
  categoryExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `month` field. */
  month?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BudgetFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BudgetFilter>>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Budget` for usage during aggregation. */
export enum BudgetGroupBy {
  AlertThreshold = 'ALERT_THRESHOLD',
  Amount = 'AMOUNT',
  CategoryId = 'CATEGORY_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Month = 'MONTH',
  MonthTruncatedToDay = 'MONTH_TRUNCATED_TO_DAY',
  MonthTruncatedToHour = 'MONTH_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type BudgetHavingAverageInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingDistinctCountInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Budget` aggregates. */
export type BudgetHavingInput = {
  AND?: InputMaybe<Array<BudgetHavingInput>>;
  OR?: InputMaybe<Array<BudgetHavingInput>>;
  average?: InputMaybe<BudgetHavingAverageInput>;
  distinctCount?: InputMaybe<BudgetHavingDistinctCountInput>;
  max?: InputMaybe<BudgetHavingMaxInput>;
  min?: InputMaybe<BudgetHavingMinInput>;
  stddevPopulation?: InputMaybe<BudgetHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<BudgetHavingStddevSampleInput>;
  sum?: InputMaybe<BudgetHavingSumInput>;
  variancePopulation?: InputMaybe<BudgetHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<BudgetHavingVarianceSampleInput>;
};

export type BudgetHavingMaxInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingMinInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevPopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingSumInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVariancePopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVarianceSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Budget` */
export type BudgetInput = {
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  month?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BudgetMaxAggregateFilter = {
  alertThreshold?: InputMaybe<IntFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetMaxAggregates = {
  __typename?: 'BudgetMaxAggregates';
  /** Maximum of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['Int']['output']>;
  /** Maximum of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type BudgetMinAggregateFilter = {
  alertThreshold?: InputMaybe<IntFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetMinAggregates = {
  __typename?: 'BudgetMinAggregates';
  /** Minimum of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['Int']['output']>;
  /** Minimum of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Represents an update to a `Budget`. Fields that are set will be updated. */
export type BudgetPatch = {
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  month?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BudgetStddevPopulationAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetStddevPopulationAggregates = {
  __typename?: 'BudgetStddevPopulationAggregates';
  /** Population standard deviation of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type BudgetStddevSampleAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetStddevSampleAggregates = {
  __typename?: 'BudgetStddevSampleAggregates';
  /** Sample standard deviation of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type BudgetSumAggregateFilter = {
  alertThreshold?: InputMaybe<BigIntFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetSumAggregates = {
  __typename?: 'BudgetSumAggregates';
  /** Sum of alertThreshold across the matching connection */
  alertThreshold: Scalars['BigInt']['output'];
  /** Sum of amount across the matching connection */
  amount: Scalars['Float']['output'];
};

export type BudgetVariancePopulationAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetVariancePopulationAggregates = {
  __typename?: 'BudgetVariancePopulationAggregates';
  /** Population variance of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type BudgetVarianceSampleAggregateFilter = {
  alertThreshold?: InputMaybe<BigFloatFilter>;
  amount?: InputMaybe<FloatFilter>;
};

export type BudgetVarianceSampleAggregates = {
  __typename?: 'BudgetVarianceSampleAggregates';
  /** Sample variance of alertThreshold across the matching connection */
  alertThreshold?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

/** A connection to a list of `Budget` values. */
export type BudgetsConnection = {
  __typename?: 'BudgetsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BudgetAggregates>;
  /** A list of edges which contains the `Budget` and cursor to aid in pagination. */
  edges: Array<BudgetsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BudgetAggregates>>;
  /** A list of `Budget` objects. */
  nodes: Array<Budget>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Budget` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Budget` values. */
export type BudgetsConnectionGroupedAggregatesArgs = {
  groupBy: Array<BudgetGroupBy>;
  having?: InputMaybe<BudgetHavingInput>;
};

/** A `Budget` edge in the connection. */
export type BudgetsEdge = {
  __typename?: 'BudgetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Budget` at the end of the edge. */
  node: Budget;
};

/** Methods to use when ordering `Budget`. */
export enum BudgetsOrderBy {
  AlertThresholdAsc = 'ALERT_THRESHOLD_ASC',
  AlertThresholdDesc = 'ALERT_THRESHOLD_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  BudgetIdAsc = 'BUDGET_ID_ASC',
  BudgetIdDesc = 'BUDGET_ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CategoryAggregates>;
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CategoryAggregates>>;
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Category` values. */
export type CategoriesConnectionGroupedAggregatesArgs = {
  groupBy: Array<CategoryGroupBy>;
  having?: InputMaybe<CategoryHavingInput>;
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Category` at the end of the edge. */
  node: Category;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  BudgetsByCategoryIdAverageAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdAverageAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdAverageAmountAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_AMOUNT_ASC',
  BudgetsByCategoryIdAverageAmountDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_AMOUNT_DESC',
  BudgetsByCategoryIdAverageBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_BUDGET_ID_ASC',
  BudgetsByCategoryIdAverageBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_BUDGET_ID_DESC',
  BudgetsByCategoryIdAverageCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_ASC',
  BudgetsByCategoryIdAverageCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_DESC',
  BudgetsByCategoryIdAverageCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CREATED_AT_ASC',
  BudgetsByCategoryIdAverageCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_CREATED_AT_DESC',
  BudgetsByCategoryIdAverageMonthAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_MONTH_ASC',
  BudgetsByCategoryIdAverageMonthDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_MONTH_DESC',
  BudgetsByCategoryIdAverageUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_USER_ID_ASC',
  BudgetsByCategoryIdAverageUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_AVERAGE_USER_ID_DESC',
  BudgetsByCategoryIdCountAsc = 'BUDGETS_BY_CATEGORY_ID_COUNT_ASC',
  BudgetsByCategoryIdCountDesc = 'BUDGETS_BY_CATEGORY_ID_COUNT_DESC',
  BudgetsByCategoryIdDistinctCountAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdDistinctCountAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdDistinctCountAmountAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_ASC',
  BudgetsByCategoryIdDistinctCountAmountDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_DESC',
  BudgetsByCategoryIdDistinctCountBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_BUDGET_ID_ASC',
  BudgetsByCategoryIdDistinctCountBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_BUDGET_ID_DESC',
  BudgetsByCategoryIdDistinctCountCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  BudgetsByCategoryIdDistinctCountCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  BudgetsByCategoryIdDistinctCountCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  BudgetsByCategoryIdDistinctCountCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  BudgetsByCategoryIdDistinctCountMonthAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_MONTH_ASC',
  BudgetsByCategoryIdDistinctCountMonthDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_MONTH_DESC',
  BudgetsByCategoryIdDistinctCountUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_ASC',
  BudgetsByCategoryIdDistinctCountUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_DESC',
  BudgetsByCategoryIdMaxAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdMaxAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdMaxAmountAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_AMOUNT_ASC',
  BudgetsByCategoryIdMaxAmountDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_AMOUNT_DESC',
  BudgetsByCategoryIdMaxBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_BUDGET_ID_ASC',
  BudgetsByCategoryIdMaxBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_BUDGET_ID_DESC',
  BudgetsByCategoryIdMaxCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_CATEGORY_ID_ASC',
  BudgetsByCategoryIdMaxCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_CATEGORY_ID_DESC',
  BudgetsByCategoryIdMaxCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_CREATED_AT_ASC',
  BudgetsByCategoryIdMaxCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_CREATED_AT_DESC',
  BudgetsByCategoryIdMaxMonthAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_MONTH_ASC',
  BudgetsByCategoryIdMaxMonthDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_MONTH_DESC',
  BudgetsByCategoryIdMaxUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_MAX_USER_ID_ASC',
  BudgetsByCategoryIdMaxUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_MAX_USER_ID_DESC',
  BudgetsByCategoryIdMinAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdMinAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdMinAmountAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_AMOUNT_ASC',
  BudgetsByCategoryIdMinAmountDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_AMOUNT_DESC',
  BudgetsByCategoryIdMinBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_BUDGET_ID_ASC',
  BudgetsByCategoryIdMinBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_BUDGET_ID_DESC',
  BudgetsByCategoryIdMinCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_CATEGORY_ID_ASC',
  BudgetsByCategoryIdMinCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_CATEGORY_ID_DESC',
  BudgetsByCategoryIdMinCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_CREATED_AT_ASC',
  BudgetsByCategoryIdMinCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_CREATED_AT_DESC',
  BudgetsByCategoryIdMinMonthAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_MONTH_ASC',
  BudgetsByCategoryIdMinMonthDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_MONTH_DESC',
  BudgetsByCategoryIdMinUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_MIN_USER_ID_ASC',
  BudgetsByCategoryIdMinUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_MIN_USER_ID_DESC',
  BudgetsByCategoryIdStddevPopulationAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdStddevPopulationAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdStddevPopulationAmountAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_ASC',
  BudgetsByCategoryIdStddevPopulationAmountDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_DESC',
  BudgetsByCategoryIdStddevPopulationBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_BUDGET_ID_ASC',
  BudgetsByCategoryIdStddevPopulationBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_BUDGET_ID_DESC',
  BudgetsByCategoryIdStddevPopulationCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  BudgetsByCategoryIdStddevPopulationCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  BudgetsByCategoryIdStddevPopulationCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  BudgetsByCategoryIdStddevPopulationCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  BudgetsByCategoryIdStddevPopulationMonthAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_MONTH_ASC',
  BudgetsByCategoryIdStddevPopulationMonthDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_MONTH_DESC',
  BudgetsByCategoryIdStddevPopulationUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_ASC',
  BudgetsByCategoryIdStddevPopulationUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_DESC',
  BudgetsByCategoryIdStddevSampleAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdStddevSampleAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdStddevSampleAmountAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  BudgetsByCategoryIdStddevSampleAmountDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  BudgetsByCategoryIdStddevSampleBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_BUDGET_ID_ASC',
  BudgetsByCategoryIdStddevSampleBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_BUDGET_ID_DESC',
  BudgetsByCategoryIdStddevSampleCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByCategoryIdStddevSampleCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByCategoryIdStddevSampleCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  BudgetsByCategoryIdStddevSampleCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  BudgetsByCategoryIdStddevSampleMonthAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_MONTH_ASC',
  BudgetsByCategoryIdStddevSampleMonthDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_MONTH_DESC',
  BudgetsByCategoryIdStddevSampleUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BudgetsByCategoryIdStddevSampleUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BudgetsByCategoryIdSumAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdSumAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdSumAmountAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_AMOUNT_ASC',
  BudgetsByCategoryIdSumAmountDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_AMOUNT_DESC',
  BudgetsByCategoryIdSumBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_BUDGET_ID_ASC',
  BudgetsByCategoryIdSumBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_BUDGET_ID_DESC',
  BudgetsByCategoryIdSumCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_CATEGORY_ID_ASC',
  BudgetsByCategoryIdSumCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_CATEGORY_ID_DESC',
  BudgetsByCategoryIdSumCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_CREATED_AT_ASC',
  BudgetsByCategoryIdSumCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_CREATED_AT_DESC',
  BudgetsByCategoryIdSumMonthAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_MONTH_ASC',
  BudgetsByCategoryIdSumMonthDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_MONTH_DESC',
  BudgetsByCategoryIdSumUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_SUM_USER_ID_ASC',
  BudgetsByCategoryIdSumUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_SUM_USER_ID_DESC',
  BudgetsByCategoryIdVariancePopulationAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdVariancePopulationAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdVariancePopulationAmountAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  BudgetsByCategoryIdVariancePopulationAmountDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  BudgetsByCategoryIdVariancePopulationBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_BUDGET_ID_ASC',
  BudgetsByCategoryIdVariancePopulationBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_BUDGET_ID_DESC',
  BudgetsByCategoryIdVariancePopulationCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  BudgetsByCategoryIdVariancePopulationCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  BudgetsByCategoryIdVariancePopulationCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  BudgetsByCategoryIdVariancePopulationCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  BudgetsByCategoryIdVariancePopulationMonthAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_MONTH_ASC',
  BudgetsByCategoryIdVariancePopulationMonthDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_MONTH_DESC',
  BudgetsByCategoryIdVariancePopulationUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BudgetsByCategoryIdVariancePopulationUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BudgetsByCategoryIdVarianceSampleAlertThresholdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByCategoryIdVarianceSampleAlertThresholdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByCategoryIdVarianceSampleAmountAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  BudgetsByCategoryIdVarianceSampleAmountDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  BudgetsByCategoryIdVarianceSampleBudgetIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_BUDGET_ID_ASC',
  BudgetsByCategoryIdVarianceSampleBudgetIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_BUDGET_ID_DESC',
  BudgetsByCategoryIdVarianceSampleCategoryIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByCategoryIdVarianceSampleCategoryIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByCategoryIdVarianceSampleCreatedAtAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  BudgetsByCategoryIdVarianceSampleCreatedAtDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  BudgetsByCategoryIdVarianceSampleMonthAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByCategoryIdVarianceSampleMonthDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByCategoryIdVarianceSampleUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByCategoryIdVarianceSampleUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  IconAsc = 'ICON_ASC',
  IconColorAsc = 'ICON_COLOR_ASC',
  IconColorDesc = 'ICON_COLOR_DESC',
  IconDesc = 'ICON_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TransactionsByCategoryIdAverageAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_AMOUNT_ASC',
  TransactionsByCategoryIdAverageAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_AMOUNT_DESC',
  TransactionsByCategoryIdAverageCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_ASC',
  TransactionsByCategoryIdAverageCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_CATEGORY_ID_DESC',
  TransactionsByCategoryIdAverageDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DATE_ASC',
  TransactionsByCategoryIdAverageDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DATE_DESC',
  TransactionsByCategoryIdAverageDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DESCRIPTION_ASC',
  TransactionsByCategoryIdAverageDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_DESCRIPTION_DESC',
  TransactionsByCategoryIdAverageTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdAverageTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdAverageTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TYPE_ASC',
  TransactionsByCategoryIdAverageTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_TYPE_DESC',
  TransactionsByCategoryIdAverageUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_USER_ID_ASC',
  TransactionsByCategoryIdAverageUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_AVERAGE_USER_ID_DESC',
  TransactionsByCategoryIdCountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_COUNT_ASC',
  TransactionsByCategoryIdCountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_COUNT_DESC',
  TransactionsByCategoryIdDistinctCountAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_ASC',
  TransactionsByCategoryIdDistinctCountAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_AMOUNT_DESC',
  TransactionsByCategoryIdDistinctCountCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  TransactionsByCategoryIdDistinctCountCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  TransactionsByCategoryIdDistinctCountDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DATE_ASC',
  TransactionsByCategoryIdDistinctCountDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DATE_DESC',
  TransactionsByCategoryIdDistinctCountDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  TransactionsByCategoryIdDistinctCountDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  TransactionsByCategoryIdDistinctCountTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdDistinctCountTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdDistinctCountTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TYPE_ASC',
  TransactionsByCategoryIdDistinctCountTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_TYPE_DESC',
  TransactionsByCategoryIdDistinctCountUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_ASC',
  TransactionsByCategoryIdDistinctCountUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_DISTINCT_COUNT_USER_ID_DESC',
  TransactionsByCategoryIdMaxAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_AMOUNT_ASC',
  TransactionsByCategoryIdMaxAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_AMOUNT_DESC',
  TransactionsByCategoryIdMaxCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_CATEGORY_ID_ASC',
  TransactionsByCategoryIdMaxCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_CATEGORY_ID_DESC',
  TransactionsByCategoryIdMaxDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DATE_ASC',
  TransactionsByCategoryIdMaxDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DATE_DESC',
  TransactionsByCategoryIdMaxDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DESCRIPTION_ASC',
  TransactionsByCategoryIdMaxDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_DESCRIPTION_DESC',
  TransactionsByCategoryIdMaxTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdMaxTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdMaxTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TYPE_ASC',
  TransactionsByCategoryIdMaxTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_TYPE_DESC',
  TransactionsByCategoryIdMaxUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_USER_ID_ASC',
  TransactionsByCategoryIdMaxUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MAX_USER_ID_DESC',
  TransactionsByCategoryIdMinAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_AMOUNT_ASC',
  TransactionsByCategoryIdMinAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_AMOUNT_DESC',
  TransactionsByCategoryIdMinCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_CATEGORY_ID_ASC',
  TransactionsByCategoryIdMinCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_CATEGORY_ID_DESC',
  TransactionsByCategoryIdMinDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DATE_ASC',
  TransactionsByCategoryIdMinDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DATE_DESC',
  TransactionsByCategoryIdMinDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DESCRIPTION_ASC',
  TransactionsByCategoryIdMinDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_DESCRIPTION_DESC',
  TransactionsByCategoryIdMinTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdMinTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdMinTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TYPE_ASC',
  TransactionsByCategoryIdMinTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_TYPE_DESC',
  TransactionsByCategoryIdMinUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_USER_ID_ASC',
  TransactionsByCategoryIdMinUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_MIN_USER_ID_DESC',
  TransactionsByCategoryIdStddevPopulationAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_ASC',
  TransactionsByCategoryIdStddevPopulationAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_AMOUNT_DESC',
  TransactionsByCategoryIdStddevPopulationCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  TransactionsByCategoryIdStddevPopulationCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  TransactionsByCategoryIdStddevPopulationDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DATE_ASC',
  TransactionsByCategoryIdStddevPopulationDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DATE_DESC',
  TransactionsByCategoryIdStddevPopulationDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  TransactionsByCategoryIdStddevPopulationDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  TransactionsByCategoryIdStddevPopulationTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdStddevPopulationTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdStddevPopulationTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TYPE_ASC',
  TransactionsByCategoryIdStddevPopulationTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_TYPE_DESC',
  TransactionsByCategoryIdStddevPopulationUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_ASC',
  TransactionsByCategoryIdStddevPopulationUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_POPULATION_USER_ID_DESC',
  TransactionsByCategoryIdStddevSampleAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  TransactionsByCategoryIdStddevSampleAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  TransactionsByCategoryIdStddevSampleCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByCategoryIdStddevSampleCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByCategoryIdStddevSampleDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DATE_ASC',
  TransactionsByCategoryIdStddevSampleDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DATE_DESC',
  TransactionsByCategoryIdStddevSampleDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  TransactionsByCategoryIdStddevSampleDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  TransactionsByCategoryIdStddevSampleTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdStddevSampleTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdStddevSampleTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TYPE_ASC',
  TransactionsByCategoryIdStddevSampleTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_TYPE_DESC',
  TransactionsByCategoryIdStddevSampleUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TransactionsByCategoryIdStddevSampleUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TransactionsByCategoryIdSumAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_AMOUNT_ASC',
  TransactionsByCategoryIdSumAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_AMOUNT_DESC',
  TransactionsByCategoryIdSumCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_CATEGORY_ID_ASC',
  TransactionsByCategoryIdSumCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_CATEGORY_ID_DESC',
  TransactionsByCategoryIdSumDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DATE_ASC',
  TransactionsByCategoryIdSumDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DATE_DESC',
  TransactionsByCategoryIdSumDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DESCRIPTION_ASC',
  TransactionsByCategoryIdSumDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_DESCRIPTION_DESC',
  TransactionsByCategoryIdSumTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdSumTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdSumTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TYPE_ASC',
  TransactionsByCategoryIdSumTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_TYPE_DESC',
  TransactionsByCategoryIdSumUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_USER_ID_ASC',
  TransactionsByCategoryIdSumUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_SUM_USER_ID_DESC',
  TransactionsByCategoryIdVariancePopulationAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  TransactionsByCategoryIdVariancePopulationAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  TransactionsByCategoryIdVariancePopulationCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  TransactionsByCategoryIdVariancePopulationCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  TransactionsByCategoryIdVariancePopulationDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DATE_ASC',
  TransactionsByCategoryIdVariancePopulationDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DATE_DESC',
  TransactionsByCategoryIdVariancePopulationDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  TransactionsByCategoryIdVariancePopulationDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  TransactionsByCategoryIdVariancePopulationTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdVariancePopulationTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdVariancePopulationTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TYPE_ASC',
  TransactionsByCategoryIdVariancePopulationTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_TYPE_DESC',
  TransactionsByCategoryIdVariancePopulationUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TransactionsByCategoryIdVariancePopulationUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TransactionsByCategoryIdVarianceSampleAmountAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  TransactionsByCategoryIdVarianceSampleAmountDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  TransactionsByCategoryIdVarianceSampleCategoryIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByCategoryIdVarianceSampleCategoryIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByCategoryIdVarianceSampleDateAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DATE_ASC',
  TransactionsByCategoryIdVarianceSampleDateDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DATE_DESC',
  TransactionsByCategoryIdVarianceSampleDescriptionAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  TransactionsByCategoryIdVarianceSampleDescriptionDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  TransactionsByCategoryIdVarianceSampleTransactionIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByCategoryIdVarianceSampleTransactionIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByCategoryIdVarianceSampleTypeAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TYPE_ASC',
  TransactionsByCategoryIdVarianceSampleTypeDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_TYPE_DESC',
  TransactionsByCategoryIdVarianceSampleUserIdAsc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TransactionsByCategoryIdVarianceSampleUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Category = Node & {
  __typename?: 'Category';
  /** Reads and enables pagination through a set of `Budget`. */
  budgetsByCategoryId: BudgetsConnection;
  icon?: Maybe<Scalars['String']['output']>;
  iconColor?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Transaction`. */
  transactionsByCategoryId: TransactionsConnection;
  type: Typetransaction;
  /** Reads a single `User` that is related to this `Category`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type CategoryBudgetsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BudgetCondition>;
  filter?: InputMaybe<BudgetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};


export type CategoryTransactionsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TransactionCondition>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};

export type CategoryAggregates = {
  __typename?: 'CategoryAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CategoryDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `Category` object types. */
export type CategoryAggregatesFilter = {
  /** Distinct count aggregate over matching `Category` objects. */
  distinctCount?: InputMaybe<CategoryDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Category` object to be included within the aggregate. */
  filter?: InputMaybe<CategoryFilter>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `icon` field. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `iconColor` field. */
  iconColor?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Typetransaction>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDistinctCountAggregateFilter = {
  icon?: InputMaybe<BigIntFilter>;
  iconColor?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  type?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type CategoryDistinctCountAggregates = {
  __typename?: 'CategoryDistinctCountAggregates';
  /** Distinct count of icon across the matching connection */
  icon?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of iconColor across the matching connection */
  iconColor?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `budgetsByCategoryId` relation. */
  budgetsByCategoryId?: InputMaybe<CategoryToManyBudgetFilter>;
  /** Some related `budgetsByCategoryId` exist. */
  budgetsByCategoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `icon` field. */
  icon?: InputMaybe<StringFilter>;
  /** Filter by the object’s `iconColor` field. */
  iconColor?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `transactionsByCategoryId` relation. */
  transactionsByCategoryId?: InputMaybe<CategoryToManyTransactionFilter>;
  /** Some related `transactionsByCategoryId` exist. */
  transactionsByCategoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<TypetransactionFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Category` for usage during aggregation. */
export enum CategoryGroupBy {
  Icon = 'ICON',
  IconColor = 'ICON_COLOR',
  Name = 'NAME',
  Type = 'TYPE',
  UserId = 'USER_ID'
}

/** Conditions for `Category` aggregates. */
export type CategoryHavingInput = {
  AND?: InputMaybe<Array<CategoryHavingInput>>;
  OR?: InputMaybe<Array<CategoryHavingInput>>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  iconColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  icon?: InputMaybe<Scalars['String']['input']>;
  iconColor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Budget` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyBudgetFilter = {
  /** Aggregates across related `Budget` match the filter criteria. */
  aggregates?: InputMaybe<BudgetAggregatesFilter>;
  /** Every related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BudgetFilter>;
  /** No related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BudgetFilter>;
  /** Some related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BudgetFilter>;
};

/** A filter to be used against many `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyTransactionFilter = {
  /** Aggregates across related `Transaction` match the filter criteria. */
  aggregates?: InputMaybe<TransactionAggregatesFilter>;
  /** Every related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TransactionFilter>;
  /** No related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TransactionFilter>;
  /** Some related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TransactionFilter>;
};

/** All input for the create `Budget` mutation. */
export type CreateBudgetInput = {
  /** The `Budget` to be created by this mutation. */
  budget: BudgetInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Budget` mutation. */
export type CreateBudgetPayload = {
  __typename?: 'CreateBudgetPayload';
  /** The `Budget` that was created by this mutation. */
  budget?: Maybe<Budget>;
  /** An edge for our `Budget`. May be used by Relay 1. */
  budgetEdge?: Maybe<BudgetsEdge>;
  /** Reads a single `Category` that is related to this `Budget`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Budget`. */
  user?: Maybe<User>;
};


/** The output of our create `Budget` mutation. */
export type CreateBudgetPayloadBudgetEdgeArgs = {
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Category`. */
  user?: Maybe<User>;
};


/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `Notification` mutation. */
export type CreateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Notification` to be created by this mutation. */
  notification: NotificationInput;
};

/** The output of our create `Notification` mutation. */
export type CreateNotificationPayload = {
  __typename?: 'CreateNotificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was created by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our create `Notification` mutation. */
export type CreateNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** All input for the create `OtpVerification` mutation. */
export type CreateOtpVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OtpVerification` to be created by this mutation. */
  otpVerification: OtpVerificationInput;
};

/** The output of our create `OtpVerification` mutation. */
export type CreateOtpVerificationPayload = {
  __typename?: 'CreateOtpVerificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `OtpVerification` that was created by this mutation. */
  otpVerification?: Maybe<OtpVerification>;
  /** An edge for our `OtpVerification`. May be used by Relay 1. */
  otpVerificationEdge?: Maybe<OtpVerificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `OtpVerification`. */
  user?: Maybe<User>;
};


/** The output of our create `OtpVerification` mutation. */
export type CreateOtpVerificationPayloadOtpVerificationEdgeArgs = {
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};

/** All input for the create `Report` mutation. */
export type CreateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Report` to be created by this mutation. */
  report: ReportInput;
};

/** The output of our create `Report` mutation. */
export type CreateReportPayload = {
  __typename?: 'CreateReportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Report` that was created by this mutation. */
  report?: Maybe<Report>;
  /** An edge for our `Report`. May be used by Relay 1. */
  reportEdge?: Maybe<ReportsEdge>;
  /** Reads a single `User` that is related to this `Report`. */
  user?: Maybe<User>;
};


/** The output of our create `Report` mutation. */
export type CreateReportPayloadReportEdgeArgs = {
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};

/** All input for the create `Transaction` mutation. */
export type CreateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Transaction` to be created by this mutation. */
  transaction: TransactionInput;
};

/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayload = {
  __typename?: 'CreateTransactionPayload';
  /** Reads a single `Category` that is related to this `Transaction`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was created by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
  /** Reads a single `User` that is related to this `Transaction`. */
  user?: Maybe<User>;
};


/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};

/** All input for the create `UserDevice` mutation. */
export type CreateUserDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `UserDevice` to be created by this mutation. */
  userDevice: UserDeviceInput;
};

/** The output of our create `UserDevice` mutation. */
export type CreateUserDevicePayload = {
  __typename?: 'CreateUserDevicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserDevice`. */
  user?: Maybe<User>;
  /** The `UserDevice` that was created by this mutation. */
  userDevice?: Maybe<UserDevice>;
  /** An edge for our `UserDevice`. May be used by Relay 1. */
  userDeviceEdge?: Maybe<UserDevicesEdge>;
};


/** The output of our create `UserDevice` mutation. */
export type CreateUserDevicePayloadUserDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

/** All input for the `deleteBudgetByNodeId` mutation. */
export type DeleteBudgetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Budget` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteBudget` mutation. */
export type DeleteBudgetInput = {
  budgetId: Scalars['String']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our delete `Budget` mutation. */
export type DeleteBudgetPayload = {
  __typename?: 'DeleteBudgetPayload';
  /** The `Budget` that was deleted by this mutation. */
  budget?: Maybe<Budget>;
  /** An edge for our `Budget`. May be used by Relay 1. */
  budgetEdge?: Maybe<BudgetsEdge>;
  /** Reads a single `Category` that is related to this `Budget`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBudgetNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Budget`. */
  user?: Maybe<User>;
};


/** The output of our delete `Budget` mutation. */
export type DeleteBudgetPayloadBudgetEdgeArgs = {
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};

/** All input for the `deleteCategoryByNodeId` mutation. */
export type DeleteCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCategoryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Category`. */
  user?: Maybe<User>;
};


/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteNotificationByNodeId` mutation. */
export type DeleteNotificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Notification` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteNotification` mutation. */
export type DeleteNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `Notification` mutation. */
export type DeleteNotificationPayload = {
  __typename?: 'DeleteNotificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedNotificationNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Notification` that was deleted by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our delete `Notification` mutation. */
export type DeleteNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** All input for the `deleteOtpVerificationByNodeId` mutation. */
export type DeleteOtpVerificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OtpVerification` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOtpVerification` mutation. */
export type DeleteOtpVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `OtpVerification` mutation. */
export type DeleteOtpVerificationPayload = {
  __typename?: 'DeleteOtpVerificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOtpVerificationNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `OtpVerification` that was deleted by this mutation. */
  otpVerification?: Maybe<OtpVerification>;
  /** An edge for our `OtpVerification`. May be used by Relay 1. */
  otpVerificationEdge?: Maybe<OtpVerificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `OtpVerification`. */
  user?: Maybe<User>;
};


/** The output of our delete `OtpVerification` mutation. */
export type DeleteOtpVerificationPayloadOtpVerificationEdgeArgs = {
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};

/** All input for the `deleteReportByNodeId` mutation. */
export type DeleteReportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Report` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteReport` mutation. */
export type DeleteReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['String']['input'];
};

/** The output of our delete `Report` mutation. */
export type DeleteReportPayload = {
  __typename?: 'DeleteReportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedReportNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Report` that was deleted by this mutation. */
  report?: Maybe<Report>;
  /** An edge for our `Report`. May be used by Relay 1. */
  reportEdge?: Maybe<ReportsEdge>;
  /** Reads a single `User` that is related to this `Report`. */
  user?: Maybe<User>;
};


/** The output of our delete `Report` mutation. */
export type DeleteReportPayloadReportEdgeArgs = {
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};

/** All input for the `deleteTransactionByNodeId` mutation. */
export type DeleteTransactionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteTransaction` mutation. */
export type DeleteTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['String']['input'];
};

/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayload = {
  __typename?: 'DeleteTransactionPayload';
  /** Reads a single `Category` that is related to this `Transaction`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTransactionNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was deleted by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
  /** Reads a single `User` that is related to this `Transaction`. */
  user?: Maybe<User>;
};


/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayloadTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteUserDeviceByNodeId` mutation. */
export type DeleteUserDeviceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserDevice` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteUserDeviceByToken` mutation. */
export type DeleteUserDeviceByTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

/** All input for the `deleteUserDevice` mutation. */
export type DeleteUserDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** The output of our delete `UserDevice` mutation. */
export type DeleteUserDevicePayload = {
  __typename?: 'DeleteUserDevicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserDeviceNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserDevice`. */
  user?: Maybe<User>;
  /** The `UserDevice` that was deleted by this mutation. */
  userDevice?: Maybe<UserDevice>;
  /** An edge for our `UserDevice`. May be used by Relay 1. */
  userDeviceEdge?: Maybe<UserDevicesEdge>;
};


/** The output of our delete `UserDevice` mutation. */
export type DeleteUserDevicePayloadUserDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
};

export type HavingFloatFilter = {
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
};

export type HavingIntFilter = {
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified key. */
  containsKey?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Budget`. */
  createBudget?: Maybe<CreateBudgetPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Notification`. */
  createNotification?: Maybe<CreateNotificationPayload>;
  /** Creates a single `OtpVerification`. */
  createOtpVerification?: Maybe<CreateOtpVerificationPayload>;
  /** Creates a single `Report`. */
  createReport?: Maybe<CreateReportPayload>;
  /** Creates a single `Transaction`. */
  createTransaction?: Maybe<CreateTransactionPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserDevice`. */
  createUserDevice?: Maybe<CreateUserDevicePayload>;
  /** Deletes a single `Budget` using a unique key. */
  deleteBudget?: Maybe<DeleteBudgetPayload>;
  /** Deletes a single `Budget` using its globally unique id. */
  deleteBudgetByNodeId?: Maybe<DeleteBudgetPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategoryByNodeId?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Notification` using a unique key. */
  deleteNotification?: Maybe<DeleteNotificationPayload>;
  /** Deletes a single `Notification` using its globally unique id. */
  deleteNotificationByNodeId?: Maybe<DeleteNotificationPayload>;
  /** Deletes a single `OtpVerification` using a unique key. */
  deleteOtpVerification?: Maybe<DeleteOtpVerificationPayload>;
  /** Deletes a single `OtpVerification` using its globally unique id. */
  deleteOtpVerificationByNodeId?: Maybe<DeleteOtpVerificationPayload>;
  /** Deletes a single `Report` using a unique key. */
  deleteReport?: Maybe<DeleteReportPayload>;
  /** Deletes a single `Report` using its globally unique id. */
  deleteReportByNodeId?: Maybe<DeleteReportPayload>;
  /** Deletes a single `Transaction` using a unique key. */
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `Transaction` using its globally unique id. */
  deleteTransactionByNodeId?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserDevice` using a unique key. */
  deleteUserDevice?: Maybe<DeleteUserDevicePayload>;
  /** Deletes a single `UserDevice` using its globally unique id. */
  deleteUserDeviceByNodeId?: Maybe<DeleteUserDevicePayload>;
  /** Deletes a single `UserDevice` using a unique key. */
  deleteUserDeviceByToken?: Maybe<DeleteUserDevicePayload>;
  /** Creates one or many `Notification`. */
  mnCreateNotification?: Maybe<MnCreateNotificationPayload>;
  /** Deletes one or many `Notification` a unique key via a patch. */
  mnDeleteNotification?: Maybe<MnDeleteNotificationPayload>;
  /** Updates one or many `Notification` using a unique key and a patch. */
  mnUpdateNotification?: Maybe<MnUpdateNotificationPayload>;
  /** Updates a single `Budget` using a unique key and a patch. */
  updateBudget?: Maybe<UpdateBudgetPayload>;
  /** Updates a single `Budget` using its globally unique id and a patch. */
  updateBudgetByNodeId?: Maybe<UpdateBudgetPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategoryByNodeId?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Notification` using a unique key and a patch. */
  updateNotification?: Maybe<UpdateNotificationPayload>;
  /** Updates a single `Notification` using its globally unique id and a patch. */
  updateNotificationByNodeId?: Maybe<UpdateNotificationPayload>;
  /** Updates a single `OtpVerification` using a unique key and a patch. */
  updateOtpVerification?: Maybe<UpdateOtpVerificationPayload>;
  /** Updates a single `OtpVerification` using its globally unique id and a patch. */
  updateOtpVerificationByNodeId?: Maybe<UpdateOtpVerificationPayload>;
  /** Updates a single `Report` using a unique key and a patch. */
  updateReport?: Maybe<UpdateReportPayload>;
  /** Updates a single `Report` using its globally unique id and a patch. */
  updateReportByNodeId?: Maybe<UpdateReportPayload>;
  /** Updates a single `Transaction` using a unique key and a patch. */
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `Transaction` using its globally unique id and a patch. */
  updateTransactionByNodeId?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserDevice` using a unique key and a patch. */
  updateUserDevice?: Maybe<UpdateUserDevicePayload>;
  /** Updates a single `UserDevice` using its globally unique id and a patch. */
  updateUserDeviceByNodeId?: Maybe<UpdateUserDevicePayload>;
  /** Updates a single `UserDevice` using a unique key and a patch. */
  updateUserDeviceByToken?: Maybe<UpdateUserDevicePayload>;
  /** Upserts a single `Budget`. */
  upsertBudget?: Maybe<UpsertBudgetPayload>;
  /** Upserts a single `Category`. */
  upsertCategory?: Maybe<UpsertCategoryPayload>;
  /** Upserts a single `Notification`. */
  upsertNotification?: Maybe<UpsertNotificationPayload>;
  /** Upserts a single `OtpVerification`. */
  upsertOtpVerification?: Maybe<UpsertOtpVerificationPayload>;
  /** Upserts a single `Report`. */
  upsertReport?: Maybe<UpsertReportPayload>;
  /** Upserts a single `Transaction`. */
  upsertTransaction?: Maybe<UpsertTransactionPayload>;
  /** Upserts a single `User`. */
  upsertUser?: Maybe<UpsertUserPayload>;
  /** Upserts a single `UserDevice`. */
  upsertUserDevice?: Maybe<UpsertUserDevicePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBudgetArgs = {
  input: CreateBudgetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOtpVerificationArgs = {
  input: CreateOtpVerificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateReportArgs = {
  input: CreateReportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserDeviceArgs = {
  input: CreateUserDeviceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBudgetArgs = {
  input: DeleteBudgetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBudgetByNodeIdArgs = {
  input: DeleteBudgetByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByNodeIdArgs = {
  input: DeleteCategoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNotificationByNodeIdArgs = {
  input: DeleteNotificationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOtpVerificationArgs = {
  input: DeleteOtpVerificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOtpVerificationByNodeIdArgs = {
  input: DeleteOtpVerificationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteReportArgs = {
  input: DeleteReportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteReportByNodeIdArgs = {
  input: DeleteReportByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionArgs = {
  input: DeleteTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionByNodeIdArgs = {
  input: DeleteTransactionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserDeviceArgs = {
  input: DeleteUserDeviceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserDeviceByNodeIdArgs = {
  input: DeleteUserDeviceByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserDeviceByTokenArgs = {
  input: DeleteUserDeviceByTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMnCreateNotificationArgs = {
  input: MnCreateNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMnDeleteNotificationArgs = {
  input: MnDeleteNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMnUpdateNotificationArgs = {
  input: MnUpdateNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBudgetArgs = {
  input: UpdateBudgetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBudgetByNodeIdArgs = {
  input: UpdateBudgetByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByNodeIdArgs = {
  input: UpdateCategoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNotificationByNodeIdArgs = {
  input: UpdateNotificationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOtpVerificationArgs = {
  input: UpdateOtpVerificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOtpVerificationByNodeIdArgs = {
  input: UpdateOtpVerificationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateReportArgs = {
  input: UpdateReportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateReportByNodeIdArgs = {
  input: UpdateReportByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionByNodeIdArgs = {
  input: UpdateTransactionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserDeviceArgs = {
  input: UpdateUserDeviceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserDeviceByNodeIdArgs = {
  input: UpdateUserDeviceByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserDeviceByTokenArgs = {
  input: UpdateUserDeviceByTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertBudgetArgs = {
  input: UpsertBudgetInput;
  where?: InputMaybe<UpsertBudgetWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertCategoryArgs = {
  input: UpsertCategoryInput;
  where?: InputMaybe<UpsertCategoryWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertNotificationArgs = {
  input: UpsertNotificationInput;
  where?: InputMaybe<UpsertNotificationWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertOtpVerificationArgs = {
  input: UpsertOtpVerificationInput;
  where?: InputMaybe<UpsertOtpVerificationWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertReportArgs = {
  input: UpsertReportInput;
  where?: InputMaybe<UpsertReportWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertTransactionArgs = {
  input: UpsertTransactionInput;
  where?: InputMaybe<UpsertTransactionWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertUserArgs = {
  input: UpsertUserInput;
  where?: InputMaybe<UpsertUserWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertUserDeviceArgs = {
  input: UpsertUserDeviceInput;
  where?: InputMaybe<UpsertUserDeviceWhere>;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type Notification = Node & {
  __typename?: 'Notification';
  data: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  isRead: Scalars['Boolean']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  t: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type NotificationAggregates = {
  __typename?: 'NotificationAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<NotificationDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `Notification` object types. */
export type NotificationAggregatesFilter = {
  /** Distinct count aggregate over matching `Notification` objects. */
  distinctCount?: InputMaybe<NotificationDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Notification` object to be included within the aggregate. */
  filter?: InputMaybe<NotificationFilter>;
};

/**
 * A condition to be used against `Notification` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type NotificationCondition = {
  /** Checks for equality with the object’s `data` field. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isRead` field. */
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `t` field. */
  t?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationDistinctCountAggregateFilter = {
  data?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  isRead?: InputMaybe<BigIntFilter>;
  t?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type NotificationDistinctCountAggregates = {
  __typename?: 'NotificationDistinctCountAggregates';
  /** Distinct count of data across the matching connection */
  data?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of isRead across the matching connection */
  isRead?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of t across the matching connection */
  t?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Notification` object types. All fields are combined with a logical ‘and.’ */
export type NotificationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NotificationFilter>>;
  /** Filter by the object’s `data` field. */
  data?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isRead` field. */
  isRead?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NotificationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NotificationFilter>>;
  /** Filter by the object’s `t` field. */
  t?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Notification` for usage during aggregation. */
export enum NotificationGroupBy {
  Data = 'DATA',
  IsRead = 'IS_READ',
  T = 'T',
  TTruncatedToDay = 'T_TRUNCATED_TO_DAY',
  TTruncatedToHour = 'T_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type NotificationHavingAverageInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingDistinctCountInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Notification` aggregates. */
export type NotificationHavingInput = {
  AND?: InputMaybe<Array<NotificationHavingInput>>;
  OR?: InputMaybe<Array<NotificationHavingInput>>;
  average?: InputMaybe<NotificationHavingAverageInput>;
  distinctCount?: InputMaybe<NotificationHavingDistinctCountInput>;
  max?: InputMaybe<NotificationHavingMaxInput>;
  min?: InputMaybe<NotificationHavingMinInput>;
  stddevPopulation?: InputMaybe<NotificationHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<NotificationHavingStddevSampleInput>;
  sum?: InputMaybe<NotificationHavingSumInput>;
  variancePopulation?: InputMaybe<NotificationHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<NotificationHavingVarianceSampleInput>;
};

export type NotificationHavingMaxInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingMinInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingStddevPopulationInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingStddevSampleInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingSumInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingVariancePopulationInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

export type NotificationHavingVarianceSampleInput = {
  t?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Notification` */
export type NotificationInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  t?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['String']['input'];
};

/** Represents an update to a `Notification`. Fields that are set will be updated. */
export type NotificationPatch = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  t?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Notification` values. */
export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NotificationAggregates>;
  /** A list of edges which contains the `Notification` and cursor to aid in pagination. */
  edges: Array<NotificationsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NotificationAggregates>>;
  /** A list of `Notification` objects. */
  nodes: Array<Notification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Notification` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Notification` values. */
export type NotificationsConnectionGroupedAggregatesArgs = {
  groupBy: Array<NotificationGroupBy>;
  having?: InputMaybe<NotificationHavingInput>;
};

/** A `Notification` edge in the connection. */
export type NotificationsEdge = {
  __typename?: 'NotificationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Notification` at the end of the edge. */
  node: Notification;
};

/** Methods to use when ordering `Notification`. */
export enum NotificationsOrderBy {
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsReadAsc = 'IS_READ_ASC',
  IsReadDesc = 'IS_READ_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TAsc = 'T_ASC',
  TDesc = 'T_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type OtpVerification = Node & {
  __typename?: 'OtpVerification';
  createdAt: Scalars['Datetime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt: Scalars['Datetime']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  otp: Scalars['String']['output'];
  /** Reads a single `User` that is related to this `OtpVerification`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type OtpVerificationAggregates = {
  __typename?: 'OtpVerificationAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<OtpVerificationDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `OtpVerification` object types. */
export type OtpVerificationAggregatesFilter = {
  /** Distinct count aggregate over matching `OtpVerification` objects. */
  distinctCount?: InputMaybe<OtpVerificationDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `OtpVerification` object to be included within the aggregate. */
  filter?: InputMaybe<OtpVerificationFilter>;
};

/**
 * A condition to be used against `OtpVerification` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OtpVerificationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `expiresAt` field. */
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `otp` field. */
  otp?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OtpVerificationDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  email?: InputMaybe<BigIntFilter>;
  expiresAt?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  otp?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type OtpVerificationDistinctCountAggregates = {
  __typename?: 'OtpVerificationDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of email across the matching connection */
  email?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of expiresAt across the matching connection */
  expiresAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of otp across the matching connection */
  otp?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `OtpVerification` object types. All fields are combined with a logical ‘and.’ */
export type OtpVerificationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OtpVerificationFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `expiresAt` field. */
  expiresAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OtpVerificationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OtpVerificationFilter>>;
  /** Filter by the object’s `otp` field. */
  otp?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `OtpVerification` for usage during aggregation. */
export enum OtpVerificationGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  ExpiresAt = 'EXPIRES_AT',
  ExpiresAtTruncatedToDay = 'EXPIRES_AT_TRUNCATED_TO_DAY',
  ExpiresAtTruncatedToHour = 'EXPIRES_AT_TRUNCATED_TO_HOUR',
  Otp = 'OTP',
  UserId = 'USER_ID'
}

export type OtpVerificationHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `OtpVerification` aggregates. */
export type OtpVerificationHavingInput = {
  AND?: InputMaybe<Array<OtpVerificationHavingInput>>;
  OR?: InputMaybe<Array<OtpVerificationHavingInput>>;
  average?: InputMaybe<OtpVerificationHavingAverageInput>;
  distinctCount?: InputMaybe<OtpVerificationHavingDistinctCountInput>;
  max?: InputMaybe<OtpVerificationHavingMaxInput>;
  min?: InputMaybe<OtpVerificationHavingMinInput>;
  stddevPopulation?: InputMaybe<OtpVerificationHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<OtpVerificationHavingStddevSampleInput>;
  sum?: InputMaybe<OtpVerificationHavingSumInput>;
  variancePopulation?: InputMaybe<OtpVerificationHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<OtpVerificationHavingVarianceSampleInput>;
};

export type OtpVerificationHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OtpVerificationHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `OtpVerification` */
export type OtpVerificationInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['Datetime']['input'];
  id: Scalars['String']['input'];
  otp: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** Represents an update to a `OtpVerification`. Fields that are set will be updated. */
export type OtpVerificationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `OtpVerification` values. */
export type OtpVerificationsConnection = {
  __typename?: 'OtpVerificationsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<OtpVerificationAggregates>;
  /** A list of edges which contains the `OtpVerification` and cursor to aid in pagination. */
  edges: Array<OtpVerificationsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<OtpVerificationAggregates>>;
  /** A list of `OtpVerification` objects. */
  nodes: Array<OtpVerification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OtpVerification` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `OtpVerification` values. */
export type OtpVerificationsConnectionGroupedAggregatesArgs = {
  groupBy: Array<OtpVerificationGroupBy>;
  having?: InputMaybe<OtpVerificationHavingInput>;
};

/** A `OtpVerification` edge in the connection. */
export type OtpVerificationsEdge = {
  __typename?: 'OtpVerificationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OtpVerification` at the end of the edge. */
  node: OtpVerification;
};

/** Methods to use when ordering `OtpVerification`. */
export enum OtpVerificationsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  ExpiresAtAsc = 'EXPIRES_AT_ASC',
  ExpiresAtDesc = 'EXPIRES_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OtpAsc = 'OTP_ASC',
  OtpDesc = 'OTP_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  budget?: Maybe<Budget>;
  /** Reads a single `Budget` using its globally unique `ID`. */
  budgetByNodeId?: Maybe<Budget>;
  /** Reads and enables pagination through a set of `Budget`. */
  budgets?: Maybe<BudgetsConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  /** Reads a single `Category` using its globally unique `ID`. */
  categoryByNodeId?: Maybe<Category>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  notification?: Maybe<Notification>;
  /** Reads a single `Notification` using its globally unique `ID`. */
  notificationByNodeId?: Maybe<Notification>;
  /** Reads and enables pagination through a set of `Notification`. */
  notifications?: Maybe<NotificationsConnection>;
  otpVerification?: Maybe<OtpVerification>;
  /** Reads a single `OtpVerification` using its globally unique `ID`. */
  otpVerificationByNodeId?: Maybe<OtpVerification>;
  /** Reads and enables pagination through a set of `OtpVerification`. */
  otpVerifications?: Maybe<OtpVerificationsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  report?: Maybe<Report>;
  /** Reads a single `Report` using its globally unique `ID`. */
  reportByNodeId?: Maybe<Report>;
  /** Reads and enables pagination through a set of `Report`. */
  reports?: Maybe<ReportsConnection>;
  transaction?: Maybe<Transaction>;
  /** Reads a single `Transaction` using its globally unique `ID`. */
  transactionByNodeId?: Maybe<Transaction>;
  /** Reads and enables pagination through a set of `Transaction`. */
  transactions?: Maybe<TransactionsConnection>;
  user?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  userDevice?: Maybe<UserDevice>;
  /** Reads a single `UserDevice` using its globally unique `ID`. */
  userDeviceByNodeId?: Maybe<UserDevice>;
  userDeviceByToken?: Maybe<UserDevice>;
  /** Reads and enables pagination through a set of `UserDevice`. */
  userDevices?: Maybe<UserDevicesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBudgetArgs = {
  budgetId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBudgetByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBudgetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BudgetCondition>;
  filter?: InputMaybe<BudgetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNotificationArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNotificationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NotificationCondition>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOtpVerificationArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOtpVerificationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOtpVerificationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OtpVerificationCondition>;
  filter?: InputMaybe<OtpVerificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryReportArgs = {
  reportId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReportByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReportCondition>;
  filter?: InputMaybe<ReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionArgs = {
  transactionId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TransactionCondition>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  oidcId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserDeviceArgs = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserDeviceByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserDeviceByTokenArgs = {
  token: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserDevicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserDeviceCondition>;
  filter?: InputMaybe<UserDeviceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Report = Node & {
  __typename?: 'Report';
  createdAt?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  reportId: Scalars['String']['output'];
  /** Reads a single `User` that is related to this `Report`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReportAggregates = {
  __typename?: 'ReportAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ReportDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `Report` object types. */
export type ReportAggregatesFilter = {
  /** Distinct count aggregate over matching `Report` objects. */
  distinctCount?: InputMaybe<ReportDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Report` object to be included within the aggregate. */
  filter?: InputMaybe<ReportFilter>;
};

/** A condition to be used against `Report` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ReportCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `filePath` field. */
  filePath?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reportId` field. */
  reportId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ReportDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  filePath?: InputMaybe<BigIntFilter>;
  reportId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type ReportDistinctCountAggregates = {
  __typename?: 'ReportDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of filePath across the matching connection */
  filePath?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of reportId across the matching connection */
  reportId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Report` object types. All fields are combined with a logical ‘and.’ */
export type ReportFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ReportFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<StringFilter>;
  /** Filter by the object’s `filePath` field. */
  filePath?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ReportFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ReportFilter>>;
  /** Filter by the object’s `reportId` field. */
  reportId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Report` for usage during aggregation. */
export enum ReportGroupBy {
  CreatedAt = 'CREATED_AT',
  FilePath = 'FILE_PATH',
  UserId = 'USER_ID'
}

/** Conditions for `Report` aggregates. */
export type ReportHavingInput = {
  AND?: InputMaybe<Array<ReportHavingInput>>;
  OR?: InputMaybe<Array<ReportHavingInput>>;
};

/** An input for mutations affecting `Report` */
export type ReportInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Report`. Fields that are set will be updated. */
export type ReportPatch = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  reportId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Report` values. */
export type ReportsConnection = {
  __typename?: 'ReportsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ReportAggregates>;
  /** A list of edges which contains the `Report` and cursor to aid in pagination. */
  edges: Array<ReportsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ReportAggregates>>;
  /** A list of `Report` objects. */
  nodes: Array<Report>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Report` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Report` values. */
export type ReportsConnectionGroupedAggregatesArgs = {
  groupBy: Array<ReportGroupBy>;
  having?: InputMaybe<ReportHavingInput>;
};

/** A `Report` edge in the connection. */
export type ReportsEdge = {
  __typename?: 'ReportsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Report` at the end of the edge. */
  node: Report;
};

/** Methods to use when ordering `Report`. */
export enum ReportsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FilePathAsc = 'FILE_PATH_ASC',
  FilePathDesc = 'FILE_PATH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReportIdAsc = 'REPORT_ID_ASC',
  ReportIdDesc = 'REPORT_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type Subscription = {
  __typename?: 'Subscription';
  /**  (live) */
  budget?: Maybe<Budget>;
  /** Reads a single `Budget` using its globally unique `ID`. (live) */
  budgetByNodeId?: Maybe<Budget>;
  /** Reads and enables pagination through a set of `Budget`. (live) */
  budgets?: Maybe<BudgetsConnection>;
  /** Reads and enables pagination through a set of `Category`. (live) */
  categories?: Maybe<CategoriesConnection>;
  /**  (live) */
  category?: Maybe<Category>;
  /** Reads a single `Category` using its globally unique `ID`. (live) */
  categoryByNodeId?: Maybe<Category>;
  /** Fetches an object given its globally unique `ID`. (live) */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. (live) */
  nodeId: Scalars['ID']['output'];
  /**  (live) */
  notification?: Maybe<Notification>;
  /** Reads a single `Notification` using its globally unique `ID`. (live) */
  notificationByNodeId?: Maybe<Notification>;
  /** Reads and enables pagination through a set of `Notification`. (live) */
  notifications?: Maybe<NotificationsConnection>;
  /**  (live) */
  otpVerification?: Maybe<OtpVerification>;
  /** Reads a single `OtpVerification` using its globally unique `ID`. (live) */
  otpVerificationByNodeId?: Maybe<OtpVerification>;
  /** Reads and enables pagination through a set of `OtpVerification`. (live) */
  otpVerifications?: Maybe<OtpVerificationsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form. (live)
   */
  query: Query;
  /**  (live) */
  report?: Maybe<Report>;
  /** Reads a single `Report` using its globally unique `ID`. (live) */
  reportByNodeId?: Maybe<Report>;
  /** Reads and enables pagination through a set of `Report`. (live) */
  reports?: Maybe<ReportsConnection>;
  /**  (live) */
  transaction?: Maybe<Transaction>;
  /** Reads a single `Transaction` using its globally unique `ID`. (live) */
  transactionByNodeId?: Maybe<Transaction>;
  /** Reads and enables pagination through a set of `Transaction`. (live) */
  transactions?: Maybe<TransactionsConnection>;
  /**  (live) */
  user?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. (live) */
  userByNodeId?: Maybe<User>;
  /**  (live) */
  userDevice?: Maybe<UserDevice>;
  /** Reads a single `UserDevice` using its globally unique `ID`. (live) */
  userDeviceByNodeId?: Maybe<UserDevice>;
  /**  (live) */
  userDeviceByToken?: Maybe<UserDevice>;
  /** Reads and enables pagination through a set of `UserDevice`. (live) */
  userDevices?: Maybe<UserDevicesConnection>;
  /** Reads and enables pagination through a set of `User`. (live) */
  users?: Maybe<UsersConnection>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionBudgetArgs = {
  budgetId: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionBudgetByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionBudgetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BudgetCondition>;
  filter?: InputMaybe<BudgetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionCategoryArgs = {
  id: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionCategoryByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNotificationArgs = {
  id: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNotificationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNotificationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NotificationCondition>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionOtpVerificationArgs = {
  id: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionOtpVerificationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionOtpVerificationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OtpVerificationCondition>;
  filter?: InputMaybe<OtpVerificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionReportArgs = {
  reportId: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionReportByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionReportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReportCondition>;
  filter?: InputMaybe<ReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTransactionArgs = {
  transactionId: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTransactionByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TransactionCondition>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserArgs = {
  oidcId: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserDeviceArgs = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserDeviceByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserDeviceByTokenArgs = {
  token: Scalars['String']['input'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserDevicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserDeviceCondition>;
  filter?: InputMaybe<UserDeviceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Transaction = Node & {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  /** Reads a single `Category` that is related to this `Transaction`. */
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  transactionId: Scalars['String']['output'];
  type: Typetransaction;
  /** Reads a single `User` that is related to this `Transaction`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TransactionAggregates = {
  __typename?: 'TransactionAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<TransactionAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TransactionDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<TransactionMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<TransactionMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<TransactionStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<TransactionStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<TransactionSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<TransactionVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<TransactionVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Transaction` object types. */
export type TransactionAggregatesFilter = {
  /** Mean average aggregate over matching `Transaction` objects. */
  average?: InputMaybe<TransactionAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Transaction` objects. */
  distinctCount?: InputMaybe<TransactionDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Transaction` object to be included within the aggregate. */
  filter?: InputMaybe<TransactionFilter>;
  /** Maximum aggregate over matching `Transaction` objects. */
  max?: InputMaybe<TransactionMaxAggregateFilter>;
  /** Minimum aggregate over matching `Transaction` objects. */
  min?: InputMaybe<TransactionMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Transaction` objects. */
  stddevPopulation?: InputMaybe<TransactionStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Transaction` objects. */
  stddevSample?: InputMaybe<TransactionStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Transaction` objects. */
  sum?: InputMaybe<TransactionSumAggregateFilter>;
  /** Population variance aggregate over matching `Transaction` objects. */
  variancePopulation?: InputMaybe<TransactionVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Transaction` objects. */
  varianceSample?: InputMaybe<TransactionVarianceSampleAggregateFilter>;
};

export type TransactionAverageAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionAverageAggregates = {
  __typename?: 'TransactionAverageAggregates';
  /** Mean average of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

/**
 * A condition to be used against `Transaction` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TransactionCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Typetransaction>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionDistinctCountAggregateFilter = {
  amount?: InputMaybe<BigIntFilter>;
  categoryId?: InputMaybe<BigIntFilter>;
  date?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  transactionId?: InputMaybe<BigIntFilter>;
  type?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type TransactionDistinctCountAggregates = {
  __typename?: 'TransactionDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  amount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of date across the matching connection */
  date?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transactionId across the matching connection */
  transactionId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type TransactionFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TransactionFilter>>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** A related `category` exists. */
  categoryExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TransactionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TransactionFilter>>;
  /** Filter by the object’s `transactionId` field. */
  transactionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<TypetransactionFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Transaction` for usage during aggregation. */
export enum TransactionGroupBy {
  Amount = 'AMOUNT',
  CategoryId = 'CATEGORY_ID',
  Date = 'DATE',
  DateTruncatedToDay = 'DATE_TRUNCATED_TO_DAY',
  DateTruncatedToHour = 'DATE_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  Type = 'TYPE',
  UserId = 'USER_ID'
}

export type TransactionHavingAverageInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingDistinctCountInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Transaction` aggregates. */
export type TransactionHavingInput = {
  AND?: InputMaybe<Array<TransactionHavingInput>>;
  OR?: InputMaybe<Array<TransactionHavingInput>>;
  average?: InputMaybe<TransactionHavingAverageInput>;
  distinctCount?: InputMaybe<TransactionHavingDistinctCountInput>;
  max?: InputMaybe<TransactionHavingMaxInput>;
  min?: InputMaybe<TransactionHavingMinInput>;
  stddevPopulation?: InputMaybe<TransactionHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TransactionHavingStddevSampleInput>;
  sum?: InputMaybe<TransactionHavingSumInput>;
  variancePopulation?: InputMaybe<TransactionHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TransactionHavingVarianceSampleInput>;
};

export type TransactionHavingMaxInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingMinInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingStddevPopulationInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingStddevSampleInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingSumInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingVariancePopulationInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type TransactionHavingVarianceSampleInput = {
  amount?: InputMaybe<HavingFloatFilter>;
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Transaction` */
export type TransactionInput = {
  amount: Scalars['Float']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['String']['input'];
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionMaxAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionMaxAggregates = {
  __typename?: 'TransactionMaxAggregates';
  /** Maximum of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type TransactionMinAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionMinAggregates = {
  __typename?: 'TransactionMinAggregates';
  /** Minimum of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Represents an update to a `Transaction`. Fields that are set will be updated. */
export type TransactionPatch = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Typetransaction>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionStddevPopulationAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionStddevPopulationAggregates = {
  __typename?: 'TransactionStddevPopulationAggregates';
  /** Population standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type TransactionStddevSampleAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionStddevSampleAggregates = {
  __typename?: 'TransactionStddevSampleAggregates';
  /** Sample standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type TransactionSumAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionSumAggregates = {
  __typename?: 'TransactionSumAggregates';
  /** Sum of amount across the matching connection */
  amount: Scalars['Float']['output'];
};

export type TransactionVariancePopulationAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionVariancePopulationAggregates = {
  __typename?: 'TransactionVariancePopulationAggregates';
  /** Population variance of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

export type TransactionVarianceSampleAggregateFilter = {
  amount?: InputMaybe<FloatFilter>;
};

export type TransactionVarianceSampleAggregates = {
  __typename?: 'TransactionVarianceSampleAggregates';
  /** Sample variance of amount across the matching connection */
  amount?: Maybe<Scalars['Float']['output']>;
};

/** A connection to a list of `Transaction` values. */
export type TransactionsConnection = {
  __typename?: 'TransactionsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TransactionAggregates>;
  /** A list of edges which contains the `Transaction` and cursor to aid in pagination. */
  edges: Array<TransactionsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TransactionAggregates>>;
  /** A list of `Transaction` objects. */
  nodes: Array<Transaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Transaction` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Transaction` values. */
export type TransactionsConnectionGroupedAggregatesArgs = {
  groupBy: Array<TransactionGroupBy>;
  having?: InputMaybe<TransactionHavingInput>;
};

/** A `Transaction` edge in the connection. */
export type TransactionsEdge = {
  __typename?: 'TransactionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Transaction` at the end of the edge. */
  node: Transaction;
};

/** Methods to use when ordering `Transaction`. */
export enum TransactionsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export enum Typetransaction {
  Expense = 'EXPENSE',
  Income = 'INCOME'
}

/** A filter to be used against Typetransaction fields. All fields are combined with a logical ‘and.’ */
export type TypetransactionFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Typetransaction>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Typetransaction>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Typetransaction>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Typetransaction>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Typetransaction>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Typetransaction>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Typetransaction>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Typetransaction>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Typetransaction>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Typetransaction>>;
};

/** All input for the `updateBudgetByNodeId` mutation. */
export type UpdateBudgetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Budget` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Budget` being updated. */
  patch: BudgetPatch;
};

/** All input for the `updateBudget` mutation. */
export type UpdateBudgetInput = {
  budgetId: Scalars['String']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Budget` being updated. */
  patch: BudgetPatch;
};

/** The output of our update `Budget` mutation. */
export type UpdateBudgetPayload = {
  __typename?: 'UpdateBudgetPayload';
  /** The `Budget` that was updated by this mutation. */
  budget?: Maybe<Budget>;
  /** An edge for our `Budget`. May be used by Relay 1. */
  budgetEdge?: Maybe<BudgetsEdge>;
  /** Reads a single `Category` that is related to this `Budget`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Budget`. */
  user?: Maybe<User>;
};


/** The output of our update `Budget` mutation. */
export type UpdateBudgetPayloadBudgetEdgeArgs = {
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};

/** All input for the `updateCategoryByNodeId` mutation. */
export type UpdateCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Category`. */
  user?: Maybe<User>;
};


/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateNotificationByNodeId` mutation. */
export type UpdateNotificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Notification` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Notification` being updated. */
  patch: NotificationPatch;
};

/** All input for the `updateNotification` mutation. */
export type UpdateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Notification` being updated. */
  patch: NotificationPatch;
};

/** The output of our update `Notification` mutation. */
export type UpdateNotificationPayload = {
  __typename?: 'UpdateNotificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was updated by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our update `Notification` mutation. */
export type UpdateNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** All input for the `updateOtpVerificationByNodeId` mutation. */
export type UpdateOtpVerificationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OtpVerification` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OtpVerification` being updated. */
  patch: OtpVerificationPatch;
};

/** All input for the `updateOtpVerification` mutation. */
export type UpdateOtpVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `OtpVerification` being updated. */
  patch: OtpVerificationPatch;
};

/** The output of our update `OtpVerification` mutation. */
export type UpdateOtpVerificationPayload = {
  __typename?: 'UpdateOtpVerificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `OtpVerification` that was updated by this mutation. */
  otpVerification?: Maybe<OtpVerification>;
  /** An edge for our `OtpVerification`. May be used by Relay 1. */
  otpVerificationEdge?: Maybe<OtpVerificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `OtpVerification`. */
  user?: Maybe<User>;
};


/** The output of our update `OtpVerification` mutation. */
export type UpdateOtpVerificationPayloadOtpVerificationEdgeArgs = {
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};

/** All input for the `updateReportByNodeId` mutation. */
export type UpdateReportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Report` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Report` being updated. */
  patch: ReportPatch;
};

/** All input for the `updateReport` mutation. */
export type UpdateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Report` being updated. */
  patch: ReportPatch;
  reportId: Scalars['String']['input'];
};

/** The output of our update `Report` mutation. */
export type UpdateReportPayload = {
  __typename?: 'UpdateReportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Report` that was updated by this mutation. */
  report?: Maybe<Report>;
  /** An edge for our `Report`. May be used by Relay 1. */
  reportEdge?: Maybe<ReportsEdge>;
  /** Reads a single `User` that is related to this `Report`. */
  user?: Maybe<User>;
};


/** The output of our update `Report` mutation. */
export type UpdateReportPayloadReportEdgeArgs = {
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};

/** All input for the `updateTransactionByNodeId` mutation. */
export type UpdateTransactionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  patch: TransactionPatch;
};

/** All input for the `updateTransaction` mutation. */
export type UpdateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  patch: TransactionPatch;
  transactionId: Scalars['String']['input'];
};

/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayload = {
  __typename?: 'UpdateTransactionPayload';
  /** Reads a single `Category` that is related to this `Transaction`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was updated by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
  /** Reads a single `User` that is related to this `Transaction`. */
  user?: Maybe<User>;
};


/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserDeviceByNodeId` mutation. */
export type UpdateUserDeviceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserDevice` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `UserDevice` being updated. */
  patch: UserDevicePatch;
};

/** All input for the `updateUserDeviceByToken` mutation. */
export type UpdateUserDeviceByTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `UserDevice` being updated. */
  patch: UserDevicePatch;
  token: Scalars['String']['input'];
};

/** All input for the `updateUserDevice` mutation. */
export type UpdateUserDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `UserDevice` being updated. */
  patch: UserDevicePatch;
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** The output of our update `UserDevice` mutation. */
export type UpdateUserDevicePayload = {
  __typename?: 'UpdateUserDevicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserDevice`. */
  user?: Maybe<User>;
  /** The `UserDevice` that was updated by this mutation. */
  userDevice?: Maybe<UserDevice>;
  /** An edge for our `UserDevice`. May be used by Relay 1. */
  userDeviceEdge?: Maybe<UserDevicesEdge>;
};


/** The output of our update `UserDevice` mutation. */
export type UpdateUserDevicePayloadUserDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the upsert `Budget` mutation. */
export type UpsertBudgetInput = {
  /** The `Budget` to be upserted by this mutation. */
  budget: BudgetInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our upsert `Budget` mutation. */
export type UpsertBudgetPayload = {
  __typename?: 'UpsertBudgetPayload';
  /** The `Budget` that was upserted by this mutation. */
  budget?: Maybe<Budget>;
  /** An edge for our `Budget`. May be used by Relay 1. */
  budgetEdge?: Maybe<BudgetsEdge>;
  /** Reads a single `Category` that is related to this `Budget`. */
  category?: Maybe<Category>;
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Budget`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Budget` mutation. */
export type UpsertBudgetPayloadBudgetEdgeArgs = {
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};

/** Where conditions for the upsert `Budget` mutation. */
export type UpsertBudgetWhere = {
  budgetId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Category` mutation. */
export type UpsertCategoryInput = {
  /** The `Category` to be upserted by this mutation. */
  category: CategoryInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our upsert `Category` mutation. */
export type UpsertCategoryPayload = {
  __typename?: 'UpsertCategoryPayload';
  /** The `Category` that was upserted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Category`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Category` mutation. */
export type UpsertCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** Where conditions for the upsert `Category` mutation. */
export type UpsertCategoryWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Notification` mutation. */
export type UpsertNotificationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Notification` to be upserted by this mutation. */
  notification: NotificationInput;
};

/** The output of our upsert `Notification` mutation. */
export type UpsertNotificationPayload = {
  __typename?: 'UpsertNotificationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was upserted by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Notification` mutation. */
export type UpsertNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** Where conditions for the upsert `Notification` mutation. */
export type UpsertNotificationWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `OtpVerification` mutation. */
export type UpsertOtpVerificationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OtpVerification` to be upserted by this mutation. */
  otpVerification: OtpVerificationInput;
};

/** The output of our upsert `OtpVerification` mutation. */
export type UpsertOtpVerificationPayload = {
  __typename?: 'UpsertOtpVerificationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `OtpVerification` that was upserted by this mutation. */
  otpVerification?: Maybe<OtpVerification>;
  /** An edge for our `OtpVerification`. May be used by Relay 1. */
  otpVerificationEdge?: Maybe<OtpVerificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `OtpVerification`. */
  user?: Maybe<User>;
};


/** The output of our upsert `OtpVerification` mutation. */
export type UpsertOtpVerificationPayloadOtpVerificationEdgeArgs = {
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};

/** Where conditions for the upsert `OtpVerification` mutation. */
export type UpsertOtpVerificationWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Report` mutation. */
export type UpsertReportInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Report` to be upserted by this mutation. */
  report: ReportInput;
};

/** The output of our upsert `Report` mutation. */
export type UpsertReportPayload = {
  __typename?: 'UpsertReportPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Report` that was upserted by this mutation. */
  report?: Maybe<Report>;
  /** An edge for our `Report`. May be used by Relay 1. */
  reportEdge?: Maybe<ReportsEdge>;
  /** Reads a single `User` that is related to this `Report`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Report` mutation. */
export type UpsertReportPayloadReportEdgeArgs = {
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};

/** Where conditions for the upsert `Report` mutation. */
export type UpsertReportWhere = {
  reportId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Transaction` mutation. */
export type UpsertTransactionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Transaction` to be upserted by this mutation. */
  transaction: TransactionInput;
};

/** The output of our upsert `Transaction` mutation. */
export type UpsertTransactionPayload = {
  __typename?: 'UpsertTransactionPayload';
  /** Reads a single `Category` that is related to this `Transaction`. */
  category?: Maybe<Category>;
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was upserted by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
  /** Reads a single `User` that is related to this `Transaction`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Transaction` mutation. */
export type UpsertTransactionPayloadTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};

/** Where conditions for the upsert `Transaction` mutation. */
export type UpsertTransactionWhere = {
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `UserDevice` mutation. */
export type UpsertUserDeviceInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `UserDevice` to be upserted by this mutation. */
  userDevice: UserDeviceInput;
};

/** The output of our upsert `UserDevice` mutation. */
export type UpsertUserDevicePayload = {
  __typename?: 'UpsertUserDevicePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserDevice`. */
  user?: Maybe<User>;
  /** The `UserDevice` that was upserted by this mutation. */
  userDevice?: Maybe<UserDevice>;
  /** An edge for our `UserDevice`. May be used by Relay 1. */
  userDeviceEdge?: Maybe<UserDevicesEdge>;
};


/** The output of our upsert `UserDevice` mutation. */
export type UpsertUserDevicePayloadUserDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};

/** Where conditions for the upsert `UserDevice` mutation. */
export type UpsertUserDeviceWhere = {
  token?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `User` mutation. */
export type UpsertUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be upserted by this mutation. */
  user: UserInput;
};

/** The output of our upsert `User` mutation. */
export type UpsertUserPayload = {
  __typename?: 'UpsertUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was upserted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our upsert `User` mutation. */
export type UpsertUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Where conditions for the upsert `User` mutation. */
export type UpsertUserWhere = {
  oidcId?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Budget`. */
  budgetsByUserId: BudgetsConnection;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByUserId: CategoriesConnection;
  date?: Maybe<Scalars['Datetime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<UserGender>;
  lastName?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Notification`. */
  notificationsByUserId: NotificationsConnection;
  oidcId: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `OtpVerification`. */
  otpVerificationsByUserId: OtpVerificationsConnection;
  password?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Report`. */
  reportsByUserId: ReportsConnection;
  tel?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Transaction`. */
  transactionsByUserId: TransactionsConnection;
  /** Reads and enables pagination through a set of `UserDevice`. */
  userDevicesByUserId: UserDevicesConnection;
};


export type UserBudgetsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BudgetCondition>;
  filter?: InputMaybe<BudgetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
};


export type UserCategoriesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


export type UserNotificationsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NotificationCondition>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};


export type UserOtpVerificationsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OtpVerificationCondition>;
  filter?: InputMaybe<OtpVerificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OtpVerificationsOrderBy>>;
};


export type UserReportsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReportCondition>;
  filter?: InputMaybe<ReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};


export type UserTransactionsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TransactionCondition>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};


export type UserUserDevicesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserDeviceCondition>;
  filter?: InputMaybe<UserDeviceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserDevicesOrderBy>>;
};

export type UserAggregates = {
  __typename?: 'UserAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<UserDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `gender` field. */
  gender?: InputMaybe<UserGender>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `oidcId` field. */
  oidcId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `picture` field. */
  picture?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tel` field. */
  tel?: InputMaybe<Scalars['String']['input']>;
};

export type UserDevice = Node & {
  __typename?: 'UserDevice';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  ua?: Maybe<Scalars['JSON']['output']>;
  /** Reads a single `User` that is related to this `UserDevice`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type UserDeviceAggregates = {
  __typename?: 'UserDeviceAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<UserDeviceDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `UserDevice` object types. */
export type UserDeviceAggregatesFilter = {
  /** Distinct count aggregate over matching `UserDevice` objects. */
  distinctCount?: InputMaybe<UserDeviceDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `UserDevice` object to be included within the aggregate. */
  filter?: InputMaybe<UserDeviceFilter>;
};

/**
 * A condition to be used against `UserDevice` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserDeviceCondition = {
  /** Checks for equality with the object’s `token` field. */
  token?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `ua` field. */
  ua?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserDeviceDistinctCountAggregateFilter = {
  token?: InputMaybe<BigIntFilter>;
  ua?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type UserDeviceDistinctCountAggregates = {
  __typename?: 'UserDeviceDistinctCountAggregates';
  /** Distinct count of token across the matching connection */
  token?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of ua across the matching connection */
  ua?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `UserDevice` object types. All fields are combined with a logical ‘and.’ */
export type UserDeviceFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserDeviceFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<UserDeviceFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserDeviceFilter>>;
  /** Filter by the object’s `token` field. */
  token?: InputMaybe<StringFilter>;
  /** Filter by the object’s `ua` field. */
  ua?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `UserDevice` for usage during aggregation. */
export enum UserDeviceGroupBy {
  Ua = 'UA',
  UserId = 'USER_ID'
}

/** Conditions for `UserDevice` aggregates. */
export type UserDeviceHavingInput = {
  AND?: InputMaybe<Array<UserDeviceHavingInput>>;
  OR?: InputMaybe<Array<UserDeviceHavingInput>>;
};

/** An input for mutations affecting `UserDevice` */
export type UserDeviceInput = {
  token: Scalars['String']['input'];
  ua?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

/** Represents an update to a `UserDevice`. Fields that are set will be updated. */
export type UserDevicePatch = {
  token?: InputMaybe<Scalars['String']['input']>;
  ua?: InputMaybe<Scalars['JSON']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `UserDevice` values. */
export type UserDevicesConnection = {
  __typename?: 'UserDevicesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<UserDeviceAggregates>;
  /** A list of edges which contains the `UserDevice` and cursor to aid in pagination. */
  edges: Array<UserDevicesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<UserDeviceAggregates>>;
  /** A list of `UserDevice` objects. */
  nodes: Array<UserDevice>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserDevice` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `UserDevice` values. */
export type UserDevicesConnectionGroupedAggregatesArgs = {
  groupBy: Array<UserDeviceGroupBy>;
  having?: InputMaybe<UserDeviceHavingInput>;
};

/** A `UserDevice` edge in the connection. */
export type UserDevicesEdge = {
  __typename?: 'UserDevicesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `UserDevice` at the end of the edge. */
  node: UserDevice;
};

/** Methods to use when ordering `UserDevice`. */
export enum UserDevicesOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TokenAsc = 'TOKEN_ASC',
  TokenDesc = 'TOKEN_DESC',
  UaAsc = 'UA_ASC',
  UaDesc = 'UA_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type UserDistinctCountAggregates = {
  __typename?: 'UserDistinctCountAggregates';
  /** Distinct count of date across the matching connection */
  date?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of email across the matching connection */
  email?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of firstName across the matching connection */
  firstName?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of gender across the matching connection */
  gender?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of lastName across the matching connection */
  lastName?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of oidcId across the matching connection */
  oidcId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of password across the matching connection */
  password?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of picture across the matching connection */
  picture?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of tel across the matching connection */
  tel?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `budgetsByUserId` relation. */
  budgetsByUserId?: InputMaybe<UserToManyBudgetFilter>;
  /** Some related `budgetsByUserId` exist. */
  budgetsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoriesByUserId` relation. */
  categoriesByUserId?: InputMaybe<UserToManyCategoryFilter>;
  /** Some related `categoriesByUserId` exist. */
  categoriesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `firstName` field. */
  firstName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `gender` field. */
  gender?: InputMaybe<UserGenderFilter>;
  /** Filter by the object’s `lastName` field. */
  lastName?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Filter by the object’s `notificationsByUserId` relation. */
  notificationsByUserId?: InputMaybe<UserToManyNotificationFilter>;
  /** Some related `notificationsByUserId` exist. */
  notificationsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `oidcId` field. */
  oidcId?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `otpVerificationsByUserId` relation. */
  otpVerificationsByUserId?: InputMaybe<UserToManyOtpVerificationFilter>;
  /** Some related `otpVerificationsByUserId` exist. */
  otpVerificationsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `password` field. */
  password?: InputMaybe<StringFilter>;
  /** Filter by the object’s `picture` field. */
  picture?: InputMaybe<StringFilter>;
  /** Filter by the object’s `reportsByUserId` relation. */
  reportsByUserId?: InputMaybe<UserToManyReportFilter>;
  /** Some related `reportsByUserId` exist. */
  reportsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `tel` field. */
  tel?: InputMaybe<StringFilter>;
  /** Filter by the object’s `transactionsByUserId` relation. */
  transactionsByUserId?: InputMaybe<UserToManyTransactionFilter>;
  /** Some related `transactionsByUserId` exist. */
  transactionsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userDevicesByUserId` relation. */
  userDevicesByUserId?: InputMaybe<UserToManyUserDeviceFilter>;
  /** Some related `userDevicesByUserId` exist. */
  userDevicesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserGender {
  Female = 'FEMALE',
  Male = 'MALE'
}

/** A filter to be used against UserGender fields. All fields are combined with a logical ‘and.’ */
export type UserGenderFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<UserGender>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<UserGender>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<UserGender>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<UserGender>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<UserGender>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<UserGender>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<UserGender>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<UserGender>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<UserGender>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<UserGender>>;
};

/** Grouping methods for `User` for usage during aggregation. */
export enum UserGroupBy {
  Date = 'DATE',
  DateTruncatedToDay = 'DATE_TRUNCATED_TO_DAY',
  DateTruncatedToHour = 'DATE_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Gender = 'GENDER',
  LastName = 'LAST_NAME',
  Password = 'PASSWORD',
  Picture = 'PICTURE',
  Tel = 'TEL'
}

export type UserHavingAverageInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingDistinctCountInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `User` aggregates. */
export type UserHavingInput = {
  AND?: InputMaybe<Array<UserHavingInput>>;
  OR?: InputMaybe<Array<UserHavingInput>>;
  average?: InputMaybe<UserHavingAverageInput>;
  distinctCount?: InputMaybe<UserHavingDistinctCountInput>;
  max?: InputMaybe<UserHavingMaxInput>;
  min?: InputMaybe<UserHavingMinInput>;
  stddevPopulation?: InputMaybe<UserHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<UserHavingStddevSampleInput>;
  sum?: InputMaybe<UserHavingSumInput>;
  variancePopulation?: InputMaybe<UserHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<UserHavingVarianceSampleInput>;
};

export type UserHavingMaxInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingMinInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevPopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingSumInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVariancePopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVarianceSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  date?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  date?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Budget` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyBudgetFilter = {
  /** Aggregates across related `Budget` match the filter criteria. */
  aggregates?: InputMaybe<BudgetAggregatesFilter>;
  /** Every related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BudgetFilter>;
  /** No related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BudgetFilter>;
  /** Some related `Budget` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BudgetFilter>;
};

/** A filter to be used against many `Category` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyCategoryFilter = {
  /** Aggregates across related `Category` match the filter criteria. */
  aggregates?: InputMaybe<CategoryAggregatesFilter>;
  /** Every related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CategoryFilter>;
  /** No related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CategoryFilter>;
  /** Some related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CategoryFilter>;
};

/** A filter to be used against many `Notification` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyNotificationFilter = {
  /** Aggregates across related `Notification` match the filter criteria. */
  aggregates?: InputMaybe<NotificationAggregatesFilter>;
  /** Every related `Notification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NotificationFilter>;
  /** No related `Notification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NotificationFilter>;
  /** Some related `Notification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NotificationFilter>;
};

/** A filter to be used against many `OtpVerification` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyOtpVerificationFilter = {
  /** Aggregates across related `OtpVerification` match the filter criteria. */
  aggregates?: InputMaybe<OtpVerificationAggregatesFilter>;
  /** Every related `OtpVerification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OtpVerificationFilter>;
  /** No related `OtpVerification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OtpVerificationFilter>;
  /** Some related `OtpVerification` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OtpVerificationFilter>;
};

/** A filter to be used against many `Report` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyReportFilter = {
  /** Aggregates across related `Report` match the filter criteria. */
  aggregates?: InputMaybe<ReportAggregatesFilter>;
  /** Every related `Report` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ReportFilter>;
  /** No related `Report` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ReportFilter>;
  /** Some related `Report` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ReportFilter>;
};

/** A filter to be used against many `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyTransactionFilter = {
  /** Aggregates across related `Transaction` match the filter criteria. */
  aggregates?: InputMaybe<TransactionAggregatesFilter>;
  /** Every related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TransactionFilter>;
  /** No related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TransactionFilter>;
  /** Some related `Transaction` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TransactionFilter>;
};

/** A filter to be used against many `UserDevice` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyUserDeviceFilter = {
  /** Aggregates across related `UserDevice` match the filter criteria. */
  aggregates?: InputMaybe<UserDeviceAggregatesFilter>;
  /** Every related `UserDevice` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<UserDeviceFilter>;
  /** No related `UserDevice` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<UserDeviceFilter>;
  /** Some related `UserDevice` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<UserDeviceFilter>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<UserAggregates>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<UserAggregates>>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `User` values. */
export type UsersConnectionGroupedAggregatesArgs = {
  groupBy: Array<UserGroupBy>;
  having?: InputMaybe<UserHavingInput>;
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  BudgetsByUserIdAverageAlertThresholdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdAverageAlertThresholdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdAverageAmountAsc = 'BUDGETS_BY_USER_ID_AVERAGE_AMOUNT_ASC',
  BudgetsByUserIdAverageAmountDesc = 'BUDGETS_BY_USER_ID_AVERAGE_AMOUNT_DESC',
  BudgetsByUserIdAverageBudgetIdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_BUDGET_ID_ASC',
  BudgetsByUserIdAverageBudgetIdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_BUDGET_ID_DESC',
  BudgetsByUserIdAverageCategoryIdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_CATEGORY_ID_ASC',
  BudgetsByUserIdAverageCategoryIdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_CATEGORY_ID_DESC',
  BudgetsByUserIdAverageCreatedAtAsc = 'BUDGETS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  BudgetsByUserIdAverageCreatedAtDesc = 'BUDGETS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  BudgetsByUserIdAverageMonthAsc = 'BUDGETS_BY_USER_ID_AVERAGE_MONTH_ASC',
  BudgetsByUserIdAverageMonthDesc = 'BUDGETS_BY_USER_ID_AVERAGE_MONTH_DESC',
  BudgetsByUserIdAverageUserIdAsc = 'BUDGETS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  BudgetsByUserIdAverageUserIdDesc = 'BUDGETS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  BudgetsByUserIdCountAsc = 'BUDGETS_BY_USER_ID_COUNT_ASC',
  BudgetsByUserIdCountDesc = 'BUDGETS_BY_USER_ID_COUNT_DESC',
  BudgetsByUserIdDistinctCountAlertThresholdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdDistinctCountAlertThresholdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdDistinctCountAmountAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_ASC',
  BudgetsByUserIdDistinctCountAmountDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_DESC',
  BudgetsByUserIdDistinctCountBudgetIdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_BUDGET_ID_ASC',
  BudgetsByUserIdDistinctCountBudgetIdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_BUDGET_ID_DESC',
  BudgetsByUserIdDistinctCountCategoryIdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  BudgetsByUserIdDistinctCountCategoryIdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  BudgetsByUserIdDistinctCountCreatedAtAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  BudgetsByUserIdDistinctCountCreatedAtDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  BudgetsByUserIdDistinctCountMonthAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_MONTH_ASC',
  BudgetsByUserIdDistinctCountMonthDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_MONTH_DESC',
  BudgetsByUserIdDistinctCountUserIdAsc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  BudgetsByUserIdDistinctCountUserIdDesc = 'BUDGETS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  BudgetsByUserIdMaxAlertThresholdAsc = 'BUDGETS_BY_USER_ID_MAX_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdMaxAlertThresholdDesc = 'BUDGETS_BY_USER_ID_MAX_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdMaxAmountAsc = 'BUDGETS_BY_USER_ID_MAX_AMOUNT_ASC',
  BudgetsByUserIdMaxAmountDesc = 'BUDGETS_BY_USER_ID_MAX_AMOUNT_DESC',
  BudgetsByUserIdMaxBudgetIdAsc = 'BUDGETS_BY_USER_ID_MAX_BUDGET_ID_ASC',
  BudgetsByUserIdMaxBudgetIdDesc = 'BUDGETS_BY_USER_ID_MAX_BUDGET_ID_DESC',
  BudgetsByUserIdMaxCategoryIdAsc = 'BUDGETS_BY_USER_ID_MAX_CATEGORY_ID_ASC',
  BudgetsByUserIdMaxCategoryIdDesc = 'BUDGETS_BY_USER_ID_MAX_CATEGORY_ID_DESC',
  BudgetsByUserIdMaxCreatedAtAsc = 'BUDGETS_BY_USER_ID_MAX_CREATED_AT_ASC',
  BudgetsByUserIdMaxCreatedAtDesc = 'BUDGETS_BY_USER_ID_MAX_CREATED_AT_DESC',
  BudgetsByUserIdMaxMonthAsc = 'BUDGETS_BY_USER_ID_MAX_MONTH_ASC',
  BudgetsByUserIdMaxMonthDesc = 'BUDGETS_BY_USER_ID_MAX_MONTH_DESC',
  BudgetsByUserIdMaxUserIdAsc = 'BUDGETS_BY_USER_ID_MAX_USER_ID_ASC',
  BudgetsByUserIdMaxUserIdDesc = 'BUDGETS_BY_USER_ID_MAX_USER_ID_DESC',
  BudgetsByUserIdMinAlertThresholdAsc = 'BUDGETS_BY_USER_ID_MIN_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdMinAlertThresholdDesc = 'BUDGETS_BY_USER_ID_MIN_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdMinAmountAsc = 'BUDGETS_BY_USER_ID_MIN_AMOUNT_ASC',
  BudgetsByUserIdMinAmountDesc = 'BUDGETS_BY_USER_ID_MIN_AMOUNT_DESC',
  BudgetsByUserIdMinBudgetIdAsc = 'BUDGETS_BY_USER_ID_MIN_BUDGET_ID_ASC',
  BudgetsByUserIdMinBudgetIdDesc = 'BUDGETS_BY_USER_ID_MIN_BUDGET_ID_DESC',
  BudgetsByUserIdMinCategoryIdAsc = 'BUDGETS_BY_USER_ID_MIN_CATEGORY_ID_ASC',
  BudgetsByUserIdMinCategoryIdDesc = 'BUDGETS_BY_USER_ID_MIN_CATEGORY_ID_DESC',
  BudgetsByUserIdMinCreatedAtAsc = 'BUDGETS_BY_USER_ID_MIN_CREATED_AT_ASC',
  BudgetsByUserIdMinCreatedAtDesc = 'BUDGETS_BY_USER_ID_MIN_CREATED_AT_DESC',
  BudgetsByUserIdMinMonthAsc = 'BUDGETS_BY_USER_ID_MIN_MONTH_ASC',
  BudgetsByUserIdMinMonthDesc = 'BUDGETS_BY_USER_ID_MIN_MONTH_DESC',
  BudgetsByUserIdMinUserIdAsc = 'BUDGETS_BY_USER_ID_MIN_USER_ID_ASC',
  BudgetsByUserIdMinUserIdDesc = 'BUDGETS_BY_USER_ID_MIN_USER_ID_DESC',
  BudgetsByUserIdStddevPopulationAlertThresholdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdStddevPopulationAlertThresholdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdStddevPopulationAmountAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_ASC',
  BudgetsByUserIdStddevPopulationAmountDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_DESC',
  BudgetsByUserIdStddevPopulationBudgetIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_BUDGET_ID_ASC',
  BudgetsByUserIdStddevPopulationBudgetIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_BUDGET_ID_DESC',
  BudgetsByUserIdStddevPopulationCategoryIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  BudgetsByUserIdStddevPopulationCategoryIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  BudgetsByUserIdStddevPopulationCreatedAtAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  BudgetsByUserIdStddevPopulationCreatedAtDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  BudgetsByUserIdStddevPopulationMonthAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_MONTH_ASC',
  BudgetsByUserIdStddevPopulationMonthDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_MONTH_DESC',
  BudgetsByUserIdStddevPopulationUserIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  BudgetsByUserIdStddevPopulationUserIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  BudgetsByUserIdStddevSampleAlertThresholdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdStddevSampleAlertThresholdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdStddevSampleAmountAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  BudgetsByUserIdStddevSampleAmountDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  BudgetsByUserIdStddevSampleBudgetIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_BUDGET_ID_ASC',
  BudgetsByUserIdStddevSampleBudgetIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_BUDGET_ID_DESC',
  BudgetsByUserIdStddevSampleCategoryIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByUserIdStddevSampleCategoryIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByUserIdStddevSampleCreatedAtAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  BudgetsByUserIdStddevSampleCreatedAtDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  BudgetsByUserIdStddevSampleMonthAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_MONTH_ASC',
  BudgetsByUserIdStddevSampleMonthDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_MONTH_DESC',
  BudgetsByUserIdStddevSampleUserIdAsc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BudgetsByUserIdStddevSampleUserIdDesc = 'BUDGETS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BudgetsByUserIdSumAlertThresholdAsc = 'BUDGETS_BY_USER_ID_SUM_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdSumAlertThresholdDesc = 'BUDGETS_BY_USER_ID_SUM_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdSumAmountAsc = 'BUDGETS_BY_USER_ID_SUM_AMOUNT_ASC',
  BudgetsByUserIdSumAmountDesc = 'BUDGETS_BY_USER_ID_SUM_AMOUNT_DESC',
  BudgetsByUserIdSumBudgetIdAsc = 'BUDGETS_BY_USER_ID_SUM_BUDGET_ID_ASC',
  BudgetsByUserIdSumBudgetIdDesc = 'BUDGETS_BY_USER_ID_SUM_BUDGET_ID_DESC',
  BudgetsByUserIdSumCategoryIdAsc = 'BUDGETS_BY_USER_ID_SUM_CATEGORY_ID_ASC',
  BudgetsByUserIdSumCategoryIdDesc = 'BUDGETS_BY_USER_ID_SUM_CATEGORY_ID_DESC',
  BudgetsByUserIdSumCreatedAtAsc = 'BUDGETS_BY_USER_ID_SUM_CREATED_AT_ASC',
  BudgetsByUserIdSumCreatedAtDesc = 'BUDGETS_BY_USER_ID_SUM_CREATED_AT_DESC',
  BudgetsByUserIdSumMonthAsc = 'BUDGETS_BY_USER_ID_SUM_MONTH_ASC',
  BudgetsByUserIdSumMonthDesc = 'BUDGETS_BY_USER_ID_SUM_MONTH_DESC',
  BudgetsByUserIdSumUserIdAsc = 'BUDGETS_BY_USER_ID_SUM_USER_ID_ASC',
  BudgetsByUserIdSumUserIdDesc = 'BUDGETS_BY_USER_ID_SUM_USER_ID_DESC',
  BudgetsByUserIdVariancePopulationAlertThresholdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdVariancePopulationAlertThresholdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdVariancePopulationAmountAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  BudgetsByUserIdVariancePopulationAmountDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  BudgetsByUserIdVariancePopulationBudgetIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_BUDGET_ID_ASC',
  BudgetsByUserIdVariancePopulationBudgetIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_BUDGET_ID_DESC',
  BudgetsByUserIdVariancePopulationCategoryIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  BudgetsByUserIdVariancePopulationCategoryIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  BudgetsByUserIdVariancePopulationCreatedAtAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  BudgetsByUserIdVariancePopulationCreatedAtDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  BudgetsByUserIdVariancePopulationMonthAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_MONTH_ASC',
  BudgetsByUserIdVariancePopulationMonthDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_MONTH_DESC',
  BudgetsByUserIdVariancePopulationUserIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BudgetsByUserIdVariancePopulationUserIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BudgetsByUserIdVarianceSampleAlertThresholdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_ASC',
  BudgetsByUserIdVarianceSampleAlertThresholdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_ALERT_THRESHOLD_DESC',
  BudgetsByUserIdVarianceSampleAmountAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  BudgetsByUserIdVarianceSampleAmountDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  BudgetsByUserIdVarianceSampleBudgetIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_BUDGET_ID_ASC',
  BudgetsByUserIdVarianceSampleBudgetIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_BUDGET_ID_DESC',
  BudgetsByUserIdVarianceSampleCategoryIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  BudgetsByUserIdVarianceSampleCategoryIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  BudgetsByUserIdVarianceSampleCreatedAtAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  BudgetsByUserIdVarianceSampleCreatedAtDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  BudgetsByUserIdVarianceSampleMonthAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByUserIdVarianceSampleMonthDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByUserIdVarianceSampleUserIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByUserIdVarianceSampleUserIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  CategoriesByUserIdAverageIconAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_ASC',
  CategoriesByUserIdAverageIconColorAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_COLOR_ASC',
  CategoriesByUserIdAverageIconColorDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_COLOR_DESC',
  CategoriesByUserIdAverageIconDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_ICON_DESC',
  CategoriesByUserIdAverageIdAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_ID_ASC',
  CategoriesByUserIdAverageIdDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_ID_DESC',
  CategoriesByUserIdAverageNameAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_NAME_ASC',
  CategoriesByUserIdAverageNameDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_NAME_DESC',
  CategoriesByUserIdAverageTypeAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_TYPE_ASC',
  CategoriesByUserIdAverageTypeDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_TYPE_DESC',
  CategoriesByUserIdAverageUserIdAsc = 'CATEGORIES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  CategoriesByUserIdAverageUserIdDesc = 'CATEGORIES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  CategoriesByUserIdCountAsc = 'CATEGORIES_BY_USER_ID_COUNT_ASC',
  CategoriesByUserIdCountDesc = 'CATEGORIES_BY_USER_ID_COUNT_DESC',
  CategoriesByUserIdDistinctCountIconAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_ASC',
  CategoriesByUserIdDistinctCountIconColorAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_COLOR_ASC',
  CategoriesByUserIdDistinctCountIconColorDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_COLOR_DESC',
  CategoriesByUserIdDistinctCountIconDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ICON_DESC',
  CategoriesByUserIdDistinctCountIdAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  CategoriesByUserIdDistinctCountIdDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  CategoriesByUserIdDistinctCountNameAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_NAME_ASC',
  CategoriesByUserIdDistinctCountNameDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_NAME_DESC',
  CategoriesByUserIdDistinctCountTypeAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_TYPE_ASC',
  CategoriesByUserIdDistinctCountTypeDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_TYPE_DESC',
  CategoriesByUserIdDistinctCountUserIdAsc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  CategoriesByUserIdDistinctCountUserIdDesc = 'CATEGORIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  CategoriesByUserIdMaxIconAsc = 'CATEGORIES_BY_USER_ID_MAX_ICON_ASC',
  CategoriesByUserIdMaxIconColorAsc = 'CATEGORIES_BY_USER_ID_MAX_ICON_COLOR_ASC',
  CategoriesByUserIdMaxIconColorDesc = 'CATEGORIES_BY_USER_ID_MAX_ICON_COLOR_DESC',
  CategoriesByUserIdMaxIconDesc = 'CATEGORIES_BY_USER_ID_MAX_ICON_DESC',
  CategoriesByUserIdMaxIdAsc = 'CATEGORIES_BY_USER_ID_MAX_ID_ASC',
  CategoriesByUserIdMaxIdDesc = 'CATEGORIES_BY_USER_ID_MAX_ID_DESC',
  CategoriesByUserIdMaxNameAsc = 'CATEGORIES_BY_USER_ID_MAX_NAME_ASC',
  CategoriesByUserIdMaxNameDesc = 'CATEGORIES_BY_USER_ID_MAX_NAME_DESC',
  CategoriesByUserIdMaxTypeAsc = 'CATEGORIES_BY_USER_ID_MAX_TYPE_ASC',
  CategoriesByUserIdMaxTypeDesc = 'CATEGORIES_BY_USER_ID_MAX_TYPE_DESC',
  CategoriesByUserIdMaxUserIdAsc = 'CATEGORIES_BY_USER_ID_MAX_USER_ID_ASC',
  CategoriesByUserIdMaxUserIdDesc = 'CATEGORIES_BY_USER_ID_MAX_USER_ID_DESC',
  CategoriesByUserIdMinIconAsc = 'CATEGORIES_BY_USER_ID_MIN_ICON_ASC',
  CategoriesByUserIdMinIconColorAsc = 'CATEGORIES_BY_USER_ID_MIN_ICON_COLOR_ASC',
  CategoriesByUserIdMinIconColorDesc = 'CATEGORIES_BY_USER_ID_MIN_ICON_COLOR_DESC',
  CategoriesByUserIdMinIconDesc = 'CATEGORIES_BY_USER_ID_MIN_ICON_DESC',
  CategoriesByUserIdMinIdAsc = 'CATEGORIES_BY_USER_ID_MIN_ID_ASC',
  CategoriesByUserIdMinIdDesc = 'CATEGORIES_BY_USER_ID_MIN_ID_DESC',
  CategoriesByUserIdMinNameAsc = 'CATEGORIES_BY_USER_ID_MIN_NAME_ASC',
  CategoriesByUserIdMinNameDesc = 'CATEGORIES_BY_USER_ID_MIN_NAME_DESC',
  CategoriesByUserIdMinTypeAsc = 'CATEGORIES_BY_USER_ID_MIN_TYPE_ASC',
  CategoriesByUserIdMinTypeDesc = 'CATEGORIES_BY_USER_ID_MIN_TYPE_DESC',
  CategoriesByUserIdMinUserIdAsc = 'CATEGORIES_BY_USER_ID_MIN_USER_ID_ASC',
  CategoriesByUserIdMinUserIdDesc = 'CATEGORIES_BY_USER_ID_MIN_USER_ID_DESC',
  CategoriesByUserIdStddevPopulationIconAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_ASC',
  CategoriesByUserIdStddevPopulationIconColorAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_COLOR_ASC',
  CategoriesByUserIdStddevPopulationIconColorDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_COLOR_DESC',
  CategoriesByUserIdStddevPopulationIconDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ICON_DESC',
  CategoriesByUserIdStddevPopulationIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  CategoriesByUserIdStddevPopulationIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  CategoriesByUserIdStddevPopulationNameAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_NAME_ASC',
  CategoriesByUserIdStddevPopulationNameDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_NAME_DESC',
  CategoriesByUserIdStddevPopulationTypeAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_TYPE_ASC',
  CategoriesByUserIdStddevPopulationTypeDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_TYPE_DESC',
  CategoriesByUserIdStddevPopulationUserIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  CategoriesByUserIdStddevPopulationUserIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  CategoriesByUserIdStddevSampleIconAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_ASC',
  CategoriesByUserIdStddevSampleIconColorAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_COLOR_ASC',
  CategoriesByUserIdStddevSampleIconColorDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_COLOR_DESC',
  CategoriesByUserIdStddevSampleIconDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ICON_DESC',
  CategoriesByUserIdStddevSampleIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  CategoriesByUserIdStddevSampleIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  CategoriesByUserIdStddevSampleNameAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_NAME_ASC',
  CategoriesByUserIdStddevSampleNameDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_NAME_DESC',
  CategoriesByUserIdStddevSampleTypeAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_TYPE_ASC',
  CategoriesByUserIdStddevSampleTypeDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_TYPE_DESC',
  CategoriesByUserIdStddevSampleUserIdAsc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  CategoriesByUserIdStddevSampleUserIdDesc = 'CATEGORIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  CategoriesByUserIdSumIconAsc = 'CATEGORIES_BY_USER_ID_SUM_ICON_ASC',
  CategoriesByUserIdSumIconColorAsc = 'CATEGORIES_BY_USER_ID_SUM_ICON_COLOR_ASC',
  CategoriesByUserIdSumIconColorDesc = 'CATEGORIES_BY_USER_ID_SUM_ICON_COLOR_DESC',
  CategoriesByUserIdSumIconDesc = 'CATEGORIES_BY_USER_ID_SUM_ICON_DESC',
  CategoriesByUserIdSumIdAsc = 'CATEGORIES_BY_USER_ID_SUM_ID_ASC',
  CategoriesByUserIdSumIdDesc = 'CATEGORIES_BY_USER_ID_SUM_ID_DESC',
  CategoriesByUserIdSumNameAsc = 'CATEGORIES_BY_USER_ID_SUM_NAME_ASC',
  CategoriesByUserIdSumNameDesc = 'CATEGORIES_BY_USER_ID_SUM_NAME_DESC',
  CategoriesByUserIdSumTypeAsc = 'CATEGORIES_BY_USER_ID_SUM_TYPE_ASC',
  CategoriesByUserIdSumTypeDesc = 'CATEGORIES_BY_USER_ID_SUM_TYPE_DESC',
  CategoriesByUserIdSumUserIdAsc = 'CATEGORIES_BY_USER_ID_SUM_USER_ID_ASC',
  CategoriesByUserIdSumUserIdDesc = 'CATEGORIES_BY_USER_ID_SUM_USER_ID_DESC',
  CategoriesByUserIdVariancePopulationIconAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_ASC',
  CategoriesByUserIdVariancePopulationIconColorAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_COLOR_ASC',
  CategoriesByUserIdVariancePopulationIconColorDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_COLOR_DESC',
  CategoriesByUserIdVariancePopulationIconDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ICON_DESC',
  CategoriesByUserIdVariancePopulationIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  CategoriesByUserIdVariancePopulationIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  CategoriesByUserIdVariancePopulationNameAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_NAME_ASC',
  CategoriesByUserIdVariancePopulationNameDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_NAME_DESC',
  CategoriesByUserIdVariancePopulationTypeAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_TYPE_ASC',
  CategoriesByUserIdVariancePopulationTypeDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_TYPE_DESC',
  CategoriesByUserIdVariancePopulationUserIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  CategoriesByUserIdVariancePopulationUserIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  CategoriesByUserIdVarianceSampleIconAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_ASC',
  CategoriesByUserIdVarianceSampleIconColorAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_COLOR_ASC',
  CategoriesByUserIdVarianceSampleIconColorDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_COLOR_DESC',
  CategoriesByUserIdVarianceSampleIconDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ICON_DESC',
  CategoriesByUserIdVarianceSampleIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  CategoriesByUserIdVarianceSampleIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  CategoriesByUserIdVarianceSampleNameAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_NAME_ASC',
  CategoriesByUserIdVarianceSampleNameDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_NAME_DESC',
  CategoriesByUserIdVarianceSampleTypeAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_TYPE_ASC',
  CategoriesByUserIdVarianceSampleTypeDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_TYPE_DESC',
  CategoriesByUserIdVarianceSampleUserIdAsc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  CategoriesByUserIdVarianceSampleUserIdDesc = 'CATEGORIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  NotificationsByUserIdAverageDataAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_DATA_ASC',
  NotificationsByUserIdAverageDataDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_DATA_DESC',
  NotificationsByUserIdAverageIdAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_ID_ASC',
  NotificationsByUserIdAverageIdDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_ID_DESC',
  NotificationsByUserIdAverageIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_IS_READ_ASC',
  NotificationsByUserIdAverageIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_IS_READ_DESC',
  NotificationsByUserIdAverageTAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_T_ASC',
  NotificationsByUserIdAverageTDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_T_DESC',
  NotificationsByUserIdAverageUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  NotificationsByUserIdAverageUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  NotificationsByUserIdCountAsc = 'NOTIFICATIONS_BY_USER_ID_COUNT_ASC',
  NotificationsByUserIdCountDesc = 'NOTIFICATIONS_BY_USER_ID_COUNT_DESC',
  NotificationsByUserIdDistinctCountDataAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_DATA_ASC',
  NotificationsByUserIdDistinctCountDataDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_DATA_DESC',
  NotificationsByUserIdDistinctCountIdAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  NotificationsByUserIdDistinctCountIdDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  NotificationsByUserIdDistinctCountIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_IS_READ_ASC',
  NotificationsByUserIdDistinctCountIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_IS_READ_DESC',
  NotificationsByUserIdDistinctCountTAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_T_ASC',
  NotificationsByUserIdDistinctCountTDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_T_DESC',
  NotificationsByUserIdDistinctCountUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  NotificationsByUserIdDistinctCountUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  NotificationsByUserIdMaxDataAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_DATA_ASC',
  NotificationsByUserIdMaxDataDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_DATA_DESC',
  NotificationsByUserIdMaxIdAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_ID_ASC',
  NotificationsByUserIdMaxIdDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_ID_DESC',
  NotificationsByUserIdMaxIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_IS_READ_ASC',
  NotificationsByUserIdMaxIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_IS_READ_DESC',
  NotificationsByUserIdMaxTAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_T_ASC',
  NotificationsByUserIdMaxTDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_T_DESC',
  NotificationsByUserIdMaxUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_MAX_USER_ID_ASC',
  NotificationsByUserIdMaxUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_MAX_USER_ID_DESC',
  NotificationsByUserIdMinDataAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_DATA_ASC',
  NotificationsByUserIdMinDataDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_DATA_DESC',
  NotificationsByUserIdMinIdAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_ID_ASC',
  NotificationsByUserIdMinIdDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_ID_DESC',
  NotificationsByUserIdMinIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_IS_READ_ASC',
  NotificationsByUserIdMinIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_IS_READ_DESC',
  NotificationsByUserIdMinTAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_T_ASC',
  NotificationsByUserIdMinTDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_T_DESC',
  NotificationsByUserIdMinUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_MIN_USER_ID_ASC',
  NotificationsByUserIdMinUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_MIN_USER_ID_DESC',
  NotificationsByUserIdStddevPopulationDataAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_DATA_ASC',
  NotificationsByUserIdStddevPopulationDataDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_DATA_DESC',
  NotificationsByUserIdStddevPopulationIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  NotificationsByUserIdStddevPopulationIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  NotificationsByUserIdStddevPopulationIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_IS_READ_ASC',
  NotificationsByUserIdStddevPopulationIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_IS_READ_DESC',
  NotificationsByUserIdStddevPopulationTAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_T_ASC',
  NotificationsByUserIdStddevPopulationTDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_T_DESC',
  NotificationsByUserIdStddevPopulationUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  NotificationsByUserIdStddevPopulationUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  NotificationsByUserIdStddevSampleDataAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_DATA_ASC',
  NotificationsByUserIdStddevSampleDataDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_DATA_DESC',
  NotificationsByUserIdStddevSampleIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  NotificationsByUserIdStddevSampleIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  NotificationsByUserIdStddevSampleIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_IS_READ_ASC',
  NotificationsByUserIdStddevSampleIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_IS_READ_DESC',
  NotificationsByUserIdStddevSampleTAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_T_ASC',
  NotificationsByUserIdStddevSampleTDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_T_DESC',
  NotificationsByUserIdStddevSampleUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  NotificationsByUserIdStddevSampleUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  NotificationsByUserIdSumDataAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_DATA_ASC',
  NotificationsByUserIdSumDataDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_DATA_DESC',
  NotificationsByUserIdSumIdAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_ID_ASC',
  NotificationsByUserIdSumIdDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_ID_DESC',
  NotificationsByUserIdSumIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_IS_READ_ASC',
  NotificationsByUserIdSumIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_IS_READ_DESC',
  NotificationsByUserIdSumTAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_T_ASC',
  NotificationsByUserIdSumTDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_T_DESC',
  NotificationsByUserIdSumUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_SUM_USER_ID_ASC',
  NotificationsByUserIdSumUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_SUM_USER_ID_DESC',
  NotificationsByUserIdVariancePopulationDataAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_DATA_ASC',
  NotificationsByUserIdVariancePopulationDataDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_DATA_DESC',
  NotificationsByUserIdVariancePopulationIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  NotificationsByUserIdVariancePopulationIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  NotificationsByUserIdVariancePopulationIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_IS_READ_ASC',
  NotificationsByUserIdVariancePopulationIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_IS_READ_DESC',
  NotificationsByUserIdVariancePopulationTAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_T_ASC',
  NotificationsByUserIdVariancePopulationTDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_T_DESC',
  NotificationsByUserIdVariancePopulationUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  NotificationsByUserIdVariancePopulationUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  NotificationsByUserIdVarianceSampleDataAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_DATA_ASC',
  NotificationsByUserIdVarianceSampleDataDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_DATA_DESC',
  NotificationsByUserIdVarianceSampleIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  NotificationsByUserIdVarianceSampleIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  NotificationsByUserIdVarianceSampleIsReadAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_IS_READ_ASC',
  NotificationsByUserIdVarianceSampleIsReadDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_IS_READ_DESC',
  NotificationsByUserIdVarianceSampleTAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_T_ASC',
  NotificationsByUserIdVarianceSampleTDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_T_DESC',
  NotificationsByUserIdVarianceSampleUserIdAsc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  NotificationsByUserIdVarianceSampleUserIdDesc = 'NOTIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  OidcIdAsc = 'OIDC_ID_ASC',
  OidcIdDesc = 'OIDC_ID_DESC',
  OtpVerificationsByUserIdAverageCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  OtpVerificationsByUserIdAverageCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  OtpVerificationsByUserIdAverageEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EMAIL_ASC',
  OtpVerificationsByUserIdAverageEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EMAIL_DESC',
  OtpVerificationsByUserIdAverageExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdAverageExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdAverageIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_ID_ASC',
  OtpVerificationsByUserIdAverageIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_ID_DESC',
  OtpVerificationsByUserIdAverageOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_OTP_ASC',
  OtpVerificationsByUserIdAverageOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_OTP_DESC',
  OtpVerificationsByUserIdAverageUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  OtpVerificationsByUserIdAverageUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  OtpVerificationsByUserIdCountAsc = 'OTP_VERIFICATIONS_BY_USER_ID_COUNT_ASC',
  OtpVerificationsByUserIdCountDesc = 'OTP_VERIFICATIONS_BY_USER_ID_COUNT_DESC',
  OtpVerificationsByUserIdDistinctCountCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  OtpVerificationsByUserIdDistinctCountCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  OtpVerificationsByUserIdDistinctCountEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EMAIL_ASC',
  OtpVerificationsByUserIdDistinctCountEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EMAIL_DESC',
  OtpVerificationsByUserIdDistinctCountExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdDistinctCountExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdDistinctCountIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  OtpVerificationsByUserIdDistinctCountIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  OtpVerificationsByUserIdDistinctCountOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_OTP_ASC',
  OtpVerificationsByUserIdDistinctCountOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_OTP_DESC',
  OtpVerificationsByUserIdDistinctCountUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  OtpVerificationsByUserIdDistinctCountUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  OtpVerificationsByUserIdMaxCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_CREATED_AT_ASC',
  OtpVerificationsByUserIdMaxCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_CREATED_AT_DESC',
  OtpVerificationsByUserIdMaxEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EMAIL_ASC',
  OtpVerificationsByUserIdMaxEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EMAIL_DESC',
  OtpVerificationsByUserIdMaxExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdMaxExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdMaxIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_ID_ASC',
  OtpVerificationsByUserIdMaxIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_ID_DESC',
  OtpVerificationsByUserIdMaxOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_OTP_ASC',
  OtpVerificationsByUserIdMaxOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_OTP_DESC',
  OtpVerificationsByUserIdMaxUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_USER_ID_ASC',
  OtpVerificationsByUserIdMaxUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MAX_USER_ID_DESC',
  OtpVerificationsByUserIdMinCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_CREATED_AT_ASC',
  OtpVerificationsByUserIdMinCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_CREATED_AT_DESC',
  OtpVerificationsByUserIdMinEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EMAIL_ASC',
  OtpVerificationsByUserIdMinEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EMAIL_DESC',
  OtpVerificationsByUserIdMinExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdMinExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdMinIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_ID_ASC',
  OtpVerificationsByUserIdMinIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_ID_DESC',
  OtpVerificationsByUserIdMinOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_OTP_ASC',
  OtpVerificationsByUserIdMinOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_OTP_DESC',
  OtpVerificationsByUserIdMinUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_USER_ID_ASC',
  OtpVerificationsByUserIdMinUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_MIN_USER_ID_DESC',
  OtpVerificationsByUserIdStddevPopulationCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  OtpVerificationsByUserIdStddevPopulationCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  OtpVerificationsByUserIdStddevPopulationEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EMAIL_ASC',
  OtpVerificationsByUserIdStddevPopulationEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EMAIL_DESC',
  OtpVerificationsByUserIdStddevPopulationExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdStddevPopulationExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdStddevPopulationIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  OtpVerificationsByUserIdStddevPopulationIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  OtpVerificationsByUserIdStddevPopulationOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_OTP_ASC',
  OtpVerificationsByUserIdStddevPopulationOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_OTP_DESC',
  OtpVerificationsByUserIdStddevPopulationUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  OtpVerificationsByUserIdStddevPopulationUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  OtpVerificationsByUserIdStddevSampleCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  OtpVerificationsByUserIdStddevSampleCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  OtpVerificationsByUserIdStddevSampleEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EMAIL_ASC',
  OtpVerificationsByUserIdStddevSampleEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EMAIL_DESC',
  OtpVerificationsByUserIdStddevSampleExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdStddevSampleExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdStddevSampleIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  OtpVerificationsByUserIdStddevSampleIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  OtpVerificationsByUserIdStddevSampleOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_OTP_ASC',
  OtpVerificationsByUserIdStddevSampleOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_OTP_DESC',
  OtpVerificationsByUserIdStddevSampleUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  OtpVerificationsByUserIdStddevSampleUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  OtpVerificationsByUserIdSumCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_CREATED_AT_ASC',
  OtpVerificationsByUserIdSumCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_CREATED_AT_DESC',
  OtpVerificationsByUserIdSumEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EMAIL_ASC',
  OtpVerificationsByUserIdSumEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EMAIL_DESC',
  OtpVerificationsByUserIdSumExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdSumExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdSumIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_ID_ASC',
  OtpVerificationsByUserIdSumIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_ID_DESC',
  OtpVerificationsByUserIdSumOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_OTP_ASC',
  OtpVerificationsByUserIdSumOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_OTP_DESC',
  OtpVerificationsByUserIdSumUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_USER_ID_ASC',
  OtpVerificationsByUserIdSumUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_SUM_USER_ID_DESC',
  OtpVerificationsByUserIdVariancePopulationCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  OtpVerificationsByUserIdVariancePopulationCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  OtpVerificationsByUserIdVariancePopulationEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EMAIL_ASC',
  OtpVerificationsByUserIdVariancePopulationEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EMAIL_DESC',
  OtpVerificationsByUserIdVariancePopulationExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdVariancePopulationExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdVariancePopulationIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  OtpVerificationsByUserIdVariancePopulationIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  OtpVerificationsByUserIdVariancePopulationOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_OTP_ASC',
  OtpVerificationsByUserIdVariancePopulationOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_OTP_DESC',
  OtpVerificationsByUserIdVariancePopulationUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  OtpVerificationsByUserIdVariancePopulationUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  OtpVerificationsByUserIdVarianceSampleCreatedAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  OtpVerificationsByUserIdVarianceSampleCreatedAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  OtpVerificationsByUserIdVarianceSampleEmailAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EMAIL_ASC',
  OtpVerificationsByUserIdVarianceSampleEmailDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EMAIL_DESC',
  OtpVerificationsByUserIdVarianceSampleExpiresAtAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EXPIRES_AT_ASC',
  OtpVerificationsByUserIdVarianceSampleExpiresAtDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_EXPIRES_AT_DESC',
  OtpVerificationsByUserIdVarianceSampleIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  OtpVerificationsByUserIdVarianceSampleIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  OtpVerificationsByUserIdVarianceSampleOtpAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_OTP_ASC',
  OtpVerificationsByUserIdVarianceSampleOtpDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_OTP_DESC',
  OtpVerificationsByUserIdVarianceSampleUserIdAsc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  OtpVerificationsByUserIdVarianceSampleUserIdDesc = 'OTP_VERIFICATIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReportsByUserIdAverageCreatedAtAsc = 'REPORTS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  ReportsByUserIdAverageCreatedAtDesc = 'REPORTS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  ReportsByUserIdAverageFilePathAsc = 'REPORTS_BY_USER_ID_AVERAGE_FILE_PATH_ASC',
  ReportsByUserIdAverageFilePathDesc = 'REPORTS_BY_USER_ID_AVERAGE_FILE_PATH_DESC',
  ReportsByUserIdAverageReportIdAsc = 'REPORTS_BY_USER_ID_AVERAGE_REPORT_ID_ASC',
  ReportsByUserIdAverageReportIdDesc = 'REPORTS_BY_USER_ID_AVERAGE_REPORT_ID_DESC',
  ReportsByUserIdAverageUserIdAsc = 'REPORTS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  ReportsByUserIdAverageUserIdDesc = 'REPORTS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  ReportsByUserIdCountAsc = 'REPORTS_BY_USER_ID_COUNT_ASC',
  ReportsByUserIdCountDesc = 'REPORTS_BY_USER_ID_COUNT_DESC',
  ReportsByUserIdDistinctCountCreatedAtAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  ReportsByUserIdDistinctCountCreatedAtDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  ReportsByUserIdDistinctCountFilePathAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_FILE_PATH_ASC',
  ReportsByUserIdDistinctCountFilePathDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_FILE_PATH_DESC',
  ReportsByUserIdDistinctCountReportIdAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_REPORT_ID_ASC',
  ReportsByUserIdDistinctCountReportIdDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_REPORT_ID_DESC',
  ReportsByUserIdDistinctCountUserIdAsc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  ReportsByUserIdDistinctCountUserIdDesc = 'REPORTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  ReportsByUserIdMaxCreatedAtAsc = 'REPORTS_BY_USER_ID_MAX_CREATED_AT_ASC',
  ReportsByUserIdMaxCreatedAtDesc = 'REPORTS_BY_USER_ID_MAX_CREATED_AT_DESC',
  ReportsByUserIdMaxFilePathAsc = 'REPORTS_BY_USER_ID_MAX_FILE_PATH_ASC',
  ReportsByUserIdMaxFilePathDesc = 'REPORTS_BY_USER_ID_MAX_FILE_PATH_DESC',
  ReportsByUserIdMaxReportIdAsc = 'REPORTS_BY_USER_ID_MAX_REPORT_ID_ASC',
  ReportsByUserIdMaxReportIdDesc = 'REPORTS_BY_USER_ID_MAX_REPORT_ID_DESC',
  ReportsByUserIdMaxUserIdAsc = 'REPORTS_BY_USER_ID_MAX_USER_ID_ASC',
  ReportsByUserIdMaxUserIdDesc = 'REPORTS_BY_USER_ID_MAX_USER_ID_DESC',
  ReportsByUserIdMinCreatedAtAsc = 'REPORTS_BY_USER_ID_MIN_CREATED_AT_ASC',
  ReportsByUserIdMinCreatedAtDesc = 'REPORTS_BY_USER_ID_MIN_CREATED_AT_DESC',
  ReportsByUserIdMinFilePathAsc = 'REPORTS_BY_USER_ID_MIN_FILE_PATH_ASC',
  ReportsByUserIdMinFilePathDesc = 'REPORTS_BY_USER_ID_MIN_FILE_PATH_DESC',
  ReportsByUserIdMinReportIdAsc = 'REPORTS_BY_USER_ID_MIN_REPORT_ID_ASC',
  ReportsByUserIdMinReportIdDesc = 'REPORTS_BY_USER_ID_MIN_REPORT_ID_DESC',
  ReportsByUserIdMinUserIdAsc = 'REPORTS_BY_USER_ID_MIN_USER_ID_ASC',
  ReportsByUserIdMinUserIdDesc = 'REPORTS_BY_USER_ID_MIN_USER_ID_DESC',
  ReportsByUserIdStddevPopulationCreatedAtAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  ReportsByUserIdStddevPopulationCreatedAtDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  ReportsByUserIdStddevPopulationFilePathAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_FILE_PATH_ASC',
  ReportsByUserIdStddevPopulationFilePathDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_FILE_PATH_DESC',
  ReportsByUserIdStddevPopulationReportIdAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_REPORT_ID_ASC',
  ReportsByUserIdStddevPopulationReportIdDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_REPORT_ID_DESC',
  ReportsByUserIdStddevPopulationUserIdAsc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  ReportsByUserIdStddevPopulationUserIdDesc = 'REPORTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  ReportsByUserIdStddevSampleCreatedAtAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  ReportsByUserIdStddevSampleCreatedAtDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  ReportsByUserIdStddevSampleFilePathAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_FILE_PATH_ASC',
  ReportsByUserIdStddevSampleFilePathDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_FILE_PATH_DESC',
  ReportsByUserIdStddevSampleReportIdAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_REPORT_ID_ASC',
  ReportsByUserIdStddevSampleReportIdDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_REPORT_ID_DESC',
  ReportsByUserIdStddevSampleUserIdAsc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  ReportsByUserIdStddevSampleUserIdDesc = 'REPORTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  ReportsByUserIdSumCreatedAtAsc = 'REPORTS_BY_USER_ID_SUM_CREATED_AT_ASC',
  ReportsByUserIdSumCreatedAtDesc = 'REPORTS_BY_USER_ID_SUM_CREATED_AT_DESC',
  ReportsByUserIdSumFilePathAsc = 'REPORTS_BY_USER_ID_SUM_FILE_PATH_ASC',
  ReportsByUserIdSumFilePathDesc = 'REPORTS_BY_USER_ID_SUM_FILE_PATH_DESC',
  ReportsByUserIdSumReportIdAsc = 'REPORTS_BY_USER_ID_SUM_REPORT_ID_ASC',
  ReportsByUserIdSumReportIdDesc = 'REPORTS_BY_USER_ID_SUM_REPORT_ID_DESC',
  ReportsByUserIdSumUserIdAsc = 'REPORTS_BY_USER_ID_SUM_USER_ID_ASC',
  ReportsByUserIdSumUserIdDesc = 'REPORTS_BY_USER_ID_SUM_USER_ID_DESC',
  ReportsByUserIdVariancePopulationCreatedAtAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  ReportsByUserIdVariancePopulationCreatedAtDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  ReportsByUserIdVariancePopulationFilePathAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_FILE_PATH_ASC',
  ReportsByUserIdVariancePopulationFilePathDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_FILE_PATH_DESC',
  ReportsByUserIdVariancePopulationReportIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_REPORT_ID_ASC',
  ReportsByUserIdVariancePopulationReportIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_REPORT_ID_DESC',
  ReportsByUserIdVariancePopulationUserIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  ReportsByUserIdVariancePopulationUserIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  ReportsByUserIdVarianceSampleCreatedAtAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  ReportsByUserIdVarianceSampleCreatedAtDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  ReportsByUserIdVarianceSampleFilePathAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_FILE_PATH_ASC',
  ReportsByUserIdVarianceSampleFilePathDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_FILE_PATH_DESC',
  ReportsByUserIdVarianceSampleReportIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_REPORT_ID_ASC',
  ReportsByUserIdVarianceSampleReportIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_REPORT_ID_DESC',
  ReportsByUserIdVarianceSampleUserIdAsc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  ReportsByUserIdVarianceSampleUserIdDesc = 'REPORTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  TelAsc = 'TEL_ASC',
  TelDesc = 'TEL_DESC',
  TransactionsByUserIdAverageAmountAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_AMOUNT_ASC',
  TransactionsByUserIdAverageAmountDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_AMOUNT_DESC',
  TransactionsByUserIdAverageCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_CATEGORY_ID_ASC',
  TransactionsByUserIdAverageCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_CATEGORY_ID_DESC',
  TransactionsByUserIdAverageDateAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DATE_ASC',
  TransactionsByUserIdAverageDateDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DATE_DESC',
  TransactionsByUserIdAverageDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DESCRIPTION_ASC',
  TransactionsByUserIdAverageDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_DESCRIPTION_DESC',
  TransactionsByUserIdAverageTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TRANSACTION_ID_ASC',
  TransactionsByUserIdAverageTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TRANSACTION_ID_DESC',
  TransactionsByUserIdAverageTypeAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TYPE_ASC',
  TransactionsByUserIdAverageTypeDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_TYPE_DESC',
  TransactionsByUserIdAverageUserIdAsc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  TransactionsByUserIdAverageUserIdDesc = 'TRANSACTIONS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  TransactionsByUserIdCountAsc = 'TRANSACTIONS_BY_USER_ID_COUNT_ASC',
  TransactionsByUserIdCountDesc = 'TRANSACTIONS_BY_USER_ID_COUNT_DESC',
  TransactionsByUserIdDistinctCountAmountAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_ASC',
  TransactionsByUserIdDistinctCountAmountDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_AMOUNT_DESC',
  TransactionsByUserIdDistinctCountCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_ASC',
  TransactionsByUserIdDistinctCountCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_CATEGORY_ID_DESC',
  TransactionsByUserIdDistinctCountDateAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DATE_ASC',
  TransactionsByUserIdDistinctCountDateDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DATE_DESC',
  TransactionsByUserIdDistinctCountDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  TransactionsByUserIdDistinctCountDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  TransactionsByUserIdDistinctCountTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TRANSACTION_ID_ASC',
  TransactionsByUserIdDistinctCountTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TRANSACTION_ID_DESC',
  TransactionsByUserIdDistinctCountTypeAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TYPE_ASC',
  TransactionsByUserIdDistinctCountTypeDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_TYPE_DESC',
  TransactionsByUserIdDistinctCountUserIdAsc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  TransactionsByUserIdDistinctCountUserIdDesc = 'TRANSACTIONS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  TransactionsByUserIdMaxAmountAsc = 'TRANSACTIONS_BY_USER_ID_MAX_AMOUNT_ASC',
  TransactionsByUserIdMaxAmountDesc = 'TRANSACTIONS_BY_USER_ID_MAX_AMOUNT_DESC',
  TransactionsByUserIdMaxCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_MAX_CATEGORY_ID_ASC',
  TransactionsByUserIdMaxCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_MAX_CATEGORY_ID_DESC',
  TransactionsByUserIdMaxDateAsc = 'TRANSACTIONS_BY_USER_ID_MAX_DATE_ASC',
  TransactionsByUserIdMaxDateDesc = 'TRANSACTIONS_BY_USER_ID_MAX_DATE_DESC',
  TransactionsByUserIdMaxDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_MAX_DESCRIPTION_ASC',
  TransactionsByUserIdMaxDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_MAX_DESCRIPTION_DESC',
  TransactionsByUserIdMaxTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_MAX_TRANSACTION_ID_ASC',
  TransactionsByUserIdMaxTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_MAX_TRANSACTION_ID_DESC',
  TransactionsByUserIdMaxTypeAsc = 'TRANSACTIONS_BY_USER_ID_MAX_TYPE_ASC',
  TransactionsByUserIdMaxTypeDesc = 'TRANSACTIONS_BY_USER_ID_MAX_TYPE_DESC',
  TransactionsByUserIdMaxUserIdAsc = 'TRANSACTIONS_BY_USER_ID_MAX_USER_ID_ASC',
  TransactionsByUserIdMaxUserIdDesc = 'TRANSACTIONS_BY_USER_ID_MAX_USER_ID_DESC',
  TransactionsByUserIdMinAmountAsc = 'TRANSACTIONS_BY_USER_ID_MIN_AMOUNT_ASC',
  TransactionsByUserIdMinAmountDesc = 'TRANSACTIONS_BY_USER_ID_MIN_AMOUNT_DESC',
  TransactionsByUserIdMinCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_MIN_CATEGORY_ID_ASC',
  TransactionsByUserIdMinCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_MIN_CATEGORY_ID_DESC',
  TransactionsByUserIdMinDateAsc = 'TRANSACTIONS_BY_USER_ID_MIN_DATE_ASC',
  TransactionsByUserIdMinDateDesc = 'TRANSACTIONS_BY_USER_ID_MIN_DATE_DESC',
  TransactionsByUserIdMinDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_MIN_DESCRIPTION_ASC',
  TransactionsByUserIdMinDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_MIN_DESCRIPTION_DESC',
  TransactionsByUserIdMinTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_MIN_TRANSACTION_ID_ASC',
  TransactionsByUserIdMinTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_MIN_TRANSACTION_ID_DESC',
  TransactionsByUserIdMinTypeAsc = 'TRANSACTIONS_BY_USER_ID_MIN_TYPE_ASC',
  TransactionsByUserIdMinTypeDesc = 'TRANSACTIONS_BY_USER_ID_MIN_TYPE_DESC',
  TransactionsByUserIdMinUserIdAsc = 'TRANSACTIONS_BY_USER_ID_MIN_USER_ID_ASC',
  TransactionsByUserIdMinUserIdDesc = 'TRANSACTIONS_BY_USER_ID_MIN_USER_ID_DESC',
  TransactionsByUserIdStddevPopulationAmountAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_ASC',
  TransactionsByUserIdStddevPopulationAmountDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_AMOUNT_DESC',
  TransactionsByUserIdStddevPopulationCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_ASC',
  TransactionsByUserIdStddevPopulationCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_CATEGORY_ID_DESC',
  TransactionsByUserIdStddevPopulationDateAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DATE_ASC',
  TransactionsByUserIdStddevPopulationDateDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DATE_DESC',
  TransactionsByUserIdStddevPopulationDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  TransactionsByUserIdStddevPopulationDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  TransactionsByUserIdStddevPopulationTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByUserIdStddevPopulationTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByUserIdStddevPopulationTypeAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TYPE_ASC',
  TransactionsByUserIdStddevPopulationTypeDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_TYPE_DESC',
  TransactionsByUserIdStddevPopulationUserIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  TransactionsByUserIdStddevPopulationUserIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  TransactionsByUserIdStddevSampleAmountAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  TransactionsByUserIdStddevSampleAmountDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  TransactionsByUserIdStddevSampleCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByUserIdStddevSampleCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByUserIdStddevSampleDateAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DATE_ASC',
  TransactionsByUserIdStddevSampleDateDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DATE_DESC',
  TransactionsByUserIdStddevSampleDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  TransactionsByUserIdStddevSampleDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  TransactionsByUserIdStddevSampleTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByUserIdStddevSampleTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByUserIdStddevSampleTypeAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TYPE_ASC',
  TransactionsByUserIdStddevSampleTypeDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_TYPE_DESC',
  TransactionsByUserIdStddevSampleUserIdAsc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TransactionsByUserIdStddevSampleUserIdDesc = 'TRANSACTIONS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TransactionsByUserIdSumAmountAsc = 'TRANSACTIONS_BY_USER_ID_SUM_AMOUNT_ASC',
  TransactionsByUserIdSumAmountDesc = 'TRANSACTIONS_BY_USER_ID_SUM_AMOUNT_DESC',
  TransactionsByUserIdSumCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_SUM_CATEGORY_ID_ASC',
  TransactionsByUserIdSumCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_SUM_CATEGORY_ID_DESC',
  TransactionsByUserIdSumDateAsc = 'TRANSACTIONS_BY_USER_ID_SUM_DATE_ASC',
  TransactionsByUserIdSumDateDesc = 'TRANSACTIONS_BY_USER_ID_SUM_DATE_DESC',
  TransactionsByUserIdSumDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_SUM_DESCRIPTION_ASC',
  TransactionsByUserIdSumDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_SUM_DESCRIPTION_DESC',
  TransactionsByUserIdSumTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_SUM_TRANSACTION_ID_ASC',
  TransactionsByUserIdSumTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_SUM_TRANSACTION_ID_DESC',
  TransactionsByUserIdSumTypeAsc = 'TRANSACTIONS_BY_USER_ID_SUM_TYPE_ASC',
  TransactionsByUserIdSumTypeDesc = 'TRANSACTIONS_BY_USER_ID_SUM_TYPE_DESC',
  TransactionsByUserIdSumUserIdAsc = 'TRANSACTIONS_BY_USER_ID_SUM_USER_ID_ASC',
  TransactionsByUserIdSumUserIdDesc = 'TRANSACTIONS_BY_USER_ID_SUM_USER_ID_DESC',
  TransactionsByUserIdVariancePopulationAmountAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  TransactionsByUserIdVariancePopulationAmountDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  TransactionsByUserIdVariancePopulationCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  TransactionsByUserIdVariancePopulationCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  TransactionsByUserIdVariancePopulationDateAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DATE_ASC',
  TransactionsByUserIdVariancePopulationDateDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DATE_DESC',
  TransactionsByUserIdVariancePopulationDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  TransactionsByUserIdVariancePopulationDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  TransactionsByUserIdVariancePopulationTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TRANSACTION_ID_ASC',
  TransactionsByUserIdVariancePopulationTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TRANSACTION_ID_DESC',
  TransactionsByUserIdVariancePopulationTypeAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TYPE_ASC',
  TransactionsByUserIdVariancePopulationTypeDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_TYPE_DESC',
  TransactionsByUserIdVariancePopulationUserIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TransactionsByUserIdVariancePopulationUserIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TransactionsByUserIdVarianceSampleAmountAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  TransactionsByUserIdVarianceSampleAmountDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  TransactionsByUserIdVarianceSampleCategoryIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  TransactionsByUserIdVarianceSampleCategoryIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  TransactionsByUserIdVarianceSampleDateAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DATE_ASC',
  TransactionsByUserIdVarianceSampleDateDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DATE_DESC',
  TransactionsByUserIdVarianceSampleDescriptionAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  TransactionsByUserIdVarianceSampleDescriptionDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  TransactionsByUserIdVarianceSampleTransactionIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TRANSACTION_ID_ASC',
  TransactionsByUserIdVarianceSampleTransactionIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TRANSACTION_ID_DESC',
  TransactionsByUserIdVarianceSampleTypeAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TYPE_ASC',
  TransactionsByUserIdVarianceSampleTypeDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_TYPE_DESC',
  TransactionsByUserIdVarianceSampleUserIdAsc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TransactionsByUserIdVarianceSampleUserIdDesc = 'TRANSACTIONS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  UserDevicesByUserIdAverageTokenAsc = 'USER_DEVICES_BY_USER_ID_AVERAGE_TOKEN_ASC',
  UserDevicesByUserIdAverageTokenDesc = 'USER_DEVICES_BY_USER_ID_AVERAGE_TOKEN_DESC',
  UserDevicesByUserIdAverageUaAsc = 'USER_DEVICES_BY_USER_ID_AVERAGE_UA_ASC',
  UserDevicesByUserIdAverageUaDesc = 'USER_DEVICES_BY_USER_ID_AVERAGE_UA_DESC',
  UserDevicesByUserIdAverageUserIdAsc = 'USER_DEVICES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  UserDevicesByUserIdAverageUserIdDesc = 'USER_DEVICES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  UserDevicesByUserIdCountAsc = 'USER_DEVICES_BY_USER_ID_COUNT_ASC',
  UserDevicesByUserIdCountDesc = 'USER_DEVICES_BY_USER_ID_COUNT_DESC',
  UserDevicesByUserIdDistinctCountTokenAsc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_TOKEN_ASC',
  UserDevicesByUserIdDistinctCountTokenDesc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_TOKEN_DESC',
  UserDevicesByUserIdDistinctCountUaAsc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_UA_ASC',
  UserDevicesByUserIdDistinctCountUaDesc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_UA_DESC',
  UserDevicesByUserIdDistinctCountUserIdAsc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  UserDevicesByUserIdDistinctCountUserIdDesc = 'USER_DEVICES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  UserDevicesByUserIdMaxTokenAsc = 'USER_DEVICES_BY_USER_ID_MAX_TOKEN_ASC',
  UserDevicesByUserIdMaxTokenDesc = 'USER_DEVICES_BY_USER_ID_MAX_TOKEN_DESC',
  UserDevicesByUserIdMaxUaAsc = 'USER_DEVICES_BY_USER_ID_MAX_UA_ASC',
  UserDevicesByUserIdMaxUaDesc = 'USER_DEVICES_BY_USER_ID_MAX_UA_DESC',
  UserDevicesByUserIdMaxUserIdAsc = 'USER_DEVICES_BY_USER_ID_MAX_USER_ID_ASC',
  UserDevicesByUserIdMaxUserIdDesc = 'USER_DEVICES_BY_USER_ID_MAX_USER_ID_DESC',
  UserDevicesByUserIdMinTokenAsc = 'USER_DEVICES_BY_USER_ID_MIN_TOKEN_ASC',
  UserDevicesByUserIdMinTokenDesc = 'USER_DEVICES_BY_USER_ID_MIN_TOKEN_DESC',
  UserDevicesByUserIdMinUaAsc = 'USER_DEVICES_BY_USER_ID_MIN_UA_ASC',
  UserDevicesByUserIdMinUaDesc = 'USER_DEVICES_BY_USER_ID_MIN_UA_DESC',
  UserDevicesByUserIdMinUserIdAsc = 'USER_DEVICES_BY_USER_ID_MIN_USER_ID_ASC',
  UserDevicesByUserIdMinUserIdDesc = 'USER_DEVICES_BY_USER_ID_MIN_USER_ID_DESC',
  UserDevicesByUserIdStddevPopulationTokenAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_TOKEN_ASC',
  UserDevicesByUserIdStddevPopulationTokenDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_TOKEN_DESC',
  UserDevicesByUserIdStddevPopulationUaAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_UA_ASC',
  UserDevicesByUserIdStddevPopulationUaDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_UA_DESC',
  UserDevicesByUserIdStddevPopulationUserIdAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  UserDevicesByUserIdStddevPopulationUserIdDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  UserDevicesByUserIdStddevSampleTokenAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_TOKEN_ASC',
  UserDevicesByUserIdStddevSampleTokenDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_TOKEN_DESC',
  UserDevicesByUserIdStddevSampleUaAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_UA_ASC',
  UserDevicesByUserIdStddevSampleUaDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_UA_DESC',
  UserDevicesByUserIdStddevSampleUserIdAsc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  UserDevicesByUserIdStddevSampleUserIdDesc = 'USER_DEVICES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  UserDevicesByUserIdSumTokenAsc = 'USER_DEVICES_BY_USER_ID_SUM_TOKEN_ASC',
  UserDevicesByUserIdSumTokenDesc = 'USER_DEVICES_BY_USER_ID_SUM_TOKEN_DESC',
  UserDevicesByUserIdSumUaAsc = 'USER_DEVICES_BY_USER_ID_SUM_UA_ASC',
  UserDevicesByUserIdSumUaDesc = 'USER_DEVICES_BY_USER_ID_SUM_UA_DESC',
  UserDevicesByUserIdSumUserIdAsc = 'USER_DEVICES_BY_USER_ID_SUM_USER_ID_ASC',
  UserDevicesByUserIdSumUserIdDesc = 'USER_DEVICES_BY_USER_ID_SUM_USER_ID_DESC',
  UserDevicesByUserIdVariancePopulationTokenAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_TOKEN_ASC',
  UserDevicesByUserIdVariancePopulationTokenDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_TOKEN_DESC',
  UserDevicesByUserIdVariancePopulationUaAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_UA_ASC',
  UserDevicesByUserIdVariancePopulationUaDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_UA_DESC',
  UserDevicesByUserIdVariancePopulationUserIdAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  UserDevicesByUserIdVariancePopulationUserIdDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  UserDevicesByUserIdVarianceSampleTokenAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_TOKEN_ASC',
  UserDevicesByUserIdVarianceSampleTokenDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_TOKEN_DESC',
  UserDevicesByUserIdVarianceSampleUaAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_UA_ASC',
  UserDevicesByUserIdVarianceSampleUaDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_UA_DESC',
  UserDevicesByUserIdVarianceSampleUserIdAsc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  UserDevicesByUserIdVarianceSampleUserIdDesc = 'USER_DEVICES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC'
}

/** All input for the create mn`Notification` mutation. */
export type MnCreateNotificationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The one or many `Notification` to be created by this mutation. */
  mnNotification?: InputMaybe<Array<NotificationInput>>;
};

/** The output of our many create `Notification` mutation. */
export type MnCreateNotificationPayload = {
  __typename?: 'mnCreateNotificationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was created by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our many create `Notification` mutation. */
export type MnCreateNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** All input for the delete `mnDeleteNotification` mutation. */
export type MnDeleteNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The one or many `Notification` to be deleted. You must provide the PK values! */
  mnPatch?: InputMaybe<Array<NotificationPatch>>;
};

/** The output of our delete mn `Notification` mutation. */
export type MnDeleteNotificationPayload = {
  __typename?: 'mnDeleteNotificationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedNotificationNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Notification` that was deleted by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our delete mn `Notification` mutation. */
export type MnDeleteNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** All input for the update `mnUpdateNotification` mutation. */
export type MnUpdateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The one or many `Notification` to be updated. */
  mnPatch?: InputMaybe<Array<NotificationPatch>>;
};

/** The output of our update mn `Notification` mutation. */
export type MnUpdateNotificationPayload = {
  __typename?: 'mnUpdateNotificationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input,                 unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was updated by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Notification`. */
  user?: Maybe<User>;
};


/** The output of our update mn `Notification` mutation. */
export type MnUpdateNotificationPayloadNotificationEdgeArgs = {
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

export type InitProfileMutationVariables = Exact<{
  oidcId: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
}>;


export type InitProfileMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };

export type ToggleIsReadMutationVariables = Exact<{
  id: Scalars['String']['input'];
  isRead: Scalars['Boolean']['input'];
}>;


export type ToggleIsReadMutation = { __typename?: 'Mutation', updateNotification?: { __typename?: 'UpdateNotificationPayload', clientMutationId?: string | null } | null };

export type Get_CategoriesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', type: Typetransaction, id: string, name: string, icon?: string | null, iconColor?: string | null }> } | null };

export type AddTransactionMutationVariables = Exact<{
  user_id: Scalars['String']['input'];
  category_id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  date: Scalars['Datetime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  transaction_id: Scalars['String']['input'];
  type: Typetransaction;
}>;


export type AddTransactionMutation = { __typename?: 'Mutation', createTransaction?: { __typename?: 'CreateTransactionPayload', clientMutationId?: string | null } | null };

export type Edit_Transaction1MutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  date: Scalars['Datetime']['input'];
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  type: Typetransaction;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_Transaction1Mutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'UpdateTransactionPayload', transaction?: { __typename?: 'Transaction', transactionId: string, type: Typetransaction, date?: any | null, categoryId?: string | null, description?: string | null, amount: number } | null } | null };

export type Get_Budget_For_CategoryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  month: Scalars['Datetime']['input'];
}>;


export type Get_Budget_For_CategoryQuery = { __typename?: 'Query', budgets?: { __typename?: 'BudgetsConnection', nodes: Array<{ __typename?: 'Budget', budgetId: string, userId?: string | null, categoryId?: string | null, amount?: number | null, month?: any | null, alertThreshold?: number | null }> } | null };

export type Get_Transactions_For_CategoryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  start: Scalars['Datetime']['input'];
  end: Scalars['Datetime']['input'];
}>;


export type Get_Transactions_For_CategoryQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, amount: number, date?: any | null }>, aggregates?: { __typename?: 'TransactionAggregates', sum?: { __typename?: 'TransactionSumAggregates', amount: number } | null } | null } | null };

export type ProfileFragment = { __typename?: 'User', firstName?: string | null, lastName?: string | null, gender?: UserGender | null, email?: string | null, tel?: string | null, picture?: string | null, date?: any | null } & { ' $fragmentName'?: 'ProfileFragment' };

export type GetUsersDevicesQueryVariables = Exact<{
  usersIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetUsersDevicesQuery = { __typename?: 'Query', userDevices?: { __typename?: 'UserDevicesConnection', nodes: Array<{ __typename?: 'UserDevice', userId: string, token: string }> } | null };

export type NotifyUsersMutationVariables = Exact<{
  notifications?: InputMaybe<Array<NotificationInput> | NotificationInput>;
}>;


export type NotifyUsersMutation = { __typename?: 'Mutation', mnCreateNotification?: { __typename?: 'mnCreateNotificationPayload', clientMutationId?: string | null } | null };

export type GetProfileQueryVariables = Exact<{
  oidcId: Scalars['String']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', user?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'ProfileFragment': ProfileFragment } }
  ) | null };

export type ProfileSubSubscriptionVariables = Exact<{
  oidcId: Scalars['String']['input'];
}>;


export type ProfileSubSubscription = { __typename?: 'Subscription', user?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'ProfileFragment': ProfileFragment } }
  ) | null };

export type Get_User_TransactionsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_TransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, date?: any | null, amount: number }> } | null };

export type Get_User_CategoriesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction }> } | null };

export type AddBudgetMutationVariables = Exact<{
  budget_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  category_id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  month: Scalars['Datetime']['input'];
  alert_threshold?: InputMaybe<Scalars['Int']['input']>;
  created_at: Scalars['Datetime']['input'];
}>;


export type AddBudgetMutation = { __typename?: 'Mutation', createBudget?: { __typename?: 'CreateBudgetPayload', clientMutationId?: string | null } | null };

export type Get_BudgetsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_BudgetsQuery = { __typename?: 'Query', budgets?: { __typename?: 'BudgetsConnection', nodes: Array<{ __typename?: 'Budget', budgetId: string, userId?: string | null, categoryId?: string | null, amount?: number | null, month?: any | null, alertThreshold?: number | null, createdAt?: any | null, category?: { __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction } | null }> } | null };

export type Get_User_Transactions2QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_Transactions2Query = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, categoryId?: string | null, date?: any | null, amount: number, category?: { __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction } | null }> } | null };

export type Delete_BudgetMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_BudgetMutation = { __typename?: 'Mutation', deleteBudget?: { __typename?: 'DeleteBudgetPayload', clientMutationId?: string | null } | null };

export type Edit_BudgetMutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  month: Scalars['Datetime']['input'];
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_BudgetMutation = { __typename?: 'Mutation', updateBudget?: { __typename?: 'UpdateBudgetPayload', budget?: { __typename?: 'Budget', budgetId: string, userId?: string | null, categoryId?: string | null, amount?: number | null, month?: any | null, alertThreshold?: number | null } | null } | null };

export type Check_Category_TransactionsQueryVariables = Exact<{
  category_id: Scalars['String']['input'];
}>;


export type Check_Category_TransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string }> } | null };

export type Get_User_Categories3QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_User_Categories3Query = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction }> } | null };

export type Add_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  iconColor: Scalars['String']['input'];
  type: Typetransaction;
}>;


export type Add_CategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'CreateCategoryPayload', clientMutationId?: string | null } | null };

export type Delete_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_CategoryMutation = { __typename?: 'Mutation', deleteCategory?: { __typename?: 'DeleteCategoryPayload', clientMutationId?: string | null } | null };

export type Update_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  iconColor: Scalars['String']['input'];
  type: Typetransaction;
}>;


export type Update_CategoryMutation = { __typename?: 'Mutation', updateCategory?: { __typename?: 'UpdateCategoryPayload', clientMutationId?: string | null } | null };

export type NotifsSubscriptionVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type NotifsSubscription = { __typename?: 'Subscription', notifications?: { __typename?: 'NotificationsConnection', nodes: Array<{ __typename?: 'Notification', id: string, t: any, isRead: boolean, data: { [key: string]: any } }> } | null };

export type Get_Transactions3QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_Transactions3Query = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, date?: any | null, amount: number, category?: { __typename?: 'Category', id: string, name: string } | null }> } | null };

export type SetUserTokenMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  ua?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type SetUserTokenMutation = { __typename?: 'Mutation', upsertUserDevice?: { __typename?: 'UpsertUserDevicePayload', clientMutationId?: string | null } | null };

export type Get_Transactions4QueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type Get_Transactions4Query = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, userId?: string | null, categoryId?: string | null, date?: any | null, description?: string | null, amount: number, category?: { __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction } | null }> } | null, categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string, icon?: string | null, iconColor?: string | null, type: Typetransaction }> } | null };

export type Delete_TransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_TransactionMutation = { __typename?: 'Mutation', deleteTransaction?: { __typename?: 'DeleteTransactionPayload', clientMutationId?: string | null } | null };

export type Edit_Transaction2MutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  date: Scalars['Datetime']['input'];
  description: Scalars['String']['input'];
  type: Typetransaction;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_Transaction2Mutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'UpdateTransactionPayload', transaction?: { __typename?: 'Transaction', transactionId: string, type: Typetransaction, categoryId?: string | null, date?: any | null, description?: string | null, amount: number } | null } | null };

export type Login_UserQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Login_UserQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', password?: string | null, email?: string | null, oidcId: string, firstName?: string | null, lastName?: string | null, gender?: UserGender | null }> } | null };

export type CreateOtpVerificationMutationVariables = Exact<{
  input: CreateOtpVerificationInput;
}>;


export type CreateOtpVerificationMutation = { __typename?: 'Mutation', createOtpVerification?: { __typename?: 'CreateOtpVerificationPayload', otpVerification?: { __typename?: 'OtpVerification', id: string, otp: string, expiresAt: any, email?: string | null } | null } | null };

export type Get_UserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type Get_UserQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', email?: string | null, oidcId: string, firstName?: string | null, lastName?: string | null, gender?: UserGender | null }> } | null };

export type MyMutationMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type MyMutationMutation = { __typename?: 'Mutation', deleteOtpVerification?: { __typename?: 'DeleteOtpVerificationPayload', clientMutationId?: string | null, deletedOtpVerificationNodeId?: string | null } | null };

export type Check_OtpQueryVariables = Exact<{
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type Check_OtpQuery = { __typename?: 'Query', otpVerifications?: { __typename?: 'OtpVerificationsConnection', nodes: Array<{ __typename?: 'OtpVerification', id: string, otp: string, email?: string | null, expiresAt: any }> } | null };

export type SignupMutationVariables = Exact<{
  id: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };
