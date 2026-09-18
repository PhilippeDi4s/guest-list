import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL must be set to run Drizzle migrations.");
}

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
});
