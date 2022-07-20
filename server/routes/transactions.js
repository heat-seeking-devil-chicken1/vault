const router = require("express").Router();
const dataController = require("../controllers/dataController");

router.get(
  "/all/:user_id",
  dataController.getCategories,
  dataController.getSum,
  (req, res) => {
    console.log("landed on /categories");
    res.status(200).json(res.locals);
  }
);

module.exports = router;
