const bcrypt = require('bcryptjs');
const db = require("../models/database");

const signupController = {};

// Create user
signupController.createUser = (req, res, next) => {
  // deconstruct body of request
  let { username, password } = req.body;
  const avatarLink = 'dummy_link';
    const SALT_FACTOR = 10;
    // bcrypt hash function here and store user/pw in database
    bcrypt.hash(password, SALT_FACTOR) 
      .then(hash => {
        // store values sent to sql query
        const values = [username, avatarLink, hash];
        // store sql query
        const sql_query = 'INSERT INTO user_info (username, avatar_link, password) VALUES ($1, $2, $3)'
        // call query
        db.query(sql_query, values);
        return next();
      })
      .catch((err) => {
        return next({
          log: `Express error handler caught in signupController middleware ${err}`,
          status: 400,
          message: { err: "An error occurred while creating user" },
        });
      });
};     

module.exports = signupController;