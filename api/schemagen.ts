import { createPostGraphileSchema } from "postgraphile";
import { pgOptions, pgPool, pgSchema } from "./postgraphile";
import exportPostGraphileSchema from "postgraphile/build/postgraphile/schema/exportPostGraphileSchema";
import { exit } from "node:process";

const gqlSchema = await createPostGraphileSchema(pgPool, pgSchema, pgOptions);
await exportPostGraphileSchema(gqlSchema, {
  exportGqlSchemaPath: "gql/schema.graphql"
});
exit(0);
