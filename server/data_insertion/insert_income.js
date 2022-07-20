import { faker } from "@faker-js/faker";
const require = createRequire(import.meta.url);
const db = require("../models/database");
import { createRequire } from "module";

async function insertIncome() {
  // get userID
  const result = await db.query("SELECT * FROM user_info");
  const userInfo = result.rows;
  console.log(userInfo);

  // populate user income DB
  for (let user of userInfo) {
    // 3 randomized income per user
    for (let i = 0; i < 3; i++) {
      const amount = faker.finance.amount(500, 5000, 2);
      const sql_query =
        "INSERT INTO income(user_id, amount, dates) VALUES ($1, $2, $3)";
      const values = [user.id, amount, "2022-07-18"];
      const result = await db.query(sql_query, values);
    }
  }
}

insertIncome();
