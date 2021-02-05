const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET route for grabbing application data when user logs in
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('current window id is..... --->', req.params.id);
    console.log('current user id is..... --->', req.user.id);
    // userId and windowId will help to grab the right application
    const windowId = req.params.id;
    const userId = req.user.id;
    const sqlText = 
    `SELECT "date_received", "grant_window_id", "focus_area_id", "user_id", "review_date", "review_status_id" 
    FROM "app" 
    JOIN "grant_window" ON "grant_window".id="app".grant_window_id
    JOIN "user" ON "user".id="app".user_id
    WHERE "user".id=$1;`;
    pool.query(sqlText, [userId]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error retrieving users application details... --->', error);
        res.sendStatus(500);
    })
});

module.exports = router;