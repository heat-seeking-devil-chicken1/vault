const router = require("express").Router();
const loginController = require("../controllers/loginController");

router.post("/", loginController.verifyUser, (req, res) => res.send(200));

module.exports = router;
