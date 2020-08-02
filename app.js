require('dotenv').config()


var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var User = require('./model/user')
var user = require('./routes/users')
var jwtToken = require('./jwt-token')

mongoose.connect(process.env.mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) console.log(err)
}).then(db=>{
    console.log('Mongodb connected')
})


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

passport.use(new LocalStrategy(User.authenticate()),)

app.use(passport.initialize())

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
