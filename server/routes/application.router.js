const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Route to get the review status for a particular application.  user view
router.get(`/status/:id`, rejectUnauthenticated, (req, res) => {
  
  
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


router.get('/:id', rejectUnauthenticated, (req, res) => {
  if(req.user.admin){

    const sqlText= `SELECT  a.id, a.date_received, u.org_name, u.contact_name, 
              u.phone, u.username, f.focus, r.status  
              FROM "user" as u
              JOIN app AS a ON u.id=a.user_id
              JOIN focus_area AS f ON a.focus_area_id=f.id
              JOIN review_status AS r ON r.id=a.review_status_id 
              WHERE a.id=$1;`;
              pool.query(sqlText, [req.params.id])
              .then(result => {console.log(result.rows); res.send(result.rows[0])})
              .catch(error=> console.log('Error retrieving app details page data from server', error))
            }
          });
//^this route also has admin protection
  
// this route is POSTing the new grant application from the user acount
router.post('/', rejectUnauthenticated, async (req, res) => {
  // this function is taking the dynamic object coming over
  // and destructuring it, before using the pieces to insert 
  // the full application with all the information into the DB
  const { values, grant_window_id, user_id, focus_area_id } = req.body;

  // destructuring the object to map over key value pairs
  const questionIdArray = Object.keys(values);
  const questionAnswerArray = Object.values(values);
  

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
