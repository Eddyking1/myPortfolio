const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const googleUser = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //turn to a model instance
  googleUser.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //kollar efter existing user i backendet
      const existingUser = await googleUser.findOne({ googleId: profile.id });

      if (existingUser) {
        //Finns en user redan
        return done(null, existingUser);
      }
      //om inte finns user Skapa ny user
      const user = await new googleUser({ googleId: profile.id, email: profile.emails[0].value }).save();
      done(null, user);
    }
  )
);
