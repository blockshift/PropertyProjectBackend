
const db = require('./db.js');
const knex = db.knex;



const addpropertydb = function(formvalues){

 return knex.transaction=function(t){

 	return t('developer').where({userid:formvalues.userid}).select('developerid','vetted')
 		.then(function(rows){
 			if(rows.length == 0 || rows.vetted == 'pending')
 				return Promise.reject('Please complete your developer profile');

 			return t('property').insert({propertytitle:formvalues.propertytitle,propertydescription:formvalues.propertydescription,propertylocation:formvalues.propertylocation,propertystatus:formvalues.propertystatus,telephonenumber:formvalues.telephonenumber,requiredfunding:formvalues.requiredfunding,acquiredfunding:formvalues.acquiredfunding,investors:formvalues.investors,propertyvetted:'false',userid:formvalues.userid,developerid:formvalues.developerid},'propertyid')
 		})
 		.then(function(result){
 			return result;
 		})
 		.then(t.commit)
 		.catch(t.rollback)
 }	


}

module.exports={addpropertydb};
