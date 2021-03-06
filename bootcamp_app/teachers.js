const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
let cohortName = process.argv[2];
pool.query(`
SELECT DISTINCT(teachers.name), cohorts.name , count(id) as total_assistances
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER teachers.name;
`, [cohortName])
.then(res => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.name}`);
  })
}).catch(err => console.error('query error', err.stack));

