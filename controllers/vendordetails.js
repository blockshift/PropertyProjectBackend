
const {validationResult} = require('express-validator');
const vendordetailmodeldb  = require('../db/vendordetails.js');



const vendordetails = function(req,res){

	const error = validationResult(req);
	if (!error.isEmpty()) {
                console.log(error);
		     	return res.status(422).json({ errors: error.array() });
		   	}

	vendordetailmodeldb.vendordetailmodel(req.body)
		.then(function(result){
			return res.status(201).json({erroroccured: false});
		},
		function(error){
			console.log(error);
			return res.status(500).json({erroroccurred: true});
		})	





}


 const getvendordetails = function(req,res){
  //   console.log(req.body);
 	// const error = validationResult(req.body);
 	// if(!error.isEmpty()){
 	// 	console.log(error);
 	// 	return res.status(422).json({errors: error.array() });


 	// }


 	vendordetailmodeldb.getvendordetails()
 		.then(function(rows){
 			return res.status(200).json({vendorobject:rows});
 		})
 		.catch(function(error){
 			return res.status(404).json({erroroccurred:true});
 		})


 }



module.exports={vendordetails,getvendordetails};