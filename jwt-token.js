var jwt = require('jsonwebtoken')
require('dotenv').config()


console.log(process.env)

const getTokenFromHeader= (req)=>{
  
    const token = req.headers.authorization.split(' ')[1]
    return token
    
}

exports.getToken = ({payload})=>{
    return jwt.sign({payload:payload},process.env.secretKey,{expiresIn:process.env.expiresIn_JWT})
}

exports.verifyUser = (req,res,next)=>{

    if(req.headers.authorization)
    var token = getTokenFromHeader(req)
    else
    return res.json({success:false, result:null, message:'You  are not logged In'})

    console.log(token)

    jwt.verify(token,process.env.secretKey,(err,payload)=>{

        if(err)
            return res.json({success:false, result: err, message: 'Token Expired or Invalid, Please login again'})
        next()

    })
}

