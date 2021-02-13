
-- If you need to restart the database, this drop statement will drop everything in the correct order. 
-- DROP TABLE budget_wording, greeting, app_question, ce_app_question, question, ce_question, app, ce_notes, notes, ce_app, app, grant_window, focus_area, review_status, "user";

--------------------- CREATE TABLES ------------------

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "org_name" VARCHAR (100),
  "background" VARCHAR (1000),
  "phone" VARCHAR (25),
  "contact_name" VARCHAR (150),
  "admin" boolean DEFAULT false,
  "remax_employee" boolean DEFAULT false

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
  "focus" VARCHAR (50),
  "active" BOOLEAN DEFAULT true
);

CREATE TABLE "app" (
  "id" SERIAL PRIMARY KEY,
  "date_received" date NOT NULL DEFAULT CURRENT_DATE,
  "grant_window_id" int REFERENCES "grant_window",
  "focus_area_id" int REFERENCES "focus_area",
  "user_id" int REFERENCES "user",
  "budget" INT,
  "review_status_id" int REFERENCES "review_status" DEFAULT 2
);

CREATE TABLE "question" (
  "id" SERIAL PRIMARY KEY,
  "question_text" varchar,
  "active" boolean DEFAULT true,
  "created" date DEFAULT CURRENT_DATE
);

CREATE TABLE "app_question" (
  "id" SERIAL PRIMARY KEY,
  "app_id" int REFERENCES "app",
  "question_id" int REFERENCES "question",
  "answer_text" varchar,
  "review_score" int
);

CREATE TABLE "notes" (
  "id" SERIAL PRIMARY KEY,
  "review_note" VARCHAR (750),
  "date_added" date NOT NULL DEFAULT CURRENT_DATE,
  "app_id" int REFERENCES "app"
);

CREATE TABLE "greeting" (
	"id" SERIAL PRIMARY KEY,
	"header" VARCHAR(100),
	"message" VARCHAR(1000),
	"render_position" INT 
);

CREATE TABLE "ce_app" (
	"id" SERIAL PRIMARY KEY,
	"date_received" date NOT NULL DEFAULT CURRENT_DATE,
	"focus_area_id" int REFERENCES "focus_area" DEFAULT 5,
	"user_id" int REFERENCES "user",
	"review_date" date DEFAULT null,
	"budget" INT,
	"review_status_id" int REFERENCES "review_status" DEFAULT 2
);

CREATE TABLE "ce_question" (
	"id" SERIAL PRIMARY KEY,
	"question_text" varchar,
	"active" boolean DEFAULT true,
	"created" date DEFAULT CURRENT_DATE
);

CREATE TABLE "ce_app_question"(
	"id" SERIAL PRIMARY KEY,
	"app_id" INT REFERENCES "ce_app",
	"question_id" INT REFERENCES "ce_question",
	"answer_text" varchar,
	"review_score" int
);

CREATE TABLE "ce_notes" (
	"id" SERIAL PRIMARY KEY,
	"review_note" VARCHAR (750),
	"date_added" date NOT NULL DEFAULT CURRENT_DATE,
	"app_id" INT REFERENCES "ce_app");

CREATE TABLE "budget_wording" (
  "id" SERIAL PRIMARY KEY,
  "question_wording" VARCHAR(120) NOT NULL
);

----------- TEST DATA INSERTS -----------------------------------

INSERT INTO "user"("username", "password", "org_name", "background", "phone", "contact_name", "admin") 
VALUES
('admin', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', 'Results Foundation', 'Grant-giving non-profit.', '651-123-4567', 'Blaire Molitor', TRUE),
('chester@bowl.com', '$2a$10$oYihePWEyOXnwkQ8Me6v0e8DJhs4swzIh3R62TwdrAaaU3d26snbi', 'Chester Bowl', 'Year-round program providing fun outdoor activities for youth of all ages and from all socio-economic backgrounds.', '612-765-4321', 'Chester A. Bowl', FALSE),
('wonderwall@oasis.net', '$2a$10$VzSE4kSvqLqeugiJjLp8mOuanYh5F.8FKGak.cb6K85AyPD5yF2mO', 'The Oasis Foundation', 'Bringing music to underprivileged kids in Liverpool', '4553678923', 'Liam Gallagher', FALSE),
('greenthumb@localgardens.org', '$2a$10$t8msWoIPpRDSEAr6p8VJGuwO5oYfIO51dhQNl7IQji.1Sl3Ytd0sS', 'Local Gardens Initiative', 'Community garden initiative designed to teach kids about healthy eating', '2345678901', 'Sara Greenleaf', FALSE),
('hermenegildo@pathways.net', '$2a$10$ImiBzvEVPdzuYzhdAHk45OOzEQnPdQY28mIIedcnEjGNjh4IqXYXC', 'Pathways', 'Pathways promotes cycling in the Twin Cities Community', '(474) 603-6266', 'Anja Hermenegildo', FALSE),
('bethney@arrow.org', '$2a$10$f7z103M5uz1v5QJBbP0iP.ynZQiVg79yIuWx4k75NC.il8oKoPpcu', 'Arrow.Org', 'Helping community leaders find a way.','(838) 388-5591', 'Padma Bethney', FALSE ),
('illarion@cycleforfitness.net', '$2a$10$AQkXXpA1B5RywJm7hvnmFOy5C17HgOyfpXRKGgN0g8qVbG01iqTnq', 'Cycle for Fitness!', 'We promote the cycling lifestyle as a way to promote health and fitness across the Iron Range', '(515) 764-6521', 'Torquil Illarion', FALSE),
('emil@mealsforrns.org', '$2a$10$eduvC1aV0bcUIfU1AODR9uNDnOl78zpgytOhBcbhDP/mToA4wVhiS', 'Meals for RNs', 'Providing food services for free for our brave front line workers', '(240) 791-6961', 'Morgan Emil', FALSE),
('kwesi@welcomemats.org', '$2a$10$4uoiusxZrsD5fhNNw737SuN.KzCeqflNBFWdKMAXuCvXI1Qt.MLiG', 'Welcome Mats', 'Renovating long-time occupancy homes for elderly members in our community', '(868) 946-7157', 'Kvetoslav Kwesi', FALSE),
('surya@chimneyproject.org', '$2a$10$V5c9Hw7K4ceXled7SMCN3u7EfUo7qmLfKPEnaXv2.615aw6Ds8U8m', 'The Chimney Project', 'Delivering educational toys and games to underserved communities in summertime when holiday fundraising tends to be more scarce.', '(502) 518-7719', 'Atanasio Surya', FALSE),
('clancy@inspiration.net', '$2a$10$PzogDJIhyResdRjS3ihC9uKVBlbSJR6E6sgHmKc5momulMICBFRy.', 'Inspiration Network', 'Bringing people in advanced degree professions to schools in communities where they tend not to live in order to engage the dreams of young people with positive role models.', '(219) 456-8816', 'Yolande Clancy', FALSE),
('nadzieja@uplift.net', '$2a$10$jQnZgGN6SVgzZY7CPb0tH.P3yS0WU5QBRxED4c/.va3hV7Kf8ZNOS', 'Uplift', 'Helping kids gain confidence through weightlifting', '(446) 859-8200', 'Qiana Nadzieja', FALSE),
('milena@winningeleven.net', '$2a$10$jm5x1HxTdWfOESAw/3Mf0.cOd3aKHx3i79s9RZNqzHdvFYX/cjh1i', 'The Winning Eleven Foundation', 'Using soccer to bring kids from communities across Minnesota together to meet, play, and exchange cultural values', '(236) 672-4956', 'Kevin Milena', FALSE),
('stepan@tissuerelief.org', '$2a$10$D9gBJe6J/U0yNs5h4ZJS6.UxPhh6HdMLS6LpBw.WRZ8meq5epClrG', 'Tissue Relief Foundation', 'An organization created to raise awareness for the importance of signing up to be a soft tissue donor.', '(544) 608-0019', 'Theodoros Stepan', FALSE),
('bernardo@codeforall.net', '$2a$10$pOu2uSuH6kDK2hI0E/Ba5enxX6wQFOFuDfCI0KQmmC5jP95vLJg1y', 'Code for All', 'Code for all brings access to coding camps for kids of all ages in the Twin cities metro', '(350) 529-1147', 'Tatenda Bernardo', FALSE);


INSERT INTO "grant_window"("start_date", "end_date", "funds_available") 
VALUES
('2020-09-01', '2020-12-30', 20000), ('2021-01-05', '2021-05-21', 20000);

INSERT INTO "focus_area"("focus") 
VALUES
('Education'), 
('Health'), 
('Mentorship'), 
('Housing'),
('Community Engagement');

INSERT INTO "review_status"("status") 
VALUES
('Accepted'), 
('Pending'), 
('Rejected');

INSERT INTO "app"("grant_window_id", "focus_area_id", "user_id", "budget", "review_status_id", "date_received") 
VALUES
(1, 3, 2, 2500, 2, '2020-09-21'),
(1, 1, 3, 1400, 2, '2020-10-12'),
(1, 2, 4, 2000, 2, '2020-10-24'),
(1, 2, 5, 1100, 3, '2020-11-12'),
(1, 1, 6, 500, 2, '2020-12-03'),
(2, 1, 7, 600, 1, '2021-01-02'),
(2, 2, 8, 900, 1, '2021-01-06'),
(2, 4, 9, 2900, 2, '2021-01-12'),
(2, 1, 10, 800, 1, '2021-01-17'),
(2, 1, 11, 600, 3, '2021-01-22'),
(2, 2, 12, 300, 2, '2021-01-27'),
(2, 3, 13, 1600, 3, '2021-02-02'),
(2, 2, 14, 400, 2, '2021-02-04'),
(2, 1, 15, 3000, 2, '2021-02-05');


INSERT INTO "question"("question_text") 
VALUES 
('Project Description or Description of Need'), 
('Goals and Objectives'), 
('Target Population'), 
('Timeline of Activities'), 
('How will you measure the use of funds issued by the grant?');

INSERT INTO "app_question"("app_id", "question_id", "answer_text")
VALUES 
(1, 1, 'Chester Bowl seeks to create a safe and fun way for children to experience the outdoors on a regular basis. Located in northern Minnesota, Chester Bowl has long been a staple of the community. Providing Summer Camp programs with scholarship opportunities in the Summer, as well as skiiing and snowboarding lessons on the hill in the winter.'), 
(1, 2, 'Our goal is to give today''s youth a safe place to be young and enjoy the wonderful things that nature in northern Minnesota has to offer.'), 
(1, 3, 'Teens & other youth.'), 
(1, 4, 'The activities these funds will be used for will take place over the winter months, from mid-October to the end of February.'), 
(1, 5, 'Success will be measured by ticket sales. If we can increase the amount of participants at Chester Bowl from last year this will be considered a successful use of funds.'),
(2, 1, 'The Oasis Foundation runs a 4-week rock and roll camp for kids without access to music education.'),
(2, 2, 'To spread education, inclusion and music'),
(2, 3, 'Teens from 13 - 17'),
(2, 4, 'January-March: Recruitment, April - June: Preparation, July: Camp, August: Evaluation, November: Planning for next year'),
(2, 5, 'Students and counselors will evaluate the program upon its completion.'),
(3, 1, 'This project turns abandoned urban spaces into community gardens '), 
(3, 2, 'To teach kids about healthy eating, plant care, and the value of investing in the community.'),
(3, 3, 'Children ages 6 and up'),
(3, 4, 'January: Acquisition of materials, February - March: Greenhouse growing, April: Beginning of community classes, May - August: gardening!, September: Harvest Party!'),
(3, 5, 'By the amount of contact our program is able to make with the community, bringing in gardeners, volunteers, and other organizations to help our garden grow.');


INSERT INTO greeting ("header", "message", "render_position")
VALUES ('About Us', 'The Results Foundation was established in 2015 by RE/MAX Results to give back to local communities by providing grants and scholarships to organizations and individuals 
throughout Minnesota and Wisconsin, believing there’s no greater investment than helping individuals and communities overcome obstacles and achieve their goals. Inspired by the philanthropic work of the Sales Executives and staff of RE/MAX Results, the foundation has donated nearly $250,000 in grants to date.', 1),
('Mission','To partner with community organizations and educational institutions in Minnesota and Wisconsin to empower individuals to achieve success through housing, health, education, and mentoring programs.', 2),
('Funding', 'A portion of every closed sale from RE/MAX Results and Results Title is donated to the foundation. Funding is also provided via Results Foundation events including the annual golf tournament, Rock the Foundation, as well as donations from generous individuals and community partners.', 3);


INSERT INTO "ce_question"("question_text")
VALUES
('Organization or Event Name'),
('Organization or event information'),
('Description of request'),
('How does this request support the community?'),
('Request timeline, when is the funding needed?');

INSERT INTO "user" ("username", "password", "phone", "contact_name", "remax_employee")
VALUES
('lara_the_realtor@results.net', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', '651-867-5309', 'Lara T. Realtor', true),
('gregboehmer@results.net', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', '612-423-3142', 'Greg Boehmer', true),
('denisewilson@results.net', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', '612-123-4123', 'Denise Wilson', true),
('donnadragoo@results.net', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', '612-425-5436', 'Donna Dragoo', true),
('larryriviera@results.net', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', '612-126-6425', 'Larry Riviera', true),
('ryantemple@results.net', '$2a$10$3iBnDAz5DQ.qZjJrzIHUbe3OGJhQY/Zhgh8JSxdX27fOZWF78H17.', '612-634-9353', 'Ryan Temple', true)

;

INSERT INTO "ce_app" ("user_id", "budget")
VALUES
(16, 2500), (17, 2100), (18, 1100), (19, 1200), (20, 1600), (21, 1600)
;

INSERT INTO "ce_app_question"("app_id", "question_id", "answer_text")
VALUES
(1, 1, 'Helping Hands of MN'),
(1, 2, 'Feeding the sick and homebound hot and from scratch meals'),
(1, 3, 'We will pay for the supplies needed to make 200 from scratch meals for homebound hospice patients'),
(1, 4, 'This supports the community by feeding and lifting the spirits of those unseen by many, it will also get us points with the big guy upstairs because hey helping the sick yo'),
(1, 5, 'We would like the requested amount in May, as that is when the charity typically sees its lowest donations but highest need');

INSERT INTO "ce_app_question"("app_id", "question_id", "answer_text")
VALUES
(1, 1, 'Helping Hands of MN'),
(1, 2, 'Feeding the sick and homebound hot and from scratch meals'),
(1, 3, 'We will pay for the supplies needed to make 200 from scratch meals for homebound hospice patients'),
(1, 4, 'This supports the community by feeding and lifting the spirits of those unseen by many, it will also get us points with the big guy upstairs because hey helping the sick yo'),
(1, 5, 'We would like the requested amount in May, as that is when the charity typically sees its lowest donations but highest need');

INSERT INTO "budget_wording" ("question_wording")
VALUES ('Budget');