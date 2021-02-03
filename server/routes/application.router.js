const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // this function is taking the dynamic object coming over
  // from the client, and for each piece of that object it will 
  // make an insert into the database
  console.log('if this goes off at least I know at least the thing made it here....');
  const insertApp = (appData) => {
    for (let question of appData) {
      const sqlText = `INSERT INTO "app_question"("app_id", "question_id", "answer_text")
                      VALUES ($1, $2, $3);`;
      pool.query(sqlText, [question.id, question.id, question.answer_text])
          .then(result => {
            res.sendStatus(201);
          }).catch(error => {
            console.log('error adding application question answer to the database... ------>', error);
            res.sendStatus(500);
          });
    }
  };
});

module.exports = router;
