import { CodegenConfig } from "@graphql-codegen/cli";
import { config as envConfig } from "dotenv";

envConfig();

export const config: CodegenConfig = {
  overwrite: true,
  schema: "gql/schema.graphql",
  documents: [
    "app/auth.server.ts",
    "app/*.{ts,tsx}",
    "app/**/*.{ts,tsx}",
    "app/**/.server/**/*.{ts,tsx}",
    "app/**/.client/**/*.{ts,tsx}",
  ],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        gqlTagName: "gql",
      },
      // config: {
      //   withHOC: true,
      //   withComponent: true,
      //   withMutationFn: true,
      //   documentVariableSuffix: "Doc",
      //   dedupeOperationSuffix: true,
      // },
    },
  },
  config: {
    scalars: { DateTime: "string", JSON: "{ [key: string]: any }" },
  },
};

export default config;
