const router = require("express").Router();
const dataController = require("../controllers/dataController");

router.get(
  "/:user_id",
  dataController.getTransactions,
  dataController.getSum,
  (req, res) => {
    console.log("landed on /categories");
    res.status(200).json(res.locals);
  }
);

module.exports = router;
