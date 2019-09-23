
const db = require('./db.js');
var knex = db.knex;

 const registeruser = function(registerobject){
  	

 	var useridreceived;


 	return knex.transaction(function(t){
      console.log("knex transaction");

 		return t('users').where({email:registerobject.emailaddress}).select('userid')
 			.then(function(rows){
 				if(rows.length >= 1)
 					return Promise.reject('user already exist');
 				return t('users').insert({firstname:registerobject.firstname,lastname:registerobject.lastname,gender:registerobject.gender,dateofbirth:registerobject.dateofbirth,residency:registerobject.resedentialaddress,permanentaddress:registerobject.resedentialaddress,mobilenumber:registerobject.mobilenumber,email:registerobject.emailaddress,password:registerobject.userpassword},'userid')
 			})

 			.then(function(userid){

 				useridreceived = userid;
 				return t('userrolestable').insert({userid:userid,investorstatus:1,developerstatus:1})

 			})
 			.then(function(userroleid){

 				return userroleid;

 			})
 			
 			.then(t.commit)
  			.catch(t.rollback)
	})



 }

 module.exports={registeruser};