const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM review_status;`;
  pool.query(sqlText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('error retrieving review_statuses from the database... ----->', error);
  })
});


router.put('/', (req, res) => {
  
});

module.exports = router;
