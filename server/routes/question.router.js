const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', (req, res) => { // GET all questions
  const sqlText = `SELECT * FROM "question" ORDER BY id ASC;`;
  pool.query(sqlText).then(result => {
      res.send(result.rows); // sending back application questions
  }).catch((error) => {
      console.log('error retrieving application questions from the database... -------->', error);
  });
});

router.get('/active', (req, res) => { // GET all active questions
  const sqlText = `SELECT * FROM "question" WHERE "active"=TRUE;`;
  pool.query(sqlText).then(result => {
      res.send(result.rows); // sending back application questions
  }).catch((error) => {
      console.log('error retrieving active application questions from the database... -------->', error);
  });
});


router.get('/:id', (req, res) => { // GET all active questions from a specific application
  const sqlText = ` SELECT q.id, q.question_text, aq.answer_text, aq.review_score 
                    FROM question AS q
                    JOIN app_question AS aq ON q.id=aq.question_id
                    WHERE "active"=TRUE AND aq.app_id=$1;`;
  pool.query(sqlText, [req.params.id]).then(result => {
      res.send(result.rows); // sending back application questions
  }).catch((error) => {
      console.log('error retrieving application questions from the database... -------->', error);
  });
});

router.put('/question-status/:id', rejectUnauthenticated, (req, res, next) => 
{
  if (req.user.admin){
 
    const sqlText = `
                    UPDATE question
                    SET active = $1
                    WHERE id=$2
                    ;`
    pool
      .query(sqlText, [req.body.newStatus, req.params.id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('question/question-status PUT failed ', err);
        res.sendStatus(500);
      });
  } 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;