const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/active', rejectUnauthenticated, (req,res) => {
    const sqlText = `SELECT gh.render_position, gh.header, gm.message FROM greeting_headers AS gh
                JOIN greeting_messages AS gm ON gh.render_position=gm.render_position
                WHERE gh.render_position > 0
                ORDER BY gh.render_position;`
    pool.query(sqlText)
    .then((result => {
        res.send(result.rows);
      }))
    .catch((error) => {
        console.log('Error retrieving greetings from the DB... ----->', error);
    });
});

router.get('/', rejectUnauthenticated, (req,res) => {
    const sqlText = `SELECT * FROM greeting ORDER BY render_position;`;
    pool.query(sqlText)
    .then((result => {
        res.send(result.rows);
      }))
      .catch((error) => {
        console.log('Error retrieving greetings from the DB... ----->', error);
    });
});


router.put('/', rejectUnauthenticated, (req, res) => {
  const {header, message, render_position} = req.body;
  const sqlText = `UPDATE greeting SET header=$1, message=$2 WHERE render_position=$3;`;
  pool.query(sqlText, [header, message, render_position])
    .then((result => {
        res.sendStatus(200);
      }))
      .catch((error) => {
        console.log('Error udpating greetings from the server... ----->', error);
    });
})

module.exports = router;