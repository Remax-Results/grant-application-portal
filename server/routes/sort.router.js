const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/org/desc', (req, res) => {
    console.log('in sort route');
    sqlText = `SELECT  a.id, a.date_received, aq.answer_text AS budget,
    u.org_name, u.contact_name, u.phone, u.username, 
      f.focus, r.status   
    FROM "user" as u
    JOIN app AS a ON u.id=a.user_id
    JOIN focus_area AS f ON a.focus_area_id=f.id
    JOIN review_status AS r ON r.id=a.review_status_id
    JOIN app_question AS aq ON aq.app_id=a.id WHERE aq.question_id=5
    ORDER BY u.org_name DESC;`;
    pool.query(sqlText)
    .then(result => {res.send(result.rows)})
    .catch(error=> console.log('Error retrieving app table data from server', error))
  });

  router.get('/org', (req, res) => {
    console.log('in sort route');
    sqlText = `SELECT  a.id, a.date_received, aq.answer_text AS budget,
                u.org_name, u.contact_name, u.phone, u.username, 
                  f.focus, r.status   
                FROM "user" as u
                JOIN app AS a ON u.id=a.user_id
                JOIN focus_area AS f ON a.focus_area_id=f.id
                JOIN review_status AS r ON r.id=a.review_status_id
                JOIN app_question AS aq ON aq.app_id=a.id WHERE aq.question_id=5
                ORDER BY u.org_name;`;
    pool.query(sqlText)
    .then(result => {res.send(result.rows)})
    .catch(error=> console.log('Error retrieving app table data from server', error))
  }); 

  module.exports = router;