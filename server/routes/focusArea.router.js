const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get all of the options from the focus area table to populate the dropdown menu in the grant application.
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "focus_area";`;
  pool.query(sqlText).then(result => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error retrieving list of focus areas from the DB... ----->', error);
  });
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
