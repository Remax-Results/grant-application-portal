const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get route for current grant window, if one is currently open.
router.get('/current-window', (req, res) => {
  console.log('inside /api/grant-window/current-window')

  const sqlText = `
                  SELECT g.id, g.start_date, g.end_date, g.funds_available, count(a.id) AS app_count FROM grant_window AS g
                  LEFT JOIN app AS a ON a.grant_window_id = g.id
                  WHERE now() BETWEEN g.start_date AND g.end_date
                  GROUP BY g.id
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


// Route to get previous grant windows and the amount of applications within that grant window.
router.get('/previous-windows', rejectUnauthenticated, (req, res) => {
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


router.post('/', rejectUnauthenticated, (req, res, next) => {
  if (req.user.admin){
    const { startDate, endDate, budget } = req.body
    console.log('inside post route', startDate);
    console.log('inside post route', endDate);
  
    const sqlText = `
                    INSERT INTO grant_window
                    (start_date, end_date, funds_available)
                    VALUES ($1, $2, $3)
                    ;`
    pool
      .query(sqlText, [startDate, endDate, budget])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('grantWindow POST failed ', err);
        res.sendStatus(500);
      });
  } 
});

router.put('/close/:id', rejectUnauthenticated, (req, res, next) => {
  if (req.user.admin){
 
    const sqlText = `
                    UPDATE grant_window
                    SET end_date = now()
                    WHERE grant_window.id=$1
                    ;`
    pool
      .query(sqlText, [req.params.id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('grantWindow/close PUT failed ', err);
        res.sendStatus(500);
      });
  } 
});

router.put('/:id', rejectUnauthenticated, (req, res, next) => {
  const { startDate, endDate, budget } = req.body;

  if (req.user.admin){
 
    const sqlText = `
                    UPDATE grant_window
                    SET start_date = $1,
                    end_date = $2,
                    funds_available = $3
                    WHERE grant_window.id = $4
                    ;`
    pool
      .query(sqlText, [startDate, endDate, budget, req.params.id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('grantWindow/close PUT failed ', err);
        res.sendStatus(500);
      });
  } 
});

module.exports = router;
