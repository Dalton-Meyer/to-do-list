# Project Name

Weekend SQL To Do List

## Description

Duration: 1 Weekend
This is just a simple to-do list built with jQuery and SQL. All the information to recreate it yourself should all be here.
Plus a couple example to tasks just to see how everything works and test it out. 

## Installation

Started off creating my database in pgAdmin4 with these SQL commands:

CREATE DATABASE "weekend-to-do-app";

CREATE TABLE "to_do" (
    "id" serial primary key,
    "date_start" date,
    "date_end" date,
    "task" varchar(500) not null,
    "done" varchar(50) DEFAULT 'not finished',
);

Here are some inputs to start off with on page:

INSERT INTO "to_do" ("date_start", "date_end", "task")
VALUES ('2020-06-08', '2020-06-10', 'Clean the house'),
('2020-06-08', '2020-06-15', 'Dentist Appointment'),
('2020-06-09', '2020-06-20', 'Change the timing chain on car');

## Usage

It's a simple to do list for anyone to use. All you do is type in the task you would like to complete.
Select a date you would like to have the task done by, then it sends it off and stores it into the database.
When you click submit it automatically sets the start date as the day you sent it.
When you finish it you can either mark it as completed and the yellow button will turn green signifying that the
task it complete. Or once you are completely finished with it all you have to do is hit the red remove button.

## Built with

This project was built using:
HTML,
CSS,
Javascript,
SQL,
Express.js,
Moment.js,
PG,
Bootstrap

## Acknowledgement

To my teachers at Emerging Digital Academy.


