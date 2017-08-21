var jwt = require('jsonwebtoken');
var secret = require('../config/secret');

module.exports = function (req, res) {
    var userSession = req.user;
    if (userSession == '' || !userSession) {
        res.status(401);
        res.json({
            "status": 401,
            "message": "You must be logged into get a token."
        });
        return;
    }

    var token = jwt.sign(userSession, secret(),{
        expiresIn: '7d'
    });

    res.status(200);
    // res.json({
    //     "key": token,
    //     "user": userSession
    // });
    res.render('profile.ejs', {
            user: req.user, // get the user out of session and pass to template
            key: token
        });
    return;
};