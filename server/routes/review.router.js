const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put(`/`, (req, res) => {
  console.log(req.body);
  const sqlText = `UPDATE app_question
                   SET review_score=$1
                   WHERE app_id=$2 AND question_id=$3;`;
  pool.query(sqlText, [req.body.score, req.body.app_id, req.body.q_id])
  .then(result => 
    {res.sendStatus(200);
  })
  .catch((error) => {
      console.log('errors updating the score on the server', error);
  });
})

module.exports = router;
