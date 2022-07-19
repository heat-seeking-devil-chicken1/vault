import { faker } from "@faker-js/faker";
const require = createRequire(import.meta.url);
const db = require("../models/database");
import { createRequire } from "module";
import moment from "moment";

async function insertSpending() {
  const result = await db.query("SELECT * FROM user_info");
  const userInfo = result.rows;

  // populate DB with user spending
  // 20 randomized spendings per user
  for (let user of userInfo) {
    for (let i = 0; i < 20; i++) {
      const amount = faker.finance.amount(5, 100, 2);
      const cat_id = Math.floor(Math.random() * 6) + 1;
      const sql_query =
        "INSERT INTO spending(user_id, amount, category_id, dates) VALUES($1, $2, $3, $4)";
      const values = [user[i], amount, cat_id, "2022-07-18"];
      const result2 = await db.query(sql_query, values);
  
    }
  }
}

insertSpending();
// db.query(`DROP TABLE spending;`);
