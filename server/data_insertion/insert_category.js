const db = require("../models/database");

async function insertCategory() {
  const categories = [
    "Bills & Utilities",
    "Entertainment",
    "Shopping",
    "Health & Wellness",
    "Transportation",
    "Education",
  ];
  for (let cat of categories) {
    const sql_query = "INSERT INTO category(cat_name) VALUES($1)";
    const value = [cat];
    await db.query(sql_query, value);
  }
}

insertCategory();
