// index.js

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Configure session middleware
app.use(
  session({
    secret: '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',
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: '66316074605-6eh4jkj4dcu6pj6as8vllinv6e81rueg.apps.googleusercontent.com',  // Replace with your Client ID
      clientSecret: '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',  // Replace with your Client Secret
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('Access Token:', accessToken);
      console.log('Profile:', profile);
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user to maintain session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes

// Home page route
app.get('/', (req, res) => {
  res.render('home');
});

// Login route - Initiates Google OAuth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route - Handles response from Google
app.get(
    '/auth/google/callback',
    (req, res, next) => {
      passport.authenticate('google', (err, user) => {
        if (err) {
          console.error('OAuth Error:', err);  // Log detailed error
          return res.redirect('/');
        }
        req.logIn(user, (err) => {
          if (err) {
            console.error('Login Error:', err);
            return res.redirect('/');
          }
          return res.redirect('/profile');
        });
      })(req, res, next);
    }
  );
  

// Profile route - Displays user's Google profile info
app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('profile', { user: req.user });
});

// Logout route - Terminates the session
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log('Logout error:', err);
      return next(err);
    }
    res.redirect('/');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
