var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')
var Schema = mongoose.Schema

var User= new Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    prg:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },



},{timestamps:true})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User',User)

