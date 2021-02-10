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

router.get('/header', rejectUnauthenticated, (req,res) => {
    const sqlText = `SELECT * FROM greeting_headers`;
    pool.query(sqlText)
    .then((result => {
        res.send(result.rows);
      }))
      .catch((error) => {
        console.log('Error retrieving all headers from the DB... ----->', error);
    });
});

router.get('/message', rejectUnauthenticated, (req,res) => {
    const sqlText = `SELECT * FROM greeting_messages`;
    pool.query(sqlText)
    .then((result => {
        res.send(result.rows);
      }))
      .catch((error) => {
        console.log('Error retrieving all messages from the DB... ----->', error);
      });
});

router.put('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `UPDATE `
})

module.exports = router;