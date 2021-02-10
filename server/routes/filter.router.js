const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticatedAdmin } = require('../modules/admin-authentication-middleware');

router.get('/focus/:id', rejectUnauthenticatedAdmin, (req, res) => {
    const sqlText = `SELECT  a.id, a.date_received, a.budget,
                      u.org_name, u.contact_name, u.phone, u.username, 
                        f.focus, r.status   
                      FROM "user" as u
                      JOIN app AS a ON u.id=a.user_id
                      JOIN focus_area AS f ON a.focus_area_id=f.id
                      JOIN review_status AS r ON r.id=a.review_status_id
                      WHERE f.id = $1
                      ;`;
    pool.query(sqlText, [req.params.id])
    .then(result => {res.send(result.rows)})
    .catch(error=> console.log('Error retrieving app table data from server', error))
  });
  
  router.get('/status/:id', rejectUnauthenticatedAdmin, (req, res) => {
    const sqlText = `SELECT  a.id, a.date_received, a.budget,
                      u.org_name, u.contact_name, u.phone, u.username, 
                        f.focus, r.status   
                      FROM "user" as u
                      JOIN app AS a ON u.id=a.user_id
                      JOIN focus_area AS f ON a.focus_area_id=f.id
                      JOIN review_status AS r ON r.id=a.review_status_id
                      WHERE r.status = $1
                      ;`;
    pool.query(sqlText, [req.params.id])
    .then(result => {res.send(result.rows)})
    .catch(error=> console.log('Error retrieving app table data from server', error))
  });
  module.exports = router;