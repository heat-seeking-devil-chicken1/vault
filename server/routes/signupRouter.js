const router = require("express").Router();
const signupController = require('../controllers/signupController.js');

router.post('/', signupController.createUser, (req, res) => res.sendStatus(200));

module.exports = router;