const router = require("express").Router();
const passport = require("passport");
const db = require("../models/database");
const express = require("express");
const app = express();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const loginController = require("../controllers/loginController");
const dataController = require("../controllers/dataController");


// require .env file that stores google keys
require("dotenv").config();

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((newUser, done) => {
  done(null, newUser);
});
passport.deserializeUser((newUser, done) => {
  done(null, newUser);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // username
      const username = profile.displayName;
      //avatar_link
      const avatar = profile.photos[0].value;
      //password
      const password = "placeholder";
      //googleid
      const googleid = profile.id;

      // SQL query to find googleid
      const find_query = "SELECT googleid FROM user_info WHERE googleid=$1";
      const valueFind = [googleid];
      //SQL query to find id value associated with googleid
      const idQuery = "SELECT id FROM user_info WHERE googleid=$1";
      //SQL query to add user info if googleid is not found
      const addQuery = "INSERT INTO user_info(username, avatar_link, password, googleid) VALUES ($1, $2, $3, $4)";
      const value = [username, avatar, password, googleid];
      //query db to find google id
      const findResult = await db.query(find_query, valueFind);
        // if google id doesn't exist, create it
      if (findResult.rows) {
        const idDB = await db.query(idQuery, valueFind)
        const foundUser = idDB.rows[0].id;
        done(null, foundUser);
      }
      else {
        const addResult = await db.query(addQuery, value);
        const idDB = await db.query(idQuery, valueFind);
        const newUser = idDB.rows[0].id;
        done(null, newUser);
      }
    }
  )
);

router.get('/google', 
    passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/callback', 
    passport.authenticate('google'), 
    loginController.authVerify,
    (req, res) => {
      return res.redirect('http://localhost:8080/')});

module.exports = router;