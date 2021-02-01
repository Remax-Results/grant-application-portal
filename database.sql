--------------------- CREATE TABLES ------------------

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "org_name" VARCHAR (100),
  "background" VARCHAR (1000),
  "phone" VARCHAR (25),
  "contact_name" VARCHAR (150),
  "statement" VARCHAR (1000),
  "goal" VARCHAR (1000),
  "population" VARCHAR (500),
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
  "user_id" int REFERENCES "user",
  "review_date" date DEFAULT null,
  "review_status_id" int REFERENCES "review_status"
);

CREATE TABLE "notes" (
  "id" SERIAL PRIMARY KEY,
  "review_note" VARCHAR (750),
  "date_added" date NOT NULL DEFAULT CURRENT_DATE,
  "app_id" int REFERENCES "app"
);

----------- TEST DATA INSERTS -----------------------------------

INSERT INTO "user"("username", "password", "org_name", "background", "phone", "contact_name", "admin") 
VALUES
('admin', 'adminadmin', 'Results Foundation', 'Grant-giving non-profit.', '651-123-4567', 'Blaire Molitor', TRUE);

INSERT INTO "user"("username", "password", "org_name", "background", "phone", "contact_name", "statement", "goal", "population", "admin") 
VALUES 
('chester@bowl.com', 'chesterbowl', 'Chester Bowl', 'Year-round program providing fun outdoor activities for youth of all ages and from all socio-economic backgrounds.', '612-765-4321', 'Chester A. Bowl', 'Chester Bowl provides a safe place for children of all ages to get outside with their peers and enjoy all the bounties that nature has to offer.', 'Chester Bowls'' main goal is to increase the overall health and happiness of youth in the community.', 'Teens and other Youth.', FALSE);

INSERT INTO "grant_window"("start_date", "end_date", "funds_available") VALUES('2021-01-29', '2021-06-21', 20000);

INSERT INTO "focus_area"("focus") VALUES('Education'), ('Health'), ('Mentorship'), ('Housing');

INSERT INTO "review_status"("status") VALUES('Accepted'), ('Pending'), ('Rejected');

INSERT INTO "app"("timeline", "budget", "eval", "grant_window_id", "focus_area_id", "user_id") VALUES('The activities these funds will be used for will take place over the winter months, from mid-October to the end of February.', 2500, 'Success will be measured by ticket sales. If we can increase the amount of participants at Chester Bowl from last year this will be considered a successful use of funds.', 1, 3, 2);