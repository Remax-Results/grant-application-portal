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

// Toggles a question between active and inactive.
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

// Update the question text of a particular question.
router.put('/question-text/:id', rejectUnauthenticated, (req, res, next) => 
{
  if (req.user.admin){
 
    const sqlText = `
                    UPDATE question
                    SET question_text = $1
                    WHERE id=$2
                    ;`
    pool
      .query(sqlText, [req.body.newText, req.params.id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('question/question-text PUT failed ', err);
        res.sendStatus(500);
      });
  } 
});

// Post new question
router.post('/', rejectUnauthenticated, (req, res, next) => 
{
  if (req.user.admin){
    const sqlText = `INSERT INTO question (question_text) VALUES ($1);`
    pool
      .query(sqlText, [req.body.newQuestion])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('question/ POST failed ', err);
        res.sendStatus(500);
      });
  } 
});

module.exports = router;