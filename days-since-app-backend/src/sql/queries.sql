-- name: create_schema#
-- create all tables necessary for the days-since-app
CREATE TABLE IF NOT EXISTS habit (
  habitid SERIAL PRIMARY KEY,
  reason_for_quitting TEXT NOT NULL
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
  INSERT INTO habit (reason_for_quitting) VALUES (:reason)
  RETURNING habitid
) 
INSERT INTO goal (habitid, goal_days)
SELECT habitid, :goal FROM temp_table;


-- name: add_new_habit_record!
-- add a new occurance of the habit
INSERT INTO habit_record (occurance, habitid) VALUES (DATE(NOW()), :habitid)