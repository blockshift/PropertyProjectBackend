
const propertydb = require('../db/addpropertydb.js');
const {validationResults} = require('express-validator');

const addpropertycontroller = function(req,res){

	const error = validationResults(req.body);
	if(!error.isEmpty()) {
		res.status(422).json({error: error.array() });

	} 

   

}


module.exports={addpropertycontroller};