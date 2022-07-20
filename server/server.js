const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const passport = require('passport');
const db = require("./models/database");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// require .env file that stores google keys
require('dotenv').config();

const transactionRouter = require("./routes/transactions");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const oauthRouter = require("./routes/oauthRouter");

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
async function(accessToken, refreshToken, profile, cb) {
  // const avatar_link = faker.internet.avatar();

  // SQL query to find or create googleid
  //const find_query = 'INSERT INTO user_info(username, avatar_link, password, googleid) \
                      // SELECT googleid \
                      // FROM user_info \
                      // WHERE NOT EXISTS ( \
                      //   SELECT googleid\
                      //   FROM user_info WHERE googleid=$1)'
  
  const value = [profile.id];
  await db.query(find_query, value, (err, user) => {
    return cb(err, user);
  });
  }
));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client")));


// router for signup
app.use("/signup", signupRouter);

// router for login
app.use("/login", loginRouter,
(req, res) => res.redirect('/transactions'));

// router for transactions
app.use("/transactions", transactionRouter);

// oauth signup
app.use('/auth', oauthRouter);

// catch all route handler
app.use("*", (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
