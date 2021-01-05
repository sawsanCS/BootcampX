SELECT students.name as student , AVG (assignment_submissions.duration) as average_assignment_duration 
FROM students 
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
WHERE students.end_date IS NULL
ORDER BY average_assignment_duration DESC;