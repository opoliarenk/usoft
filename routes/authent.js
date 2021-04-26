'use strict';

const user = require("../controllers/auth");

let router = require("express").Router();

router.post("/register", user.register);

router.post("/login", user.login);

router.post("/logout", async (req, res) => {
    console.log("/api/auth/logout");
});

router.post("/password-reset", user.resetPass);

router.get("/password-reset/:code", user.resetForm);

router.post("/password-reset/:code/confirm", user.resetConfirm);

router.get('/confirm/:code', user.confirmEmail);

router.get('/me', user.me);

module.exports = router;