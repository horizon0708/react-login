var secret = require('../config/secret');
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        try {
            jwt.verify(token, secret(), function (err, decoded) {
                if (err) {
                    res.status(401);
                    return res.json({ success: false, message: 'Failed to authenticate token/ invalid token.' });
                } else {

                    if (decoded.exp <= Date.now()) {
                        res.status(400);
                        res.json({
                            "status": 400,
                            "message": "Token Expired"
                        });
                        return;
                    }
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } catch (err) {
            res.status(500);
            res.json({
                "status": 500,
                "message": "something went wrong",
                "error": err
            });
        }

        // verifies secret and checks exp


    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
}