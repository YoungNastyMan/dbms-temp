var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//configure auth here.
app.use(express.session({ secret: 'chelsea sucks' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error pagensureIndexe
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log('Error in DB connection : ' + err));

module.exports = app;
