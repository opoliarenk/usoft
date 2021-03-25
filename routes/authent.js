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

router.get('/confirm/:code', async (req, res) => {
    console.log("confirm");
});

module.exports = router;