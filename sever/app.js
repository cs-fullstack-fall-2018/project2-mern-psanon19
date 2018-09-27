var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const entriesRouter = require('./routes/entries');
const homeRouter = require('./routes/home');
const submitRouter = require('./routes/submit');

var app = express();

// *****************************************************************
// ******************        Database Setup       ******************
// *****************************************************************
function setUpDatabase() {
    // DB Config
    const db = require('./config/key').mongoURI;

    // Get a reference to the mongoose data model package
    const mongoose = require('mongoose');

    // Actually connect to the database (lets use a promise)
    mongoose.connect(db, {useNewUrlParser: true}).then(
        () => {
            console.log("Successfully connected to the database.");
        },
        err => {
            console.log("ERROR connecting to the database.");
            throw err;
        }
    );
}

// Comment this if you want to run database setup
setUpDatabase();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/entries', entriesRouter);
app.use('/home', homeRouter);
app.use('/submit', submitRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

module.exports = app;
