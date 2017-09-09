var express = require('express');
var router = express.Router();

var records = require('./records.js');
var account = require('./account.js');
var tokenGen = require('./tokenGen.js');
var auth = require('./auth.js');

var userValidation = require('../middlewares/userValidation');
var apiValidation = require('../middlewares/apiValidation');

module.exports = function (passport) {

    
    
    router.post('/signup', function(req,res,next){
        
        return passport.authenticate('local-signup', function(err, data){
            if(err){
                console.log(err);
            }

            return res.status(200).json({
                success: true,
                message: 'You have successfully signed up!',
                user: data.local
            });
        })(req,res,next);
    });
    router.post('/login', function(req,res,next){
        return passport.authenticate('local-login', function(err, token, data){
            if(err){
                console.log(err);
            }
            console.log(token);
            console.log(data);
            return res.status(200).json({
                token: token,
                user: data
            });
        })(req,res,next);
    });
    router.get('/logout', account.getLogout);

       //auth API
    router.post('/auth/login', auth.postLogin);

    // routes that need the user to be logged on
    
    router.post('/tokengen', userValidation, tokenGen);

    //api routes that requires a token/key.
    router.get('/api/v1/records', apiValidation, records.getAll);
    router.get('/api/v1/records/:id', apiValidation, records.getOne);
    router.post('/api/v1/records/', apiValidation, records.create);
    router.put('/api/v1/records/:id', apiValidation, records.update);
    router.delete('/api/v1/records/:id', apiValidation, records.delete);

    return router;
};
