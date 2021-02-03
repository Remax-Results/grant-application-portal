const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  sqlText= `SELECT  a.id, a.date_received, u.org_name, u.contact_name, 
            u.phone, u.username, f.focus, r.status  
            FROM "user" as u
            JOIN app AS a ON u.id=a.user_id
            JOIN focus_area AS f ON a.focus_area_id=f.id
            JOIN review_status AS r ON r.id=a.review_status_id 
            WHERE a.id=$1;`;
            pool.query(sqlText, [req.params.id])
            .then(result => {console.log(result.rows); res.send(result.rows[0])})
            .catch(error=> console.log('Error retrieving app details page data from server', error))
          });

          

router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
