const router = require("express").Router();
const loginController = require("../controllers/loginController");
const dataController = require("../controllers/dataController");

router.post('/', loginController.verifyUser, (req, res) => res.status(200).json(res.locals.username));

module.exports = router;
