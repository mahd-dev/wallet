import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import _PgAggregatesPlugin from "@graphile/pg-aggregates";
import _PostgisPlugin from "@graphile/postgis";
import _subscriptionPlugin from "@graphile/subscriptions-lds";
import { PostGraphileOptions } from "postgraphile";
import { addFakeUniqueConstraintFromIndex } from "postgraphile-index-to-unique-constraint-plugin";
import PostGraphileConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PostGraphileConnectionFilterPostgisPlugin from "postgraphile-plugin-connection-filter-postgis";
import _PostGraphileManyCUDPlugin from "postgraphile-plugin-many-create-update-delete";
import { PgMutationUpsertPlugin } from "postgraphile-upsert-plugin";

const normalizeImport = (module: any) => module?.default || module;
const PostGraphileManyCUDPlugin = normalizeImport(_PostGraphileManyCUDPlugin);
const subscriptionPlugin = normalizeImport(_subscriptionPlugin);
const PostgisPlugin = normalizeImport(_PostgisPlugin);
const PgAggregatesPlugin = normalizeImport(_PgAggregatesPlugin);

export const pgPool: string = process.env.DATABASE_HOST
  ? `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
  : process.env.DATABASE_URL!;

export const pgSchema = process.env.DB_SCHEMA || "public";

export const pgOptions: PostGraphileOptions = {
  live: true,
  appendPlugins: [
    PostGraphileManyCUDPlugin,
    PostGraphileConnectionFilterPlugin,
    PgMutationUpsertPlugin,
    subscriptionPlugin,
    PgSimplifyInflectorPlugin,
    PostgisPlugin,
    PostGraphileConnectionFilterPostgisPlugin,
    PgAggregatesPlugin,
    addFakeUniqueConstraintFromIndex,
  ],
  ownerConnectionString: process.env.DATABASE_URL,
  dynamicJson: true,
  ignoreRBAC: false,
  setofFunctionsContainNulls: false,
  legacyRelations: "omit" as "only" | "deprecated" | "omit",
  graphileBuildOptions: {
    connectionFilterRelations: true,
    connectionFilterComputedColumns: true,
  },
};
