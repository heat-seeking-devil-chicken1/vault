import { faker } from "@faker-js/faker";
const db = require("../models/database");

async function insertIncome() {
  // amount/dates
  const addIncome = await db.query('ALTER TABLE spending ADD income money NOT NULL'); 
  const result = await db.query("SELECT * FROM user_info");
  const userInfo = result.rows;
  const amount = faker.finance.amount(500, 5000, 2);

  // populate user income DB
  for (let user of userInfo) {
    // 3 randomized income per user
    for (let i = 0; i < 3; i++) {
      const sql_query = "INSERT INTO spending(income) VALUES ($1, $2)";
      const values = [user[i], amount, '2022-07-18'];
      const result = await db.query(sql_query, values);
    }
  }
}

// COLUMNS
// user_id    spending     category_id     date      income


// insertIncome();
