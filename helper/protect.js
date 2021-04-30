const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
    if (!req.headers.authorization) {
        return next({
            message: "You need to be logged in to visit this route",
            statusCode: 401,
        });
    }
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        const user = await User.findOne({
            attributes: [
                "id",
                "fullName",
                "login",
                "email",
                "avatar",
                "role"
            ],
            where: {
                id: decoded.id,
            },
        });

        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        next({
            message: "You need to be logged in to visit this route!",
            statusCode: 401,
        });
    }
};
