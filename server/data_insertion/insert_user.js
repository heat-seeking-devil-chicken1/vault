import { faker } from "@faker-js/faker";
const require = createRequire(import.meta.url);
const db = require("../models/database");
import { createRequire } from "module";

async function insertUser() {
  for (let i = 0; i < 50; i++) {
    // id, name, avatar, username, password
    const username = faker.internet.userName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    const avatar = faker.internet.avatar();
    const password = faker.internet.password(10, true);

    const sql_query =
      "INSERT INTO user_info(username, avatar_link, password) VALUES($1, $2, $3);";
    const values = [username, avatar, password];
    await db.query(sql_query, values);
  }
}

insertUser();
