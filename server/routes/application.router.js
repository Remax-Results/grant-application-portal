const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

router.get(`/status/:id`, (req, res) => {
  console.log('inside /api/application/status')

  const sqlText = `SELECT rs.status FROM "user" AS u JOIN app ON u.id=app.user_id
  JOIN review_status AS rs ON app.review_status_id=rs.id WHERE u.id=$1;`;
  pool
    .query(sqlText, [req.params.id])
    .then((result) => {
      res.send(result.rows[0])
    })
    .catch((err) => {
      console.log('status check failed', err);
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
