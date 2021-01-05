SELECT cohorts.name, count(assignment_submissions.*) as total_submissions
FROM cohorts 
JOIN students ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
ORDER BY count(assignment_submissions.*) DESC;