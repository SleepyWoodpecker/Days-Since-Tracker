-- a query to get the longest consecutive streak

SELECT habitid,
  CASE 
    WHEN LEAD(occurance_start_day) OVER (ORDER BY occurance_start_day) IS NOT NULL THEN LEAD(occurance_start_day) OVER (ORDER BY occurance_start_day) - occurance_end_day
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
  )
  GROUP BY habitid, occurance - seqnum * INTERVAL '1 day'
  ORDER BY occurance_start_day
)
WHERE habitid = 2;
