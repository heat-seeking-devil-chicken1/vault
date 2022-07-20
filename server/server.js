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
  // usnermne
  const username = profile.displayName;
  //avatar_link
  const avatar = profile.photos[0].value;
  //password
  const password = 'placeholder';
  //googleid
  const googleid = profile.id;

  // SQL query to find or create googleid
  const addQuery = 'INSERT INTO user_info(username, avatar_link, password, googleid) VALUES ($1, $2, $3, $4)';
  const value = [username, avatar, password, googleid];

  // const find_query = "SELECT googleid FROM user_info"
  // const findResult = await db.query(find_query)

  // console.log('find result', findResult) 

  // if (!findResult.oid) {
  //   const addResult = await db.query(add_query);
  //   console.log('add result', addResult)
  // }
  // console.log('Value: ', value);

  const addResult = await db.query(addQuery, value);
  console.log('add result', addResult)
  
  // INSERT INTO user_info(googleid) \
  //                     SELECT googleid \
  //                     FROM user_info \
  //                     WHERE NOT EXISTS ( \
  //                       SELECT username, avatar_link, password, googleid\
  //                       WHERE username='TEST' AND avatar_link='TEST' AND password='TEST'AND googleid='TEST')
  // catch (err) {

  // }
  // (err, user) => {
  //   console.log('inside query error')
  //   return cb(err, user);
  // });
  // }
// ));
}));                  

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, "../client")));


// router for signup
app.use("/signup", signupRouter);

// router for login
app.use("/login", loginRouter,
(req, res) => res.redirect('/transactions'));

// oauth signup
app.use('/auth', oauthRouter,
(req, res) => res.redirect('/transactions'));

// router for transactions
app.use("/transactions", transactionRouter);


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
