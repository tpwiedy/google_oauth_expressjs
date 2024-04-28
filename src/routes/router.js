const router = require('express').Router();
const passport = require('./../libs/passport');

// google login
router.get(
  '/google/oauth',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// google login callback
router.get(
  '/google/oauth/callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);

module.exports = router;
