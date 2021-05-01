'use strict';

const user = require("../controllers/auth");
const router = require("express").Router();
const {isToken} = require('../midleware/isToken');

router.post("/register", user.register);

router.post("/login", user.login);

//to do -> logout
router.post("/logout", async (req, res) => {
    console.log("/api/auth/logout");
});

router.post("/password-reset", isToken, user.resetPass);

router.get("/password-reset/:code", user.resetForm);

router.post("/password-reset/:code/confirm", user.resetConfirm);

router.get('/confirm/:code', user.confirmEmail);

module.exports = router;