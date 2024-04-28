require('dotenv').config();
const express = require('express');
const session = require('express-session');

const router = require('./src/routes/router');
const passport = require('./src/libs/passport');

const port = process.env.PORT || 3000;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
