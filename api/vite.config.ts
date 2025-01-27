import { defineConfig } from "vite";
// import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "../build/api",
    lib: {
      entry: "server.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "fs",
        "path",
        "express",
        "jsonwebtoken",
        "dotenv",
        "jwks-rsa",
        "express-jwt",
        "postgraphile",
        "@graphile/subscriptions-lds",
        "@graphile-contrib/pg-simplify-inflector",
        "postgraphile-upsert-plugin",
        "postgraphile-plugin-connection-filter",
        "@graphile/postgis",
        "postgraphile-plugin-connection-filter-postgis",
        "postgraphile-plugin-many-create-update-delete",
        "postgraphile-index-to-unique-constraint-plugin",
        "graphql",
        "codegen",
        "@prisma/client",
      ],
    },
  },
});
