const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get all of focus areas for editing in question management
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "focus_area";`;
  pool.query(sqlText).then(result => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error retrieving list of focus areas from the DB... ----->', error);
  });
});

// Get all active focus areas for the applications
router.get('/active', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "focus_area" WHERE "active"=true;`;
  pool.query(sqlText).then(result => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error retrieving list of focus areas from the DB... ----->', error);
  });
});

module.exports = router;
