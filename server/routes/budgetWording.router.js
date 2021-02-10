const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get wording for the budget question
router.get('/', (req, res) => {
    console.log('in router') 
    const sqlText = `SELECT * FROM budget_wording;`
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows[0]); // send back budget wording
    }).catch((error) => {
        console.log('error retrieving budget wording from the database... -------->', error);
    });
  });

  module.exports = router