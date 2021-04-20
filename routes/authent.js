'use strict';

const user = require("../controllers/userController");

let router = require("express").Router();

router.post("/register", user.register);

router.post("/login", user.login);

router.post("/logout", async (req, res) => {
    console.log("/api/auth/logout");
});

router.post("/password-reset", async (req, res) => {
    console.log("/api/auth/password-reset");
});

router.post("/password-reset/:confirmToken", async (req, res) => {
    console.log("/api/auth/password-reset");
});

router.get('/confirm/:code', user.confirmEmail);

module.exports = router;