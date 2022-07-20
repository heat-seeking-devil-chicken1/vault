const router = require("express").Router();
const loginController = require("../controllers/loginController");
const dataController = require("../controllers/dataController");

router.post(
  "/",
  loginController.verifyUser,
  dataController.getCategories,
  dataController.getSum,
  dataController.getIncome,
  dataController.getTransactions,
  dataController.getTotalIncome,
  (req, res) => {
    res.status(200).json(res.locals.userInfo);
  }
);

module.exports = router;
