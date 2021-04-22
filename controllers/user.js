'use strict'

const User = require('../models/User');
const asyncHand = require('../helper/asyncHand');

exports.getALlUsers = asyncHand(async (req, res, next) => {
    await User.findAndCountAll()
        .then(results => {
            const itemCount = results.count;
            const pageCount = Math.ceil(results.count / req.query.limit);
            res.status(200).json({
                success: true,
                data: results,
                pageCount,
                itemCount,
                pages: paginate.getArrayPages(req)(3, pageCount, req.query.limit),
            });
        })
        .catch(err => next(err))
});
