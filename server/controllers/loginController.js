const bcrypt = require("bcryptjs");
const db = require("../models/database");

const loginController = {};

// Verifies if user login info is correct
loginController.verifyUser = async (req, res, next) => {
  // decronstruct body
  const { username, password } = JSON.parse(req.body);
  try {
    const userValue = [username];
    const passQuery = "SELECT * FROM user_info WHERE username=$1";
    const passDB = await db.query(passQuery, userValue);
    const userInformation = passDB.rows[0];
    const pass = userInformation.password;
    // conditional to check if password is stored as bcrypt
    if (pass === password) {
      res.locals.userInfo = {
        id: userInformation.id,
        username: userInformation.username,
        avatar: userInformation.avatar_link,
      };
      return next();
      // if pass is not found, then we know its stored as bcrypt
    } else {
      const result = await bcrypt.compare(password, pass);
      if (!result || !passDB) {
        return next(err);
      } else {
        console.log("User is found!");
        res.locals.userInfo.id = userInformation.id;
        return next();
      }
    }
  } catch (err) {
    return next({
      log: `Express error handler caught in loginController middleware ${err}`,
      status: 400,
      message: { err: "An error occurred while creating user" },
    });
  }
};

module.exports = loginController;
