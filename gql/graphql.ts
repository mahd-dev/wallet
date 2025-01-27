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

/** Methods to use when ordering `Availability`. */
export enum AvailabilitiesOrderBy {
  DayOfWeekAsc = 'DAY_OF_WEEK_ASC',
  DayOfWeekDesc = 'DAY_OF_WEEK_DESC',
  EndTimeAsc = 'END_TIME_ASC',
  EndTimeDesc = 'END_TIME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartTimeAsc = 'START_TIME_ASC',
  StartTimeDesc = 'START_TIME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against aggregates of `Availability` object types. */
export type AvailabilityAggregatesFilter = {
  /** Mean average aggregate over matching `Availability` objects. */
  average?: InputMaybe<AvailabilityAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Availability` objects. */
  distinctCount?: InputMaybe<AvailabilityDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Availability` object to be included within the aggregate. */
  filter?: InputMaybe<AvailabilityFilter>;
  /** Maximum aggregate over matching `Availability` objects. */
  max?: InputMaybe<AvailabilityMaxAggregateFilter>;
  /** Minimum aggregate over matching `Availability` objects. */
  min?: InputMaybe<AvailabilityMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Availability` objects. */
  stddevPopulation?: InputMaybe<AvailabilityStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Availability` objects. */
  stddevSample?: InputMaybe<AvailabilityStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Availability` objects. */
  sum?: InputMaybe<AvailabilitySumAggregateFilter>;
  /** Population variance aggregate over matching `Availability` objects. */
  variancePopulation?: InputMaybe<AvailabilityVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Availability` objects. */
  varianceSample?: InputMaybe<AvailabilityVarianceSampleAggregateFilter>;
};

export type AvailabilityAverageAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

/**
 * A condition to be used against `Availability` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AvailabilityCondition = {
  /** Checks for equality with the object’s `dayOfWeek` field. */
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `endTime` field. */
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `startTime` field. */
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AvailabilityDistinctCountAggregateFilter = {
  dayOfWeek?: InputMaybe<BigIntFilter>;
  endTime?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  startTime?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Availability` object types. All fields are combined with a logical ‘and.’ */
export type AvailabilityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AvailabilityFilter>>;
  /** Filter by the object’s `dayOfWeek` field. */
  dayOfWeek?: InputMaybe<IntFilter>;
  /** Filter by the object’s `endTime` field. */
  endTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AvailabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AvailabilityFilter>>;
  /** Filter by the object’s `startTime` field. */
  startTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Availability` for usage during aggregation. */
export enum AvailabilityGroupBy {
  DayOfWeek = 'DAY_OF_WEEK',
  EndTime = 'END_TIME',
  EndTimeTruncatedToDay = 'END_TIME_TRUNCATED_TO_DAY',
  EndTimeTruncatedToHour = 'END_TIME_TRUNCATED_TO_HOUR',
  StartTime = 'START_TIME',
  StartTimeTruncatedToDay = 'START_TIME_TRUNCATED_TO_DAY',
  StartTimeTruncatedToHour = 'START_TIME_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type AvailabilityHavingAverageInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingDistinctCountInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Availability` aggregates. */
export type AvailabilityHavingInput = {
  AND?: InputMaybe<Array<AvailabilityHavingInput>>;
  OR?: InputMaybe<Array<AvailabilityHavingInput>>;
  average?: InputMaybe<AvailabilityHavingAverageInput>;
  distinctCount?: InputMaybe<AvailabilityHavingDistinctCountInput>;
  max?: InputMaybe<AvailabilityHavingMaxInput>;
  min?: InputMaybe<AvailabilityHavingMinInput>;
  stddevPopulation?: InputMaybe<AvailabilityHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<AvailabilityHavingStddevSampleInput>;
  sum?: InputMaybe<AvailabilityHavingSumInput>;
  variancePopulation?: InputMaybe<AvailabilityHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<AvailabilityHavingVarianceSampleInput>;
};

export type AvailabilityHavingMaxInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingMinInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingStddevPopulationInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingStddevSampleInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingSumInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingVariancePopulationInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingVarianceSampleInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Availability` */
export type AvailabilityInput = {
  dayOfWeek: Scalars['Int']['input'];
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id: Scalars['String']['input'];
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['String']['input'];
};

export type AvailabilityMaxAggregateFilter = {
  dayOfWeek?: InputMaybe<IntFilter>;
};

export type AvailabilityMinAggregateFilter = {
  dayOfWeek?: InputMaybe<IntFilter>;
};

/** Represents an update to a `Availability`. Fields that are set will be updated. */
export type AvailabilityPatch = {
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AvailabilityStddevPopulationAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityStddevSampleAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilitySumAggregateFilter = {
  dayOfWeek?: InputMaybe<BigIntFilter>;
};

export type AvailabilityVariancePopulationAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityVarianceSampleAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
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

/** A filter to be used against aggregates of `Booking` object types. */
export type BookingAggregatesFilter = {
  /** Distinct count aggregate over matching `Booking` objects. */
  distinctCount?: InputMaybe<BookingDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Booking` object to be included within the aggregate. */
  filter?: InputMaybe<BookingFilter>;
};

/** A condition to be used against `Booking` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookingCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<BookingStatus>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingDistinctCountAggregateFilter = {
  eventId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Booking` object types. All fields are combined with a logical ‘and.’ */
export type BookingFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BookingFilter>>;
  /** Filter by the object’s `event` relation. */
  event?: InputMaybe<EventFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BookingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BookingFilter>>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<BookingStatusFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Booking` for usage during aggregation. */
export enum BookingGroupBy {
  EventId = 'EVENT_ID',
  Status = 'STATUS',
  UserId = 'USER_ID'
}

/** Conditions for `Booking` aggregates. */
export type BookingHavingInput = {
  AND?: InputMaybe<Array<BookingHavingInput>>;
  OR?: InputMaybe<Array<BookingHavingInput>>;
};

/** An input for mutations affecting `Booking` */
export type BookingInput = {
  eventId: Scalars['String']['input'];
  status?: InputMaybe<BookingStatus>;
  userId: Scalars['String']['input'];
};

/** Represents an update to a `Booking`. Fields that are set will be updated. */
export type BookingPatch = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export enum BookingStatus {
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

/** A filter to be used against BookingStatus fields. All fields are combined with a logical ‘and.’ */
export type BookingStatusFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<BookingStatus>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<BookingStatus>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<BookingStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<BookingStatus>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<BookingStatus>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<BookingStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<BookingStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<BookingStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<BookingStatus>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<BookingStatus>>;
};

/** Methods to use when ordering `Booking`. */
export enum BookingsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

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

/** All input for the create `Availability` mutation. */
export type CreateAvailabilityInput = {
  /** The `Availability` to be created by this mutation. */
  availability: AvailabilityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `Booking` mutation. */
export type CreateBookingInput = {
  /** The `Booking` to be created by this mutation. */
  booking: BookingInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `CustomAvailability` mutation. */
export type CreateCustomAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `CustomAvailability` to be created by this mutation. */
  customAvailability: CustomAvailabilityInput;
};

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Event` to be created by this mutation. */
  event: EventInput;
};

/** All input for the create `Team` mutation. */
export type CreateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Team` to be created by this mutation. */
  team: TeamInput;
};

/** All input for the create `TeamMembership` mutation. */
export type CreateTeamMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TeamMembership` to be created by this mutation. */
  teamMembership: TeamMembershipInput;
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

/** Methods to use when ordering `CustomAvailability`. */
export enum CustomAvailabilitiesOrderBy {
  AvailableAsc = 'AVAILABLE_ASC',
  AvailableDesc = 'AVAILABLE_DESC',
  EndTimeAsc = 'END_TIME_ASC',
  EndTimeDesc = 'END_TIME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReasonAsc = 'REASON_ASC',
  ReasonDesc = 'REASON_DESC',
  StartTimeAsc = 'START_TIME_ASC',
  StartTimeDesc = 'START_TIME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against aggregates of `CustomAvailability` object types. */
export type CustomAvailabilityAggregatesFilter = {
  /** Distinct count aggregate over matching `CustomAvailability` objects. */
  distinctCount?: InputMaybe<CustomAvailabilityDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `CustomAvailability` object to be included within the aggregate. */
  filter?: InputMaybe<CustomAvailabilityFilter>;
};

/**
 * A condition to be used against `CustomAvailability` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CustomAvailabilityCondition = {
  /** Checks for equality with the object’s `available` field. */
  available?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `endTime` field. */
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reason` field. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `startTime` field. */
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomAvailabilityDistinctCountAggregateFilter = {
  available?: InputMaybe<BigIntFilter>;
  endTime?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  reason?: InputMaybe<BigIntFilter>;
  startTime?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `CustomAvailability` object types. All fields are combined with a logical ‘and.’ */
export type CustomAvailabilityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CustomAvailabilityFilter>>;
  /** Filter by the object’s `available` field. */
  available?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `endTime` field. */
  endTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CustomAvailabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CustomAvailabilityFilter>>;
  /** Filter by the object’s `reason` field. */
  reason?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startTime` field. */
  startTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `CustomAvailability` for usage during aggregation. */
export enum CustomAvailabilityGroupBy {
  Available = 'AVAILABLE',
  EndTime = 'END_TIME',
  EndTimeTruncatedToDay = 'END_TIME_TRUNCATED_TO_DAY',
  EndTimeTruncatedToHour = 'END_TIME_TRUNCATED_TO_HOUR',
  Reason = 'REASON',
  StartTime = 'START_TIME',
  StartTimeTruncatedToDay = 'START_TIME_TRUNCATED_TO_DAY',
  StartTimeTruncatedToHour = 'START_TIME_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type CustomAvailabilityHavingAverageInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingDistinctCountInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `CustomAvailability` aggregates. */
export type CustomAvailabilityHavingInput = {
  AND?: InputMaybe<Array<CustomAvailabilityHavingInput>>;
  OR?: InputMaybe<Array<CustomAvailabilityHavingInput>>;
  average?: InputMaybe<CustomAvailabilityHavingAverageInput>;
  distinctCount?: InputMaybe<CustomAvailabilityHavingDistinctCountInput>;
  max?: InputMaybe<CustomAvailabilityHavingMaxInput>;
  min?: InputMaybe<CustomAvailabilityHavingMinInput>;
  stddevPopulation?: InputMaybe<CustomAvailabilityHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CustomAvailabilityHavingStddevSampleInput>;
  sum?: InputMaybe<CustomAvailabilityHavingSumInput>;
  variancePopulation?: InputMaybe<CustomAvailabilityHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CustomAvailabilityHavingVarianceSampleInput>;
};

export type CustomAvailabilityHavingMaxInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingMinInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingStddevPopulationInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingStddevSampleInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingSumInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingVariancePopulationInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingVarianceSampleInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `CustomAvailability` */
export type CustomAvailabilityInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  endTime: Scalars['Datetime']['input'];
  id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['Datetime']['input'];
  userId: Scalars['String']['input'];
};

/** Represents an update to a `CustomAvailability`. Fields that are set will be updated. */
export type CustomAvailabilityPatch = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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

/** All input for the `deleteAvailabilityByNodeId` mutation. */
export type DeleteAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Availability` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteAvailability` mutation. */
export type DeleteAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteBookingByNodeId` mutation. */
export type DeleteBookingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Booking` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteBooking` mutation. */
export type DeleteBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** All input for the `deleteCustomAvailabilityByNodeId` mutation. */
export type DeleteCustomAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `CustomAvailability` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteCustomAvailability` mutation. */
export type DeleteCustomAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteEventByNodeId` mutation. */
export type DeleteEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteTeamByNodeId` mutation. */
export type DeleteTeamByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Team` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteTeam` mutation. */
export type DeleteTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteTeamMembershipByNodeId` mutation. */
export type DeleteTeamMembershipByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `TeamMembership` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteTeamMembership` mutation. */
export type DeleteTeamMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
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

/** A filter to be used against aggregates of `Event` object types. */
export type EventAggregatesFilter = {
  /** Mean average aggregate over matching `Event` objects. */
  average?: InputMaybe<EventAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Event` objects. */
  distinctCount?: InputMaybe<EventDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Event` object to be included within the aggregate. */
  filter?: InputMaybe<EventFilter>;
  /** Maximum aggregate over matching `Event` objects. */
  max?: InputMaybe<EventMaxAggregateFilter>;
  /** Minimum aggregate over matching `Event` objects. */
  min?: InputMaybe<EventMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Event` objects. */
  stddevPopulation?: InputMaybe<EventStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Event` objects. */
  stddevSample?: InputMaybe<EventStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Event` objects. */
  sum?: InputMaybe<EventSumAggregateFilter>;
  /** Population variance aggregate over matching `Event` objects. */
  variancePopulation?: InputMaybe<EventVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Event` objects. */
  varianceSample?: InputMaybe<EventVarianceSampleAggregateFilter>;
};

export type EventAverageAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `duration` field. */
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EventDistinctCountAggregateFilter = {
  date?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  duration?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  location?: InputMaybe<BigIntFilter>;
  teamId?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `Event` object types. All fields are combined with a logical ‘and.’ */
export type EventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `bookingsByEventId` relation. */
  bookingsByEventId?: InputMaybe<EventToManyBookingFilter>;
  /** Some related `bookingsByEventId` exist. */
  bookingsByEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `duration` field. */
  duration?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `location` field. */
  location?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `team` relation. */
  team?: InputMaybe<TeamFilter>;
  /** A related `team` exists. */
  teamExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `teamId` field. */
  teamId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Event` for usage during aggregation. */
export enum EventGroupBy {
  Date = 'DATE',
  DateTruncatedToDay = 'DATE_TRUNCATED_TO_DAY',
  DateTruncatedToHour = 'DATE_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  Duration = 'DURATION',
  Location = 'LOCATION',
  TeamId = 'TEAM_ID',
  Title = 'TITLE',
  UserId = 'USER_ID'
}

export type EventHavingAverageInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingDistinctCountInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Event` aggregates. */
export type EventHavingInput = {
  AND?: InputMaybe<Array<EventHavingInput>>;
  OR?: InputMaybe<Array<EventHavingInput>>;
  average?: InputMaybe<EventHavingAverageInput>;
  distinctCount?: InputMaybe<EventHavingDistinctCountInput>;
  max?: InputMaybe<EventHavingMaxInput>;
  min?: InputMaybe<EventHavingMinInput>;
  stddevPopulation?: InputMaybe<EventHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<EventHavingStddevSampleInput>;
  sum?: InputMaybe<EventHavingSumInput>;
  variancePopulation?: InputMaybe<EventHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<EventHavingVarianceSampleInput>;
};

export type EventHavingMaxInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingMinInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingStddevPopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingStddevSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingSumInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingVariancePopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingVarianceSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Event` */
export type EventInput = {
  date: Scalars['Datetime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EventMaxAggregateFilter = {
  duration?: InputMaybe<IntFilter>;
};

export type EventMinAggregateFilter = {
  duration?: InputMaybe<IntFilter>;
};

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  date?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EventStddevPopulationAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventStddevSampleAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventSumAggregateFilter = {
  duration?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyBookingFilter = {
  /** Aggregates across related `Booking` match the filter criteria. */
  aggregates?: InputMaybe<BookingAggregatesFilter>;
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

export type EventVariancePopulationAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventVarianceSampleAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  BookingsByEventIdAverageEventIdAsc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_EVENT_ID_ASC',
  BookingsByEventIdAverageEventIdDesc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_EVENT_ID_DESC',
  BookingsByEventIdAverageStatusAsc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_STATUS_ASC',
  BookingsByEventIdAverageStatusDesc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_STATUS_DESC',
  BookingsByEventIdAverageUserIdAsc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_USER_ID_ASC',
  BookingsByEventIdAverageUserIdDesc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_USER_ID_DESC',
  BookingsByEventIdCountAsc = 'BOOKINGS_BY_EVENT_ID_COUNT_ASC',
  BookingsByEventIdCountDesc = 'BOOKINGS_BY_EVENT_ID_COUNT_DESC',
  BookingsByEventIdDistinctCountEventIdAsc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BookingsByEventIdDistinctCountEventIdDesc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BookingsByEventIdDistinctCountStatusAsc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_STATUS_ASC',
  BookingsByEventIdDistinctCountStatusDesc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_STATUS_DESC',
  BookingsByEventIdDistinctCountUserIdAsc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_USER_ID_ASC',
  BookingsByEventIdDistinctCountUserIdDesc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_USER_ID_DESC',
  BookingsByEventIdMaxEventIdAsc = 'BOOKINGS_BY_EVENT_ID_MAX_EVENT_ID_ASC',
  BookingsByEventIdMaxEventIdDesc = 'BOOKINGS_BY_EVENT_ID_MAX_EVENT_ID_DESC',
  BookingsByEventIdMaxStatusAsc = 'BOOKINGS_BY_EVENT_ID_MAX_STATUS_ASC',
  BookingsByEventIdMaxStatusDesc = 'BOOKINGS_BY_EVENT_ID_MAX_STATUS_DESC',
  BookingsByEventIdMaxUserIdAsc = 'BOOKINGS_BY_EVENT_ID_MAX_USER_ID_ASC',
  BookingsByEventIdMaxUserIdDesc = 'BOOKINGS_BY_EVENT_ID_MAX_USER_ID_DESC',
  BookingsByEventIdMinEventIdAsc = 'BOOKINGS_BY_EVENT_ID_MIN_EVENT_ID_ASC',
  BookingsByEventIdMinEventIdDesc = 'BOOKINGS_BY_EVENT_ID_MIN_EVENT_ID_DESC',
  BookingsByEventIdMinStatusAsc = 'BOOKINGS_BY_EVENT_ID_MIN_STATUS_ASC',
  BookingsByEventIdMinStatusDesc = 'BOOKINGS_BY_EVENT_ID_MIN_STATUS_DESC',
  BookingsByEventIdMinUserIdAsc = 'BOOKINGS_BY_EVENT_ID_MIN_USER_ID_ASC',
  BookingsByEventIdMinUserIdDesc = 'BOOKINGS_BY_EVENT_ID_MIN_USER_ID_DESC',
  BookingsByEventIdStddevPopulationEventIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BookingsByEventIdStddevPopulationEventIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BookingsByEventIdStddevPopulationStatusAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_STATUS_ASC',
  BookingsByEventIdStddevPopulationStatusDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_STATUS_DESC',
  BookingsByEventIdStddevPopulationUserIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_USER_ID_ASC',
  BookingsByEventIdStddevPopulationUserIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_USER_ID_DESC',
  BookingsByEventIdStddevSampleEventIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BookingsByEventIdStddevSampleEventIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BookingsByEventIdStddevSampleStatusAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_STATUS_ASC',
  BookingsByEventIdStddevSampleStatusDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_STATUS_DESC',
  BookingsByEventIdStddevSampleUserIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BookingsByEventIdStddevSampleUserIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BookingsByEventIdSumEventIdAsc = 'BOOKINGS_BY_EVENT_ID_SUM_EVENT_ID_ASC',
  BookingsByEventIdSumEventIdDesc = 'BOOKINGS_BY_EVENT_ID_SUM_EVENT_ID_DESC',
  BookingsByEventIdSumStatusAsc = 'BOOKINGS_BY_EVENT_ID_SUM_STATUS_ASC',
  BookingsByEventIdSumStatusDesc = 'BOOKINGS_BY_EVENT_ID_SUM_STATUS_DESC',
  BookingsByEventIdSumUserIdAsc = 'BOOKINGS_BY_EVENT_ID_SUM_USER_ID_ASC',
  BookingsByEventIdSumUserIdDesc = 'BOOKINGS_BY_EVENT_ID_SUM_USER_ID_DESC',
  BookingsByEventIdVariancePopulationEventIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BookingsByEventIdVariancePopulationEventIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BookingsByEventIdVariancePopulationStatusAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_STATUS_ASC',
  BookingsByEventIdVariancePopulationStatusDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_STATUS_DESC',
  BookingsByEventIdVariancePopulationUserIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BookingsByEventIdVariancePopulationUserIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BookingsByEventIdVarianceSampleEventIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BookingsByEventIdVarianceSampleEventIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BookingsByEventIdVarianceSampleStatusAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_STATUS_ASC',
  BookingsByEventIdVarianceSampleStatusDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_STATUS_DESC',
  BookingsByEventIdVarianceSampleUserIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BookingsByEventIdVarianceSampleUserIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
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

/** A condition to be used against `Team` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TeamCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against `Team` object types. All fields are combined with a logical ‘and.’ */
export type TeamFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TeamFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `eventsByTeamId` relation. */
  eventsByTeamId?: InputMaybe<TeamToManyEventFilter>;
  /** Some related `eventsByTeamId` exist. */
  eventsByTeamIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TeamFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TeamFilter>>;
  /** Filter by the object’s `teamMembershipsByTeamId` relation. */
  teamMembershipsByTeamId?: InputMaybe<TeamToManyTeamMembershipFilter>;
  /** Some related `teamMembershipsByTeamId` exist. */
  teamMembershipsByTeamIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `Team` for usage during aggregation. */
export enum TeamGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Name = 'NAME',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type TeamHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Team` aggregates. */
export type TeamHavingInput = {
  AND?: InputMaybe<Array<TeamHavingInput>>;
  OR?: InputMaybe<Array<TeamHavingInput>>;
  average?: InputMaybe<TeamHavingAverageInput>;
  distinctCount?: InputMaybe<TeamHavingDistinctCountInput>;
  max?: InputMaybe<TeamHavingMaxInput>;
  min?: InputMaybe<TeamHavingMinInput>;
  stddevPopulation?: InputMaybe<TeamHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TeamHavingStddevSampleInput>;
  sum?: InputMaybe<TeamHavingSumInput>;
  variancePopulation?: InputMaybe<TeamHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TeamHavingVarianceSampleInput>;
};

export type TeamHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Team` */
export type TeamInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};

/** A filter to be used against aggregates of `TeamMembership` object types. */
export type TeamMembershipAggregatesFilter = {
  /** Distinct count aggregate over matching `TeamMembership` objects. */
  distinctCount?: InputMaybe<TeamMembershipDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `TeamMembership` object to be included within the aggregate. */
  filter?: InputMaybe<TeamMembershipFilter>;
};

/**
 * A condition to be used against `TeamMembership` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TeamMembershipCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<TeamRole>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMembershipDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  role?: InputMaybe<BigIntFilter>;
  teamId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

/** A filter to be used against `TeamMembership` object types. All fields are combined with a logical ‘and.’ */
export type TeamMembershipFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TeamMembershipFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TeamMembershipFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TeamMembershipFilter>>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<TeamRoleFilter>;
  /** Filter by the object’s `team` relation. */
  team?: InputMaybe<TeamFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `TeamMembership` for usage during aggregation. */
export enum TeamMembershipGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Role = 'ROLE',
  TeamId = 'TEAM_ID',
  UserId = 'USER_ID'
}

export type TeamMembershipHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `TeamMembership` aggregates. */
export type TeamMembershipHavingInput = {
  AND?: InputMaybe<Array<TeamMembershipHavingInput>>;
  OR?: InputMaybe<Array<TeamMembershipHavingInput>>;
  average?: InputMaybe<TeamMembershipHavingAverageInput>;
  distinctCount?: InputMaybe<TeamMembershipHavingDistinctCountInput>;
  max?: InputMaybe<TeamMembershipHavingMaxInput>;
  min?: InputMaybe<TeamMembershipHavingMinInput>;
  stddevPopulation?: InputMaybe<TeamMembershipHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TeamMembershipHavingStddevSampleInput>;
  sum?: InputMaybe<TeamMembershipHavingSumInput>;
  variancePopulation?: InputMaybe<TeamMembershipHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TeamMembershipHavingVarianceSampleInput>;
};

export type TeamMembershipHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `TeamMembership` */
export type TeamMembershipInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id: Scalars['String']['input'];
  role?: InputMaybe<TeamRole>;
  teamId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** Represents an update to a `TeamMembership`. Fields that are set will be updated. */
export type TeamMembershipPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<TeamRole>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `TeamMembership`. */
export enum TeamMembershipsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `Team`. Fields that are set will be updated. */
export type TeamPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

/** A filter to be used against TeamRole fields. All fields are combined with a logical ‘and.’ */
export type TeamRoleFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<TeamRole>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<TeamRole>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<TeamRole>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<TeamRole>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<TeamRole>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<TeamRole>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<TeamRole>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<TeamRole>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<TeamRole>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<TeamRole>>;
};

/** A filter to be used against many `Event` object types. All fields are combined with a logical ‘and.’ */
export type TeamToManyEventFilter = {
  /** Aggregates across related `Event` match the filter criteria. */
  aggregates?: InputMaybe<EventAggregatesFilter>;
  /** Every related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EventFilter>;
  /** No related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EventFilter>;
  /** Some related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EventFilter>;
};

/** A filter to be used against many `TeamMembership` object types. All fields are combined with a logical ‘and.’ */
export type TeamToManyTeamMembershipFilter = {
  /** Aggregates across related `TeamMembership` match the filter criteria. */
  aggregates?: InputMaybe<TeamMembershipAggregatesFilter>;
  /** Every related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TeamMembershipFilter>;
  /** No related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TeamMembershipFilter>;
  /** Some related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TeamMembershipFilter>;
};

/** Methods to use when ordering `Team`. */
export enum TeamsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventsByTeamIdAverageDateAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_DATE_ASC',
  EventsByTeamIdAverageDateDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_DATE_DESC',
  EventsByTeamIdAverageDescriptionAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_DESCRIPTION_ASC',
  EventsByTeamIdAverageDescriptionDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_DESCRIPTION_DESC',
  EventsByTeamIdAverageDurationAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_DURATION_ASC',
  EventsByTeamIdAverageDurationDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_DURATION_DESC',
  EventsByTeamIdAverageIdAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_ID_ASC',
  EventsByTeamIdAverageIdDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_ID_DESC',
  EventsByTeamIdAverageLocationAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_LOCATION_ASC',
  EventsByTeamIdAverageLocationDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_LOCATION_DESC',
  EventsByTeamIdAverageTeamIdAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_TEAM_ID_ASC',
  EventsByTeamIdAverageTeamIdDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_TEAM_ID_DESC',
  EventsByTeamIdAverageTitleAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_TITLE_ASC',
  EventsByTeamIdAverageTitleDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_TITLE_DESC',
  EventsByTeamIdAverageUserIdAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_USER_ID_ASC',
  EventsByTeamIdAverageUserIdDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_USER_ID_DESC',
  EventsByTeamIdCountAsc = 'EVENTS_BY_TEAM_ID_COUNT_ASC',
  EventsByTeamIdCountDesc = 'EVENTS_BY_TEAM_ID_COUNT_DESC',
  EventsByTeamIdDistinctCountDateAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DATE_ASC',
  EventsByTeamIdDistinctCountDateDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DATE_DESC',
  EventsByTeamIdDistinctCountDescriptionAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  EventsByTeamIdDistinctCountDescriptionDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  EventsByTeamIdDistinctCountDurationAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DURATION_ASC',
  EventsByTeamIdDistinctCountDurationDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DURATION_DESC',
  EventsByTeamIdDistinctCountIdAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_ID_ASC',
  EventsByTeamIdDistinctCountIdDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_ID_DESC',
  EventsByTeamIdDistinctCountLocationAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_LOCATION_ASC',
  EventsByTeamIdDistinctCountLocationDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_LOCATION_DESC',
  EventsByTeamIdDistinctCountTeamIdAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  EventsByTeamIdDistinctCountTeamIdDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  EventsByTeamIdDistinctCountTitleAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TITLE_ASC',
  EventsByTeamIdDistinctCountTitleDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TITLE_DESC',
  EventsByTeamIdDistinctCountUserIdAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_ASC',
  EventsByTeamIdDistinctCountUserIdDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_DESC',
  EventsByTeamIdMaxDateAsc = 'EVENTS_BY_TEAM_ID_MAX_DATE_ASC',
  EventsByTeamIdMaxDateDesc = 'EVENTS_BY_TEAM_ID_MAX_DATE_DESC',
  EventsByTeamIdMaxDescriptionAsc = 'EVENTS_BY_TEAM_ID_MAX_DESCRIPTION_ASC',
  EventsByTeamIdMaxDescriptionDesc = 'EVENTS_BY_TEAM_ID_MAX_DESCRIPTION_DESC',
  EventsByTeamIdMaxDurationAsc = 'EVENTS_BY_TEAM_ID_MAX_DURATION_ASC',
  EventsByTeamIdMaxDurationDesc = 'EVENTS_BY_TEAM_ID_MAX_DURATION_DESC',
  EventsByTeamIdMaxIdAsc = 'EVENTS_BY_TEAM_ID_MAX_ID_ASC',
  EventsByTeamIdMaxIdDesc = 'EVENTS_BY_TEAM_ID_MAX_ID_DESC',
  EventsByTeamIdMaxLocationAsc = 'EVENTS_BY_TEAM_ID_MAX_LOCATION_ASC',
  EventsByTeamIdMaxLocationDesc = 'EVENTS_BY_TEAM_ID_MAX_LOCATION_DESC',
  EventsByTeamIdMaxTeamIdAsc = 'EVENTS_BY_TEAM_ID_MAX_TEAM_ID_ASC',
  EventsByTeamIdMaxTeamIdDesc = 'EVENTS_BY_TEAM_ID_MAX_TEAM_ID_DESC',
  EventsByTeamIdMaxTitleAsc = 'EVENTS_BY_TEAM_ID_MAX_TITLE_ASC',
  EventsByTeamIdMaxTitleDesc = 'EVENTS_BY_TEAM_ID_MAX_TITLE_DESC',
  EventsByTeamIdMaxUserIdAsc = 'EVENTS_BY_TEAM_ID_MAX_USER_ID_ASC',
  EventsByTeamIdMaxUserIdDesc = 'EVENTS_BY_TEAM_ID_MAX_USER_ID_DESC',
  EventsByTeamIdMinDateAsc = 'EVENTS_BY_TEAM_ID_MIN_DATE_ASC',
  EventsByTeamIdMinDateDesc = 'EVENTS_BY_TEAM_ID_MIN_DATE_DESC',
  EventsByTeamIdMinDescriptionAsc = 'EVENTS_BY_TEAM_ID_MIN_DESCRIPTION_ASC',
  EventsByTeamIdMinDescriptionDesc = 'EVENTS_BY_TEAM_ID_MIN_DESCRIPTION_DESC',
  EventsByTeamIdMinDurationAsc = 'EVENTS_BY_TEAM_ID_MIN_DURATION_ASC',
  EventsByTeamIdMinDurationDesc = 'EVENTS_BY_TEAM_ID_MIN_DURATION_DESC',
  EventsByTeamIdMinIdAsc = 'EVENTS_BY_TEAM_ID_MIN_ID_ASC',
  EventsByTeamIdMinIdDesc = 'EVENTS_BY_TEAM_ID_MIN_ID_DESC',
  EventsByTeamIdMinLocationAsc = 'EVENTS_BY_TEAM_ID_MIN_LOCATION_ASC',
  EventsByTeamIdMinLocationDesc = 'EVENTS_BY_TEAM_ID_MIN_LOCATION_DESC',
  EventsByTeamIdMinTeamIdAsc = 'EVENTS_BY_TEAM_ID_MIN_TEAM_ID_ASC',
  EventsByTeamIdMinTeamIdDesc = 'EVENTS_BY_TEAM_ID_MIN_TEAM_ID_DESC',
  EventsByTeamIdMinTitleAsc = 'EVENTS_BY_TEAM_ID_MIN_TITLE_ASC',
  EventsByTeamIdMinTitleDesc = 'EVENTS_BY_TEAM_ID_MIN_TITLE_DESC',
  EventsByTeamIdMinUserIdAsc = 'EVENTS_BY_TEAM_ID_MIN_USER_ID_ASC',
  EventsByTeamIdMinUserIdDesc = 'EVENTS_BY_TEAM_ID_MIN_USER_ID_DESC',
  EventsByTeamIdStddevPopulationDateAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DATE_ASC',
  EventsByTeamIdStddevPopulationDateDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DATE_DESC',
  EventsByTeamIdStddevPopulationDescriptionAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  EventsByTeamIdStddevPopulationDescriptionDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  EventsByTeamIdStddevPopulationDurationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DURATION_ASC',
  EventsByTeamIdStddevPopulationDurationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DURATION_DESC',
  EventsByTeamIdStddevPopulationIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_ID_ASC',
  EventsByTeamIdStddevPopulationIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_ID_DESC',
  EventsByTeamIdStddevPopulationLocationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_LOCATION_ASC',
  EventsByTeamIdStddevPopulationLocationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_LOCATION_DESC',
  EventsByTeamIdStddevPopulationTeamIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  EventsByTeamIdStddevPopulationTeamIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  EventsByTeamIdStddevPopulationTitleAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TITLE_ASC',
  EventsByTeamIdStddevPopulationTitleDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TITLE_DESC',
  EventsByTeamIdStddevPopulationUserIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_ASC',
  EventsByTeamIdStddevPopulationUserIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_DESC',
  EventsByTeamIdStddevSampleDateAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DATE_ASC',
  EventsByTeamIdStddevSampleDateDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DATE_DESC',
  EventsByTeamIdStddevSampleDescriptionAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  EventsByTeamIdStddevSampleDescriptionDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  EventsByTeamIdStddevSampleDurationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DURATION_ASC',
  EventsByTeamIdStddevSampleDurationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DURATION_DESC',
  EventsByTeamIdStddevSampleIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_ID_ASC',
  EventsByTeamIdStddevSampleIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_ID_DESC',
  EventsByTeamIdStddevSampleLocationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_LOCATION_ASC',
  EventsByTeamIdStddevSampleLocationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_LOCATION_DESC',
  EventsByTeamIdStddevSampleTeamIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  EventsByTeamIdStddevSampleTeamIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  EventsByTeamIdStddevSampleTitleAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TITLE_ASC',
  EventsByTeamIdStddevSampleTitleDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TITLE_DESC',
  EventsByTeamIdStddevSampleUserIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_ASC',
  EventsByTeamIdStddevSampleUserIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_DESC',
  EventsByTeamIdSumDateAsc = 'EVENTS_BY_TEAM_ID_SUM_DATE_ASC',
  EventsByTeamIdSumDateDesc = 'EVENTS_BY_TEAM_ID_SUM_DATE_DESC',
  EventsByTeamIdSumDescriptionAsc = 'EVENTS_BY_TEAM_ID_SUM_DESCRIPTION_ASC',
  EventsByTeamIdSumDescriptionDesc = 'EVENTS_BY_TEAM_ID_SUM_DESCRIPTION_DESC',
  EventsByTeamIdSumDurationAsc = 'EVENTS_BY_TEAM_ID_SUM_DURATION_ASC',
  EventsByTeamIdSumDurationDesc = 'EVENTS_BY_TEAM_ID_SUM_DURATION_DESC',
  EventsByTeamIdSumIdAsc = 'EVENTS_BY_TEAM_ID_SUM_ID_ASC',
  EventsByTeamIdSumIdDesc = 'EVENTS_BY_TEAM_ID_SUM_ID_DESC',
  EventsByTeamIdSumLocationAsc = 'EVENTS_BY_TEAM_ID_SUM_LOCATION_ASC',
  EventsByTeamIdSumLocationDesc = 'EVENTS_BY_TEAM_ID_SUM_LOCATION_DESC',
  EventsByTeamIdSumTeamIdAsc = 'EVENTS_BY_TEAM_ID_SUM_TEAM_ID_ASC',
  EventsByTeamIdSumTeamIdDesc = 'EVENTS_BY_TEAM_ID_SUM_TEAM_ID_DESC',
  EventsByTeamIdSumTitleAsc = 'EVENTS_BY_TEAM_ID_SUM_TITLE_ASC',
  EventsByTeamIdSumTitleDesc = 'EVENTS_BY_TEAM_ID_SUM_TITLE_DESC',
  EventsByTeamIdSumUserIdAsc = 'EVENTS_BY_TEAM_ID_SUM_USER_ID_ASC',
  EventsByTeamIdSumUserIdDesc = 'EVENTS_BY_TEAM_ID_SUM_USER_ID_DESC',
  EventsByTeamIdVariancePopulationDateAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DATE_ASC',
  EventsByTeamIdVariancePopulationDateDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DATE_DESC',
  EventsByTeamIdVariancePopulationDescriptionAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  EventsByTeamIdVariancePopulationDescriptionDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  EventsByTeamIdVariancePopulationDurationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DURATION_ASC',
  EventsByTeamIdVariancePopulationDurationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DURATION_DESC',
  EventsByTeamIdVariancePopulationIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_ID_ASC',
  EventsByTeamIdVariancePopulationIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_ID_DESC',
  EventsByTeamIdVariancePopulationLocationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_LOCATION_ASC',
  EventsByTeamIdVariancePopulationLocationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_LOCATION_DESC',
  EventsByTeamIdVariancePopulationTeamIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  EventsByTeamIdVariancePopulationTeamIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  EventsByTeamIdVariancePopulationTitleAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TITLE_ASC',
  EventsByTeamIdVariancePopulationTitleDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TITLE_DESC',
  EventsByTeamIdVariancePopulationUserIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_ASC',
  EventsByTeamIdVariancePopulationUserIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_DESC',
  EventsByTeamIdVarianceSampleDateAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DATE_ASC',
  EventsByTeamIdVarianceSampleDateDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DATE_DESC',
  EventsByTeamIdVarianceSampleDescriptionAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  EventsByTeamIdVarianceSampleDescriptionDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  EventsByTeamIdVarianceSampleDurationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DURATION_ASC',
  EventsByTeamIdVarianceSampleDurationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DURATION_DESC',
  EventsByTeamIdVarianceSampleIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_ASC',
  EventsByTeamIdVarianceSampleIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_DESC',
  EventsByTeamIdVarianceSampleLocationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_LOCATION_ASC',
  EventsByTeamIdVarianceSampleLocationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_LOCATION_DESC',
  EventsByTeamIdVarianceSampleTeamIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  EventsByTeamIdVarianceSampleTeamIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  EventsByTeamIdVarianceSampleTitleAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TITLE_ASC',
  EventsByTeamIdVarianceSampleTitleDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TITLE_DESC',
  EventsByTeamIdVarianceSampleUserIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  EventsByTeamIdVarianceSampleUserIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamMembershipsByTeamIdAverageCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_CREATED_AT_ASC',
  TeamMembershipsByTeamIdAverageCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_CREATED_AT_DESC',
  TeamMembershipsByTeamIdAverageIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ID_ASC',
  TeamMembershipsByTeamIdAverageIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ID_DESC',
  TeamMembershipsByTeamIdAverageRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ROLE_ASC',
  TeamMembershipsByTeamIdAverageRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ROLE_DESC',
  TeamMembershipsByTeamIdAverageTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_TEAM_ID_ASC',
  TeamMembershipsByTeamIdAverageTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_TEAM_ID_DESC',
  TeamMembershipsByTeamIdAverageUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_USER_ID_ASC',
  TeamMembershipsByTeamIdAverageUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_USER_ID_DESC',
  TeamMembershipsByTeamIdCountAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_COUNT_ASC',
  TeamMembershipsByTeamIdCountDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_COUNT_DESC',
  TeamMembershipsByTeamIdDistinctCountCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  TeamMembershipsByTeamIdDistinctCountCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  TeamMembershipsByTeamIdDistinctCountIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ID_ASC',
  TeamMembershipsByTeamIdDistinctCountIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ID_DESC',
  TeamMembershipsByTeamIdDistinctCountRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ROLE_ASC',
  TeamMembershipsByTeamIdDistinctCountRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ROLE_DESC',
  TeamMembershipsByTeamIdDistinctCountTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  TeamMembershipsByTeamIdDistinctCountTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  TeamMembershipsByTeamIdDistinctCountUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_ASC',
  TeamMembershipsByTeamIdDistinctCountUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_DESC',
  TeamMembershipsByTeamIdMaxCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_CREATED_AT_ASC',
  TeamMembershipsByTeamIdMaxCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_CREATED_AT_DESC',
  TeamMembershipsByTeamIdMaxIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ID_ASC',
  TeamMembershipsByTeamIdMaxIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ID_DESC',
  TeamMembershipsByTeamIdMaxRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ROLE_ASC',
  TeamMembershipsByTeamIdMaxRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ROLE_DESC',
  TeamMembershipsByTeamIdMaxTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_TEAM_ID_ASC',
  TeamMembershipsByTeamIdMaxTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_TEAM_ID_DESC',
  TeamMembershipsByTeamIdMaxUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_USER_ID_ASC',
  TeamMembershipsByTeamIdMaxUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_USER_ID_DESC',
  TeamMembershipsByTeamIdMinCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_CREATED_AT_ASC',
  TeamMembershipsByTeamIdMinCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_CREATED_AT_DESC',
  TeamMembershipsByTeamIdMinIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ID_ASC',
  TeamMembershipsByTeamIdMinIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ID_DESC',
  TeamMembershipsByTeamIdMinRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ROLE_ASC',
  TeamMembershipsByTeamIdMinRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ROLE_DESC',
  TeamMembershipsByTeamIdMinTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_TEAM_ID_ASC',
  TeamMembershipsByTeamIdMinTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_TEAM_ID_DESC',
  TeamMembershipsByTeamIdMinUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_USER_ID_ASC',
  TeamMembershipsByTeamIdMinUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_USER_ID_DESC',
  TeamMembershipsByTeamIdStddevPopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByTeamIdStddevPopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByTeamIdStddevPopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ID_ASC',
  TeamMembershipsByTeamIdStddevPopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ID_DESC',
  TeamMembershipsByTeamIdStddevPopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ROLE_ASC',
  TeamMembershipsByTeamIdStddevPopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ROLE_DESC',
  TeamMembershipsByTeamIdStddevPopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByTeamIdStddevPopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByTeamIdStddevPopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_ASC',
  TeamMembershipsByTeamIdStddevPopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_DESC',
  TeamMembershipsByTeamIdStddevSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByTeamIdStddevSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByTeamIdStddevSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ID_ASC',
  TeamMembershipsByTeamIdStddevSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ID_DESC',
  TeamMembershipsByTeamIdStddevSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ROLE_ASC',
  TeamMembershipsByTeamIdStddevSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ROLE_DESC',
  TeamMembershipsByTeamIdStddevSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByTeamIdStddevSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByTeamIdStddevSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TeamMembershipsByTeamIdStddevSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TeamMembershipsByTeamIdSumCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_CREATED_AT_ASC',
  TeamMembershipsByTeamIdSumCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_CREATED_AT_DESC',
  TeamMembershipsByTeamIdSumIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ID_ASC',
  TeamMembershipsByTeamIdSumIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ID_DESC',
  TeamMembershipsByTeamIdSumRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ROLE_ASC',
  TeamMembershipsByTeamIdSumRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ROLE_DESC',
  TeamMembershipsByTeamIdSumTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_TEAM_ID_ASC',
  TeamMembershipsByTeamIdSumTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_TEAM_ID_DESC',
  TeamMembershipsByTeamIdSumUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_USER_ID_ASC',
  TeamMembershipsByTeamIdSumUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_USER_ID_DESC',
  TeamMembershipsByTeamIdVariancePopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByTeamIdVariancePopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByTeamIdVariancePopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ID_ASC',
  TeamMembershipsByTeamIdVariancePopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ID_DESC',
  TeamMembershipsByTeamIdVariancePopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ROLE_ASC',
  TeamMembershipsByTeamIdVariancePopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ROLE_DESC',
  TeamMembershipsByTeamIdVariancePopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByTeamIdVariancePopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByTeamIdVariancePopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TeamMembershipsByTeamIdVariancePopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TeamMembershipsByTeamIdVarianceSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByTeamIdVarianceSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByTeamIdVarianceSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_ASC',
  TeamMembershipsByTeamIdVarianceSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_DESC',
  TeamMembershipsByTeamIdVarianceSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ROLE_ASC',
  TeamMembershipsByTeamIdVarianceSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ROLE_DESC',
  TeamMembershipsByTeamIdVarianceSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByTeamIdVarianceSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByTeamIdVarianceSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TeamMembershipsByTeamIdVarianceSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** All input for the `updateAvailabilityByNodeId` mutation. */
export type UpdateAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Availability` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** All input for the `updateAvailability` mutation. */
export type UpdateAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** All input for the `updateBookingByNodeId` mutation. */
export type UpdateBookingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Booking` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  patch: BookingPatch;
};

/** All input for the `updateBooking` mutation. */
export type UpdateBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  patch: BookingPatch;
  userId: Scalars['String']['input'];
};

/** All input for the `updateCustomAvailabilityByNodeId` mutation. */
export type UpdateCustomAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `CustomAvailability` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `CustomAvailability` being updated. */
  patch: CustomAvailabilityPatch;
};

/** All input for the `updateCustomAvailability` mutation. */
export type UpdateCustomAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `CustomAvailability` being updated. */
  patch: CustomAvailabilityPatch;
};

/** All input for the `updateEventByNodeId` mutation. */
export type UpdateEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateTeamByNodeId` mutation. */
export type UpdateTeamByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Team` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Team` being updated. */
  patch: TeamPatch;
};

/** All input for the `updateTeam` mutation. */
export type UpdateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Team` being updated. */
  patch: TeamPatch;
};

/** All input for the `updateTeamMembershipByNodeId` mutation. */
export type UpdateTeamMembershipByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `TeamMembership` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `TeamMembership` being updated. */
  patch: TeamMembershipPatch;
};

/** All input for the `updateTeamMembership` mutation. */
export type UpdateTeamMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `TeamMembership` being updated. */
  patch: TeamMembershipPatch;
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

/** All input for the upsert `Availability` mutation. */
export type UpsertAvailabilityInput = {
  /** The `Availability` to be upserted by this mutation. */
  availability: AvailabilityInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Where conditions for the upsert `Availability` mutation. */
export type UpsertAvailabilityWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Booking` mutation. */
export type UpsertBookingInput = {
  /** The `Booking` to be upserted by this mutation. */
  booking: BookingInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Where conditions for the upsert `Booking` mutation. */
export type UpsertBookingWhere = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `CustomAvailability` mutation. */
export type UpsertCustomAvailabilityInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `CustomAvailability` to be upserted by this mutation. */
  customAvailability: CustomAvailabilityInput;
};

/** Where conditions for the upsert `CustomAvailability` mutation. */
export type UpsertCustomAvailabilityWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Event` mutation. */
export type UpsertEventInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Event` to be upserted by this mutation. */
  event: EventInput;
};

/** Where conditions for the upsert `Event` mutation. */
export type UpsertEventWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Team` mutation. */
export type UpsertTeamInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Team` to be upserted by this mutation. */
  team: TeamInput;
};

/** All input for the upsert `TeamMembership` mutation. */
export type UpsertTeamMembershipInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TeamMembership` to be upserted by this mutation. */
  teamMembership: TeamMembershipInput;
};

/** Where conditions for the upsert `TeamMembership` mutation. */
export type UpsertTeamMembershipWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Where conditions for the upsert `Team` mutation. */
export type UpsertTeamWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
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
  /** Checks for equality with the object’s `birthDay` field. */
  birthDay?: InputMaybe<Scalars['Datetime']['input']>;
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
  /** Filter by the object’s `availabilitiesByUserId` relation. */
  availabilitiesByUserId?: InputMaybe<UserToManyAvailabilityFilter>;
  /** Some related `availabilitiesByUserId` exist. */
  availabilitiesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `birthDay` field. */
  birthDay?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `bookingsByUserId` relation. */
  bookingsByUserId?: InputMaybe<UserToManyBookingFilter>;
  /** Some related `bookingsByUserId` exist. */
  bookingsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `customAvailabilitiesByUserId` relation. */
  customAvailabilitiesByUserId?: InputMaybe<UserToManyCustomAvailabilityFilter>;
  /** Some related `customAvailabilitiesByUserId` exist. */
  customAvailabilitiesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `eventsByUserId` relation. */
  eventsByUserId?: InputMaybe<UserToManyEventFilter>;
  /** Some related `eventsByUserId` exist. */
  eventsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `picture` field. */
  picture?: InputMaybe<StringFilter>;
  /** Filter by the object’s `teamMembershipsByUserId` relation. */
  teamMembershipsByUserId?: InputMaybe<UserToManyTeamMembershipFilter>;
  /** Some related `teamMembershipsByUserId` exist. */
  teamMembershipsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `tel` field. */
  tel?: InputMaybe<StringFilter>;
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
  BirthDay = 'BIRTH_DAY',
  BirthDayTruncatedToDay = 'BIRTH_DAY_TRUNCATED_TO_DAY',
  BirthDayTruncatedToHour = 'BIRTH_DAY_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Gender = 'GENDER',
  LastName = 'LAST_NAME',
  Picture = 'PICTURE',
  Tel = 'TEL'
}

export type UserHavingAverageInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingDistinctCountInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
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
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingMinInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevPopulationInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevSampleInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingSumInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVariancePopulationInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVarianceSampleInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  birthDay?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  birthDay?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Availability` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyAvailabilityFilter = {
  /** Aggregates across related `Availability` match the filter criteria. */
  aggregates?: InputMaybe<AvailabilityAggregatesFilter>;
  /** Every related `Availability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AvailabilityFilter>;
  /** No related `Availability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AvailabilityFilter>;
  /** Some related `Availability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AvailabilityFilter>;
};

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyBookingFilter = {
  /** Aggregates across related `Booking` match the filter criteria. */
  aggregates?: InputMaybe<BookingAggregatesFilter>;
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

/** A filter to be used against many `CustomAvailability` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyCustomAvailabilityFilter = {
  /** Aggregates across related `CustomAvailability` match the filter criteria. */
  aggregates?: InputMaybe<CustomAvailabilityAggregatesFilter>;
  /** Every related `CustomAvailability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CustomAvailabilityFilter>;
  /** No related `CustomAvailability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CustomAvailabilityFilter>;
  /** Some related `CustomAvailability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CustomAvailabilityFilter>;
};

/** A filter to be used against many `Event` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyEventFilter = {
  /** Aggregates across related `Event` match the filter criteria. */
  aggregates?: InputMaybe<EventAggregatesFilter>;
  /** Every related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EventFilter>;
  /** No related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EventFilter>;
  /** Some related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EventFilter>;
};

/** A filter to be used against many `TeamMembership` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyTeamMembershipFilter = {
  /** Aggregates across related `TeamMembership` match the filter criteria. */
  aggregates?: InputMaybe<TeamMembershipAggregatesFilter>;
  /** Every related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TeamMembershipFilter>;
  /** No related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TeamMembershipFilter>;
  /** Some related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TeamMembershipFilter>;
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
  AvailabilitiesByUserIdAverageDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdAverageDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdAverageEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_ASC',
  AvailabilitiesByUserIdAverageEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_DESC',
  AvailabilitiesByUserIdAverageIdAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_ID_ASC',
  AvailabilitiesByUserIdAverageIdDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_ID_DESC',
  AvailabilitiesByUserIdAverageStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_ASC',
  AvailabilitiesByUserIdAverageStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_DESC',
  AvailabilitiesByUserIdAverageUserIdAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  AvailabilitiesByUserIdAverageUserIdDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  AvailabilitiesByUserIdCountAsc = 'AVAILABILITIES_BY_USER_ID_COUNT_ASC',
  AvailabilitiesByUserIdCountDesc = 'AVAILABILITIES_BY_USER_ID_COUNT_DESC',
  AvailabilitiesByUserIdDistinctCountDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdDistinctCountDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdDistinctCountEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_ASC',
  AvailabilitiesByUserIdDistinctCountEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_DESC',
  AvailabilitiesByUserIdDistinctCountIdAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  AvailabilitiesByUserIdDistinctCountIdDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  AvailabilitiesByUserIdDistinctCountStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_ASC',
  AvailabilitiesByUserIdDistinctCountStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_DESC',
  AvailabilitiesByUserIdDistinctCountUserIdAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  AvailabilitiesByUserIdDistinctCountUserIdDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  AvailabilitiesByUserIdMaxDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_MAX_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdMaxDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_MAX_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdMaxEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_MAX_END_TIME_ASC',
  AvailabilitiesByUserIdMaxEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_MAX_END_TIME_DESC',
  AvailabilitiesByUserIdMaxIdAsc = 'AVAILABILITIES_BY_USER_ID_MAX_ID_ASC',
  AvailabilitiesByUserIdMaxIdDesc = 'AVAILABILITIES_BY_USER_ID_MAX_ID_DESC',
  AvailabilitiesByUserIdMaxStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_MAX_START_TIME_ASC',
  AvailabilitiesByUserIdMaxStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_MAX_START_TIME_DESC',
  AvailabilitiesByUserIdMaxUserIdAsc = 'AVAILABILITIES_BY_USER_ID_MAX_USER_ID_ASC',
  AvailabilitiesByUserIdMaxUserIdDesc = 'AVAILABILITIES_BY_USER_ID_MAX_USER_ID_DESC',
  AvailabilitiesByUserIdMinDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_MIN_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdMinDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_MIN_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdMinEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_MIN_END_TIME_ASC',
  AvailabilitiesByUserIdMinEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_MIN_END_TIME_DESC',
  AvailabilitiesByUserIdMinIdAsc = 'AVAILABILITIES_BY_USER_ID_MIN_ID_ASC',
  AvailabilitiesByUserIdMinIdDesc = 'AVAILABILITIES_BY_USER_ID_MIN_ID_DESC',
  AvailabilitiesByUserIdMinStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_MIN_START_TIME_ASC',
  AvailabilitiesByUserIdMinStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_MIN_START_TIME_DESC',
  AvailabilitiesByUserIdMinUserIdAsc = 'AVAILABILITIES_BY_USER_ID_MIN_USER_ID_ASC',
  AvailabilitiesByUserIdMinUserIdDesc = 'AVAILABILITIES_BY_USER_ID_MIN_USER_ID_DESC',
  AvailabilitiesByUserIdStddevPopulationDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdStddevPopulationDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdStddevPopulationEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_ASC',
  AvailabilitiesByUserIdStddevPopulationEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_DESC',
  AvailabilitiesByUserIdStddevPopulationIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  AvailabilitiesByUserIdStddevPopulationIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  AvailabilitiesByUserIdStddevPopulationStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_ASC',
  AvailabilitiesByUserIdStddevPopulationStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_DESC',
  AvailabilitiesByUserIdStddevPopulationUserIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  AvailabilitiesByUserIdStddevPopulationUserIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  AvailabilitiesByUserIdStddevSampleDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdStddevSampleDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdStddevSampleEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_ASC',
  AvailabilitiesByUserIdStddevSampleEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_DESC',
  AvailabilitiesByUserIdStddevSampleIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  AvailabilitiesByUserIdStddevSampleIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  AvailabilitiesByUserIdStddevSampleStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_ASC',
  AvailabilitiesByUserIdStddevSampleStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_DESC',
  AvailabilitiesByUserIdStddevSampleUserIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  AvailabilitiesByUserIdStddevSampleUserIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  AvailabilitiesByUserIdSumDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_SUM_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdSumDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_SUM_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdSumEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_SUM_END_TIME_ASC',
  AvailabilitiesByUserIdSumEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_SUM_END_TIME_DESC',
  AvailabilitiesByUserIdSumIdAsc = 'AVAILABILITIES_BY_USER_ID_SUM_ID_ASC',
  AvailabilitiesByUserIdSumIdDesc = 'AVAILABILITIES_BY_USER_ID_SUM_ID_DESC',
  AvailabilitiesByUserIdSumStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_SUM_START_TIME_ASC',
  AvailabilitiesByUserIdSumStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_SUM_START_TIME_DESC',
  AvailabilitiesByUserIdSumUserIdAsc = 'AVAILABILITIES_BY_USER_ID_SUM_USER_ID_ASC',
  AvailabilitiesByUserIdSumUserIdDesc = 'AVAILABILITIES_BY_USER_ID_SUM_USER_ID_DESC',
  AvailabilitiesByUserIdVariancePopulationDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdVariancePopulationDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdVariancePopulationEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_ASC',
  AvailabilitiesByUserIdVariancePopulationEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_DESC',
  AvailabilitiesByUserIdVariancePopulationIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  AvailabilitiesByUserIdVariancePopulationIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  AvailabilitiesByUserIdVariancePopulationStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_ASC',
  AvailabilitiesByUserIdVariancePopulationStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_DESC',
  AvailabilitiesByUserIdVariancePopulationUserIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  AvailabilitiesByUserIdVariancePopulationUserIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  AvailabilitiesByUserIdVarianceSampleDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdVarianceSampleDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdVarianceSampleEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_ASC',
  AvailabilitiesByUserIdVarianceSampleEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_DESC',
  AvailabilitiesByUserIdVarianceSampleIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  AvailabilitiesByUserIdVarianceSampleIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  AvailabilitiesByUserIdVarianceSampleStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_ASC',
  AvailabilitiesByUserIdVarianceSampleStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_DESC',
  AvailabilitiesByUserIdVarianceSampleUserIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  AvailabilitiesByUserIdVarianceSampleUserIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  BirthDayAsc = 'BIRTH_DAY_ASC',
  BirthDayDesc = 'BIRTH_DAY_DESC',
  BookingsByUserIdAverageEventIdAsc = 'BOOKINGS_BY_USER_ID_AVERAGE_EVENT_ID_ASC',
  BookingsByUserIdAverageEventIdDesc = 'BOOKINGS_BY_USER_ID_AVERAGE_EVENT_ID_DESC',
  BookingsByUserIdAverageStatusAsc = 'BOOKINGS_BY_USER_ID_AVERAGE_STATUS_ASC',
  BookingsByUserIdAverageStatusDesc = 'BOOKINGS_BY_USER_ID_AVERAGE_STATUS_DESC',
  BookingsByUserIdAverageUserIdAsc = 'BOOKINGS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  BookingsByUserIdAverageUserIdDesc = 'BOOKINGS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  BookingsByUserIdCountAsc = 'BOOKINGS_BY_USER_ID_COUNT_ASC',
  BookingsByUserIdCountDesc = 'BOOKINGS_BY_USER_ID_COUNT_DESC',
  BookingsByUserIdDistinctCountEventIdAsc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BookingsByUserIdDistinctCountEventIdDesc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BookingsByUserIdDistinctCountStatusAsc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_STATUS_ASC',
  BookingsByUserIdDistinctCountStatusDesc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_STATUS_DESC',
  BookingsByUserIdDistinctCountUserIdAsc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  BookingsByUserIdDistinctCountUserIdDesc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  BookingsByUserIdMaxEventIdAsc = 'BOOKINGS_BY_USER_ID_MAX_EVENT_ID_ASC',
  BookingsByUserIdMaxEventIdDesc = 'BOOKINGS_BY_USER_ID_MAX_EVENT_ID_DESC',
  BookingsByUserIdMaxStatusAsc = 'BOOKINGS_BY_USER_ID_MAX_STATUS_ASC',
  BookingsByUserIdMaxStatusDesc = 'BOOKINGS_BY_USER_ID_MAX_STATUS_DESC',
  BookingsByUserIdMaxUserIdAsc = 'BOOKINGS_BY_USER_ID_MAX_USER_ID_ASC',
  BookingsByUserIdMaxUserIdDesc = 'BOOKINGS_BY_USER_ID_MAX_USER_ID_DESC',
  BookingsByUserIdMinEventIdAsc = 'BOOKINGS_BY_USER_ID_MIN_EVENT_ID_ASC',
  BookingsByUserIdMinEventIdDesc = 'BOOKINGS_BY_USER_ID_MIN_EVENT_ID_DESC',
  BookingsByUserIdMinStatusAsc = 'BOOKINGS_BY_USER_ID_MIN_STATUS_ASC',
  BookingsByUserIdMinStatusDesc = 'BOOKINGS_BY_USER_ID_MIN_STATUS_DESC',
  BookingsByUserIdMinUserIdAsc = 'BOOKINGS_BY_USER_ID_MIN_USER_ID_ASC',
  BookingsByUserIdMinUserIdDesc = 'BOOKINGS_BY_USER_ID_MIN_USER_ID_DESC',
  BookingsByUserIdStddevPopulationEventIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BookingsByUserIdStddevPopulationEventIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BookingsByUserIdStddevPopulationStatusAsc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_STATUS_ASC',
  BookingsByUserIdStddevPopulationStatusDesc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_STATUS_DESC',
  BookingsByUserIdStddevPopulationUserIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  BookingsByUserIdStddevPopulationUserIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  BookingsByUserIdStddevSampleEventIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BookingsByUserIdStddevSampleEventIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BookingsByUserIdStddevSampleStatusAsc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_STATUS_ASC',
  BookingsByUserIdStddevSampleStatusDesc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_STATUS_DESC',
  BookingsByUserIdStddevSampleUserIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BookingsByUserIdStddevSampleUserIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BookingsByUserIdSumEventIdAsc = 'BOOKINGS_BY_USER_ID_SUM_EVENT_ID_ASC',
  BookingsByUserIdSumEventIdDesc = 'BOOKINGS_BY_USER_ID_SUM_EVENT_ID_DESC',
  BookingsByUserIdSumStatusAsc = 'BOOKINGS_BY_USER_ID_SUM_STATUS_ASC',
  BookingsByUserIdSumStatusDesc = 'BOOKINGS_BY_USER_ID_SUM_STATUS_DESC',
  BookingsByUserIdSumUserIdAsc = 'BOOKINGS_BY_USER_ID_SUM_USER_ID_ASC',
  BookingsByUserIdSumUserIdDesc = 'BOOKINGS_BY_USER_ID_SUM_USER_ID_DESC',
  BookingsByUserIdVariancePopulationEventIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BookingsByUserIdVariancePopulationEventIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BookingsByUserIdVariancePopulationStatusAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_STATUS_ASC',
  BookingsByUserIdVariancePopulationStatusDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_STATUS_DESC',
  BookingsByUserIdVariancePopulationUserIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BookingsByUserIdVariancePopulationUserIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BookingsByUserIdVarianceSampleEventIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BookingsByUserIdVarianceSampleEventIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BookingsByUserIdVarianceSampleStatusAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_STATUS_ASC',
  BookingsByUserIdVarianceSampleStatusDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_STATUS_DESC',
  BookingsByUserIdVarianceSampleUserIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BookingsByUserIdVarianceSampleUserIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  CustomAvailabilitiesByUserIdAverageAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdAverageAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdAverageEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_ASC',
  CustomAvailabilitiesByUserIdAverageEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_DESC',
  CustomAvailabilitiesByUserIdAverageIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_ID_ASC',
  CustomAvailabilitiesByUserIdAverageIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_ID_DESC',
  CustomAvailabilitiesByUserIdAverageReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_REASON_ASC',
  CustomAvailabilitiesByUserIdAverageReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_REASON_DESC',
  CustomAvailabilitiesByUserIdAverageStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_ASC',
  CustomAvailabilitiesByUserIdAverageStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_DESC',
  CustomAvailabilitiesByUserIdAverageUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  CustomAvailabilitiesByUserIdAverageUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  CustomAvailabilitiesByUserIdCountAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_COUNT_ASC',
  CustomAvailabilitiesByUserIdCountDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_COUNT_DESC',
  CustomAvailabilitiesByUserIdDistinctCountAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdDistinctCountAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdDistinctCountEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_ASC',
  CustomAvailabilitiesByUserIdDistinctCountEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_DESC',
  CustomAvailabilitiesByUserIdDistinctCountIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  CustomAvailabilitiesByUserIdDistinctCountIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  CustomAvailabilitiesByUserIdDistinctCountReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_REASON_ASC',
  CustomAvailabilitiesByUserIdDistinctCountReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_REASON_DESC',
  CustomAvailabilitiesByUserIdDistinctCountStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_ASC',
  CustomAvailabilitiesByUserIdDistinctCountStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_DESC',
  CustomAvailabilitiesByUserIdDistinctCountUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  CustomAvailabilitiesByUserIdDistinctCountUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  CustomAvailabilitiesByUserIdMaxAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdMaxAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdMaxEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_END_TIME_ASC',
  CustomAvailabilitiesByUserIdMaxEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_END_TIME_DESC',
  CustomAvailabilitiesByUserIdMaxIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_ID_ASC',
  CustomAvailabilitiesByUserIdMaxIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_ID_DESC',
  CustomAvailabilitiesByUserIdMaxReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_REASON_ASC',
  CustomAvailabilitiesByUserIdMaxReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_REASON_DESC',
  CustomAvailabilitiesByUserIdMaxStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_START_TIME_ASC',
  CustomAvailabilitiesByUserIdMaxStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_START_TIME_DESC',
  CustomAvailabilitiesByUserIdMaxUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_USER_ID_ASC',
  CustomAvailabilitiesByUserIdMaxUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_USER_ID_DESC',
  CustomAvailabilitiesByUserIdMinAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdMinAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdMinEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_END_TIME_ASC',
  CustomAvailabilitiesByUserIdMinEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_END_TIME_DESC',
  CustomAvailabilitiesByUserIdMinIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_ID_ASC',
  CustomAvailabilitiesByUserIdMinIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_ID_DESC',
  CustomAvailabilitiesByUserIdMinReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_REASON_ASC',
  CustomAvailabilitiesByUserIdMinReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_REASON_DESC',
  CustomAvailabilitiesByUserIdMinStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_START_TIME_ASC',
  CustomAvailabilitiesByUserIdMinStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_START_TIME_DESC',
  CustomAvailabilitiesByUserIdMinUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_USER_ID_ASC',
  CustomAvailabilitiesByUserIdMinUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_USER_ID_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_REASON_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_REASON_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  CustomAvailabilitiesByUserIdStddevSampleAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdStddevSampleAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdStddevSampleEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevSampleEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevSampleIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  CustomAvailabilitiesByUserIdStddevSampleIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  CustomAvailabilitiesByUserIdStddevSampleReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_REASON_ASC',
  CustomAvailabilitiesByUserIdStddevSampleReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_REASON_DESC',
  CustomAvailabilitiesByUserIdStddevSampleStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevSampleStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevSampleUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  CustomAvailabilitiesByUserIdStddevSampleUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  CustomAvailabilitiesByUserIdSumAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdSumAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdSumEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_END_TIME_ASC',
  CustomAvailabilitiesByUserIdSumEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_END_TIME_DESC',
  CustomAvailabilitiesByUserIdSumIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_ID_ASC',
  CustomAvailabilitiesByUserIdSumIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_ID_DESC',
  CustomAvailabilitiesByUserIdSumReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_REASON_ASC',
  CustomAvailabilitiesByUserIdSumReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_REASON_DESC',
  CustomAvailabilitiesByUserIdSumStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_START_TIME_ASC',
  CustomAvailabilitiesByUserIdSumStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_START_TIME_DESC',
  CustomAvailabilitiesByUserIdSumUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_USER_ID_ASC',
  CustomAvailabilitiesByUserIdSumUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_USER_ID_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_REASON_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_REASON_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_REASON_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_REASON_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  EventsByUserIdAverageDateAsc = 'EVENTS_BY_USER_ID_AVERAGE_DATE_ASC',
  EventsByUserIdAverageDateDesc = 'EVENTS_BY_USER_ID_AVERAGE_DATE_DESC',
  EventsByUserIdAverageDescriptionAsc = 'EVENTS_BY_USER_ID_AVERAGE_DESCRIPTION_ASC',
  EventsByUserIdAverageDescriptionDesc = 'EVENTS_BY_USER_ID_AVERAGE_DESCRIPTION_DESC',
  EventsByUserIdAverageDurationAsc = 'EVENTS_BY_USER_ID_AVERAGE_DURATION_ASC',
  EventsByUserIdAverageDurationDesc = 'EVENTS_BY_USER_ID_AVERAGE_DURATION_DESC',
  EventsByUserIdAverageIdAsc = 'EVENTS_BY_USER_ID_AVERAGE_ID_ASC',
  EventsByUserIdAverageIdDesc = 'EVENTS_BY_USER_ID_AVERAGE_ID_DESC',
  EventsByUserIdAverageLocationAsc = 'EVENTS_BY_USER_ID_AVERAGE_LOCATION_ASC',
  EventsByUserIdAverageLocationDesc = 'EVENTS_BY_USER_ID_AVERAGE_LOCATION_DESC',
  EventsByUserIdAverageTeamIdAsc = 'EVENTS_BY_USER_ID_AVERAGE_TEAM_ID_ASC',
  EventsByUserIdAverageTeamIdDesc = 'EVENTS_BY_USER_ID_AVERAGE_TEAM_ID_DESC',
  EventsByUserIdAverageTitleAsc = 'EVENTS_BY_USER_ID_AVERAGE_TITLE_ASC',
  EventsByUserIdAverageTitleDesc = 'EVENTS_BY_USER_ID_AVERAGE_TITLE_DESC',
  EventsByUserIdAverageUserIdAsc = 'EVENTS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  EventsByUserIdAverageUserIdDesc = 'EVENTS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  EventsByUserIdCountAsc = 'EVENTS_BY_USER_ID_COUNT_ASC',
  EventsByUserIdCountDesc = 'EVENTS_BY_USER_ID_COUNT_DESC',
  EventsByUserIdDistinctCountDateAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DATE_ASC',
  EventsByUserIdDistinctCountDateDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DATE_DESC',
  EventsByUserIdDistinctCountDescriptionAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  EventsByUserIdDistinctCountDescriptionDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  EventsByUserIdDistinctCountDurationAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DURATION_ASC',
  EventsByUserIdDistinctCountDurationDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DURATION_DESC',
  EventsByUserIdDistinctCountIdAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  EventsByUserIdDistinctCountIdDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  EventsByUserIdDistinctCountLocationAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_LOCATION_ASC',
  EventsByUserIdDistinctCountLocationDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_LOCATION_DESC',
  EventsByUserIdDistinctCountTeamIdAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  EventsByUserIdDistinctCountTeamIdDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  EventsByUserIdDistinctCountTitleAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TITLE_ASC',
  EventsByUserIdDistinctCountTitleDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TITLE_DESC',
  EventsByUserIdDistinctCountUserIdAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  EventsByUserIdDistinctCountUserIdDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  EventsByUserIdMaxDateAsc = 'EVENTS_BY_USER_ID_MAX_DATE_ASC',
  EventsByUserIdMaxDateDesc = 'EVENTS_BY_USER_ID_MAX_DATE_DESC',
  EventsByUserIdMaxDescriptionAsc = 'EVENTS_BY_USER_ID_MAX_DESCRIPTION_ASC',
  EventsByUserIdMaxDescriptionDesc = 'EVENTS_BY_USER_ID_MAX_DESCRIPTION_DESC',
  EventsByUserIdMaxDurationAsc = 'EVENTS_BY_USER_ID_MAX_DURATION_ASC',
  EventsByUserIdMaxDurationDesc = 'EVENTS_BY_USER_ID_MAX_DURATION_DESC',
  EventsByUserIdMaxIdAsc = 'EVENTS_BY_USER_ID_MAX_ID_ASC',
  EventsByUserIdMaxIdDesc = 'EVENTS_BY_USER_ID_MAX_ID_DESC',
  EventsByUserIdMaxLocationAsc = 'EVENTS_BY_USER_ID_MAX_LOCATION_ASC',
  EventsByUserIdMaxLocationDesc = 'EVENTS_BY_USER_ID_MAX_LOCATION_DESC',
  EventsByUserIdMaxTeamIdAsc = 'EVENTS_BY_USER_ID_MAX_TEAM_ID_ASC',
  EventsByUserIdMaxTeamIdDesc = 'EVENTS_BY_USER_ID_MAX_TEAM_ID_DESC',
  EventsByUserIdMaxTitleAsc = 'EVENTS_BY_USER_ID_MAX_TITLE_ASC',
  EventsByUserIdMaxTitleDesc = 'EVENTS_BY_USER_ID_MAX_TITLE_DESC',
  EventsByUserIdMaxUserIdAsc = 'EVENTS_BY_USER_ID_MAX_USER_ID_ASC',
  EventsByUserIdMaxUserIdDesc = 'EVENTS_BY_USER_ID_MAX_USER_ID_DESC',
  EventsByUserIdMinDateAsc = 'EVENTS_BY_USER_ID_MIN_DATE_ASC',
  EventsByUserIdMinDateDesc = 'EVENTS_BY_USER_ID_MIN_DATE_DESC',
  EventsByUserIdMinDescriptionAsc = 'EVENTS_BY_USER_ID_MIN_DESCRIPTION_ASC',
  EventsByUserIdMinDescriptionDesc = 'EVENTS_BY_USER_ID_MIN_DESCRIPTION_DESC',
  EventsByUserIdMinDurationAsc = 'EVENTS_BY_USER_ID_MIN_DURATION_ASC',
  EventsByUserIdMinDurationDesc = 'EVENTS_BY_USER_ID_MIN_DURATION_DESC',
  EventsByUserIdMinIdAsc = 'EVENTS_BY_USER_ID_MIN_ID_ASC',
  EventsByUserIdMinIdDesc = 'EVENTS_BY_USER_ID_MIN_ID_DESC',
  EventsByUserIdMinLocationAsc = 'EVENTS_BY_USER_ID_MIN_LOCATION_ASC',
  EventsByUserIdMinLocationDesc = 'EVENTS_BY_USER_ID_MIN_LOCATION_DESC',
  EventsByUserIdMinTeamIdAsc = 'EVENTS_BY_USER_ID_MIN_TEAM_ID_ASC',
  EventsByUserIdMinTeamIdDesc = 'EVENTS_BY_USER_ID_MIN_TEAM_ID_DESC',
  EventsByUserIdMinTitleAsc = 'EVENTS_BY_USER_ID_MIN_TITLE_ASC',
  EventsByUserIdMinTitleDesc = 'EVENTS_BY_USER_ID_MIN_TITLE_DESC',
  EventsByUserIdMinUserIdAsc = 'EVENTS_BY_USER_ID_MIN_USER_ID_ASC',
  EventsByUserIdMinUserIdDesc = 'EVENTS_BY_USER_ID_MIN_USER_ID_DESC',
  EventsByUserIdStddevPopulationDateAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DATE_ASC',
  EventsByUserIdStddevPopulationDateDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DATE_DESC',
  EventsByUserIdStddevPopulationDescriptionAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  EventsByUserIdStddevPopulationDescriptionDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  EventsByUserIdStddevPopulationDurationAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DURATION_ASC',
  EventsByUserIdStddevPopulationDurationDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DURATION_DESC',
  EventsByUserIdStddevPopulationIdAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  EventsByUserIdStddevPopulationIdDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  EventsByUserIdStddevPopulationLocationAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_LOCATION_ASC',
  EventsByUserIdStddevPopulationLocationDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_LOCATION_DESC',
  EventsByUserIdStddevPopulationTeamIdAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  EventsByUserIdStddevPopulationTeamIdDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  EventsByUserIdStddevPopulationTitleAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TITLE_ASC',
  EventsByUserIdStddevPopulationTitleDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TITLE_DESC',
  EventsByUserIdStddevPopulationUserIdAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  EventsByUserIdStddevPopulationUserIdDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  EventsByUserIdStddevSampleDateAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DATE_ASC',
  EventsByUserIdStddevSampleDateDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DATE_DESC',
  EventsByUserIdStddevSampleDescriptionAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  EventsByUserIdStddevSampleDescriptionDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  EventsByUserIdStddevSampleDurationAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DURATION_ASC',
  EventsByUserIdStddevSampleDurationDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DURATION_DESC',
  EventsByUserIdStddevSampleIdAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  EventsByUserIdStddevSampleIdDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  EventsByUserIdStddevSampleLocationAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_LOCATION_ASC',
  EventsByUserIdStddevSampleLocationDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_LOCATION_DESC',
  EventsByUserIdStddevSampleTeamIdAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  EventsByUserIdStddevSampleTeamIdDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  EventsByUserIdStddevSampleTitleAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TITLE_ASC',
  EventsByUserIdStddevSampleTitleDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TITLE_DESC',
  EventsByUserIdStddevSampleUserIdAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  EventsByUserIdStddevSampleUserIdDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  EventsByUserIdSumDateAsc = 'EVENTS_BY_USER_ID_SUM_DATE_ASC',
  EventsByUserIdSumDateDesc = 'EVENTS_BY_USER_ID_SUM_DATE_DESC',
  EventsByUserIdSumDescriptionAsc = 'EVENTS_BY_USER_ID_SUM_DESCRIPTION_ASC',
  EventsByUserIdSumDescriptionDesc = 'EVENTS_BY_USER_ID_SUM_DESCRIPTION_DESC',
  EventsByUserIdSumDurationAsc = 'EVENTS_BY_USER_ID_SUM_DURATION_ASC',
  EventsByUserIdSumDurationDesc = 'EVENTS_BY_USER_ID_SUM_DURATION_DESC',
  EventsByUserIdSumIdAsc = 'EVENTS_BY_USER_ID_SUM_ID_ASC',
  EventsByUserIdSumIdDesc = 'EVENTS_BY_USER_ID_SUM_ID_DESC',
  EventsByUserIdSumLocationAsc = 'EVENTS_BY_USER_ID_SUM_LOCATION_ASC',
  EventsByUserIdSumLocationDesc = 'EVENTS_BY_USER_ID_SUM_LOCATION_DESC',
  EventsByUserIdSumTeamIdAsc = 'EVENTS_BY_USER_ID_SUM_TEAM_ID_ASC',
  EventsByUserIdSumTeamIdDesc = 'EVENTS_BY_USER_ID_SUM_TEAM_ID_DESC',
  EventsByUserIdSumTitleAsc = 'EVENTS_BY_USER_ID_SUM_TITLE_ASC',
  EventsByUserIdSumTitleDesc = 'EVENTS_BY_USER_ID_SUM_TITLE_DESC',
  EventsByUserIdSumUserIdAsc = 'EVENTS_BY_USER_ID_SUM_USER_ID_ASC',
  EventsByUserIdSumUserIdDesc = 'EVENTS_BY_USER_ID_SUM_USER_ID_DESC',
  EventsByUserIdVariancePopulationDateAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DATE_ASC',
  EventsByUserIdVariancePopulationDateDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DATE_DESC',
  EventsByUserIdVariancePopulationDescriptionAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  EventsByUserIdVariancePopulationDescriptionDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  EventsByUserIdVariancePopulationDurationAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DURATION_ASC',
  EventsByUserIdVariancePopulationDurationDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DURATION_DESC',
  EventsByUserIdVariancePopulationIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  EventsByUserIdVariancePopulationIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  EventsByUserIdVariancePopulationLocationAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_LOCATION_ASC',
  EventsByUserIdVariancePopulationLocationDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_LOCATION_DESC',
  EventsByUserIdVariancePopulationTeamIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  EventsByUserIdVariancePopulationTeamIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  EventsByUserIdVariancePopulationTitleAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TITLE_ASC',
  EventsByUserIdVariancePopulationTitleDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TITLE_DESC',
  EventsByUserIdVariancePopulationUserIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  EventsByUserIdVariancePopulationUserIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  EventsByUserIdVarianceSampleDateAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DATE_ASC',
  EventsByUserIdVarianceSampleDateDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DATE_DESC',
  EventsByUserIdVarianceSampleDescriptionAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  EventsByUserIdVarianceSampleDescriptionDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  EventsByUserIdVarianceSampleDurationAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DURATION_ASC',
  EventsByUserIdVarianceSampleDurationDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DURATION_DESC',
  EventsByUserIdVarianceSampleIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  EventsByUserIdVarianceSampleIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  EventsByUserIdVarianceSampleLocationAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_LOCATION_ASC',
  EventsByUserIdVarianceSampleLocationDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_LOCATION_DESC',
  EventsByUserIdVarianceSampleTeamIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  EventsByUserIdVarianceSampleTeamIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  EventsByUserIdVarianceSampleTitleAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TITLE_ASC',
  EventsByUserIdVarianceSampleTitleDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TITLE_DESC',
  EventsByUserIdVarianceSampleUserIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  EventsByUserIdVarianceSampleUserIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  OidcIdAsc = 'OIDC_ID_ASC',
  OidcIdDesc = 'OIDC_ID_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamMembershipsByUserIdAverageCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  TeamMembershipsByUserIdAverageCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  TeamMembershipsByUserIdAverageIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ID_ASC',
  TeamMembershipsByUserIdAverageIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ID_DESC',
  TeamMembershipsByUserIdAverageRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ROLE_ASC',
  TeamMembershipsByUserIdAverageRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ROLE_DESC',
  TeamMembershipsByUserIdAverageTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_TEAM_ID_ASC',
  TeamMembershipsByUserIdAverageTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_TEAM_ID_DESC',
  TeamMembershipsByUserIdAverageUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  TeamMembershipsByUserIdAverageUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  TeamMembershipsByUserIdCountAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_COUNT_ASC',
  TeamMembershipsByUserIdCountDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_COUNT_DESC',
  TeamMembershipsByUserIdDistinctCountCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  TeamMembershipsByUserIdDistinctCountCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  TeamMembershipsByUserIdDistinctCountIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  TeamMembershipsByUserIdDistinctCountIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  TeamMembershipsByUserIdDistinctCountRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ROLE_ASC',
  TeamMembershipsByUserIdDistinctCountRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ROLE_DESC',
  TeamMembershipsByUserIdDistinctCountTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  TeamMembershipsByUserIdDistinctCountTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  TeamMembershipsByUserIdDistinctCountUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  TeamMembershipsByUserIdDistinctCountUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  TeamMembershipsByUserIdMaxCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_CREATED_AT_ASC',
  TeamMembershipsByUserIdMaxCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_CREATED_AT_DESC',
  TeamMembershipsByUserIdMaxIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ID_ASC',
  TeamMembershipsByUserIdMaxIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ID_DESC',
  TeamMembershipsByUserIdMaxRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ROLE_ASC',
  TeamMembershipsByUserIdMaxRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ROLE_DESC',
  TeamMembershipsByUserIdMaxTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_TEAM_ID_ASC',
  TeamMembershipsByUserIdMaxTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_TEAM_ID_DESC',
  TeamMembershipsByUserIdMaxUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_USER_ID_ASC',
  TeamMembershipsByUserIdMaxUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_USER_ID_DESC',
  TeamMembershipsByUserIdMinCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_CREATED_AT_ASC',
  TeamMembershipsByUserIdMinCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_CREATED_AT_DESC',
  TeamMembershipsByUserIdMinIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ID_ASC',
  TeamMembershipsByUserIdMinIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ID_DESC',
  TeamMembershipsByUserIdMinRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ROLE_ASC',
  TeamMembershipsByUserIdMinRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ROLE_DESC',
  TeamMembershipsByUserIdMinTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_TEAM_ID_ASC',
  TeamMembershipsByUserIdMinTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_TEAM_ID_DESC',
  TeamMembershipsByUserIdMinUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_USER_ID_ASC',
  TeamMembershipsByUserIdMinUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_USER_ID_DESC',
  TeamMembershipsByUserIdStddevPopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByUserIdStddevPopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByUserIdStddevPopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  TeamMembershipsByUserIdStddevPopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  TeamMembershipsByUserIdStddevPopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ROLE_ASC',
  TeamMembershipsByUserIdStddevPopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ROLE_DESC',
  TeamMembershipsByUserIdStddevPopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByUserIdStddevPopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByUserIdStddevPopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  TeamMembershipsByUserIdStddevPopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  TeamMembershipsByUserIdStddevSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByUserIdStddevSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByUserIdStddevSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  TeamMembershipsByUserIdStddevSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  TeamMembershipsByUserIdStddevSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ROLE_ASC',
  TeamMembershipsByUserIdStddevSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ROLE_DESC',
  TeamMembershipsByUserIdStddevSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByUserIdStddevSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByUserIdStddevSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TeamMembershipsByUserIdStddevSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TeamMembershipsByUserIdSumCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_CREATED_AT_ASC',
  TeamMembershipsByUserIdSumCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_CREATED_AT_DESC',
  TeamMembershipsByUserIdSumIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ID_ASC',
  TeamMembershipsByUserIdSumIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ID_DESC',
  TeamMembershipsByUserIdSumRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ROLE_ASC',
  TeamMembershipsByUserIdSumRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ROLE_DESC',
  TeamMembershipsByUserIdSumTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_TEAM_ID_ASC',
  TeamMembershipsByUserIdSumTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_TEAM_ID_DESC',
  TeamMembershipsByUserIdSumUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_USER_ID_ASC',
  TeamMembershipsByUserIdSumUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_USER_ID_DESC',
  TeamMembershipsByUserIdVariancePopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByUserIdVariancePopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByUserIdVariancePopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  TeamMembershipsByUserIdVariancePopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  TeamMembershipsByUserIdVariancePopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ROLE_ASC',
  TeamMembershipsByUserIdVariancePopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ROLE_DESC',
  TeamMembershipsByUserIdVariancePopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByUserIdVariancePopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByUserIdVariancePopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TeamMembershipsByUserIdVariancePopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TeamMembershipsByUserIdVarianceSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByUserIdVarianceSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByUserIdVarianceSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  TeamMembershipsByUserIdVarianceSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  TeamMembershipsByUserIdVarianceSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ROLE_ASC',
  TeamMembershipsByUserIdVarianceSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ROLE_DESC',
  TeamMembershipsByUserIdVarianceSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByUserIdVarianceSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByUserIdVarianceSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TeamMembershipsByUserIdVarianceSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  TelAsc = 'TEL_ASC',
  TelDesc = 'TEL_DESC',
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

export type ProfileFragment = { __typename?: 'User', firstName?: string | null, lastName?: string | null, gender?: UserGender | null, email?: string | null, tel?: string | null, picture?: string | null, birthDay?: any | null } & { ' $fragmentName'?: 'ProfileFragment' };

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

export const ProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"birthDay"}}]}}]} as unknown as DocumentNode<ProfileFragment, unknown>;
export const InitProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"picture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"picture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"picture"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<InitProfileMutation, InitProfileMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"birthDay"}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const ProfileSubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ProfileSub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oidcId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oidcId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"birthDay"}}]}}]} as unknown as DocumentNode<ProfileSubSubscription, ProfileSubSubscriptionVariables>;
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

/** A connection to a list of `Availability` values. */
export type AvailabilitiesConnection = {
  __typename?: 'AvailabilitiesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AvailabilityAggregates>;
  /** A list of edges which contains the `Availability` and cursor to aid in pagination. */
  edges: Array<AvailabilitiesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AvailabilityAggregates>>;
  /** A list of `Availability` objects. */
  nodes: Array<Availability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Availability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Availability` values. */
export type AvailabilitiesConnectionGroupedAggregatesArgs = {
  groupBy: Array<AvailabilityGroupBy>;
  having?: InputMaybe<AvailabilityHavingInput>;
};

/** A `Availability` edge in the connection. */
export type AvailabilitiesEdge = {
  __typename?: 'AvailabilitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};

/** Methods to use when ordering `Availability`. */
export enum AvailabilitiesOrderBy {
  DayOfWeekAsc = 'DAY_OF_WEEK_ASC',
  DayOfWeekDesc = 'DAY_OF_WEEK_DESC',
  EndTimeAsc = 'END_TIME_ASC',
  EndTimeDesc = 'END_TIME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartTimeAsc = 'START_TIME_ASC',
  StartTimeDesc = 'START_TIME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Availability = Node & {
  __typename?: 'Availability';
  dayOfWeek: Scalars['Int']['output'];
  endTime?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  startTime?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `User` that is related to this `Availability`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type AvailabilityAggregates = {
  __typename?: 'AvailabilityAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<AvailabilityAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AvailabilityDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<AvailabilityMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<AvailabilityMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<AvailabilityStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<AvailabilityStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<AvailabilitySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<AvailabilityVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<AvailabilityVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Availability` object types. */
export type AvailabilityAggregatesFilter = {
  /** Mean average aggregate over matching `Availability` objects. */
  average?: InputMaybe<AvailabilityAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Availability` objects. */
  distinctCount?: InputMaybe<AvailabilityDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Availability` object to be included within the aggregate. */
  filter?: InputMaybe<AvailabilityFilter>;
  /** Maximum aggregate over matching `Availability` objects. */
  max?: InputMaybe<AvailabilityMaxAggregateFilter>;
  /** Minimum aggregate over matching `Availability` objects. */
  min?: InputMaybe<AvailabilityMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Availability` objects. */
  stddevPopulation?: InputMaybe<AvailabilityStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Availability` objects. */
  stddevSample?: InputMaybe<AvailabilityStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Availability` objects. */
  sum?: InputMaybe<AvailabilitySumAggregateFilter>;
  /** Population variance aggregate over matching `Availability` objects. */
  variancePopulation?: InputMaybe<AvailabilityVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Availability` objects. */
  varianceSample?: InputMaybe<AvailabilityVarianceSampleAggregateFilter>;
};

export type AvailabilityAverageAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityAverageAggregates = {
  __typename?: 'AvailabilityAverageAggregates';
  /** Mean average of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `Availability` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AvailabilityCondition = {
  /** Checks for equality with the object’s `dayOfWeek` field. */
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `endTime` field. */
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `startTime` field. */
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AvailabilityDistinctCountAggregateFilter = {
  dayOfWeek?: InputMaybe<BigIntFilter>;
  endTime?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  startTime?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type AvailabilityDistinctCountAggregates = {
  __typename?: 'AvailabilityDistinctCountAggregates';
  /** Distinct count of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of endTime across the matching connection */
  endTime?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Availability` object types. All fields are combined with a logical ‘and.’ */
export type AvailabilityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AvailabilityFilter>>;
  /** Filter by the object’s `dayOfWeek` field. */
  dayOfWeek?: InputMaybe<IntFilter>;
  /** Filter by the object’s `endTime` field. */
  endTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AvailabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AvailabilityFilter>>;
  /** Filter by the object’s `startTime` field. */
  startTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Availability` for usage during aggregation. */
export enum AvailabilityGroupBy {
  DayOfWeek = 'DAY_OF_WEEK',
  EndTime = 'END_TIME',
  EndTimeTruncatedToDay = 'END_TIME_TRUNCATED_TO_DAY',
  EndTimeTruncatedToHour = 'END_TIME_TRUNCATED_TO_HOUR',
  StartTime = 'START_TIME',
  StartTimeTruncatedToDay = 'START_TIME_TRUNCATED_TO_DAY',
  StartTimeTruncatedToHour = 'START_TIME_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type AvailabilityHavingAverageInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingDistinctCountInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Availability` aggregates. */
export type AvailabilityHavingInput = {
  AND?: InputMaybe<Array<AvailabilityHavingInput>>;
  OR?: InputMaybe<Array<AvailabilityHavingInput>>;
  average?: InputMaybe<AvailabilityHavingAverageInput>;
  distinctCount?: InputMaybe<AvailabilityHavingDistinctCountInput>;
  max?: InputMaybe<AvailabilityHavingMaxInput>;
  min?: InputMaybe<AvailabilityHavingMinInput>;
  stddevPopulation?: InputMaybe<AvailabilityHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<AvailabilityHavingStddevSampleInput>;
  sum?: InputMaybe<AvailabilityHavingSumInput>;
  variancePopulation?: InputMaybe<AvailabilityHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<AvailabilityHavingVarianceSampleInput>;
};

export type AvailabilityHavingMaxInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingMinInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingStddevPopulationInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingStddevSampleInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingSumInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingVariancePopulationInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type AvailabilityHavingVarianceSampleInput = {
  dayOfWeek?: InputMaybe<HavingIntFilter>;
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Availability` */
export type AvailabilityInput = {
  dayOfWeek: Scalars['Int']['input'];
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id: Scalars['String']['input'];
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['String']['input'];
};

export type AvailabilityMaxAggregateFilter = {
  dayOfWeek?: InputMaybe<IntFilter>;
};

export type AvailabilityMaxAggregates = {
  __typename?: 'AvailabilityMaxAggregates';
  /** Maximum of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['Int']['output']>;
};

export type AvailabilityMinAggregateFilter = {
  dayOfWeek?: InputMaybe<IntFilter>;
};

export type AvailabilityMinAggregates = {
  __typename?: 'AvailabilityMinAggregates';
  /** Minimum of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['Int']['output']>;
};

/** Represents an update to a `Availability`. Fields that are set will be updated. */
export type AvailabilityPatch = {
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AvailabilityStddevPopulationAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityStddevPopulationAggregates = {
  __typename?: 'AvailabilityStddevPopulationAggregates';
  /** Population standard deviation of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['BigFloat']['output']>;
};

export type AvailabilityStddevSampleAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityStddevSampleAggregates = {
  __typename?: 'AvailabilityStddevSampleAggregates';
  /** Sample standard deviation of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['BigFloat']['output']>;
};

export type AvailabilitySumAggregateFilter = {
  dayOfWeek?: InputMaybe<BigIntFilter>;
};

export type AvailabilitySumAggregates = {
  __typename?: 'AvailabilitySumAggregates';
  /** Sum of dayOfWeek across the matching connection */
  dayOfWeek: Scalars['BigInt']['output'];
};

export type AvailabilityVariancePopulationAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityVariancePopulationAggregates = {
  __typename?: 'AvailabilityVariancePopulationAggregates';
  /** Population variance of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['BigFloat']['output']>;
};

export type AvailabilityVarianceSampleAggregateFilter = {
  dayOfWeek?: InputMaybe<BigFloatFilter>;
};

export type AvailabilityVarianceSampleAggregates = {
  __typename?: 'AvailabilityVarianceSampleAggregates';
  /** Sample variance of dayOfWeek across the matching connection */
  dayOfWeek?: Maybe<Scalars['BigFloat']['output']>;
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

export type Booking = Node & {
  __typename?: 'Booking';
  /** Reads a single `Event` that is related to this `Booking`. */
  event?: Maybe<Event>;
  eventId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  status: BookingStatus;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type BookingAggregates = {
  __typename?: 'BookingAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BookingDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `Booking` object types. */
export type BookingAggregatesFilter = {
  /** Distinct count aggregate over matching `Booking` objects. */
  distinctCount?: InputMaybe<BookingDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Booking` object to be included within the aggregate. */
  filter?: InputMaybe<BookingFilter>;
};

/** A condition to be used against `Booking` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookingCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<BookingStatus>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingDistinctCountAggregateFilter = {
  eventId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type BookingDistinctCountAggregates = {
  __typename?: 'BookingDistinctCountAggregates';
  /** Distinct count of eventId across the matching connection */
  eventId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Booking` object types. All fields are combined with a logical ‘and.’ */
export type BookingFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BookingFilter>>;
  /** Filter by the object’s `event` relation. */
  event?: InputMaybe<EventFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BookingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BookingFilter>>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<BookingStatusFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Booking` for usage during aggregation. */
export enum BookingGroupBy {
  EventId = 'EVENT_ID',
  Status = 'STATUS',
  UserId = 'USER_ID'
}

/** Conditions for `Booking` aggregates. */
export type BookingHavingInput = {
  AND?: InputMaybe<Array<BookingHavingInput>>;
  OR?: InputMaybe<Array<BookingHavingInput>>;
};

/** An input for mutations affecting `Booking` */
export type BookingInput = {
  eventId: Scalars['String']['input'];
  status?: InputMaybe<BookingStatus>;
  userId: Scalars['String']['input'];
};

/** Represents an update to a `Booking`. Fields that are set will be updated. */
export type BookingPatch = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export enum BookingStatus {
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

/** A filter to be used against BookingStatus fields. All fields are combined with a logical ‘and.’ */
export type BookingStatusFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<BookingStatus>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<BookingStatus>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<BookingStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<BookingStatus>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<BookingStatus>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<BookingStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<BookingStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<BookingStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<BookingStatus>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<BookingStatus>>;
};

/** A connection to a list of `Booking` values. */
export type BookingsConnection = {
  __typename?: 'BookingsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BookingAggregates>;
  /** A list of edges which contains the `Booking` and cursor to aid in pagination. */
  edges: Array<BookingsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BookingAggregates>>;
  /** A list of `Booking` objects. */
  nodes: Array<Booking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Booking` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Booking` values. */
export type BookingsConnectionGroupedAggregatesArgs = {
  groupBy: Array<BookingGroupBy>;
  having?: InputMaybe<BookingHavingInput>;
};

/** A `Booking` edge in the connection. */
export type BookingsEdge = {
  __typename?: 'BookingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Booking` at the end of the edge. */
  node: Booking;
};

/** Methods to use when ordering `Booking`. */
export enum BookingsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

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

/** All input for the create `Availability` mutation. */
export type CreateAvailabilityInput = {
  /** The `Availability` to be created by this mutation. */
  availability: AvailabilityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Availability` mutation. */
export type CreateAvailabilityPayload = {
  __typename?: 'CreateAvailabilityPayload';
  /** The `Availability` that was created by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Availability`. */
  user?: Maybe<User>;
};


/** The output of our create `Availability` mutation. */
export type CreateAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the create `Booking` mutation. */
export type CreateBookingInput = {
  /** The `Booking` to be created by this mutation. */
  booking: BookingInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Booking` mutation. */
export type CreateBookingPayload = {
  __typename?: 'CreateBookingPayload';
  /** The `Booking` that was created by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Event` that is related to this `Booking`. */
  event?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our create `Booking` mutation. */
export type CreateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the create `CustomAvailability` mutation. */
export type CreateCustomAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `CustomAvailability` to be created by this mutation. */
  customAvailability: CustomAvailabilityInput;
};

/** The output of our create `CustomAvailability` mutation. */
export type CreateCustomAvailabilityPayload = {
  __typename?: 'CreateCustomAvailabilityPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `CustomAvailability` that was created by this mutation. */
  customAvailability?: Maybe<CustomAvailability>;
  /** An edge for our `CustomAvailability`. May be used by Relay 1. */
  customAvailabilityEdge?: Maybe<CustomAvailabilitiesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CustomAvailability`. */
  user?: Maybe<User>;
};


/** The output of our create `CustomAvailability` mutation. */
export type CreateCustomAvailabilityPayloadCustomAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
};

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Event` to be created by this mutation. */
  event: EventInput;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  __typename?: 'CreateEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `Event`. */
  team?: Maybe<Team>;
  /** Reads a single `User` that is related to this `Event`. */
  user?: Maybe<User>;
};


/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the create `Team` mutation. */
export type CreateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Team` to be created by this mutation. */
  team: TeamInput;
};

/** All input for the create `TeamMembership` mutation. */
export type CreateTeamMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TeamMembership` to be created by this mutation. */
  teamMembership: TeamMembershipInput;
};

/** The output of our create `TeamMembership` mutation. */
export type CreateTeamMembershipPayload = {
  __typename?: 'CreateTeamMembershipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `TeamMembership`. */
  team?: Maybe<Team>;
  /** The `TeamMembership` that was created by this mutation. */
  teamMembership?: Maybe<TeamMembership>;
  /** An edge for our `TeamMembership`. May be used by Relay 1. */
  teamMembershipEdge?: Maybe<TeamMembershipsEdge>;
  /** Reads a single `User` that is related to this `TeamMembership`. */
  user?: Maybe<User>;
};


/** The output of our create `TeamMembership` mutation. */
export type CreateTeamMembershipPayloadTeamMembershipEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
};

/** The output of our create `Team` mutation. */
export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Team` that was created by this mutation. */
  team?: Maybe<Team>;
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>;
};


/** The output of our create `Team` mutation. */
export type CreateTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
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

/** A connection to a list of `CustomAvailability` values. */
export type CustomAvailabilitiesConnection = {
  __typename?: 'CustomAvailabilitiesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CustomAvailabilityAggregates>;
  /** A list of edges which contains the `CustomAvailability` and cursor to aid in pagination. */
  edges: Array<CustomAvailabilitiesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CustomAvailabilityAggregates>>;
  /** A list of `CustomAvailability` objects. */
  nodes: Array<CustomAvailability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CustomAvailability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `CustomAvailability` values. */
export type CustomAvailabilitiesConnectionGroupedAggregatesArgs = {
  groupBy: Array<CustomAvailabilityGroupBy>;
  having?: InputMaybe<CustomAvailabilityHavingInput>;
};

/** A `CustomAvailability` edge in the connection. */
export type CustomAvailabilitiesEdge = {
  __typename?: 'CustomAvailabilitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CustomAvailability` at the end of the edge. */
  node: CustomAvailability;
};

/** Methods to use when ordering `CustomAvailability`. */
export enum CustomAvailabilitiesOrderBy {
  AvailableAsc = 'AVAILABLE_ASC',
  AvailableDesc = 'AVAILABLE_DESC',
  EndTimeAsc = 'END_TIME_ASC',
  EndTimeDesc = 'END_TIME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReasonAsc = 'REASON_ASC',
  ReasonDesc = 'REASON_DESC',
  StartTimeAsc = 'START_TIME_ASC',
  StartTimeDesc = 'START_TIME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type CustomAvailability = Node & {
  __typename?: 'CustomAvailability';
  available: Scalars['Boolean']['output'];
  endTime: Scalars['Datetime']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `CustomAvailability`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type CustomAvailabilityAggregates = {
  __typename?: 'CustomAvailabilityAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CustomAvailabilityDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `CustomAvailability` object types. */
export type CustomAvailabilityAggregatesFilter = {
  /** Distinct count aggregate over matching `CustomAvailability` objects. */
  distinctCount?: InputMaybe<CustomAvailabilityDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `CustomAvailability` object to be included within the aggregate. */
  filter?: InputMaybe<CustomAvailabilityFilter>;
};

/**
 * A condition to be used against `CustomAvailability` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CustomAvailabilityCondition = {
  /** Checks for equality with the object’s `available` field. */
  available?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `endTime` field. */
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reason` field. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `startTime` field. */
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomAvailabilityDistinctCountAggregateFilter = {
  available?: InputMaybe<BigIntFilter>;
  endTime?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  reason?: InputMaybe<BigIntFilter>;
  startTime?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type CustomAvailabilityDistinctCountAggregates = {
  __typename?: 'CustomAvailabilityDistinctCountAggregates';
  /** Distinct count of available across the matching connection */
  available?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of endTime across the matching connection */
  endTime?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of reason across the matching connection */
  reason?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `CustomAvailability` object types. All fields are combined with a logical ‘and.’ */
export type CustomAvailabilityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CustomAvailabilityFilter>>;
  /** Filter by the object’s `available` field. */
  available?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `endTime` field. */
  endTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CustomAvailabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CustomAvailabilityFilter>>;
  /** Filter by the object’s `reason` field. */
  reason?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startTime` field. */
  startTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `CustomAvailability` for usage during aggregation. */
export enum CustomAvailabilityGroupBy {
  Available = 'AVAILABLE',
  EndTime = 'END_TIME',
  EndTimeTruncatedToDay = 'END_TIME_TRUNCATED_TO_DAY',
  EndTimeTruncatedToHour = 'END_TIME_TRUNCATED_TO_HOUR',
  Reason = 'REASON',
  StartTime = 'START_TIME',
  StartTimeTruncatedToDay = 'START_TIME_TRUNCATED_TO_DAY',
  StartTimeTruncatedToHour = 'START_TIME_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type CustomAvailabilityHavingAverageInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingDistinctCountInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `CustomAvailability` aggregates. */
export type CustomAvailabilityHavingInput = {
  AND?: InputMaybe<Array<CustomAvailabilityHavingInput>>;
  OR?: InputMaybe<Array<CustomAvailabilityHavingInput>>;
  average?: InputMaybe<CustomAvailabilityHavingAverageInput>;
  distinctCount?: InputMaybe<CustomAvailabilityHavingDistinctCountInput>;
  max?: InputMaybe<CustomAvailabilityHavingMaxInput>;
  min?: InputMaybe<CustomAvailabilityHavingMinInput>;
  stddevPopulation?: InputMaybe<CustomAvailabilityHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CustomAvailabilityHavingStddevSampleInput>;
  sum?: InputMaybe<CustomAvailabilityHavingSumInput>;
  variancePopulation?: InputMaybe<CustomAvailabilityHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CustomAvailabilityHavingVarianceSampleInput>;
};

export type CustomAvailabilityHavingMaxInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingMinInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingStddevPopulationInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingStddevSampleInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingSumInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingVariancePopulationInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

export type CustomAvailabilityHavingVarianceSampleInput = {
  endTime?: InputMaybe<HavingDatetimeFilter>;
  startTime?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `CustomAvailability` */
export type CustomAvailabilityInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  endTime: Scalars['Datetime']['input'];
  id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['Datetime']['input'];
  userId: Scalars['String']['input'];
};

/** Represents an update to a `CustomAvailability`. Fields that are set will be updated. */
export type CustomAvailabilityPatch = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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

/** All input for the `deleteAvailabilityByNodeId` mutation. */
export type DeleteAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Availability` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteAvailability` mutation. */
export type DeleteAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `Availability` mutation. */
export type DeleteAvailabilityPayload = {
  __typename?: 'DeleteAvailabilityPayload';
  /** The `Availability` that was deleted by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAvailabilityNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Availability`. */
  user?: Maybe<User>;
};


/** The output of our delete `Availability` mutation. */
export type DeleteAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the `deleteBookingByNodeId` mutation. */
export type DeleteBookingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Booking` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteBooking` mutation. */
export type DeleteBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayload = {
  __typename?: 'DeleteBookingPayload';
  /** The `Booking` that was deleted by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBookingNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Event` that is related to this `Booking`. */
  event?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `deleteCustomAvailabilityByNodeId` mutation. */
export type DeleteCustomAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `CustomAvailability` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteCustomAvailability` mutation. */
export type DeleteCustomAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `CustomAvailability` mutation. */
export type DeleteCustomAvailabilityPayload = {
  __typename?: 'DeleteCustomAvailabilityPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `CustomAvailability` that was deleted by this mutation. */
  customAvailability?: Maybe<CustomAvailability>;
  /** An edge for our `CustomAvailability`. May be used by Relay 1. */
  customAvailabilityEdge?: Maybe<CustomAvailabilitiesEdge>;
  deletedCustomAvailabilityNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CustomAvailability`. */
  user?: Maybe<User>;
};


/** The output of our delete `CustomAvailability` mutation. */
export type DeleteCustomAvailabilityPayloadCustomAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
};

/** All input for the `deleteEventByNodeId` mutation. */
export type DeleteEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedEventNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `Event`. */
  team?: Maybe<Team>;
  /** Reads a single `User` that is related to this `Event`. */
  user?: Maybe<User>;
};


/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `deleteTeamByNodeId` mutation. */
export type DeleteTeamByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Team` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteTeam` mutation. */
export type DeleteTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** All input for the `deleteTeamMembershipByNodeId` mutation. */
export type DeleteTeamMembershipByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `TeamMembership` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteTeamMembership` mutation. */
export type DeleteTeamMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** The output of our delete `TeamMembership` mutation. */
export type DeleteTeamMembershipPayload = {
  __typename?: 'DeleteTeamMembershipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamMembershipNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `TeamMembership`. */
  team?: Maybe<Team>;
  /** The `TeamMembership` that was deleted by this mutation. */
  teamMembership?: Maybe<TeamMembership>;
  /** An edge for our `TeamMembership`. May be used by Relay 1. */
  teamMembershipEdge?: Maybe<TeamMembershipsEdge>;
  /** Reads a single `User` that is related to this `TeamMembership`. */
  user?: Maybe<User>;
};


/** The output of our delete `TeamMembership` mutation. */
export type DeleteTeamMembershipPayloadTeamMembershipEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
};

/** The output of our delete `Team` mutation. */
export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Team` that was deleted by this mutation. */
  team?: Maybe<Team>;
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>;
};


/** The output of our delete `Team` mutation. */
export type DeleteTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
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

export type Event = Node & {
  __typename?: 'Event';
  /** Reads and enables pagination through a set of `Booking`. */
  bookingsByEventId: BookingsConnection;
  date: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Team` that is related to this `Event`. */
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** Reads a single `User` that is related to this `Event`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type EventBookingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type EventAggregates = {
  __typename?: 'EventAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<EventAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<EventDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<EventMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<EventMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<EventStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<EventStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<EventSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<EventVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<EventVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Event` object types. */
export type EventAggregatesFilter = {
  /** Mean average aggregate over matching `Event` objects. */
  average?: InputMaybe<EventAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Event` objects. */
  distinctCount?: InputMaybe<EventDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Event` object to be included within the aggregate. */
  filter?: InputMaybe<EventFilter>;
  /** Maximum aggregate over matching `Event` objects. */
  max?: InputMaybe<EventMaxAggregateFilter>;
  /** Minimum aggregate over matching `Event` objects. */
  min?: InputMaybe<EventMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Event` objects. */
  stddevPopulation?: InputMaybe<EventStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Event` objects. */
  stddevSample?: InputMaybe<EventStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Event` objects. */
  sum?: InputMaybe<EventSumAggregateFilter>;
  /** Population variance aggregate over matching `Event` objects. */
  variancePopulation?: InputMaybe<EventVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Event` objects. */
  varianceSample?: InputMaybe<EventVarianceSampleAggregateFilter>;
};

export type EventAverageAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventAverageAggregates = {
  __typename?: 'EventAverageAggregates';
  /** Mean average of duration across the matching connection */
  duration?: Maybe<Scalars['BigFloat']['output']>;
};

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `duration` field. */
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EventDistinctCountAggregateFilter = {
  date?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  duration?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  location?: InputMaybe<BigIntFilter>;
  teamId?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type EventDistinctCountAggregates = {
  __typename?: 'EventDistinctCountAggregates';
  /** Distinct count of date across the matching connection */
  date?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of duration across the matching connection */
  duration?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of location across the matching connection */
  location?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of teamId across the matching connection */
  teamId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Event` object types. All fields are combined with a logical ‘and.’ */
export type EventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `bookingsByEventId` relation. */
  bookingsByEventId?: InputMaybe<EventToManyBookingFilter>;
  /** Some related `bookingsByEventId` exist. */
  bookingsByEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `duration` field. */
  duration?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `location` field. */
  location?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `team` relation. */
  team?: InputMaybe<TeamFilter>;
  /** A related `team` exists. */
  teamExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `teamId` field. */
  teamId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Event` for usage during aggregation. */
export enum EventGroupBy {
  Date = 'DATE',
  DateTruncatedToDay = 'DATE_TRUNCATED_TO_DAY',
  DateTruncatedToHour = 'DATE_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  Duration = 'DURATION',
  Location = 'LOCATION',
  TeamId = 'TEAM_ID',
  Title = 'TITLE',
  UserId = 'USER_ID'
}

export type EventHavingAverageInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingDistinctCountInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Event` aggregates. */
export type EventHavingInput = {
  AND?: InputMaybe<Array<EventHavingInput>>;
  OR?: InputMaybe<Array<EventHavingInput>>;
  average?: InputMaybe<EventHavingAverageInput>;
  distinctCount?: InputMaybe<EventHavingDistinctCountInput>;
  max?: InputMaybe<EventHavingMaxInput>;
  min?: InputMaybe<EventHavingMinInput>;
  stddevPopulation?: InputMaybe<EventHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<EventHavingStddevSampleInput>;
  sum?: InputMaybe<EventHavingSumInput>;
  variancePopulation?: InputMaybe<EventHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<EventHavingVarianceSampleInput>;
};

export type EventHavingMaxInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingMinInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingStddevPopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingStddevSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingSumInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingVariancePopulationInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

export type EventHavingVarianceSampleInput = {
  date?: InputMaybe<HavingDatetimeFilter>;
  duration?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Event` */
export type EventInput = {
  date: Scalars['Datetime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EventMaxAggregateFilter = {
  duration?: InputMaybe<IntFilter>;
};

export type EventMaxAggregates = {
  __typename?: 'EventMaxAggregates';
  /** Maximum of duration across the matching connection */
  duration?: Maybe<Scalars['Int']['output']>;
};

export type EventMinAggregateFilter = {
  duration?: InputMaybe<IntFilter>;
};

export type EventMinAggregates = {
  __typename?: 'EventMinAggregates';
  /** Minimum of duration across the matching connection */
  duration?: Maybe<Scalars['Int']['output']>;
};

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  date?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EventStddevPopulationAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventStddevPopulationAggregates = {
  __typename?: 'EventStddevPopulationAggregates';
  /** Population standard deviation of duration across the matching connection */
  duration?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventStddevSampleAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventStddevSampleAggregates = {
  __typename?: 'EventStddevSampleAggregates';
  /** Sample standard deviation of duration across the matching connection */
  duration?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventSumAggregateFilter = {
  duration?: InputMaybe<BigIntFilter>;
};

export type EventSumAggregates = {
  __typename?: 'EventSumAggregates';
  /** Sum of duration across the matching connection */
  duration: Scalars['BigInt']['output'];
};

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyBookingFilter = {
  /** Aggregates across related `Booking` match the filter criteria. */
  aggregates?: InputMaybe<BookingAggregatesFilter>;
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

export type EventVariancePopulationAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventVariancePopulationAggregates = {
  __typename?: 'EventVariancePopulationAggregates';
  /** Population variance of duration across the matching connection */
  duration?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventVarianceSampleAggregateFilter = {
  duration?: InputMaybe<BigFloatFilter>;
};

export type EventVarianceSampleAggregates = {
  __typename?: 'EventVarianceSampleAggregates';
  /** Sample variance of duration across the matching connection */
  duration?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  __typename?: 'EventsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EventAggregates>;
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<EventAggregates>>;
  /** A list of `Event` objects. */
  nodes: Array<Event>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Event` values. */
export type EventsConnectionGroupedAggregatesArgs = {
  groupBy: Array<EventGroupBy>;
  having?: InputMaybe<EventHavingInput>;
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node: Event;
};

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  BookingsByEventIdAverageEventIdAsc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_EVENT_ID_ASC',
  BookingsByEventIdAverageEventIdDesc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_EVENT_ID_DESC',
  BookingsByEventIdAverageStatusAsc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_STATUS_ASC',
  BookingsByEventIdAverageStatusDesc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_STATUS_DESC',
  BookingsByEventIdAverageUserIdAsc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_USER_ID_ASC',
  BookingsByEventIdAverageUserIdDesc = 'BOOKINGS_BY_EVENT_ID_AVERAGE_USER_ID_DESC',
  BookingsByEventIdCountAsc = 'BOOKINGS_BY_EVENT_ID_COUNT_ASC',
  BookingsByEventIdCountDesc = 'BOOKINGS_BY_EVENT_ID_COUNT_DESC',
  BookingsByEventIdDistinctCountEventIdAsc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BookingsByEventIdDistinctCountEventIdDesc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BookingsByEventIdDistinctCountStatusAsc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_STATUS_ASC',
  BookingsByEventIdDistinctCountStatusDesc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_STATUS_DESC',
  BookingsByEventIdDistinctCountUserIdAsc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_USER_ID_ASC',
  BookingsByEventIdDistinctCountUserIdDesc = 'BOOKINGS_BY_EVENT_ID_DISTINCT_COUNT_USER_ID_DESC',
  BookingsByEventIdMaxEventIdAsc = 'BOOKINGS_BY_EVENT_ID_MAX_EVENT_ID_ASC',
  BookingsByEventIdMaxEventIdDesc = 'BOOKINGS_BY_EVENT_ID_MAX_EVENT_ID_DESC',
  BookingsByEventIdMaxStatusAsc = 'BOOKINGS_BY_EVENT_ID_MAX_STATUS_ASC',
  BookingsByEventIdMaxStatusDesc = 'BOOKINGS_BY_EVENT_ID_MAX_STATUS_DESC',
  BookingsByEventIdMaxUserIdAsc = 'BOOKINGS_BY_EVENT_ID_MAX_USER_ID_ASC',
  BookingsByEventIdMaxUserIdDesc = 'BOOKINGS_BY_EVENT_ID_MAX_USER_ID_DESC',
  BookingsByEventIdMinEventIdAsc = 'BOOKINGS_BY_EVENT_ID_MIN_EVENT_ID_ASC',
  BookingsByEventIdMinEventIdDesc = 'BOOKINGS_BY_EVENT_ID_MIN_EVENT_ID_DESC',
  BookingsByEventIdMinStatusAsc = 'BOOKINGS_BY_EVENT_ID_MIN_STATUS_ASC',
  BookingsByEventIdMinStatusDesc = 'BOOKINGS_BY_EVENT_ID_MIN_STATUS_DESC',
  BookingsByEventIdMinUserIdAsc = 'BOOKINGS_BY_EVENT_ID_MIN_USER_ID_ASC',
  BookingsByEventIdMinUserIdDesc = 'BOOKINGS_BY_EVENT_ID_MIN_USER_ID_DESC',
  BookingsByEventIdStddevPopulationEventIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BookingsByEventIdStddevPopulationEventIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BookingsByEventIdStddevPopulationStatusAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_STATUS_ASC',
  BookingsByEventIdStddevPopulationStatusDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_STATUS_DESC',
  BookingsByEventIdStddevPopulationUserIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_USER_ID_ASC',
  BookingsByEventIdStddevPopulationUserIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_POPULATION_USER_ID_DESC',
  BookingsByEventIdStddevSampleEventIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BookingsByEventIdStddevSampleEventIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BookingsByEventIdStddevSampleStatusAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_STATUS_ASC',
  BookingsByEventIdStddevSampleStatusDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_STATUS_DESC',
  BookingsByEventIdStddevSampleUserIdAsc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BookingsByEventIdStddevSampleUserIdDesc = 'BOOKINGS_BY_EVENT_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BookingsByEventIdSumEventIdAsc = 'BOOKINGS_BY_EVENT_ID_SUM_EVENT_ID_ASC',
  BookingsByEventIdSumEventIdDesc = 'BOOKINGS_BY_EVENT_ID_SUM_EVENT_ID_DESC',
  BookingsByEventIdSumStatusAsc = 'BOOKINGS_BY_EVENT_ID_SUM_STATUS_ASC',
  BookingsByEventIdSumStatusDesc = 'BOOKINGS_BY_EVENT_ID_SUM_STATUS_DESC',
  BookingsByEventIdSumUserIdAsc = 'BOOKINGS_BY_EVENT_ID_SUM_USER_ID_ASC',
  BookingsByEventIdSumUserIdDesc = 'BOOKINGS_BY_EVENT_ID_SUM_USER_ID_DESC',
  BookingsByEventIdVariancePopulationEventIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BookingsByEventIdVariancePopulationEventIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BookingsByEventIdVariancePopulationStatusAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_STATUS_ASC',
  BookingsByEventIdVariancePopulationStatusDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_STATUS_DESC',
  BookingsByEventIdVariancePopulationUserIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BookingsByEventIdVariancePopulationUserIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BookingsByEventIdVarianceSampleEventIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BookingsByEventIdVarianceSampleEventIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BookingsByEventIdVarianceSampleStatusAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_STATUS_ASC',
  BookingsByEventIdVarianceSampleStatusDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_STATUS_DESC',
  BookingsByEventIdVarianceSampleUserIdAsc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BookingsByEventIdVarianceSampleUserIdDesc = 'BOOKINGS_BY_EVENT_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
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
  /** Creates a single `Availability`. */
  createAvailability?: Maybe<CreateAvailabilityPayload>;
  /** Creates a single `Booking`. */
  createBooking?: Maybe<CreateBookingPayload>;
  /** Creates a single `CustomAvailability`. */
  createCustomAvailability?: Maybe<CreateCustomAvailabilityPayload>;
  /** Creates a single `Event`. */
  createEvent?: Maybe<CreateEventPayload>;
  /** Creates a single `Team`. */
  createTeam?: Maybe<CreateTeamPayload>;
  /** Creates a single `TeamMembership`. */
  createTeamMembership?: Maybe<CreateTeamMembershipPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserDevice`. */
  createUserDevice?: Maybe<CreateUserDevicePayload>;
  /** Deletes a single `Availability` using a unique key. */
  deleteAvailability?: Maybe<DeleteAvailabilityPayload>;
  /** Deletes a single `Availability` using its globally unique id. */
  deleteAvailabilityByNodeId?: Maybe<DeleteAvailabilityPayload>;
  /** Deletes a single `Booking` using a unique key. */
  deleteBooking?: Maybe<DeleteBookingPayload>;
  /** Deletes a single `Booking` using its globally unique id. */
  deleteBookingByNodeId?: Maybe<DeleteBookingPayload>;
  /** Deletes a single `CustomAvailability` using a unique key. */
  deleteCustomAvailability?: Maybe<DeleteCustomAvailabilityPayload>;
  /** Deletes a single `CustomAvailability` using its globally unique id. */
  deleteCustomAvailabilityByNodeId?: Maybe<DeleteCustomAvailabilityPayload>;
  /** Deletes a single `Event` using a unique key. */
  deleteEvent?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Event` using its globally unique id. */
  deleteEventByNodeId?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Team` using a unique key. */
  deleteTeam?: Maybe<DeleteTeamPayload>;
  /** Deletes a single `Team` using its globally unique id. */
  deleteTeamByNodeId?: Maybe<DeleteTeamPayload>;
  /** Deletes a single `TeamMembership` using a unique key. */
  deleteTeamMembership?: Maybe<DeleteTeamMembershipPayload>;
  /** Deletes a single `TeamMembership` using its globally unique id. */
  deleteTeamMembershipByNodeId?: Maybe<DeleteTeamMembershipPayload>;
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
  /** Updates a single `Availability` using a unique key and a patch. */
  updateAvailability?: Maybe<UpdateAvailabilityPayload>;
  /** Updates a single `Availability` using its globally unique id and a patch. */
  updateAvailabilityByNodeId?: Maybe<UpdateAvailabilityPayload>;
  /** Updates a single `Booking` using a unique key and a patch. */
  updateBooking?: Maybe<UpdateBookingPayload>;
  /** Updates a single `Booking` using its globally unique id and a patch. */
  updateBookingByNodeId?: Maybe<UpdateBookingPayload>;
  /** Updates a single `CustomAvailability` using a unique key and a patch. */
  updateCustomAvailability?: Maybe<UpdateCustomAvailabilityPayload>;
  /** Updates a single `CustomAvailability` using its globally unique id and a patch. */
  updateCustomAvailabilityByNodeId?: Maybe<UpdateCustomAvailabilityPayload>;
  /** Updates a single `Event` using a unique key and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>;
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEventByNodeId?: Maybe<UpdateEventPayload>;
  /** Updates a single `Team` using a unique key and a patch. */
  updateTeam?: Maybe<UpdateTeamPayload>;
  /** Updates a single `Team` using its globally unique id and a patch. */
  updateTeamByNodeId?: Maybe<UpdateTeamPayload>;
  /** Updates a single `TeamMembership` using a unique key and a patch. */
  updateTeamMembership?: Maybe<UpdateTeamMembershipPayload>;
  /** Updates a single `TeamMembership` using its globally unique id and a patch. */
  updateTeamMembershipByNodeId?: Maybe<UpdateTeamMembershipPayload>;
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
  /** Upserts a single `Availability`. */
  upsertAvailability?: Maybe<UpsertAvailabilityPayload>;
  /** Upserts a single `Booking`. */
  upsertBooking?: Maybe<UpsertBookingPayload>;
  /** Upserts a single `CustomAvailability`. */
  upsertCustomAvailability?: Maybe<UpsertCustomAvailabilityPayload>;
  /** Upserts a single `Event`. */
  upsertEvent?: Maybe<UpsertEventPayload>;
  /** Upserts a single `Team`. */
  upsertTeam?: Maybe<UpsertTeamPayload>;
  /** Upserts a single `TeamMembership`. */
  upsertTeamMembership?: Maybe<UpsertTeamMembershipPayload>;
  /** Upserts a single `User`. */
  upsertUser?: Maybe<UpsertUserPayload>;
  /** Upserts a single `UserDevice`. */
  upsertUserDevice?: Maybe<UpsertUserDevicePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookingArgs = {
  input: CreateBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomAvailabilityArgs = {
  input: CreateCustomAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamMembershipArgs = {
  input: CreateTeamMembershipInput;
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
export type MutationDeleteAvailabilityArgs = {
  input: DeleteAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAvailabilityByNodeIdArgs = {
  input: DeleteAvailabilityByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookingArgs = {
  input: DeleteBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookingByNodeIdArgs = {
  input: DeleteBookingByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomAvailabilityArgs = {
  input: DeleteCustomAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomAvailabilityByNodeIdArgs = {
  input: DeleteCustomAvailabilityByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventArgs = {
  input: DeleteEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByNodeIdArgs = {
  input: DeleteEventByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamByNodeIdArgs = {
  input: DeleteTeamByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMembershipArgs = {
  input: DeleteTeamMembershipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMembershipByNodeIdArgs = {
  input: DeleteTeamMembershipByNodeIdInput;
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
export type MutationUpdateAvailabilityArgs = {
  input: UpdateAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAvailabilityByNodeIdArgs = {
  input: UpdateAvailabilityByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookingArgs = {
  input: UpdateBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookingByNodeIdArgs = {
  input: UpdateBookingByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomAvailabilityArgs = {
  input: UpdateCustomAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomAvailabilityByNodeIdArgs = {
  input: UpdateCustomAvailabilityByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByNodeIdArgs = {
  input: UpdateEventByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamByNodeIdArgs = {
  input: UpdateTeamByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMembershipArgs = {
  input: UpdateTeamMembershipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMembershipByNodeIdArgs = {
  input: UpdateTeamMembershipByNodeIdInput;
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
export type MutationUpsertAvailabilityArgs = {
  input: UpsertAvailabilityInput;
  where?: InputMaybe<UpsertAvailabilityWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertBookingArgs = {
  input: UpsertBookingInput;
  where?: InputMaybe<UpsertBookingWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertCustomAvailabilityArgs = {
  input: UpsertCustomAvailabilityInput;
  where?: InputMaybe<UpsertCustomAvailabilityWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertEventArgs = {
  input: UpsertEventInput;
  where?: InputMaybe<UpsertEventWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertTeamArgs = {
  input: UpsertTeamInput;
  where?: InputMaybe<UpsertTeamWhere>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertTeamMembershipArgs = {
  input: UpsertTeamMembershipInput;
  where?: InputMaybe<UpsertTeamMembershipWhere>;
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
  /** Reads and enables pagination through a set of `Availability`. */
  availabilities?: Maybe<AvailabilitiesConnection>;
  availability?: Maybe<Availability>;
  /** Reads a single `Availability` using its globally unique `ID`. */
  availabilityByNodeId?: Maybe<Availability>;
  booking?: Maybe<Booking>;
  /** Reads a single `Booking` using its globally unique `ID`. */
  bookingByNodeId?: Maybe<Booking>;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings?: Maybe<BookingsConnection>;
  /** Reads and enables pagination through a set of `CustomAvailability`. */
  customAvailabilities?: Maybe<CustomAvailabilitiesConnection>;
  customAvailability?: Maybe<CustomAvailability>;
  /** Reads a single `CustomAvailability` using its globally unique `ID`. */
  customAvailabilityByNodeId?: Maybe<CustomAvailability>;
  event?: Maybe<Event>;
  /** Reads a single `Event` using its globally unique `ID`. */
  eventByNodeId?: Maybe<Event>;
  /** Reads and enables pagination through a set of `Event`. */
  events?: Maybe<EventsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  team?: Maybe<Team>;
  /** Reads a single `Team` using its globally unique `ID`. */
  teamByNodeId?: Maybe<Team>;
  teamMembership?: Maybe<TeamMembership>;
  /** Reads a single `TeamMembership` using its globally unique `ID`. */
  teamMembershipByNodeId?: Maybe<TeamMembership>;
  /** Reads and enables pagination through a set of `TeamMembership`. */
  teamMemberships?: Maybe<TeamMembershipsConnection>;
  /** Reads and enables pagination through a set of `Team`. */
  teams?: Maybe<TeamsConnection>;
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
export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAvailabilityArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAvailabilityByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingArgs = {
  eventId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CustomAvailabilityCondition>;
  filter?: InputMaybe<CustomAvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomAvailabilityArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomAvailabilityByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembershipArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembershipByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMembershipCondition>;
  filter?: InputMaybe<TeamMembershipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamCondition>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
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
  /** Reads and enables pagination through a set of `Availability`. (live) */
  availabilities?: Maybe<AvailabilitiesConnection>;
  /**  (live) */
  availability?: Maybe<Availability>;
  /** Reads a single `Availability` using its globally unique `ID`. (live) */
  availabilityByNodeId?: Maybe<Availability>;
  /**  (live) */
  booking?: Maybe<Booking>;
  /** Reads a single `Booking` using its globally unique `ID`. (live) */
  bookingByNodeId?: Maybe<Booking>;
  /** Reads and enables pagination through a set of `Booking`. (live) */
  bookings?: Maybe<BookingsConnection>;
  /** Reads and enables pagination through a set of `CustomAvailability`. (live) */
  customAvailabilities?: Maybe<CustomAvailabilitiesConnection>;
  /**  (live) */
  customAvailability?: Maybe<CustomAvailability>;
  /** Reads a single `CustomAvailability` using its globally unique `ID`. (live) */
  customAvailabilityByNodeId?: Maybe<CustomAvailability>;
  /**  (live) */
  event?: Maybe<Event>;
  /** Reads a single `Event` using its globally unique `ID`. (live) */
  eventByNodeId?: Maybe<Event>;
  /** Reads and enables pagination through a set of `Event`. (live) */
  events?: Maybe<EventsConnection>;
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
  team?: Maybe<Team>;
  /** Reads a single `Team` using its globally unique `ID`. (live) */
  teamByNodeId?: Maybe<Team>;
  /**  (live) */
  teamMembership?: Maybe<TeamMembership>;
  /** Reads a single `TeamMembership` using its globally unique `ID`. (live) */
  teamMembershipByNodeId?: Maybe<TeamMembership>;
  /** Reads and enables pagination through a set of `TeamMembership`. (live) */
  teamMemberships?: Maybe<TeamMembershipsConnection>;
  /** Reads and enables pagination through a set of `Team`. (live) */
  teams?: Maybe<TeamsConnection>;
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
export type SubscriptionAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
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
export type SubscriptionAvailabilityArgs = {
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
export type SubscriptionAvailabilityByNodeIdArgs = {
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
export type SubscriptionBookingArgs = {
  eventId: Scalars['String']['input'];
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
export type SubscriptionBookingByNodeIdArgs = {
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
export type SubscriptionBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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
export type SubscriptionCustomAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CustomAvailabilityCondition>;
  filter?: InputMaybe<CustomAvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
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
export type SubscriptionCustomAvailabilityArgs = {
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
export type SubscriptionCustomAvailabilityByNodeIdArgs = {
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
export type SubscriptionEventArgs = {
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
export type SubscriptionEventByNodeIdArgs = {
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
export type SubscriptionEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
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
export type SubscriptionTeamArgs = {
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
export type SubscriptionTeamByNodeIdArgs = {
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
export type SubscriptionTeamMembershipArgs = {
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
export type SubscriptionTeamMembershipByNodeIdArgs = {
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
export type SubscriptionTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMembershipCondition>;
  filter?: InputMaybe<TeamMembershipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
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
export type SubscriptionTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamCondition>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
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

export type Team = Node & {
  __typename?: 'Team';
  createdAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `Event`. */
  eventsByTeamId: EventsConnection;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `TeamMembership`. */
  teamMembershipsByTeamId: TeamMembershipsConnection;
  updatedAt: Scalars['Datetime']['output'];
};


export type TeamEventsByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type TeamTeamMembershipsByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMembershipCondition>;
  filter?: InputMaybe<TeamMembershipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
};

export type TeamAggregates = {
  __typename?: 'TeamAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TeamDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A condition to be used against `Team` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TeamCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TeamDistinctCountAggregates = {
  __typename?: 'TeamDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Team` object types. All fields are combined with a logical ‘and.’ */
export type TeamFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TeamFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `eventsByTeamId` relation. */
  eventsByTeamId?: InputMaybe<TeamToManyEventFilter>;
  /** Some related `eventsByTeamId` exist. */
  eventsByTeamIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TeamFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TeamFilter>>;
  /** Filter by the object’s `teamMembershipsByTeamId` relation. */
  teamMembershipsByTeamId?: InputMaybe<TeamToManyTeamMembershipFilter>;
  /** Some related `teamMembershipsByTeamId` exist. */
  teamMembershipsByTeamIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `Team` for usage during aggregation. */
export enum TeamGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Name = 'NAME',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type TeamHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Team` aggregates. */
export type TeamHavingInput = {
  AND?: InputMaybe<Array<TeamHavingInput>>;
  OR?: InputMaybe<Array<TeamHavingInput>>;
  average?: InputMaybe<TeamHavingAverageInput>;
  distinctCount?: InputMaybe<TeamHavingDistinctCountInput>;
  max?: InputMaybe<TeamHavingMaxInput>;
  min?: InputMaybe<TeamHavingMinInput>;
  stddevPopulation?: InputMaybe<TeamHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TeamHavingStddevSampleInput>;
  sum?: InputMaybe<TeamHavingSumInput>;
  variancePopulation?: InputMaybe<TeamHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TeamHavingVarianceSampleInput>;
};

export type TeamHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Team` */
export type TeamInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};

export type TeamMembership = Node & {
  __typename?: 'TeamMembership';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  role: TeamRole;
  /** Reads a single `Team` that is related to this `TeamMembership`. */
  team?: Maybe<Team>;
  teamId: Scalars['String']['output'];
  /** Reads a single `User` that is related to this `TeamMembership`. */
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type TeamMembershipAggregates = {
  __typename?: 'TeamMembershipAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TeamMembershipDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `TeamMembership` object types. */
export type TeamMembershipAggregatesFilter = {
  /** Distinct count aggregate over matching `TeamMembership` objects. */
  distinctCount?: InputMaybe<TeamMembershipDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `TeamMembership` object to be included within the aggregate. */
  filter?: InputMaybe<TeamMembershipFilter>;
};

/**
 * A condition to be used against `TeamMembership` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TeamMembershipCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<TeamRole>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMembershipDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  role?: InputMaybe<BigIntFilter>;
  teamId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type TeamMembershipDistinctCountAggregates = {
  __typename?: 'TeamMembershipDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of role across the matching connection */
  role?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of teamId across the matching connection */
  teamId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `TeamMembership` object types. All fields are combined with a logical ‘and.’ */
export type TeamMembershipFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TeamMembershipFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TeamMembershipFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TeamMembershipFilter>>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<TeamRoleFilter>;
  /** Filter by the object’s `team` relation. */
  team?: InputMaybe<TeamFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** Grouping methods for `TeamMembership` for usage during aggregation. */
export enum TeamMembershipGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Role = 'ROLE',
  TeamId = 'TEAM_ID',
  UserId = 'USER_ID'
}

export type TeamMembershipHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `TeamMembership` aggregates. */
export type TeamMembershipHavingInput = {
  AND?: InputMaybe<Array<TeamMembershipHavingInput>>;
  OR?: InputMaybe<Array<TeamMembershipHavingInput>>;
  average?: InputMaybe<TeamMembershipHavingAverageInput>;
  distinctCount?: InputMaybe<TeamMembershipHavingDistinctCountInput>;
  max?: InputMaybe<TeamMembershipHavingMaxInput>;
  min?: InputMaybe<TeamMembershipHavingMinInput>;
  stddevPopulation?: InputMaybe<TeamMembershipHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TeamMembershipHavingStddevSampleInput>;
  sum?: InputMaybe<TeamMembershipHavingSumInput>;
  variancePopulation?: InputMaybe<TeamMembershipHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TeamMembershipHavingVarianceSampleInput>;
};

export type TeamMembershipHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TeamMembershipHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `TeamMembership` */
export type TeamMembershipInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id: Scalars['String']['input'];
  role?: InputMaybe<TeamRole>;
  teamId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** Represents an update to a `TeamMembership`. Fields that are set will be updated. */
export type TeamMembershipPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<TeamRole>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `TeamMembership` values. */
export type TeamMembershipsConnection = {
  __typename?: 'TeamMembershipsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TeamMembershipAggregates>;
  /** A list of edges which contains the `TeamMembership` and cursor to aid in pagination. */
  edges: Array<TeamMembershipsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TeamMembershipAggregates>>;
  /** A list of `TeamMembership` objects. */
  nodes: Array<TeamMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TeamMembership` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `TeamMembership` values. */
export type TeamMembershipsConnectionGroupedAggregatesArgs = {
  groupBy: Array<TeamMembershipGroupBy>;
  having?: InputMaybe<TeamMembershipHavingInput>;
};

/** A `TeamMembership` edge in the connection. */
export type TeamMembershipsEdge = {
  __typename?: 'TeamMembershipsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TeamMembership` at the end of the edge. */
  node: TeamMembership;
};

/** Methods to use when ordering `TeamMembership`. */
export enum TeamMembershipsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `Team`. Fields that are set will be updated. */
export type TeamPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

/** A filter to be used against TeamRole fields. All fields are combined with a logical ‘and.’ */
export type TeamRoleFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<TeamRole>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<TeamRole>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<TeamRole>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<TeamRole>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<TeamRole>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<TeamRole>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<TeamRole>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<TeamRole>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<TeamRole>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<TeamRole>>;
};

/** A filter to be used against many `Event` object types. All fields are combined with a logical ‘and.’ */
export type TeamToManyEventFilter = {
  /** Aggregates across related `Event` match the filter criteria. */
  aggregates?: InputMaybe<EventAggregatesFilter>;
  /** Every related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EventFilter>;
  /** No related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EventFilter>;
  /** Some related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EventFilter>;
};

/** A filter to be used against many `TeamMembership` object types. All fields are combined with a logical ‘and.’ */
export type TeamToManyTeamMembershipFilter = {
  /** Aggregates across related `TeamMembership` match the filter criteria. */
  aggregates?: InputMaybe<TeamMembershipAggregatesFilter>;
  /** Every related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TeamMembershipFilter>;
  /** No related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TeamMembershipFilter>;
  /** Some related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TeamMembershipFilter>;
};

/** A connection to a list of `Team` values. */
export type TeamsConnection = {
  __typename?: 'TeamsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TeamAggregates>;
  /** A list of edges which contains the `Team` and cursor to aid in pagination. */
  edges: Array<TeamsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TeamAggregates>>;
  /** A list of `Team` objects. */
  nodes: Array<Team>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Team` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Team` values. */
export type TeamsConnectionGroupedAggregatesArgs = {
  groupBy: Array<TeamGroupBy>;
  having?: InputMaybe<TeamHavingInput>;
};

/** A `Team` edge in the connection. */
export type TeamsEdge = {
  __typename?: 'TeamsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Team` at the end of the edge. */
  node: Team;
};

/** Methods to use when ordering `Team`. */
export enum TeamsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventsByTeamIdAverageDateAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_DATE_ASC',
  EventsByTeamIdAverageDateDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_DATE_DESC',
  EventsByTeamIdAverageDescriptionAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_DESCRIPTION_ASC',
  EventsByTeamIdAverageDescriptionDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_DESCRIPTION_DESC',
  EventsByTeamIdAverageDurationAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_DURATION_ASC',
  EventsByTeamIdAverageDurationDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_DURATION_DESC',
  EventsByTeamIdAverageIdAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_ID_ASC',
  EventsByTeamIdAverageIdDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_ID_DESC',
  EventsByTeamIdAverageLocationAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_LOCATION_ASC',
  EventsByTeamIdAverageLocationDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_LOCATION_DESC',
  EventsByTeamIdAverageTeamIdAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_TEAM_ID_ASC',
  EventsByTeamIdAverageTeamIdDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_TEAM_ID_DESC',
  EventsByTeamIdAverageTitleAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_TITLE_ASC',
  EventsByTeamIdAverageTitleDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_TITLE_DESC',
  EventsByTeamIdAverageUserIdAsc = 'EVENTS_BY_TEAM_ID_AVERAGE_USER_ID_ASC',
  EventsByTeamIdAverageUserIdDesc = 'EVENTS_BY_TEAM_ID_AVERAGE_USER_ID_DESC',
  EventsByTeamIdCountAsc = 'EVENTS_BY_TEAM_ID_COUNT_ASC',
  EventsByTeamIdCountDesc = 'EVENTS_BY_TEAM_ID_COUNT_DESC',
  EventsByTeamIdDistinctCountDateAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DATE_ASC',
  EventsByTeamIdDistinctCountDateDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DATE_DESC',
  EventsByTeamIdDistinctCountDescriptionAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  EventsByTeamIdDistinctCountDescriptionDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  EventsByTeamIdDistinctCountDurationAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DURATION_ASC',
  EventsByTeamIdDistinctCountDurationDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_DURATION_DESC',
  EventsByTeamIdDistinctCountIdAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_ID_ASC',
  EventsByTeamIdDistinctCountIdDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_ID_DESC',
  EventsByTeamIdDistinctCountLocationAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_LOCATION_ASC',
  EventsByTeamIdDistinctCountLocationDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_LOCATION_DESC',
  EventsByTeamIdDistinctCountTeamIdAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  EventsByTeamIdDistinctCountTeamIdDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  EventsByTeamIdDistinctCountTitleAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TITLE_ASC',
  EventsByTeamIdDistinctCountTitleDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_TITLE_DESC',
  EventsByTeamIdDistinctCountUserIdAsc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_ASC',
  EventsByTeamIdDistinctCountUserIdDesc = 'EVENTS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_DESC',
  EventsByTeamIdMaxDateAsc = 'EVENTS_BY_TEAM_ID_MAX_DATE_ASC',
  EventsByTeamIdMaxDateDesc = 'EVENTS_BY_TEAM_ID_MAX_DATE_DESC',
  EventsByTeamIdMaxDescriptionAsc = 'EVENTS_BY_TEAM_ID_MAX_DESCRIPTION_ASC',
  EventsByTeamIdMaxDescriptionDesc = 'EVENTS_BY_TEAM_ID_MAX_DESCRIPTION_DESC',
  EventsByTeamIdMaxDurationAsc = 'EVENTS_BY_TEAM_ID_MAX_DURATION_ASC',
  EventsByTeamIdMaxDurationDesc = 'EVENTS_BY_TEAM_ID_MAX_DURATION_DESC',
  EventsByTeamIdMaxIdAsc = 'EVENTS_BY_TEAM_ID_MAX_ID_ASC',
  EventsByTeamIdMaxIdDesc = 'EVENTS_BY_TEAM_ID_MAX_ID_DESC',
  EventsByTeamIdMaxLocationAsc = 'EVENTS_BY_TEAM_ID_MAX_LOCATION_ASC',
  EventsByTeamIdMaxLocationDesc = 'EVENTS_BY_TEAM_ID_MAX_LOCATION_DESC',
  EventsByTeamIdMaxTeamIdAsc = 'EVENTS_BY_TEAM_ID_MAX_TEAM_ID_ASC',
  EventsByTeamIdMaxTeamIdDesc = 'EVENTS_BY_TEAM_ID_MAX_TEAM_ID_DESC',
  EventsByTeamIdMaxTitleAsc = 'EVENTS_BY_TEAM_ID_MAX_TITLE_ASC',
  EventsByTeamIdMaxTitleDesc = 'EVENTS_BY_TEAM_ID_MAX_TITLE_DESC',
  EventsByTeamIdMaxUserIdAsc = 'EVENTS_BY_TEAM_ID_MAX_USER_ID_ASC',
  EventsByTeamIdMaxUserIdDesc = 'EVENTS_BY_TEAM_ID_MAX_USER_ID_DESC',
  EventsByTeamIdMinDateAsc = 'EVENTS_BY_TEAM_ID_MIN_DATE_ASC',
  EventsByTeamIdMinDateDesc = 'EVENTS_BY_TEAM_ID_MIN_DATE_DESC',
  EventsByTeamIdMinDescriptionAsc = 'EVENTS_BY_TEAM_ID_MIN_DESCRIPTION_ASC',
  EventsByTeamIdMinDescriptionDesc = 'EVENTS_BY_TEAM_ID_MIN_DESCRIPTION_DESC',
  EventsByTeamIdMinDurationAsc = 'EVENTS_BY_TEAM_ID_MIN_DURATION_ASC',
  EventsByTeamIdMinDurationDesc = 'EVENTS_BY_TEAM_ID_MIN_DURATION_DESC',
  EventsByTeamIdMinIdAsc = 'EVENTS_BY_TEAM_ID_MIN_ID_ASC',
  EventsByTeamIdMinIdDesc = 'EVENTS_BY_TEAM_ID_MIN_ID_DESC',
  EventsByTeamIdMinLocationAsc = 'EVENTS_BY_TEAM_ID_MIN_LOCATION_ASC',
  EventsByTeamIdMinLocationDesc = 'EVENTS_BY_TEAM_ID_MIN_LOCATION_DESC',
  EventsByTeamIdMinTeamIdAsc = 'EVENTS_BY_TEAM_ID_MIN_TEAM_ID_ASC',
  EventsByTeamIdMinTeamIdDesc = 'EVENTS_BY_TEAM_ID_MIN_TEAM_ID_DESC',
  EventsByTeamIdMinTitleAsc = 'EVENTS_BY_TEAM_ID_MIN_TITLE_ASC',
  EventsByTeamIdMinTitleDesc = 'EVENTS_BY_TEAM_ID_MIN_TITLE_DESC',
  EventsByTeamIdMinUserIdAsc = 'EVENTS_BY_TEAM_ID_MIN_USER_ID_ASC',
  EventsByTeamIdMinUserIdDesc = 'EVENTS_BY_TEAM_ID_MIN_USER_ID_DESC',
  EventsByTeamIdStddevPopulationDateAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DATE_ASC',
  EventsByTeamIdStddevPopulationDateDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DATE_DESC',
  EventsByTeamIdStddevPopulationDescriptionAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  EventsByTeamIdStddevPopulationDescriptionDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  EventsByTeamIdStddevPopulationDurationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DURATION_ASC',
  EventsByTeamIdStddevPopulationDurationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_DURATION_DESC',
  EventsByTeamIdStddevPopulationIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_ID_ASC',
  EventsByTeamIdStddevPopulationIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_ID_DESC',
  EventsByTeamIdStddevPopulationLocationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_LOCATION_ASC',
  EventsByTeamIdStddevPopulationLocationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_LOCATION_DESC',
  EventsByTeamIdStddevPopulationTeamIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  EventsByTeamIdStddevPopulationTeamIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  EventsByTeamIdStddevPopulationTitleAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TITLE_ASC',
  EventsByTeamIdStddevPopulationTitleDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_TITLE_DESC',
  EventsByTeamIdStddevPopulationUserIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_ASC',
  EventsByTeamIdStddevPopulationUserIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_DESC',
  EventsByTeamIdStddevSampleDateAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DATE_ASC',
  EventsByTeamIdStddevSampleDateDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DATE_DESC',
  EventsByTeamIdStddevSampleDescriptionAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  EventsByTeamIdStddevSampleDescriptionDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  EventsByTeamIdStddevSampleDurationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DURATION_ASC',
  EventsByTeamIdStddevSampleDurationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_DURATION_DESC',
  EventsByTeamIdStddevSampleIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_ID_ASC',
  EventsByTeamIdStddevSampleIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_ID_DESC',
  EventsByTeamIdStddevSampleLocationAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_LOCATION_ASC',
  EventsByTeamIdStddevSampleLocationDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_LOCATION_DESC',
  EventsByTeamIdStddevSampleTeamIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  EventsByTeamIdStddevSampleTeamIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  EventsByTeamIdStddevSampleTitleAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TITLE_ASC',
  EventsByTeamIdStddevSampleTitleDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_TITLE_DESC',
  EventsByTeamIdStddevSampleUserIdAsc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_ASC',
  EventsByTeamIdStddevSampleUserIdDesc = 'EVENTS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_DESC',
  EventsByTeamIdSumDateAsc = 'EVENTS_BY_TEAM_ID_SUM_DATE_ASC',
  EventsByTeamIdSumDateDesc = 'EVENTS_BY_TEAM_ID_SUM_DATE_DESC',
  EventsByTeamIdSumDescriptionAsc = 'EVENTS_BY_TEAM_ID_SUM_DESCRIPTION_ASC',
  EventsByTeamIdSumDescriptionDesc = 'EVENTS_BY_TEAM_ID_SUM_DESCRIPTION_DESC',
  EventsByTeamIdSumDurationAsc = 'EVENTS_BY_TEAM_ID_SUM_DURATION_ASC',
  EventsByTeamIdSumDurationDesc = 'EVENTS_BY_TEAM_ID_SUM_DURATION_DESC',
  EventsByTeamIdSumIdAsc = 'EVENTS_BY_TEAM_ID_SUM_ID_ASC',
  EventsByTeamIdSumIdDesc = 'EVENTS_BY_TEAM_ID_SUM_ID_DESC',
  EventsByTeamIdSumLocationAsc = 'EVENTS_BY_TEAM_ID_SUM_LOCATION_ASC',
  EventsByTeamIdSumLocationDesc = 'EVENTS_BY_TEAM_ID_SUM_LOCATION_DESC',
  EventsByTeamIdSumTeamIdAsc = 'EVENTS_BY_TEAM_ID_SUM_TEAM_ID_ASC',
  EventsByTeamIdSumTeamIdDesc = 'EVENTS_BY_TEAM_ID_SUM_TEAM_ID_DESC',
  EventsByTeamIdSumTitleAsc = 'EVENTS_BY_TEAM_ID_SUM_TITLE_ASC',
  EventsByTeamIdSumTitleDesc = 'EVENTS_BY_TEAM_ID_SUM_TITLE_DESC',
  EventsByTeamIdSumUserIdAsc = 'EVENTS_BY_TEAM_ID_SUM_USER_ID_ASC',
  EventsByTeamIdSumUserIdDesc = 'EVENTS_BY_TEAM_ID_SUM_USER_ID_DESC',
  EventsByTeamIdVariancePopulationDateAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DATE_ASC',
  EventsByTeamIdVariancePopulationDateDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DATE_DESC',
  EventsByTeamIdVariancePopulationDescriptionAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  EventsByTeamIdVariancePopulationDescriptionDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  EventsByTeamIdVariancePopulationDurationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DURATION_ASC',
  EventsByTeamIdVariancePopulationDurationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_DURATION_DESC',
  EventsByTeamIdVariancePopulationIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_ID_ASC',
  EventsByTeamIdVariancePopulationIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_ID_DESC',
  EventsByTeamIdVariancePopulationLocationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_LOCATION_ASC',
  EventsByTeamIdVariancePopulationLocationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_LOCATION_DESC',
  EventsByTeamIdVariancePopulationTeamIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  EventsByTeamIdVariancePopulationTeamIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  EventsByTeamIdVariancePopulationTitleAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TITLE_ASC',
  EventsByTeamIdVariancePopulationTitleDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_TITLE_DESC',
  EventsByTeamIdVariancePopulationUserIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_ASC',
  EventsByTeamIdVariancePopulationUserIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_DESC',
  EventsByTeamIdVarianceSampleDateAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DATE_ASC',
  EventsByTeamIdVarianceSampleDateDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DATE_DESC',
  EventsByTeamIdVarianceSampleDescriptionAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  EventsByTeamIdVarianceSampleDescriptionDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  EventsByTeamIdVarianceSampleDurationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DURATION_ASC',
  EventsByTeamIdVarianceSampleDurationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_DURATION_DESC',
  EventsByTeamIdVarianceSampleIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_ASC',
  EventsByTeamIdVarianceSampleIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_DESC',
  EventsByTeamIdVarianceSampleLocationAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_LOCATION_ASC',
  EventsByTeamIdVarianceSampleLocationDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_LOCATION_DESC',
  EventsByTeamIdVarianceSampleTeamIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  EventsByTeamIdVarianceSampleTeamIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  EventsByTeamIdVarianceSampleTitleAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TITLE_ASC',
  EventsByTeamIdVarianceSampleTitleDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_TITLE_DESC',
  EventsByTeamIdVarianceSampleUserIdAsc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  EventsByTeamIdVarianceSampleUserIdDesc = 'EVENTS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamMembershipsByTeamIdAverageCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_CREATED_AT_ASC',
  TeamMembershipsByTeamIdAverageCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_CREATED_AT_DESC',
  TeamMembershipsByTeamIdAverageIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ID_ASC',
  TeamMembershipsByTeamIdAverageIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ID_DESC',
  TeamMembershipsByTeamIdAverageRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ROLE_ASC',
  TeamMembershipsByTeamIdAverageRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_ROLE_DESC',
  TeamMembershipsByTeamIdAverageTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_TEAM_ID_ASC',
  TeamMembershipsByTeamIdAverageTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_TEAM_ID_DESC',
  TeamMembershipsByTeamIdAverageUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_USER_ID_ASC',
  TeamMembershipsByTeamIdAverageUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_AVERAGE_USER_ID_DESC',
  TeamMembershipsByTeamIdCountAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_COUNT_ASC',
  TeamMembershipsByTeamIdCountDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_COUNT_DESC',
  TeamMembershipsByTeamIdDistinctCountCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  TeamMembershipsByTeamIdDistinctCountCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  TeamMembershipsByTeamIdDistinctCountIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ID_ASC',
  TeamMembershipsByTeamIdDistinctCountIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ID_DESC',
  TeamMembershipsByTeamIdDistinctCountRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ROLE_ASC',
  TeamMembershipsByTeamIdDistinctCountRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_ROLE_DESC',
  TeamMembershipsByTeamIdDistinctCountTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  TeamMembershipsByTeamIdDistinctCountTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  TeamMembershipsByTeamIdDistinctCountUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_ASC',
  TeamMembershipsByTeamIdDistinctCountUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_DISTINCT_COUNT_USER_ID_DESC',
  TeamMembershipsByTeamIdMaxCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_CREATED_AT_ASC',
  TeamMembershipsByTeamIdMaxCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_CREATED_AT_DESC',
  TeamMembershipsByTeamIdMaxIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ID_ASC',
  TeamMembershipsByTeamIdMaxIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ID_DESC',
  TeamMembershipsByTeamIdMaxRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ROLE_ASC',
  TeamMembershipsByTeamIdMaxRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_ROLE_DESC',
  TeamMembershipsByTeamIdMaxTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_TEAM_ID_ASC',
  TeamMembershipsByTeamIdMaxTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_TEAM_ID_DESC',
  TeamMembershipsByTeamIdMaxUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_USER_ID_ASC',
  TeamMembershipsByTeamIdMaxUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MAX_USER_ID_DESC',
  TeamMembershipsByTeamIdMinCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_CREATED_AT_ASC',
  TeamMembershipsByTeamIdMinCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_CREATED_AT_DESC',
  TeamMembershipsByTeamIdMinIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ID_ASC',
  TeamMembershipsByTeamIdMinIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ID_DESC',
  TeamMembershipsByTeamIdMinRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ROLE_ASC',
  TeamMembershipsByTeamIdMinRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_ROLE_DESC',
  TeamMembershipsByTeamIdMinTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_TEAM_ID_ASC',
  TeamMembershipsByTeamIdMinTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_TEAM_ID_DESC',
  TeamMembershipsByTeamIdMinUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_USER_ID_ASC',
  TeamMembershipsByTeamIdMinUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_MIN_USER_ID_DESC',
  TeamMembershipsByTeamIdStddevPopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByTeamIdStddevPopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByTeamIdStddevPopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ID_ASC',
  TeamMembershipsByTeamIdStddevPopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ID_DESC',
  TeamMembershipsByTeamIdStddevPopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ROLE_ASC',
  TeamMembershipsByTeamIdStddevPopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_ROLE_DESC',
  TeamMembershipsByTeamIdStddevPopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByTeamIdStddevPopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByTeamIdStddevPopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_ASC',
  TeamMembershipsByTeamIdStddevPopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_POPULATION_USER_ID_DESC',
  TeamMembershipsByTeamIdStddevSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByTeamIdStddevSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByTeamIdStddevSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ID_ASC',
  TeamMembershipsByTeamIdStddevSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ID_DESC',
  TeamMembershipsByTeamIdStddevSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ROLE_ASC',
  TeamMembershipsByTeamIdStddevSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_ROLE_DESC',
  TeamMembershipsByTeamIdStddevSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByTeamIdStddevSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByTeamIdStddevSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TeamMembershipsByTeamIdStddevSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TeamMembershipsByTeamIdSumCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_CREATED_AT_ASC',
  TeamMembershipsByTeamIdSumCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_CREATED_AT_DESC',
  TeamMembershipsByTeamIdSumIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ID_ASC',
  TeamMembershipsByTeamIdSumIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ID_DESC',
  TeamMembershipsByTeamIdSumRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ROLE_ASC',
  TeamMembershipsByTeamIdSumRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_ROLE_DESC',
  TeamMembershipsByTeamIdSumTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_TEAM_ID_ASC',
  TeamMembershipsByTeamIdSumTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_TEAM_ID_DESC',
  TeamMembershipsByTeamIdSumUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_USER_ID_ASC',
  TeamMembershipsByTeamIdSumUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_SUM_USER_ID_DESC',
  TeamMembershipsByTeamIdVariancePopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByTeamIdVariancePopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByTeamIdVariancePopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ID_ASC',
  TeamMembershipsByTeamIdVariancePopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ID_DESC',
  TeamMembershipsByTeamIdVariancePopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ROLE_ASC',
  TeamMembershipsByTeamIdVariancePopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_ROLE_DESC',
  TeamMembershipsByTeamIdVariancePopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByTeamIdVariancePopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByTeamIdVariancePopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TeamMembershipsByTeamIdVariancePopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TeamMembershipsByTeamIdVarianceSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByTeamIdVarianceSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByTeamIdVarianceSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_ASC',
  TeamMembershipsByTeamIdVarianceSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ID_DESC',
  TeamMembershipsByTeamIdVarianceSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ROLE_ASC',
  TeamMembershipsByTeamIdVarianceSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_ROLE_DESC',
  TeamMembershipsByTeamIdVarianceSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByTeamIdVarianceSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByTeamIdVarianceSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TeamMembershipsByTeamIdVarianceSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_TEAM_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** All input for the `updateAvailabilityByNodeId` mutation. */
export type UpdateAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Availability` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** All input for the `updateAvailability` mutation. */
export type UpdateAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** The output of our update `Availability` mutation. */
export type UpdateAvailabilityPayload = {
  __typename?: 'UpdateAvailabilityPayload';
  /** The `Availability` that was updated by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Availability`. */
  user?: Maybe<User>;
};


/** The output of our update `Availability` mutation. */
export type UpdateAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the `updateBookingByNodeId` mutation. */
export type UpdateBookingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Booking` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  patch: BookingPatch;
};

/** All input for the `updateBooking` mutation. */
export type UpdateBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  patch: BookingPatch;
  userId: Scalars['String']['input'];
};

/** The output of our update `Booking` mutation. */
export type UpdateBookingPayload = {
  __typename?: 'UpdateBookingPayload';
  /** The `Booking` that was updated by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Event` that is related to this `Booking`. */
  event?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our update `Booking` mutation. */
export type UpdateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `updateCustomAvailabilityByNodeId` mutation. */
export type UpdateCustomAvailabilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `CustomAvailability` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `CustomAvailability` being updated. */
  patch: CustomAvailabilityPatch;
};

/** All input for the `updateCustomAvailability` mutation. */
export type UpdateCustomAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `CustomAvailability` being updated. */
  patch: CustomAvailabilityPatch;
};

/** The output of our update `CustomAvailability` mutation. */
export type UpdateCustomAvailabilityPayload = {
  __typename?: 'UpdateCustomAvailabilityPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `CustomAvailability` that was updated by this mutation. */
  customAvailability?: Maybe<CustomAvailability>;
  /** An edge for our `CustomAvailability`. May be used by Relay 1. */
  customAvailabilityEdge?: Maybe<CustomAvailabilitiesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CustomAvailability`. */
  user?: Maybe<User>;
};


/** The output of our update `CustomAvailability` mutation. */
export type UpdateCustomAvailabilityPayloadCustomAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
};

/** All input for the `updateEventByNodeId` mutation. */
export type UpdateEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `Event`. */
  team?: Maybe<Team>;
  /** Reads a single `User` that is related to this `Event`. */
  user?: Maybe<User>;
};


/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `updateTeamByNodeId` mutation. */
export type UpdateTeamByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Team` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Team` being updated. */
  patch: TeamPatch;
};

/** All input for the `updateTeam` mutation. */
export type UpdateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Team` being updated. */
  patch: TeamPatch;
};

/** All input for the `updateTeamMembershipByNodeId` mutation. */
export type UpdateTeamMembershipByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `TeamMembership` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `TeamMembership` being updated. */
  patch: TeamMembershipPatch;
};

/** All input for the `updateTeamMembership` mutation. */
export type UpdateTeamMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `TeamMembership` being updated. */
  patch: TeamMembershipPatch;
};

/** The output of our update `TeamMembership` mutation. */
export type UpdateTeamMembershipPayload = {
  __typename?: 'UpdateTeamMembershipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `TeamMembership`. */
  team?: Maybe<Team>;
  /** The `TeamMembership` that was updated by this mutation. */
  teamMembership?: Maybe<TeamMembership>;
  /** An edge for our `TeamMembership`. May be used by Relay 1. */
  teamMembershipEdge?: Maybe<TeamMembershipsEdge>;
  /** Reads a single `User` that is related to this `TeamMembership`. */
  user?: Maybe<User>;
};


/** The output of our update `TeamMembership` mutation. */
export type UpdateTeamMembershipPayloadTeamMembershipEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
};

/** The output of our update `Team` mutation. */
export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Team` that was updated by this mutation. */
  team?: Maybe<Team>;
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>;
};


/** The output of our update `Team` mutation. */
export type UpdateTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
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

/** All input for the upsert `Availability` mutation. */
export type UpsertAvailabilityInput = {
  /** The `Availability` to be upserted by this mutation. */
  availability: AvailabilityInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our upsert `Availability` mutation. */
export type UpsertAvailabilityPayload = {
  __typename?: 'UpsertAvailabilityPayload';
  /** The `Availability` that was upserted by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Availability`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Availability` mutation. */
export type UpsertAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** Where conditions for the upsert `Availability` mutation. */
export type UpsertAvailabilityWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Booking` mutation. */
export type UpsertBookingInput = {
  /** The `Booking` to be upserted by this mutation. */
  booking: BookingInput;
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our upsert `Booking` mutation. */
export type UpsertBookingPayload = {
  __typename?: 'UpsertBookingPayload';
  /** The `Booking` that was upserted by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Event` that is related to this `Booking`. */
  event?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Booking` mutation. */
export type UpsertBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** Where conditions for the upsert `Booking` mutation. */
export type UpsertBookingWhere = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `CustomAvailability` mutation. */
export type UpsertCustomAvailabilityInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `CustomAvailability` to be upserted by this mutation. */
  customAvailability: CustomAvailabilityInput;
};

/** The output of our upsert `CustomAvailability` mutation. */
export type UpsertCustomAvailabilityPayload = {
  __typename?: 'UpsertCustomAvailabilityPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `CustomAvailability` that was upserted by this mutation. */
  customAvailability?: Maybe<CustomAvailability>;
  /** An edge for our `CustomAvailability`. May be used by Relay 1. */
  customAvailabilityEdge?: Maybe<CustomAvailabilitiesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CustomAvailability`. */
  user?: Maybe<User>;
};


/** The output of our upsert `CustomAvailability` mutation. */
export type UpsertCustomAvailabilityPayloadCustomAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
};

/** Where conditions for the upsert `CustomAvailability` mutation. */
export type UpsertCustomAvailabilityWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Event` mutation. */
export type UpsertEventInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Event` to be upserted by this mutation. */
  event: EventInput;
};

/** The output of our upsert `Event` mutation. */
export type UpsertEventPayload = {
  __typename?: 'UpsertEventPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Event` that was upserted by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `Event`. */
  team?: Maybe<Team>;
  /** Reads a single `User` that is related to this `Event`. */
  user?: Maybe<User>;
};


/** The output of our upsert `Event` mutation. */
export type UpsertEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** Where conditions for the upsert `Event` mutation. */
export type UpsertEventWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the upsert `Team` mutation. */
export type UpsertTeamInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Team` to be upserted by this mutation. */
  team: TeamInput;
};

/** All input for the upsert `TeamMembership` mutation. */
export type UpsertTeamMembershipInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TeamMembership` to be upserted by this mutation. */
  teamMembership: TeamMembershipInput;
};

/** The output of our upsert `TeamMembership` mutation. */
export type UpsertTeamMembershipPayload = {
  __typename?: 'UpsertTeamMembershipPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Team` that is related to this `TeamMembership`. */
  team?: Maybe<Team>;
  /** The `TeamMembership` that was upserted by this mutation. */
  teamMembership?: Maybe<TeamMembership>;
  /** An edge for our `TeamMembership`. May be used by Relay 1. */
  teamMembershipEdge?: Maybe<TeamMembershipsEdge>;
  /** Reads a single `User` that is related to this `TeamMembership`. */
  user?: Maybe<User>;
};


/** The output of our upsert `TeamMembership` mutation. */
export type UpsertTeamMembershipPayloadTeamMembershipEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
};

/** Where conditions for the upsert `TeamMembership` mutation. */
export type UpsertTeamMembershipWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our upsert `Team` mutation. */
export type UpsertTeamPayload = {
  __typename?: 'UpsertTeamPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Team` that was upserted by this mutation. */
  team?: Maybe<Team>;
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>;
};


/** The output of our upsert `Team` mutation. */
export type UpsertTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
};

/** Where conditions for the upsert `Team` mutation. */
export type UpsertTeamWhere = {
  id?: InputMaybe<Scalars['String']['input']>;
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
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByUserId: AvailabilitiesConnection;
  birthDay?: Maybe<Scalars['Datetime']['output']>;
  /** Reads and enables pagination through a set of `Booking`. */
  bookingsByUserId: BookingsConnection;
  /** Reads and enables pagination through a set of `CustomAvailability`. */
  customAvailabilitiesByUserId: CustomAvailabilitiesConnection;
  email?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByUserId: EventsConnection;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<UserGender>;
  lastName?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  oidcId: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `TeamMembership`. */
  teamMembershipsByUserId: TeamMembershipsConnection;
  tel?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `UserDevice`. */
  userDevicesByUserId: UserDevicesConnection;
};


export type UserAvailabilitiesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


export type UserBookingsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


export type UserCustomAvailabilitiesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CustomAvailabilityCondition>;
  filter?: InputMaybe<CustomAvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomAvailabilitiesOrderBy>>;
};


export type UserEventsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type UserTeamMembershipsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMembershipCondition>;
  filter?: InputMaybe<TeamMembershipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembershipsOrderBy>>;
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
  /** Checks for equality with the object’s `birthDay` field. */
  birthDay?: InputMaybe<Scalars['Datetime']['input']>;
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
  /** Distinct count of birthDay across the matching connection */
  birthDay?: Maybe<Scalars['BigInt']['output']>;
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
  /** Distinct count of picture across the matching connection */
  picture?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of tel across the matching connection */
  tel?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `availabilitiesByUserId` relation. */
  availabilitiesByUserId?: InputMaybe<UserToManyAvailabilityFilter>;
  /** Some related `availabilitiesByUserId` exist. */
  availabilitiesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `birthDay` field. */
  birthDay?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `bookingsByUserId` relation. */
  bookingsByUserId?: InputMaybe<UserToManyBookingFilter>;
  /** Some related `bookingsByUserId` exist. */
  bookingsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `customAvailabilitiesByUserId` relation. */
  customAvailabilitiesByUserId?: InputMaybe<UserToManyCustomAvailabilityFilter>;
  /** Some related `customAvailabilitiesByUserId` exist. */
  customAvailabilitiesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `eventsByUserId` relation. */
  eventsByUserId?: InputMaybe<UserToManyEventFilter>;
  /** Some related `eventsByUserId` exist. */
  eventsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `picture` field. */
  picture?: InputMaybe<StringFilter>;
  /** Filter by the object’s `teamMembershipsByUserId` relation. */
  teamMembershipsByUserId?: InputMaybe<UserToManyTeamMembershipFilter>;
  /** Some related `teamMembershipsByUserId` exist. */
  teamMembershipsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `tel` field. */
  tel?: InputMaybe<StringFilter>;
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
  BirthDay = 'BIRTH_DAY',
  BirthDayTruncatedToDay = 'BIRTH_DAY_TRUNCATED_TO_DAY',
  BirthDayTruncatedToHour = 'BIRTH_DAY_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Gender = 'GENDER',
  LastName = 'LAST_NAME',
  Picture = 'PICTURE',
  Tel = 'TEL'
}

export type UserHavingAverageInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingDistinctCountInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
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
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingMinInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevPopulationInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevSampleInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingSumInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVariancePopulationInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVarianceSampleInput = {
  birthDay?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  birthDay?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  birthDay?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oidcId?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Availability` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyAvailabilityFilter = {
  /** Aggregates across related `Availability` match the filter criteria. */
  aggregates?: InputMaybe<AvailabilityAggregatesFilter>;
  /** Every related `Availability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AvailabilityFilter>;
  /** No related `Availability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AvailabilityFilter>;
  /** Some related `Availability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AvailabilityFilter>;
};

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyBookingFilter = {
  /** Aggregates across related `Booking` match the filter criteria. */
  aggregates?: InputMaybe<BookingAggregatesFilter>;
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

/** A filter to be used against many `CustomAvailability` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyCustomAvailabilityFilter = {
  /** Aggregates across related `CustomAvailability` match the filter criteria. */
  aggregates?: InputMaybe<CustomAvailabilityAggregatesFilter>;
  /** Every related `CustomAvailability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CustomAvailabilityFilter>;
  /** No related `CustomAvailability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CustomAvailabilityFilter>;
  /** Some related `CustomAvailability` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CustomAvailabilityFilter>;
};

/** A filter to be used against many `Event` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyEventFilter = {
  /** Aggregates across related `Event` match the filter criteria. */
  aggregates?: InputMaybe<EventAggregatesFilter>;
  /** Every related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EventFilter>;
  /** No related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EventFilter>;
  /** Some related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EventFilter>;
};

/** A filter to be used against many `TeamMembership` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyTeamMembershipFilter = {
  /** Aggregates across related `TeamMembership` match the filter criteria. */
  aggregates?: InputMaybe<TeamMembershipAggregatesFilter>;
  /** Every related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TeamMembershipFilter>;
  /** No related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TeamMembershipFilter>;
  /** Some related `TeamMembership` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TeamMembershipFilter>;
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
  AvailabilitiesByUserIdAverageDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdAverageDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdAverageEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_ASC',
  AvailabilitiesByUserIdAverageEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_DESC',
  AvailabilitiesByUserIdAverageIdAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_ID_ASC',
  AvailabilitiesByUserIdAverageIdDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_ID_DESC',
  AvailabilitiesByUserIdAverageStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_ASC',
  AvailabilitiesByUserIdAverageStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_DESC',
  AvailabilitiesByUserIdAverageUserIdAsc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  AvailabilitiesByUserIdAverageUserIdDesc = 'AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  AvailabilitiesByUserIdCountAsc = 'AVAILABILITIES_BY_USER_ID_COUNT_ASC',
  AvailabilitiesByUserIdCountDesc = 'AVAILABILITIES_BY_USER_ID_COUNT_DESC',
  AvailabilitiesByUserIdDistinctCountDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdDistinctCountDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdDistinctCountEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_ASC',
  AvailabilitiesByUserIdDistinctCountEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_DESC',
  AvailabilitiesByUserIdDistinctCountIdAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  AvailabilitiesByUserIdDistinctCountIdDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  AvailabilitiesByUserIdDistinctCountStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_ASC',
  AvailabilitiesByUserIdDistinctCountStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_DESC',
  AvailabilitiesByUserIdDistinctCountUserIdAsc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  AvailabilitiesByUserIdDistinctCountUserIdDesc = 'AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  AvailabilitiesByUserIdMaxDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_MAX_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdMaxDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_MAX_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdMaxEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_MAX_END_TIME_ASC',
  AvailabilitiesByUserIdMaxEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_MAX_END_TIME_DESC',
  AvailabilitiesByUserIdMaxIdAsc = 'AVAILABILITIES_BY_USER_ID_MAX_ID_ASC',
  AvailabilitiesByUserIdMaxIdDesc = 'AVAILABILITIES_BY_USER_ID_MAX_ID_DESC',
  AvailabilitiesByUserIdMaxStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_MAX_START_TIME_ASC',
  AvailabilitiesByUserIdMaxStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_MAX_START_TIME_DESC',
  AvailabilitiesByUserIdMaxUserIdAsc = 'AVAILABILITIES_BY_USER_ID_MAX_USER_ID_ASC',
  AvailabilitiesByUserIdMaxUserIdDesc = 'AVAILABILITIES_BY_USER_ID_MAX_USER_ID_DESC',
  AvailabilitiesByUserIdMinDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_MIN_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdMinDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_MIN_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdMinEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_MIN_END_TIME_ASC',
  AvailabilitiesByUserIdMinEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_MIN_END_TIME_DESC',
  AvailabilitiesByUserIdMinIdAsc = 'AVAILABILITIES_BY_USER_ID_MIN_ID_ASC',
  AvailabilitiesByUserIdMinIdDesc = 'AVAILABILITIES_BY_USER_ID_MIN_ID_DESC',
  AvailabilitiesByUserIdMinStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_MIN_START_TIME_ASC',
  AvailabilitiesByUserIdMinStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_MIN_START_TIME_DESC',
  AvailabilitiesByUserIdMinUserIdAsc = 'AVAILABILITIES_BY_USER_ID_MIN_USER_ID_ASC',
  AvailabilitiesByUserIdMinUserIdDesc = 'AVAILABILITIES_BY_USER_ID_MIN_USER_ID_DESC',
  AvailabilitiesByUserIdStddevPopulationDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdStddevPopulationDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdStddevPopulationEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_ASC',
  AvailabilitiesByUserIdStddevPopulationEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_DESC',
  AvailabilitiesByUserIdStddevPopulationIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  AvailabilitiesByUserIdStddevPopulationIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  AvailabilitiesByUserIdStddevPopulationStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_ASC',
  AvailabilitiesByUserIdStddevPopulationStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_DESC',
  AvailabilitiesByUserIdStddevPopulationUserIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  AvailabilitiesByUserIdStddevPopulationUserIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  AvailabilitiesByUserIdStddevSampleDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdStddevSampleDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdStddevSampleEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_ASC',
  AvailabilitiesByUserIdStddevSampleEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_DESC',
  AvailabilitiesByUserIdStddevSampleIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  AvailabilitiesByUserIdStddevSampleIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  AvailabilitiesByUserIdStddevSampleStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_ASC',
  AvailabilitiesByUserIdStddevSampleStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_DESC',
  AvailabilitiesByUserIdStddevSampleUserIdAsc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  AvailabilitiesByUserIdStddevSampleUserIdDesc = 'AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  AvailabilitiesByUserIdSumDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_SUM_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdSumDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_SUM_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdSumEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_SUM_END_TIME_ASC',
  AvailabilitiesByUserIdSumEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_SUM_END_TIME_DESC',
  AvailabilitiesByUserIdSumIdAsc = 'AVAILABILITIES_BY_USER_ID_SUM_ID_ASC',
  AvailabilitiesByUserIdSumIdDesc = 'AVAILABILITIES_BY_USER_ID_SUM_ID_DESC',
  AvailabilitiesByUserIdSumStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_SUM_START_TIME_ASC',
  AvailabilitiesByUserIdSumStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_SUM_START_TIME_DESC',
  AvailabilitiesByUserIdSumUserIdAsc = 'AVAILABILITIES_BY_USER_ID_SUM_USER_ID_ASC',
  AvailabilitiesByUserIdSumUserIdDesc = 'AVAILABILITIES_BY_USER_ID_SUM_USER_ID_DESC',
  AvailabilitiesByUserIdVariancePopulationDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdVariancePopulationDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdVariancePopulationEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_ASC',
  AvailabilitiesByUserIdVariancePopulationEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_DESC',
  AvailabilitiesByUserIdVariancePopulationIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  AvailabilitiesByUserIdVariancePopulationIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  AvailabilitiesByUserIdVariancePopulationStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_ASC',
  AvailabilitiesByUserIdVariancePopulationStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_DESC',
  AvailabilitiesByUserIdVariancePopulationUserIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  AvailabilitiesByUserIdVariancePopulationUserIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  AvailabilitiesByUserIdVarianceSampleDayOfWeekAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_DAY_OF_WEEK_ASC',
  AvailabilitiesByUserIdVarianceSampleDayOfWeekDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_DAY_OF_WEEK_DESC',
  AvailabilitiesByUserIdVarianceSampleEndTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_ASC',
  AvailabilitiesByUserIdVarianceSampleEndTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_DESC',
  AvailabilitiesByUserIdVarianceSampleIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  AvailabilitiesByUserIdVarianceSampleIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  AvailabilitiesByUserIdVarianceSampleStartTimeAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_ASC',
  AvailabilitiesByUserIdVarianceSampleStartTimeDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_DESC',
  AvailabilitiesByUserIdVarianceSampleUserIdAsc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  AvailabilitiesByUserIdVarianceSampleUserIdDesc = 'AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  BirthDayAsc = 'BIRTH_DAY_ASC',
  BirthDayDesc = 'BIRTH_DAY_DESC',
  BookingsByUserIdAverageEventIdAsc = 'BOOKINGS_BY_USER_ID_AVERAGE_EVENT_ID_ASC',
  BookingsByUserIdAverageEventIdDesc = 'BOOKINGS_BY_USER_ID_AVERAGE_EVENT_ID_DESC',
  BookingsByUserIdAverageStatusAsc = 'BOOKINGS_BY_USER_ID_AVERAGE_STATUS_ASC',
  BookingsByUserIdAverageStatusDesc = 'BOOKINGS_BY_USER_ID_AVERAGE_STATUS_DESC',
  BookingsByUserIdAverageUserIdAsc = 'BOOKINGS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  BookingsByUserIdAverageUserIdDesc = 'BOOKINGS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  BookingsByUserIdCountAsc = 'BOOKINGS_BY_USER_ID_COUNT_ASC',
  BookingsByUserIdCountDesc = 'BOOKINGS_BY_USER_ID_COUNT_DESC',
  BookingsByUserIdDistinctCountEventIdAsc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BookingsByUserIdDistinctCountEventIdDesc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BookingsByUserIdDistinctCountStatusAsc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_STATUS_ASC',
  BookingsByUserIdDistinctCountStatusDesc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_STATUS_DESC',
  BookingsByUserIdDistinctCountUserIdAsc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  BookingsByUserIdDistinctCountUserIdDesc = 'BOOKINGS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  BookingsByUserIdMaxEventIdAsc = 'BOOKINGS_BY_USER_ID_MAX_EVENT_ID_ASC',
  BookingsByUserIdMaxEventIdDesc = 'BOOKINGS_BY_USER_ID_MAX_EVENT_ID_DESC',
  BookingsByUserIdMaxStatusAsc = 'BOOKINGS_BY_USER_ID_MAX_STATUS_ASC',
  BookingsByUserIdMaxStatusDesc = 'BOOKINGS_BY_USER_ID_MAX_STATUS_DESC',
  BookingsByUserIdMaxUserIdAsc = 'BOOKINGS_BY_USER_ID_MAX_USER_ID_ASC',
  BookingsByUserIdMaxUserIdDesc = 'BOOKINGS_BY_USER_ID_MAX_USER_ID_DESC',
  BookingsByUserIdMinEventIdAsc = 'BOOKINGS_BY_USER_ID_MIN_EVENT_ID_ASC',
  BookingsByUserIdMinEventIdDesc = 'BOOKINGS_BY_USER_ID_MIN_EVENT_ID_DESC',
  BookingsByUserIdMinStatusAsc = 'BOOKINGS_BY_USER_ID_MIN_STATUS_ASC',
  BookingsByUserIdMinStatusDesc = 'BOOKINGS_BY_USER_ID_MIN_STATUS_DESC',
  BookingsByUserIdMinUserIdAsc = 'BOOKINGS_BY_USER_ID_MIN_USER_ID_ASC',
  BookingsByUserIdMinUserIdDesc = 'BOOKINGS_BY_USER_ID_MIN_USER_ID_DESC',
  BookingsByUserIdStddevPopulationEventIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BookingsByUserIdStddevPopulationEventIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BookingsByUserIdStddevPopulationStatusAsc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_STATUS_ASC',
  BookingsByUserIdStddevPopulationStatusDesc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_STATUS_DESC',
  BookingsByUserIdStddevPopulationUserIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  BookingsByUserIdStddevPopulationUserIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  BookingsByUserIdStddevSampleEventIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BookingsByUserIdStddevSampleEventIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BookingsByUserIdStddevSampleStatusAsc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_STATUS_ASC',
  BookingsByUserIdStddevSampleStatusDesc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_STATUS_DESC',
  BookingsByUserIdStddevSampleUserIdAsc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  BookingsByUserIdStddevSampleUserIdDesc = 'BOOKINGS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  BookingsByUserIdSumEventIdAsc = 'BOOKINGS_BY_USER_ID_SUM_EVENT_ID_ASC',
  BookingsByUserIdSumEventIdDesc = 'BOOKINGS_BY_USER_ID_SUM_EVENT_ID_DESC',
  BookingsByUserIdSumStatusAsc = 'BOOKINGS_BY_USER_ID_SUM_STATUS_ASC',
  BookingsByUserIdSumStatusDesc = 'BOOKINGS_BY_USER_ID_SUM_STATUS_DESC',
  BookingsByUserIdSumUserIdAsc = 'BOOKINGS_BY_USER_ID_SUM_USER_ID_ASC',
  BookingsByUserIdSumUserIdDesc = 'BOOKINGS_BY_USER_ID_SUM_USER_ID_DESC',
  BookingsByUserIdVariancePopulationEventIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BookingsByUserIdVariancePopulationEventIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BookingsByUserIdVariancePopulationStatusAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_STATUS_ASC',
  BookingsByUserIdVariancePopulationStatusDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_STATUS_DESC',
  BookingsByUserIdVariancePopulationUserIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  BookingsByUserIdVariancePopulationUserIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  BookingsByUserIdVarianceSampleEventIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BookingsByUserIdVarianceSampleEventIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BookingsByUserIdVarianceSampleStatusAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_STATUS_ASC',
  BookingsByUserIdVarianceSampleStatusDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_STATUS_DESC',
  BookingsByUserIdVarianceSampleUserIdAsc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  BookingsByUserIdVarianceSampleUserIdDesc = 'BOOKINGS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  CustomAvailabilitiesByUserIdAverageAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdAverageAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdAverageEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_ASC',
  CustomAvailabilitiesByUserIdAverageEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_END_TIME_DESC',
  CustomAvailabilitiesByUserIdAverageIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_ID_ASC',
  CustomAvailabilitiesByUserIdAverageIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_ID_DESC',
  CustomAvailabilitiesByUserIdAverageReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_REASON_ASC',
  CustomAvailabilitiesByUserIdAverageReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_REASON_DESC',
  CustomAvailabilitiesByUserIdAverageStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_ASC',
  CustomAvailabilitiesByUserIdAverageStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_START_TIME_DESC',
  CustomAvailabilitiesByUserIdAverageUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_ASC',
  CustomAvailabilitiesByUserIdAverageUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_AVERAGE_USER_ID_DESC',
  CustomAvailabilitiesByUserIdCountAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_COUNT_ASC',
  CustomAvailabilitiesByUserIdCountDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_COUNT_DESC',
  CustomAvailabilitiesByUserIdDistinctCountAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdDistinctCountAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdDistinctCountEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_ASC',
  CustomAvailabilitiesByUserIdDistinctCountEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_END_TIME_DESC',
  CustomAvailabilitiesByUserIdDistinctCountIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  CustomAvailabilitiesByUserIdDistinctCountIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  CustomAvailabilitiesByUserIdDistinctCountReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_REASON_ASC',
  CustomAvailabilitiesByUserIdDistinctCountReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_REASON_DESC',
  CustomAvailabilitiesByUserIdDistinctCountStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_ASC',
  CustomAvailabilitiesByUserIdDistinctCountStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_START_TIME_DESC',
  CustomAvailabilitiesByUserIdDistinctCountUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  CustomAvailabilitiesByUserIdDistinctCountUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  CustomAvailabilitiesByUserIdMaxAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdMaxAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdMaxEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_END_TIME_ASC',
  CustomAvailabilitiesByUserIdMaxEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_END_TIME_DESC',
  CustomAvailabilitiesByUserIdMaxIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_ID_ASC',
  CustomAvailabilitiesByUserIdMaxIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_ID_DESC',
  CustomAvailabilitiesByUserIdMaxReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_REASON_ASC',
  CustomAvailabilitiesByUserIdMaxReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_REASON_DESC',
  CustomAvailabilitiesByUserIdMaxStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_START_TIME_ASC',
  CustomAvailabilitiesByUserIdMaxStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_START_TIME_DESC',
  CustomAvailabilitiesByUserIdMaxUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_USER_ID_ASC',
  CustomAvailabilitiesByUserIdMaxUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MAX_USER_ID_DESC',
  CustomAvailabilitiesByUserIdMinAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdMinAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdMinEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_END_TIME_ASC',
  CustomAvailabilitiesByUserIdMinEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_END_TIME_DESC',
  CustomAvailabilitiesByUserIdMinIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_ID_ASC',
  CustomAvailabilitiesByUserIdMinIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_ID_DESC',
  CustomAvailabilitiesByUserIdMinReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_REASON_ASC',
  CustomAvailabilitiesByUserIdMinReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_REASON_DESC',
  CustomAvailabilitiesByUserIdMinStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_START_TIME_ASC',
  CustomAvailabilitiesByUserIdMinStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_START_TIME_DESC',
  CustomAvailabilitiesByUserIdMinUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_USER_ID_ASC',
  CustomAvailabilitiesByUserIdMinUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_MIN_USER_ID_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_END_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_REASON_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_REASON_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_START_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevPopulationUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  CustomAvailabilitiesByUserIdStddevPopulationUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  CustomAvailabilitiesByUserIdStddevSampleAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdStddevSampleAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdStddevSampleEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevSampleEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_END_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevSampleIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  CustomAvailabilitiesByUserIdStddevSampleIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  CustomAvailabilitiesByUserIdStddevSampleReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_REASON_ASC',
  CustomAvailabilitiesByUserIdStddevSampleReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_REASON_DESC',
  CustomAvailabilitiesByUserIdStddevSampleStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_ASC',
  CustomAvailabilitiesByUserIdStddevSampleStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_START_TIME_DESC',
  CustomAvailabilitiesByUserIdStddevSampleUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  CustomAvailabilitiesByUserIdStddevSampleUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  CustomAvailabilitiesByUserIdSumAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdSumAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdSumEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_END_TIME_ASC',
  CustomAvailabilitiesByUserIdSumEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_END_TIME_DESC',
  CustomAvailabilitiesByUserIdSumIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_ID_ASC',
  CustomAvailabilitiesByUserIdSumIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_ID_DESC',
  CustomAvailabilitiesByUserIdSumReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_REASON_ASC',
  CustomAvailabilitiesByUserIdSumReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_REASON_DESC',
  CustomAvailabilitiesByUserIdSumStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_START_TIME_ASC',
  CustomAvailabilitiesByUserIdSumStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_START_TIME_DESC',
  CustomAvailabilitiesByUserIdSumUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_USER_ID_ASC',
  CustomAvailabilitiesByUserIdSumUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_SUM_USER_ID_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_END_TIME_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_REASON_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_REASON_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_START_TIME_DESC',
  CustomAvailabilitiesByUserIdVariancePopulationUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  CustomAvailabilitiesByUserIdVariancePopulationUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleAvailableAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_AVAILABLE_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleAvailableDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_AVAILABLE_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleEndTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleEndTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_END_TIME_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleReasonAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_REASON_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleReasonDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_REASON_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleStartTimeAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleStartTimeDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_START_TIME_DESC',
  CustomAvailabilitiesByUserIdVarianceSampleUserIdAsc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  CustomAvailabilitiesByUserIdVarianceSampleUserIdDesc = 'CUSTOM_AVAILABILITIES_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  EventsByUserIdAverageDateAsc = 'EVENTS_BY_USER_ID_AVERAGE_DATE_ASC',
  EventsByUserIdAverageDateDesc = 'EVENTS_BY_USER_ID_AVERAGE_DATE_DESC',
  EventsByUserIdAverageDescriptionAsc = 'EVENTS_BY_USER_ID_AVERAGE_DESCRIPTION_ASC',
  EventsByUserIdAverageDescriptionDesc = 'EVENTS_BY_USER_ID_AVERAGE_DESCRIPTION_DESC',
  EventsByUserIdAverageDurationAsc = 'EVENTS_BY_USER_ID_AVERAGE_DURATION_ASC',
  EventsByUserIdAverageDurationDesc = 'EVENTS_BY_USER_ID_AVERAGE_DURATION_DESC',
  EventsByUserIdAverageIdAsc = 'EVENTS_BY_USER_ID_AVERAGE_ID_ASC',
  EventsByUserIdAverageIdDesc = 'EVENTS_BY_USER_ID_AVERAGE_ID_DESC',
  EventsByUserIdAverageLocationAsc = 'EVENTS_BY_USER_ID_AVERAGE_LOCATION_ASC',
  EventsByUserIdAverageLocationDesc = 'EVENTS_BY_USER_ID_AVERAGE_LOCATION_DESC',
  EventsByUserIdAverageTeamIdAsc = 'EVENTS_BY_USER_ID_AVERAGE_TEAM_ID_ASC',
  EventsByUserIdAverageTeamIdDesc = 'EVENTS_BY_USER_ID_AVERAGE_TEAM_ID_DESC',
  EventsByUserIdAverageTitleAsc = 'EVENTS_BY_USER_ID_AVERAGE_TITLE_ASC',
  EventsByUserIdAverageTitleDesc = 'EVENTS_BY_USER_ID_AVERAGE_TITLE_DESC',
  EventsByUserIdAverageUserIdAsc = 'EVENTS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  EventsByUserIdAverageUserIdDesc = 'EVENTS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  EventsByUserIdCountAsc = 'EVENTS_BY_USER_ID_COUNT_ASC',
  EventsByUserIdCountDesc = 'EVENTS_BY_USER_ID_COUNT_DESC',
  EventsByUserIdDistinctCountDateAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DATE_ASC',
  EventsByUserIdDistinctCountDateDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DATE_DESC',
  EventsByUserIdDistinctCountDescriptionAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  EventsByUserIdDistinctCountDescriptionDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  EventsByUserIdDistinctCountDurationAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DURATION_ASC',
  EventsByUserIdDistinctCountDurationDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_DURATION_DESC',
  EventsByUserIdDistinctCountIdAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  EventsByUserIdDistinctCountIdDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  EventsByUserIdDistinctCountLocationAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_LOCATION_ASC',
  EventsByUserIdDistinctCountLocationDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_LOCATION_DESC',
  EventsByUserIdDistinctCountTeamIdAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  EventsByUserIdDistinctCountTeamIdDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  EventsByUserIdDistinctCountTitleAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TITLE_ASC',
  EventsByUserIdDistinctCountTitleDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_TITLE_DESC',
  EventsByUserIdDistinctCountUserIdAsc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  EventsByUserIdDistinctCountUserIdDesc = 'EVENTS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  EventsByUserIdMaxDateAsc = 'EVENTS_BY_USER_ID_MAX_DATE_ASC',
  EventsByUserIdMaxDateDesc = 'EVENTS_BY_USER_ID_MAX_DATE_DESC',
  EventsByUserIdMaxDescriptionAsc = 'EVENTS_BY_USER_ID_MAX_DESCRIPTION_ASC',
  EventsByUserIdMaxDescriptionDesc = 'EVENTS_BY_USER_ID_MAX_DESCRIPTION_DESC',
  EventsByUserIdMaxDurationAsc = 'EVENTS_BY_USER_ID_MAX_DURATION_ASC',
  EventsByUserIdMaxDurationDesc = 'EVENTS_BY_USER_ID_MAX_DURATION_DESC',
  EventsByUserIdMaxIdAsc = 'EVENTS_BY_USER_ID_MAX_ID_ASC',
  EventsByUserIdMaxIdDesc = 'EVENTS_BY_USER_ID_MAX_ID_DESC',
  EventsByUserIdMaxLocationAsc = 'EVENTS_BY_USER_ID_MAX_LOCATION_ASC',
  EventsByUserIdMaxLocationDesc = 'EVENTS_BY_USER_ID_MAX_LOCATION_DESC',
  EventsByUserIdMaxTeamIdAsc = 'EVENTS_BY_USER_ID_MAX_TEAM_ID_ASC',
  EventsByUserIdMaxTeamIdDesc = 'EVENTS_BY_USER_ID_MAX_TEAM_ID_DESC',
  EventsByUserIdMaxTitleAsc = 'EVENTS_BY_USER_ID_MAX_TITLE_ASC',
  EventsByUserIdMaxTitleDesc = 'EVENTS_BY_USER_ID_MAX_TITLE_DESC',
  EventsByUserIdMaxUserIdAsc = 'EVENTS_BY_USER_ID_MAX_USER_ID_ASC',
  EventsByUserIdMaxUserIdDesc = 'EVENTS_BY_USER_ID_MAX_USER_ID_DESC',
  EventsByUserIdMinDateAsc = 'EVENTS_BY_USER_ID_MIN_DATE_ASC',
  EventsByUserIdMinDateDesc = 'EVENTS_BY_USER_ID_MIN_DATE_DESC',
  EventsByUserIdMinDescriptionAsc = 'EVENTS_BY_USER_ID_MIN_DESCRIPTION_ASC',
  EventsByUserIdMinDescriptionDesc = 'EVENTS_BY_USER_ID_MIN_DESCRIPTION_DESC',
  EventsByUserIdMinDurationAsc = 'EVENTS_BY_USER_ID_MIN_DURATION_ASC',
  EventsByUserIdMinDurationDesc = 'EVENTS_BY_USER_ID_MIN_DURATION_DESC',
  EventsByUserIdMinIdAsc = 'EVENTS_BY_USER_ID_MIN_ID_ASC',
  EventsByUserIdMinIdDesc = 'EVENTS_BY_USER_ID_MIN_ID_DESC',
  EventsByUserIdMinLocationAsc = 'EVENTS_BY_USER_ID_MIN_LOCATION_ASC',
  EventsByUserIdMinLocationDesc = 'EVENTS_BY_USER_ID_MIN_LOCATION_DESC',
  EventsByUserIdMinTeamIdAsc = 'EVENTS_BY_USER_ID_MIN_TEAM_ID_ASC',
  EventsByUserIdMinTeamIdDesc = 'EVENTS_BY_USER_ID_MIN_TEAM_ID_DESC',
  EventsByUserIdMinTitleAsc = 'EVENTS_BY_USER_ID_MIN_TITLE_ASC',
  EventsByUserIdMinTitleDesc = 'EVENTS_BY_USER_ID_MIN_TITLE_DESC',
  EventsByUserIdMinUserIdAsc = 'EVENTS_BY_USER_ID_MIN_USER_ID_ASC',
  EventsByUserIdMinUserIdDesc = 'EVENTS_BY_USER_ID_MIN_USER_ID_DESC',
  EventsByUserIdStddevPopulationDateAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DATE_ASC',
  EventsByUserIdStddevPopulationDateDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DATE_DESC',
  EventsByUserIdStddevPopulationDescriptionAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_ASC',
  EventsByUserIdStddevPopulationDescriptionDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DESCRIPTION_DESC',
  EventsByUserIdStddevPopulationDurationAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DURATION_ASC',
  EventsByUserIdStddevPopulationDurationDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_DURATION_DESC',
  EventsByUserIdStddevPopulationIdAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  EventsByUserIdStddevPopulationIdDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  EventsByUserIdStddevPopulationLocationAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_LOCATION_ASC',
  EventsByUserIdStddevPopulationLocationDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_LOCATION_DESC',
  EventsByUserIdStddevPopulationTeamIdAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  EventsByUserIdStddevPopulationTeamIdDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  EventsByUserIdStddevPopulationTitleAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TITLE_ASC',
  EventsByUserIdStddevPopulationTitleDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_TITLE_DESC',
  EventsByUserIdStddevPopulationUserIdAsc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  EventsByUserIdStddevPopulationUserIdDesc = 'EVENTS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  EventsByUserIdStddevSampleDateAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DATE_ASC',
  EventsByUserIdStddevSampleDateDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DATE_DESC',
  EventsByUserIdStddevSampleDescriptionAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_ASC',
  EventsByUserIdStddevSampleDescriptionDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DESCRIPTION_DESC',
  EventsByUserIdStddevSampleDurationAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DURATION_ASC',
  EventsByUserIdStddevSampleDurationDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_DURATION_DESC',
  EventsByUserIdStddevSampleIdAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  EventsByUserIdStddevSampleIdDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  EventsByUserIdStddevSampleLocationAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_LOCATION_ASC',
  EventsByUserIdStddevSampleLocationDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_LOCATION_DESC',
  EventsByUserIdStddevSampleTeamIdAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  EventsByUserIdStddevSampleTeamIdDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  EventsByUserIdStddevSampleTitleAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TITLE_ASC',
  EventsByUserIdStddevSampleTitleDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_TITLE_DESC',
  EventsByUserIdStddevSampleUserIdAsc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  EventsByUserIdStddevSampleUserIdDesc = 'EVENTS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  EventsByUserIdSumDateAsc = 'EVENTS_BY_USER_ID_SUM_DATE_ASC',
  EventsByUserIdSumDateDesc = 'EVENTS_BY_USER_ID_SUM_DATE_DESC',
  EventsByUserIdSumDescriptionAsc = 'EVENTS_BY_USER_ID_SUM_DESCRIPTION_ASC',
  EventsByUserIdSumDescriptionDesc = 'EVENTS_BY_USER_ID_SUM_DESCRIPTION_DESC',
  EventsByUserIdSumDurationAsc = 'EVENTS_BY_USER_ID_SUM_DURATION_ASC',
  EventsByUserIdSumDurationDesc = 'EVENTS_BY_USER_ID_SUM_DURATION_DESC',
  EventsByUserIdSumIdAsc = 'EVENTS_BY_USER_ID_SUM_ID_ASC',
  EventsByUserIdSumIdDesc = 'EVENTS_BY_USER_ID_SUM_ID_DESC',
  EventsByUserIdSumLocationAsc = 'EVENTS_BY_USER_ID_SUM_LOCATION_ASC',
  EventsByUserIdSumLocationDesc = 'EVENTS_BY_USER_ID_SUM_LOCATION_DESC',
  EventsByUserIdSumTeamIdAsc = 'EVENTS_BY_USER_ID_SUM_TEAM_ID_ASC',
  EventsByUserIdSumTeamIdDesc = 'EVENTS_BY_USER_ID_SUM_TEAM_ID_DESC',
  EventsByUserIdSumTitleAsc = 'EVENTS_BY_USER_ID_SUM_TITLE_ASC',
  EventsByUserIdSumTitleDesc = 'EVENTS_BY_USER_ID_SUM_TITLE_DESC',
  EventsByUserIdSumUserIdAsc = 'EVENTS_BY_USER_ID_SUM_USER_ID_ASC',
  EventsByUserIdSumUserIdDesc = 'EVENTS_BY_USER_ID_SUM_USER_ID_DESC',
  EventsByUserIdVariancePopulationDateAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DATE_ASC',
  EventsByUserIdVariancePopulationDateDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DATE_DESC',
  EventsByUserIdVariancePopulationDescriptionAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_ASC',
  EventsByUserIdVariancePopulationDescriptionDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DESCRIPTION_DESC',
  EventsByUserIdVariancePopulationDurationAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DURATION_ASC',
  EventsByUserIdVariancePopulationDurationDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_DURATION_DESC',
  EventsByUserIdVariancePopulationIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  EventsByUserIdVariancePopulationIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  EventsByUserIdVariancePopulationLocationAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_LOCATION_ASC',
  EventsByUserIdVariancePopulationLocationDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_LOCATION_DESC',
  EventsByUserIdVariancePopulationTeamIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  EventsByUserIdVariancePopulationTeamIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  EventsByUserIdVariancePopulationTitleAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TITLE_ASC',
  EventsByUserIdVariancePopulationTitleDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_TITLE_DESC',
  EventsByUserIdVariancePopulationUserIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  EventsByUserIdVariancePopulationUserIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  EventsByUserIdVarianceSampleDateAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DATE_ASC',
  EventsByUserIdVarianceSampleDateDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DATE_DESC',
  EventsByUserIdVarianceSampleDescriptionAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  EventsByUserIdVarianceSampleDescriptionDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  EventsByUserIdVarianceSampleDurationAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DURATION_ASC',
  EventsByUserIdVarianceSampleDurationDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_DURATION_DESC',
  EventsByUserIdVarianceSampleIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  EventsByUserIdVarianceSampleIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  EventsByUserIdVarianceSampleLocationAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_LOCATION_ASC',
  EventsByUserIdVarianceSampleLocationDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_LOCATION_DESC',
  EventsByUserIdVarianceSampleTeamIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  EventsByUserIdVarianceSampleTeamIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  EventsByUserIdVarianceSampleTitleAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TITLE_ASC',
  EventsByUserIdVarianceSampleTitleDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_TITLE_DESC',
  EventsByUserIdVarianceSampleUserIdAsc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  EventsByUserIdVarianceSampleUserIdDesc = 'EVENTS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  OidcIdAsc = 'OIDC_ID_ASC',
  OidcIdDesc = 'OIDC_ID_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamMembershipsByUserIdAverageCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_CREATED_AT_ASC',
  TeamMembershipsByUserIdAverageCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_CREATED_AT_DESC',
  TeamMembershipsByUserIdAverageIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ID_ASC',
  TeamMembershipsByUserIdAverageIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ID_DESC',
  TeamMembershipsByUserIdAverageRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ROLE_ASC',
  TeamMembershipsByUserIdAverageRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_ROLE_DESC',
  TeamMembershipsByUserIdAverageTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_TEAM_ID_ASC',
  TeamMembershipsByUserIdAverageTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_TEAM_ID_DESC',
  TeamMembershipsByUserIdAverageUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  TeamMembershipsByUserIdAverageUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  TeamMembershipsByUserIdCountAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_COUNT_ASC',
  TeamMembershipsByUserIdCountDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_COUNT_DESC',
  TeamMembershipsByUserIdDistinctCountCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  TeamMembershipsByUserIdDistinctCountCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  TeamMembershipsByUserIdDistinctCountIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  TeamMembershipsByUserIdDistinctCountIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  TeamMembershipsByUserIdDistinctCountRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ROLE_ASC',
  TeamMembershipsByUserIdDistinctCountRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_ROLE_DESC',
  TeamMembershipsByUserIdDistinctCountTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_ASC',
  TeamMembershipsByUserIdDistinctCountTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_TEAM_ID_DESC',
  TeamMembershipsByUserIdDistinctCountUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  TeamMembershipsByUserIdDistinctCountUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  TeamMembershipsByUserIdMaxCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_CREATED_AT_ASC',
  TeamMembershipsByUserIdMaxCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_CREATED_AT_DESC',
  TeamMembershipsByUserIdMaxIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ID_ASC',
  TeamMembershipsByUserIdMaxIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ID_DESC',
  TeamMembershipsByUserIdMaxRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ROLE_ASC',
  TeamMembershipsByUserIdMaxRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_ROLE_DESC',
  TeamMembershipsByUserIdMaxTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_TEAM_ID_ASC',
  TeamMembershipsByUserIdMaxTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_TEAM_ID_DESC',
  TeamMembershipsByUserIdMaxUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_USER_ID_ASC',
  TeamMembershipsByUserIdMaxUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MAX_USER_ID_DESC',
  TeamMembershipsByUserIdMinCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_CREATED_AT_ASC',
  TeamMembershipsByUserIdMinCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_CREATED_AT_DESC',
  TeamMembershipsByUserIdMinIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ID_ASC',
  TeamMembershipsByUserIdMinIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ID_DESC',
  TeamMembershipsByUserIdMinRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ROLE_ASC',
  TeamMembershipsByUserIdMinRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_ROLE_DESC',
  TeamMembershipsByUserIdMinTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_TEAM_ID_ASC',
  TeamMembershipsByUserIdMinTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_TEAM_ID_DESC',
  TeamMembershipsByUserIdMinUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_USER_ID_ASC',
  TeamMembershipsByUserIdMinUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_MIN_USER_ID_DESC',
  TeamMembershipsByUserIdStddevPopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByUserIdStddevPopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByUserIdStddevPopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  TeamMembershipsByUserIdStddevPopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  TeamMembershipsByUserIdStddevPopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ROLE_ASC',
  TeamMembershipsByUserIdStddevPopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_ROLE_DESC',
  TeamMembershipsByUserIdStddevPopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByUserIdStddevPopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByUserIdStddevPopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  TeamMembershipsByUserIdStddevPopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  TeamMembershipsByUserIdStddevSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByUserIdStddevSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByUserIdStddevSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  TeamMembershipsByUserIdStddevSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  TeamMembershipsByUserIdStddevSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ROLE_ASC',
  TeamMembershipsByUserIdStddevSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_ROLE_DESC',
  TeamMembershipsByUserIdStddevSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByUserIdStddevSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByUserIdStddevSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  TeamMembershipsByUserIdStddevSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  TeamMembershipsByUserIdSumCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_CREATED_AT_ASC',
  TeamMembershipsByUserIdSumCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_CREATED_AT_DESC',
  TeamMembershipsByUserIdSumIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ID_ASC',
  TeamMembershipsByUserIdSumIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ID_DESC',
  TeamMembershipsByUserIdSumRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ROLE_ASC',
  TeamMembershipsByUserIdSumRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_ROLE_DESC',
  TeamMembershipsByUserIdSumTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_TEAM_ID_ASC',
  TeamMembershipsByUserIdSumTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_TEAM_ID_DESC',
  TeamMembershipsByUserIdSumUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_USER_ID_ASC',
  TeamMembershipsByUserIdSumUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_SUM_USER_ID_DESC',
  TeamMembershipsByUserIdVariancePopulationCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  TeamMembershipsByUserIdVariancePopulationCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  TeamMembershipsByUserIdVariancePopulationIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  TeamMembershipsByUserIdVariancePopulationIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  TeamMembershipsByUserIdVariancePopulationRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ROLE_ASC',
  TeamMembershipsByUserIdVariancePopulationRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_ROLE_DESC',
  TeamMembershipsByUserIdVariancePopulationTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_ASC',
  TeamMembershipsByUserIdVariancePopulationTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_TEAM_ID_DESC',
  TeamMembershipsByUserIdVariancePopulationUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  TeamMembershipsByUserIdVariancePopulationUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  TeamMembershipsByUserIdVarianceSampleCreatedAtAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  TeamMembershipsByUserIdVarianceSampleCreatedAtDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  TeamMembershipsByUserIdVarianceSampleIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  TeamMembershipsByUserIdVarianceSampleIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  TeamMembershipsByUserIdVarianceSampleRoleAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ROLE_ASC',
  TeamMembershipsByUserIdVarianceSampleRoleDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_ROLE_DESC',
  TeamMembershipsByUserIdVarianceSampleTeamIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_ASC',
  TeamMembershipsByUserIdVarianceSampleTeamIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_TEAM_ID_DESC',
  TeamMembershipsByUserIdVarianceSampleUserIdAsc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  TeamMembershipsByUserIdVarianceSampleUserIdDesc = 'TEAM_MEMBERSHIPS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  TelAsc = 'TEL_ASC',
  TelDesc = 'TEL_DESC',
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

export type ProfileFragment = { __typename?: 'User', firstName?: string | null, lastName?: string | null, gender?: UserGender | null, email?: string | null, tel?: string | null, picture?: string | null, birthDay?: any | null } & { ' $fragmentName'?: 'ProfileFragment' };

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
