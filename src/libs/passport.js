require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//Konfigurasi strategi oauth google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// serialize to create session
passport.serializeUser((user, done) => {
  return done(null, user);
});

// deserialize to Delete session
passport.deserializeUser((user, done) => {
  return done(null, user);
});

module.exports = passport;
