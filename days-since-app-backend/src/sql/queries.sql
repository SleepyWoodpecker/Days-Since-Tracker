-- name: create_schema#
-- create all tables necessary for the days-since-app
CREATE TABLE IF NOT EXISTS habit (
  habitid SERIAL PRIMARY KEY,
  habit_name TEXT NOT NULL,
  reason_for_quitting TEXT NOT NULL,
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



-- name: get_longest_streak
-- get the longest streak for all traked habits
SELECT max(streak)
FROM (
  SELECT 
    habit.habitid, 
    streak,
    occurance_start_day,
    occurance_end_day
  FROM 
  habit,
  LATERAL (  
    SELECT habitid,
      CASE 
        WHEN LEAD(occurance_start_day) OVER (ORDER BY occurance_start_day) IS NOT NULL THEN (LEAD(occurance_start_day) OVER (ORDER BY occurance_start_day) - occurance_end_day - 1) -- subtract 1 here because the next start day is when the streak is broken
        ELSE DATE(NOW()) - occurance_end_day
      END AS streak,
      occurance_start_day,
      occurance_end_day
    FROM (
      SELECT 
        habitid,
        min(occurance) as occurance_start_day,
        max(occurance) as occurance_end_day
      FROM (
        SELECT occurance, habitid,
        ROW_NUMBER() OVER (
          PARTITION BY habitid
          ORDER BY occurance
        ) as seqnum
        FROM habit_record
        WHERE habitid = habit.habitid
      )
      GROUP BY habitid, occurance - seqnum * INTERVAL '1 day'
      ORDER BY occurance_start_day
    )
  )
)
LIMIT 1;



-- name: get_longest_streak_for_habit
-- given a habitid, find the longest streak for that habit
SELECT 
    max(streak)
FROM (  
  SELECT habitid,
    CASE 
      WHEN LEAD(occurance_start_day) OVER (ORDER BY occurance_start_day) IS NOT NULL THEN (LEAD(occurance_start_day) OVER (ORDER BY occurance_start_day) - occurance_end_day - 1) -- subtract 1 here because the next start day is when the streak is broken
      ELSE DATE(NOW()) - occurance_end_day
    END AS streak,
    occurance_start_day,
    occurance_end_day
  FROM (
    SELECT 
      habitid,
      min(occurance) as occurance_start_day,
      max(occurance) as occurance_end_day
    FROM (
      SELECT occurance, habitid,
      ROW_NUMBER() OVER (
        PARTITION BY habitid
        ORDER BY occurance
      ) as seqnum
      FROM habit_record
      WHERE habitid = (:habitid)
    )
    GROUP BY habitid, occurance - seqnum * INTERVAL '1 day'
    ORDER BY occurance_start_day
  )
)
LIMIT 1;