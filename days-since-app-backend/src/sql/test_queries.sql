SELECT max(streak), habit_name
FROM (
  SELECT 
    habit.habitid, 
    habit_name,
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
GROUP BY habit_name
LIMIT 1;
