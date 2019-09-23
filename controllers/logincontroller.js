
const {validationResult} = require('express-validator');
const loginmodule = require('../db/logindb.js');
const fs =require('fs');
var jwt = require('jsonwebtoken');

var jwtconfig = {
    expiresIn:  "2h",
    algorithm:  "RS256"

}

var privatekey = fs.readFileSync('./private.pem','utf-8');
var publickey = fs.readFileSync('./public.pem','utf-8');

var privatekeywithpass = {key:privatekey,passphrase:process.env.privatekeypass};

const loginfunction = function(req,res){

      var jwttoken;
   	const errors = validationResult(req);
   	if(!errors.isEmpty()){
   		return res.status(422).json({error: errors.array()});
   	}

   loginmodule.loginuser(req.body)
   	.then(function(result){

   		console.log("result got",result);
         var jsonobject = {userid: result};
         jwttoken = jwt.sign(jsonobject,privatekeywithpass,jwtconfig);
         console.log("jwt token",jwttoken);
   		res.status(200).cookie("SESSIONID",jwttoken,{expires: new Date(Date.now() + 9999999)}).json({auth:true,jwt:jwttoken});
   	})
   	.catch(function(error){
         console.log(error);
   		res.status(404).json({logincredentials:false});
   	})

}

module.exports={loginfunction};