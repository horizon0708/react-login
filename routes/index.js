var express = require('express');
var router = express.Router();

var records = require('./records.js');
var account = require('./account.js');
var tokenGen = require('./tokenGen.js');

var userValidation = require('../middlewares/userValidation');
var apiValidation = require('../middlewares/apiValidation');

module.exports = function (passport) {

    router.get('/', account.getIndex);
    router.get('/signup', account.getSignup);
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));
    router.get('/login', account.getLogin);
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));
    router.get('/logout', account.getLogout);


    // routes that need the user to be logged on
    router.get('/profile', userValidation, account.getProfile);
    router.post('/tokengen', userValidation, tokenGen);

    //api routes that requires a token/key.
    router.get('/api/v1/records', apiValidation, records.getAll);
    router.get('/api/v1/records/:id', apiValidation, records.getOne);
    router.post('/api/v1/records/', apiValidation, records.create);
    router.put('/api/v1/records/:id', apiValidation, records.update);
    router.delete('/api/v1/records/:id', apiValidation, records.delete);

    return router;
};
