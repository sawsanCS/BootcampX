SELECT day, count(assignment_id), sum(duration)
FROM assignments
GROUP BY day
ORDER BY day;