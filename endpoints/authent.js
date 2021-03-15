const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const user = new User();

router.post("/register", async (req, res) => {
    console.log("/api/auth/register");
    const {
        login,
        password,
        full_name,
        email,
    } = req.body;
    console.log(req.body);
    await user.createUser(login, password, full_name, email);
});

router.post("/login", async (req, res) => {
    console.log("/api/auth/login");
    const {
        login,
        password,
    } = req.body;
    console.log(req.body);
});

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