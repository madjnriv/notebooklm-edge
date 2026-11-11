import { defineConfig } from "drizzle-kit";
import { env } from "./src/common/config/env.js";

export default defineConfig({
  out: "./src/drizzle",
  dialect: "postgresql",
  schema: "./src/common/schemas/*.schema.ts",

  driver: "pglite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },

  extensionsFilters: ["postgis"],
  schemaFilter: "public",
  tablesFilter: "*",

  introspect: {
    casing: "camel",
  },

  migrations: {
    table: "__drizzle_migrations__",
    schema: "drizzle",
  },

  entities: {
    roles: {
      provider: "neon",
      exclude: [],
      include: [],
    },
  },

  breakpoints: true,
  verbose: true,
});
