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
router.post('/', async (req, res) => {
  // this function is taking the dynamic object coming over
  // and destructuring it, before using the pieces to insert 
  // the full application with all the information into the DB
  const { values, grant_window_id, user_id, focus_area_id } = req.body;
  console.log('values are --->', values);
  console.log('grant_window_id is --->', grant_window_id);
  console.log('user_id is --->', user_id);
  console.log('focus_area_id is --->', focus_area_id);

  // destructuring the object to map over key value pairs
  const questionIdArray = Object.keys(values);
  const questionAnswerArray = Object.values(values);
  console.log('question id array... --->', questionIdArray);
  console.log('question answer array... --->', questionAnswerArray);

  // pool connection
  const client = await pool.connect();
  
  // begin POST route, first inserting the app
  try {
    await client.query('BEGIN;')
    const sqlInsertAppReturnId = 
          await client.query(`INSERT INTO "app"("grant_window_id", "focus_area_id", "user_id")
            VALUES ($1, $2, $3) 
            RETURNING "id";`, [grant_window_id, focus_area_id, user_id]);
          
    // grab app_id
    const app_id = sqlInsertAppReturnId.rows[0].id;

    // using app_id, insert application answers into DB
    await Promise.all(questionIdArray.map((id) => {
      const insertAppQuestionText = `INSERT INTO "app_question"("app_id", "question_id", "answer_text")
                                      VALUES ($1, $2, $3);`;
      const insertAppQuestionValues = [app_id, id, values[id]];
      return client.query(insertAppQuestionText, insertAppQuestionValues);
    }));

    // commit the changes
    await client.query('COMMIT;');
    res.sendStatus(201);
  } catch (error) {
    // rollback changes in case of errors
    await client.query('ROLLBACK;');
    console.log('Error POSTing application to database... --->', error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
  
});

module.exports = router;
