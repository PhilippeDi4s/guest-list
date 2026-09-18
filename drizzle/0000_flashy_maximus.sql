CREATE TABLE "guests" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"confirmed_at" timestamp with time zone DEFAULT now() NOT NULL
);
