const db = require('./db.js');
const knex = db.knex;



const vendordetailmodel= function(vendorobject){

	return knex.transaction(function(t){
		return t('developer').where({userid:vendorobject.userid}).select('developerid')
			.then(function(rows){
				if(rows.length >= 1)
					console.log('developer already exist');

				return t('developer').insert({developertitle:vendorobject.vendorname,developerintro:vendorobject.developerdetails,telephonenumber:vendorobject.mobilenumber,websiteurl:vendorobject.websiteurl,userid:vendorobject.userid,vetted:'pending'},'developerid');
			})
			.then(function(developerid){
				return developerid;
			})
			.then(t.commit)
			.catch(t.rollback)



	})


}



const getvendordetails = function(){
	return knex('developer').where({userid:1}).select('developerid','developertitle','developerintro','telephonenumber','websiteurl','vetted')
		.then(function(rows){
			if (rows.length == 0)
			return Promise.reject('Record not found');

			return rows;
		})
		.catch(function(error){
			throw error;
		})
}

module.exports={vendordetailmodel,getvendordetails};
