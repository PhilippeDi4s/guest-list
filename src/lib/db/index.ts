import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

export function getDb() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL must be set before accessing the database.");
  }

  return drizzle({
    client: neon(connectionString),
    schema,
  });
}
