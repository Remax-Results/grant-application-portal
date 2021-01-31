
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const grantWindowRouter = require('./routes/grantWindow.router');
const applicationRouter = require('./routes/application.router');
const tableRouter = require('./routes/table.router');
const notesRouter = require('./routes/notes.router');
const reviewStatusRouter = require('./routes/reviewStatus.router');
const reviewRouter = require('./routes/review.router');
const focusAreaRouter = require('./routes/focusArea.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/grant-window', grantWindowRouter);
app.use('/api/application', applicationRouter);
app.use('/api/table', tableRouter);
app.use('/api/notes', notesRouter);
app.use('/api/review-status', reviewStatusRouter);
app.use('/api/review', reviewRouter);
app.use('/api/focus', focusAreaRouter);




// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
