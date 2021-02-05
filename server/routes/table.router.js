const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//gets all application details -- admin only view
router.get('/', rejectUnauthenticated, (req, res) => {
  if(req.user.admin){
    sqlText = `SELECT  a.id, a.date_received, aq.answer_text AS budget,
    u.org_name, u.contact_name, u.phone, u.username, 
      f.focus, r.status   
    FROM "user" as u
    JOIN app AS a ON u.id=a.user_id
    JOIN focus_area AS f ON a.focus_area_id=f.id
    JOIN review_status AS r ON r.id=a.review_status_id
    JOIN app_question AS aq ON aq.app_id=a.id WHERE aq.question_id=5;`;
    pool.query(sqlText)
    .then(result => {res.send(result.rows)})
    .catch(error=> console.log('Error retrieving app table data from server', error))
  }
});

//gets single application detail --admin only
router.get('/:id', rejectUnauthenticated, (req, res) => {
  if(req.user.admin){
    sqlText= `SELECT  a.id, a.date_received, u.background, u.org_name, u.contact_name, 
              u.phone, u.username, f.focus, r.status  
              FROM "user" as u
              JOIN app AS a ON u.id=a.user_id
              JOIN focus_area AS f ON a.focus_area_id=f.id
              JOIN review_status AS r ON r.id=a.review_status_id 
              WHERE a.id=$1;`;
              pool.query(sqlText, [req.params.id])
              .then(result => {console.log(result.rows); res.send(result.rows[0])})
              .catch(error=> console.log('Error retrieving app details page data from server', error))
  }   
});

//getting just budget from application
router.get(`/budget/:id`, rejectUnauthenticated, (req, res) => {
    if(req.user.admin){
    sqlText = `SELECT answer_text AS budget FROM app_question WHERE app_id=$1 AND question_id=5;`;
    pool.query(sqlText, [req.params.id])
    .then(result => {res.send(result.rows[0])})
    .catch(error=> console.log('Error retrieving app table data from server', error))
    }
});

module.exports = router;
