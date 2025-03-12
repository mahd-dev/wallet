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
  Month = 'MONTH',
  MonthTruncatedToDay = 'MONTH_TRUNCATED_TO_DAY',
  MonthTruncatedToHour = 'MONTH_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type BudgetHavingAverageInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingDistinctCountInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
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
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingMinInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevPopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingSumInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVariancePopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVarianceSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Budget` */
export type BudgetInput = {
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
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
  BudgetsByCategoryIdVarianceSampleMonthAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByCategoryIdVarianceSampleMonthDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByCategoryIdVarianceSampleUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByCategoryIdVarianceSampleUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC',
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
  TransactionsByCategoryIdVarianceSampleUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC'
}

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `budgetsByCategoryId` relation. */
  budgetsByCategoryId?: InputMaybe<CategoryToManyBudgetFilter>;
  /** Some related `budgetsByCategoryId` exist. */
  budgetsByCategoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
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
};

/** Grouping methods for `Category` for usage during aggregation. */
export enum CategoryGroupBy {
  Name = 'NAME'
}

/** Conditions for `Category` aggregates. */
export type CategoryHavingInput = {
  AND?: InputMaybe<Array<CategoryHavingInput>>;
  OR?: InputMaybe<Array<CategoryHavingInput>>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  /** Filter by the object’s `oidcId` field. */
  oidcId?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
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
  BudgetsByUserIdVarianceSampleMonthAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByUserIdVarianceSampleMonthDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByUserIdVarianceSampleUserIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByUserIdVarianceSampleUserIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
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
  OidcIdAsc = 'OIDC_ID_ASC',
  OidcIdDesc = 'OIDC_ID_DESC',
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

export type InitProfileMutationVariables = Exact<{
  oidcId: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
}>;


export type InitProfileMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };

export type CategorySubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CategorySubscriptionSubscription = { __typename?: 'Subscription', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string }> } | null };

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

export type Edit_TransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  date: Scalars['Datetime']['input'];
  description: Scalars['String']['input'];
  type: Typetransaction;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_TransactionMutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'UpdateTransactionPayload', transaction?: { __typename?: 'Transaction', transactionId: string, type: Typetransaction, categoryId?: string | null, date?: any | null, description?: string | null, amount: number } | null } | null };

export type ProfileFragment = { __typename?: 'User', firstName?: string | null, lastName?: string | null, gender?: UserGender | null, email?: string | null, tel?: string | null, picture?: string | null, date?: any | null } & { ' $fragmentName'?: 'ProfileFragment' };

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

export type Add_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type Add_CategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'CreateCategoryPayload', clientMutationId?: string | null } | null };

export type Get_CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string }> } | null };

export type Get_TransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_TransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, userId?: string | null, categoryId?: string | null, date?: any | null, description?: string | null, amount: number, category?: { __typename?: 'Category', id: string, name: string } | null }> } | null };

export type Delete_TransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_TransactionMutation = { __typename?: 'Mutation', deleteTransaction?: { __typename?: 'DeleteTransactionPayload', clientMutationId?: string | null } | null };

export type Login_UserQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Login_UserQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', password?: string | null, email?: string | null, oidcId: string, firstName?: string | null, lastName?: string | null, gender?: UserGender | null }> } | null };

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
export const CategorySubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"CategorySubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CategorySubscriptionSubscription, CategorySubscriptionSubscriptionVariables>;
export const AddTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transaction_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"transaction"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transaction_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<AddTransactionMutation, AddTransactionMutationVariables>;
export const Edit_TransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TRANSACTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Typetransaction"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"patch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"clientMutationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientMutationId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<Edit_TransactionMutation, Edit_TransactionMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const ProfileSubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ProfileSub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<ProfileSubSubscription, ProfileSubSubscriptionVariables>;
export const Add_CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_CATEGORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Add_CategoryMutation, Add_CategoryMutationVariables>;
export const Get_CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_CATEGORIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_CategoriesQuery, Get_CategoriesQueryVariables>;
export const Get_TransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_TRANSACTIONS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"DATE_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_TransactionsQuery, Get_TransactionsQueryVariables>;
export const Delete_TransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TRANSACTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"transactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<Delete_TransactionMutation, Delete_TransactionMutationVariables>;
export const Login_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LOGIN_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"oidcId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<Login_UserQuery, Login_UserQueryVariables>;
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

export type Budget = Node & {
  __typename?: 'Budget';
  alertThreshold?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  budgetId: Scalars['String']['output'];
  /** Reads a single `Category` that is related to this `Budget`. */
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
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
  Month = 'MONTH',
  MonthTruncatedToDay = 'MONTH_TRUNCATED_TO_DAY',
  MonthTruncatedToHour = 'MONTH_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type BudgetHavingAverageInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingDistinctCountInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
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
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingMinInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevPopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingStddevSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingSumInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVariancePopulationInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

export type BudgetHavingVarianceSampleInput = {
  alertThreshold?: InputMaybe<HavingIntFilter>;
  amount?: InputMaybe<HavingFloatFilter>;
  month?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Budget` */
export type BudgetInput = {
  alertThreshold?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
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
  BudgetsByCategoryIdVarianceSampleMonthAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByCategoryIdVarianceSampleMonthDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByCategoryIdVarianceSampleUserIdAsc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByCategoryIdVarianceSampleUserIdDesc = 'BUDGETS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC',
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
  TransactionsByCategoryIdVarianceSampleUserIdDesc = 'TRANSACTIONS_BY_CATEGORY_ID_VARIANCE_SAMPLE_USER_ID_DESC'
}

export type Category = Node & {
  __typename?: 'Category';
  /** Reads and enables pagination through a set of `Budget`. */
  budgetsByCategoryId: BudgetsConnection;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Transaction`. */
  transactionsByCategoryId: TransactionsConnection;
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

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDistinctCountAggregates = {
  __typename?: 'CategoryDistinctCountAggregates';
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `budgetsByCategoryId` relation. */
  budgetsByCategoryId?: InputMaybe<CategoryToManyBudgetFilter>;
  /** Some related `budgetsByCategoryId` exist. */
  budgetsByCategoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
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
};

/** Grouping methods for `Category` for usage during aggregation. */
export enum CategoryGroupBy {
  Name = 'NAME'
}

/** Conditions for `Category` aggregates. */
export type CategoryHavingInput = {
  AND?: InputMaybe<Array<CategoryHavingInput>>;
  OR?: InputMaybe<Array<CategoryHavingInput>>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
};


/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
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
};


/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
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
  /** Updates a single `Budget` using a unique key and a patch. */
  updateBudget?: Maybe<UpdateBudgetPayload>;
  /** Updates a single `Budget` using its globally unique id and a patch. */
  updateBudgetByNodeId?: Maybe<UpdateBudgetPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategoryByNodeId?: Maybe<UpdateCategoryPayload>;
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
};


/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
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
};


/** The output of our upsert `Category` mutation. */
export type UpsertCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** Where conditions for the upsert `Category` mutation. */
export type UpsertCategoryWhere = {
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
  date?: Maybe<Scalars['Datetime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<UserGender>;
  lastName?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  oidcId: Scalars['String']['output'];
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
  /** Filter by the object’s `oidcId` field. */
  oidcId?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
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
  BudgetsByUserIdVarianceSampleMonthAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_ASC',
  BudgetsByUserIdVarianceSampleMonthDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_MONTH_DESC',
  BudgetsByUserIdVarianceSampleUserIdAsc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BudgetsByUserIdVarianceSampleUserIdDesc = 'BUDGETS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
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
  OidcIdAsc = 'OIDC_ID_ASC',
  OidcIdDesc = 'OIDC_ID_DESC',
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

export type InitProfileMutationVariables = Exact<{
  oidcId: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
}>;


export type InitProfileMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };

export type CategorySubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CategorySubscriptionSubscription = { __typename?: 'Subscription', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string }> } | null };

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

export type Edit_TransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  date: Scalars['Datetime']['input'];
  description: Scalars['String']['input'];
  type: Typetransaction;
  clientMutationId: Scalars['String']['input'];
}>;


export type Edit_TransactionMutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'UpdateTransactionPayload', transaction?: { __typename?: 'Transaction', transactionId: string, type: Typetransaction, categoryId?: string | null, date?: any | null, description?: string | null, amount: number } | null } | null };

export type ProfileFragment = { __typename?: 'User', firstName?: string | null, lastName?: string | null, gender?: UserGender | null, email?: string | null, tel?: string | null, picture?: string | null, date?: any | null } & { ' $fragmentName'?: 'ProfileFragment' };

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

export type Add_CategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type Add_CategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'CreateCategoryPayload', clientMutationId?: string | null } | null };

export type Get_CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoriesConnection', nodes: Array<{ __typename?: 'Category', id: string, name: string }> } | null };

export type Get_TransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_TransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'TransactionsConnection', nodes: Array<{ __typename?: 'Transaction', transactionId: string, type: Typetransaction, userId?: string | null, categoryId?: string | null, date?: any | null, description?: string | null, amount: number, category?: { __typename?: 'Category', id: string, name: string } | null }> } | null };

export type Delete_TransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Delete_TransactionMutation = { __typename?: 'Mutation', deleteTransaction?: { __typename?: 'DeleteTransactionPayload', clientMutationId?: string | null } | null };

export type Login_UserQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Login_UserQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', password?: string | null, email?: string | null, oidcId: string, firstName?: string | null, lastName?: string | null, gender?: UserGender | null }> } | null };

export type SignupMutationVariables = Exact<{
  id: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', clientMutationId?: string | null } | null };
