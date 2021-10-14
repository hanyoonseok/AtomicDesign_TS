const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });
  passport.deserializeUser(async (email, done) => {
    try {
      const user = await User.findOne({ where: { email } });
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });
  local();
};
