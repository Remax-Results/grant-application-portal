const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  const sqlText = `SELECT * FROM notes WHERE app_id=$1;`;
  pool.query(sqlText, [req.params.id])
  .then(result => {
    res.send(result.rows); 
  })
  .catch((error) => {
    console.log('error retrieving notes the database... -------->', error);
  });
});


router.post('/', (req, res) => {
  const {note, app_id} = req.body;
  const sqlText =  `INSERT INTO notes (review_note, app_id) VALUES ($1, $2);`;
  console.log('in post note', note, app_id);
  pool.query(sqlText, [note, app_id])
  .then(result => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error posting new note to database from server', error)
  })
});

router.delete(`/:id`, (req, res) => {
  const sqlText = `DELETE FROM notes WHERE id=$1;`;
  pool.query(sqlText, [req.params.id])
  .then(result => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error deleting note from server', error)
  })
})

module.exports = router;
