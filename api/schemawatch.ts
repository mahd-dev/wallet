import fs from "node:fs";

import { watchPostGraphileSchema } from "postgraphile";
import { generate } from "@graphql-codegen/cli";
// import { printSchema } from "graphql";
import { config } from "../codegen";
import { pgOptions, pgPool, pgSchema } from "./postgraphile";
import exportPostGraphileSchema from "postgraphile/build/postgraphile/schema/exportPostGraphileSchema";


watchPostGraphileSchema(pgPool, pgSchema, pgOptions, async (gqlSchema) => {

  await exportPostGraphileSchema(gqlSchema, {
    exportGqlSchemaPath: "gql/schema.graphql"
  });
  // await fs.promises.writeFile(
  //   path.join("gql", "schema.graphql"),
  //   printSchema(gqlSchema),
  //   "utf-8"
  // );

  await generate(config as any, true)
    .then((gen) =>
      Promise.all(
        gen.map((file: any) =>
          fs.promises.writeFile(file.filename, file.content, "utf-8")
        )
      )
    )
    .catch(console.error);
});
