const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  sqlText = `SELECT  a.id, a.date_received, aq.answer_text AS budget,
  u.org_name, u.contact_name, u.phone, u.username, 
    f.focus, r.status   
  FROM "user" as u
  JOIN app AS a ON u.id=a.user_id
  JOIN focus_area AS f ON a.focus_area_id=f.id
  JOIN review_status AS r ON r.id=a.review_status_id
  JOIN app_question AS aq ON aq.app_id=a.id WHERE aq.question_id=5;`;
  pool.query(sqlText)
  .then(result => {console.log(result.rows); res.send(result.rows)})
  .catch(error=> console.log('Error retrieving app table data', error))
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
