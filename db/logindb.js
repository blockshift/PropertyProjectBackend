
const db = require('./db.js');
const knex = db.knex;





	const loginuser = function(loginform){

        var userid;
        var userobject;

        console.log(loginform);

		return knex('users').where({email:loginform.email,password:loginform.password}).select('userid')
		.then(function(rows){
			if(!rows.length)
            	throw 'user not exist';
  			userid = rows[0].userid
  			return rows; 	
		})
		.then(function(result){
			
			return knex('userrolestable').where({userid:userid}).select('userrolesid')
		})
		.then(function(result){
			
			userobject={
				userid: userid,
				userroleid : result[0].userrolesid
			}

			return Promise.resolve(userobject);
		})
		.catch(function(error){
			console.log(error);
			return Promise.reject(error);
		})

	}


module.exports={loginuser};