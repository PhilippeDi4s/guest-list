import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 300 }).notNull(),
  confirmedAt: timestamp("confirmed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
