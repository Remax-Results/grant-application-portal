const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  sqlText = `SELECT  a.id, a.budget, a.date_received, 
            u.org_name, u.contact_name, u.phone, u.username, 
              f.focus, r.status   
            FROM "user" as u
            JOIN app AS a ON u.id=a.user_id
            JOIN focus_area AS f ON a.focus_area_id=f.id
            JOIN review_status AS r ON r.id=a.review_status_id;`;
  pool.query(sqlText)
  .then(result => {console.log(result.rows); res.send(result.rows)})
  .catch(error=> console.log('Error retrieving app table data', error))
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
