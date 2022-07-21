const require = createRequire(import.meta.url);
const db = require("../models/database");
import { createRequire } from "module";

async function insertMerchant() {

    const categories = [
        "Bills & Utilities",
        "Entertainment",
        "Shopping",
        "Health & Wellness",
        "Transportation",
        "Education",
      ];

  const bills = ["Conn Edison", "Verizon", "PSE&G", "Progressive", "Geico Auto Insurance"]
  const entertainment = ["TicketMaster", "Flashdancers", "McDonalds", "Jetblue Airways", "THE CLIFFS LLC", "OnlyFlans", "E11EVEN Miami"]
  const shopping = ["Dior", "Hermes", "Uniqlo", "Crocs", "Gap Kids", "Sketchers", "Nordstrom", "Gucci", "Versace"]
  const health = ["TEND DENTAL", "ClassPass", "Equinox", "TMPL", "Soul Cycle", "Stretch*d", "Ohm Spa", "Russian Bath House"]
  const transport = ["MTA Transit - NYC", "Shell Oil", "E-Z*PASSNY", "Lyft", "Uber", "Black-Limo", "Jettly", "HeliPad", "Super Yachts"]
  const education = ["IN*CODESMITH", "Federal Student Aid", "CodeAcademy","Audible", "LEETCODE", "AlgoExpert"]
 
  const result = await db.query("SELECT * FROM spending");

  const spendingInfo = result.rows;
  
  for (let user of spendingInfo) {
    const user_id = user.user_id;
    const amount = user.amount;
    const cat_id = user.category_id;
    const dates = user.dates;

    let insertArr = [];

    const cat_query = "UPDATE spending SET merchant=$1 WHERE user_id=$2 AND amount=$3 AND category_id=$4 AND dates=$5";

    if (cat_id === 1) {
      insertArr.push(bills[Math.floor(Math.random() * bills.length)]);
    } else if (cat_id === 2) {
      insertArr.push(entertainment[Math.floor(Math.random() * entertainment.length)]);
    } else if (cat_id === 3) {
      insertArr.push(shopping[Math.floor(Math.random() * shopping.length)]);
    } else if (cat_id === 4) {
      insertArr.push(health[Math.floor(Math.random() * health.length)]);
    } else if (cat_id === 5) {
      insertArr.push(transport[Math.floor(Math.random() * transport.length)]);
    } else if (cat_id === 6){
      insertArr.push(education[Math.floor(Math.random() * education.length)]);
    }

    insertArr.push(user_id, amount, cat_id, dates);

    const catResult = await db.query(cat_query, insertArr);
    
  }
}

insertMerchant();