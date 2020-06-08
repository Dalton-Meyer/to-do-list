CREATE DATABASE "weekend-to-do-app"

CREATE TABLE "to_do" (
    "id" serial primary key,
    "date_start" date,
    "date_end" date,
    "task" varchar(500) not null,
    "done" varchar(50) DEFAULT 'not finished',
);

INSERT INTO "to_do" ("date_start", "date_end", "task")
VALUES ('2020-06-08', '2020-06-10', 'Clean the house'),
('2020-06-08', '2020-06-15', 'Dentist Appointment'),
('2020-06-09', '2020-06-20', 'Change the timing chain on car');