'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session');
    

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect('mongodb://heroku_mcl5rfsj:6u3pk2h8045rn4blj4vsfoc7u0@ds035240.mongolab.com:35240/heroku_mcl5rfsj');
app.use('/common', express.static(process.cwd() + '/app/common'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

app.use(session({
    secret: 'secretClementine',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = 8080;
app.listen(port, function () {
    console.log('Node.js listening on port ' + port + '...');
});