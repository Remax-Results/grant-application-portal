-- This is the exisiting user table, leaving here just incase we need it
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- New SQL Commands below

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "org_name" VARCHAR (100),
  "background" VARCHAR (1000),
  "phone" VARCHAR (25),
  "contact_name" VARCHAR (150),
  "statement" VARCHAR (1000),
  "goal" VARCHAR (750),
  "population" VARCHAR(750),
  "admin" boolean DEFAULT false
);

CREATE TABLE "grant_window" (
  "id" SERIAL PRIMARY KEY,
  "start_date" date,
  "end_date" date,
  "funds_available" int
);

CREATE TABLE "review_status" (
  "id" SERIAL PRIMARY KEY,
  "status" VARCHAR (50)
);

CREATE TABLE "focus_area" (
  "id" SERIAL PRIMARY KEY,
  "focus" VARCHAR (50)
);

CREATE TABLE "app" (
  "id" SERIAL PRIMARY KEY,
  "timeline" VARCHAR (1500) NOT NULL,
  "budget" int NOT NULL,
  "eval" VARCHAR (1500) NOT NULL,
  "date_received" date NOT NULL DEFAULT CURRENT_DATE,
  "grant_window_id" int REFERENCES "grant_window",
  "focus_area_id" int REFERENCES "focus_area",
  "user_id" int REFERENCES "user"
);

CREATE TABLE "review" (
  "id" SERIAL PRIMARY KEY,
  "app_id" int REFERENCES "app",
  "description_score" int,
  "goal_score" int,
  "population_score" int,
  "timeline_score" int,
  "eval_score" int,
  "review_date" date NOT NULL DEFAULT CURRENT_DATE,
  "review_status_id" int REFERENCES "review_status"
);

CREATE TABLE "notes" (
  "id" SERIAL PRIMARY KEY,
  "review_notes" VARCHAR (750),
  "date_added" date NOT NULL DEFAULT CURRENT_DATE,
  "review_id" int REFERENCES "review"
);