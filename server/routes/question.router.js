const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => { // GET all active questions
  const sqlText = `SELECT * FROM "question" WHERE "active"=TRUE;`;
  pool.query(sqlText).then(result => {
      res.send(result.rows); // sending back application questions
  }).catch((error) => {
      console.log('error retrieving application questions from the database... -------->', error);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;