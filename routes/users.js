var express = require('express')
var app = express()
var User= require('../model/user')
var passport = require('passport')
var jwtToken = require('../jwt-token')



app.post('/login',passport.authenticate('local', {session:false}),(req,res,next)=>{

     const token = jwtToken.getToken({payload:req.user._id})

     res.json({result:{token:token }, message:'Logged In Successfull', success:true})

    
})

app.post('/verify-token', jwtToken.verifyUser, (req,res,next)=>{
  res.json({success:true, message:'Token is Valid'})
})

app.post('/signup',(req,res,next)=>{


    User.register(new User({username:req.body.username, name: req.body.name, state: req.body.state, mobile: req.body.mobile, city : req.body.city, dob: req.body.dob, roll: req.body.roll, prg : req.body.prg, room : req.body.room, year: req.body.year }), req.body.pass, (err,user)=>{

        if(err) return res.json(500,{result:err, success:false, message: 'Internal server error'})
        
        res.json(200,{result:user,success:true,message:"Registration Successfull"})

    })

})

app.get('/logout',(req,res,next)=>{

  res.json({result:null, success:true, message:'Logged Out Successfully'})

})


module.exports = app