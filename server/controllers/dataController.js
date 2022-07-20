const db = require("../models/database.js");
const dataController = {};

// total transactions / categories / of each user
dataController.getCategories = async (req, res, next) => {
  try {
    const user_id = res.locals.userInfo.id;
    const sql_query =
      "select cat_name, sum(amount) FROM spending s join category c on s.category_id = c.cat_id where user_id = $1 group by category_id, cat_name";
    const values = [user_id];
    const result = await db.query(sql_query, values);
    const categories = result.rows;
    res.locals.userInfo.categories = categories;
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in getTransactions middleware ${err}`,
      status: 400,
      message: { err: "An error occurred while getting user categories" },
    });
  }
};

dataController.getTransactions = async (req, res, next) => {
  try {
    const user_id = res.locals.userInfo.id;
    const sql_query = "select amount, dates FROM spending where user_id = $1";
    const values = [user_id];
    const result = await db.query(sql_query, values);
    const transactionArray = result.rows;
    res.locals.userInfo.transactionArray = transactionArray;
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in getTransactions middleware ${err}`,
      status: 400,
      message: { err: "An error occurred while getting user categories" },
    });
  }
};

dataController.getSum = async (req, res, next) => {
  try {
    const user_id = res.locals.userInfo.id;
    const sql_query = "select sum(amount) from spending where user_id = $1";
    const values = [user_id];
    const result = await db.query(sql_query, values);
    res.locals.userInfo.allSum = result.rows[0].sum;
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in getTransactions middleware ${err}`,
      status: 400,
      message: { err: "An error occurred while getting user transactions sum" },
    });
  }
};

dataController.getIncome = async (req, res, next) => {
  try {
    const user_id = res.locals.userInfo.id;
    const sql_query = "select amount, dates from income where user_id = $1";
    const values = [user_id];
    const result = await db.query(sql_query, values);
    res.locals.userInfo.incomeArray = result.rows;
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in getTransactions middleware ${err}`,
      status: 400,
      message: { err: "An error occurred while getting user transactions sum" },
    });
  }
};

module.exports = dataController;
