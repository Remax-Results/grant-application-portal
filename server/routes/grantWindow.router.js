const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get route for current grant window, if one is currently open.
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


// Route to get previous grant windows and the amount of applications within that grant window.
router.get('/previous-windows', (req, res) => {
  console.log('inside /api/grant-window/previous-windows')

  const sqlText = `
                  SELECT g.id, g.start_date, g.end_date, COUNT(a.id) AS app_count FROM grant_window AS g
                  LEFT JOIN app AS a ON a.grant_window_id = g.id 
                  WHERE now() > end_date
                  GROUP BY g.id
                  ORDER BY g.end_date DESC
                  ;`
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows)
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
