const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/current-window', (req, res) => {
  console.log('inside /api/grant-window/current-window')

  const sqlText = `SELECT * FROM grant_window
  WHERE now() BETWEEN grant_window.start_date AND grant_window.end_date;`
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows[0])
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.get('/previous-windows', (req, res) => {
  console.log('inside /api/grant-window/previous-windows')

  const sqlText = `
                  SELECT * FROM grant_window 
                  WHERE now() > end_date
                  ;`
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows[0])
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
