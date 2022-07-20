const router = require("express").Router();
const passport = require("passport");
// const oauthController = require("../controllers/oauthController");

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => res.status(200));

module.exports = router;