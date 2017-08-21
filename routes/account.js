

var account = {
    getIndex: function (req, res) {
        res.render('index.ejs');
    },
    getSignup: function (req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    },
    getProfile: function (req, res) {
        res.render('profile.ejs', {
            user: req.user, // get the user out of session and pass to template
            key: null
        });
    },
    getLogout: function (req, res) {
        req.logout();
        res.redirect('/');
    },
    getLogin: function(req,res){
        res.render('login.ejs', { message: req.flash('loginMessage') })
    }
 }

module.exports = account; 


