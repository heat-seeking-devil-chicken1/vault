const router = require("express").Router();
const dataController = require("../controllers/dataController");

router.get(
  "/:user_id",
  dataController.getCategories,
  dataController.getSum,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

module.exports = router;
