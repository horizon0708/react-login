var express     = require('express');
var app         = express();
var cookieParser = require('cookie-parser');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var session      = require('express-session');

var passport = require('passport');
var flash    = require('connect-flash');
var databaseConfig = require('./config/database');

var port = process.env.PORT || 8080; 
mongoose.connect(databaseConfig(), {useMongoClient: true}); 

require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(cookieParser());

app.set('view engine', 'ejs'); 

app.use(session({ 
    secret: 'jameskimnz',
    saveUninitialized: true,
    resave: true, 
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

app.use('/', require('./routes')(passport));


app.listen(port);
console.log('Magic happens at http://localhost:' + port);