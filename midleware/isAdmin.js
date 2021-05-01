'use strict';

exports.isAdmin = async (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    }

    return next({
        message: "Authorization denied, only admins can visit this route",
        statusCode: 403,
    });
};
