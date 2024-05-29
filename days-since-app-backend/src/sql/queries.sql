-- name: create_schema#
-- create all tables necessary for the days-since-app
CREATE TABLE IF NOT EXISTS habit (
  habitid SERIAL PRIMARY KEY,
  habit_name TEXT NOT NULL,
  reason_for_quitting TEXT NOT NULL
  icon_name TEXT
);

CREATE TABLE IF NOT EXISTS habit_record (
  occurance DATE,
  habitid INT REFERENCES habit(habitid) ON DELETE CASCADE,
  PRIMARY KEY (habitid, occurance)
);

CREATE TABLE IF NOT EXISTS goal (
  goalid SERIAL PRIMARY KEY,
  habitid INT REFERENCES habit(habitid) ON DELETE CASCADE,
  goal_days INT
);

CREATE TABLE IF NOT EXISTS milestone (
  number_of_days INT PRIMARY KEY
);



-- name: add_new_habit!
-- add a new habit to the habit tracker, without returning a new id
WITH temp_table AS (
  INSERT INTO habit (habit_name, reason_for_quitting, icon_name) VALUES (:habit_name, :reason, :icon_name)
  RETURNING habitid
) 
INSERT INTO goal (habitid, goal_days)
SELECT habitid, :goal FROM temp_table;



-- name: add_new_habit_record!
-- add a new occurance of the habit
INSERT INTO habit_record (occurance, habitid) VALUES (DATE(NOW()), :habitid);



-- name: get_all_habits
-- get all habit records, and the associated number of days for their streak
-- WITH temp_table AS (
--   SELECT habitid, habit_name
--   FROM habit
-- )
-- SELECT COUNT(*) as habit_streak