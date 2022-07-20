const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const passport = require("passport");
const db = require("./models/database");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


const transactionRouter = require("./routes/transactions");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const oauthRouter = require("./routes/oauthRouter");
const { resolve } = require("path");

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, "../client")));

// router for login
app.use("/login", loginRouter);

// router for signup
app.use("/signup", signupRouter);

// oauth signup
app.use("/auth", oauthRouter);

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
