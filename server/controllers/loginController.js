const bcrypt = require("bcryptjs");
const db = require("../models/database");

const loginController = {};

// Verifies if user login info is correct
loginController.verifyUser = async (req, res, next) => {
  // decronstruct body
  const { username, password } = req.body;
  
  try {
    const userValue = [username];
    const passQuery = "SELECT password FROM user_info WHERE username=$1";
    const passDB = await db.query(passQuery, userValue);
    const pass = passDB.rows[0].password
    // conditional to check if password is stored as bcrypt
    if (pass === password) {
      console.log('User is found!');
      return next();
    // if pass is not found, then we know its stored as bcrypt
    } else {
      const result = await bcrypt.compare(password, pass);
        if (!result || !passDB) {
          return next(err);
        } else {
          console.log('User is found!');
          return next();
        }
    }
  } catch (err) {
    return next({
      log: `Express error handler caught in signupController middleware ${err}`,
      status: 400,
      message: { err: "An error occurred while creating user" },
    });
  }
};

module.exports = loginController;
