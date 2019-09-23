
const registermodaldb = require('../db/registermodel.js');
var { validationResult } = require('express-validator');

const registerationcontroller  = function(req,res){
  
  console.log("response received",req.body);
  const errors = validationResult(req);

			if (!errors.isEmpty()) {

		     	return res.status(422).json({ errors: errors.array() });
		   	}
   	 
   registermodaldb.registeruser(req.body)
	.then(function(result){
		// console.log(result);
		res.status(201).json({'usercreated':true});

	})
	.catch(function(error){
		// console.log(error);
		res.status(404).json({'usercreated':false});

	})


}


module.exports={registerationcontroller};
