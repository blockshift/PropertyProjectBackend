
const { check} = require('express-validator');


const validators = function(method){
	switch(method) {
		case 'createuservalidation': {
			return [
				check('firstname', "firstname not provided").exists(),
				check('lastname', "lastname not provided").exists(),
				check('gender',"gender not provided").exists(),
				check('dateofbirth',"date of birth not provided").exists(),
				check('resedentialaddress',"Residential Address not provided").exists(),
				check('permanentaddress',"Permanent Address not provided").exists(),
				check('mobilenumber',"Mobile Number not provided").exists(),
				check('emailaddress', 'please provide email address').exists().isEmail().normalizeEmail(),
		        check('userpassword').exists().isLength({min: 5})

			]
		}

		case 'loginuservalidation': {
			return [
				check('email','please provide valid email address').exists().isEmail().normalizeEmail(),
				check('password','please provide your password').exists()

			]
		}

		case 'adduservalidation': {
			return [
				check('username','please provide your username').exists(),
				check('email','please provide valide email address').exists().isEmail(),
				check('password','please provide your password').exists(),
				check('useraccessrole','please provide correct userrole').exists()
			]
		}

		case 'vendordetails': {
			return [
				check('vendorname','please provide developer title').exists(),
				check('developerdetails','please provide fdetail inf').exists(),
				check('mobilenumber','please provide valid mobile number').exists(),
				check('userid','userid not provided').exists()
			]
		}

		case 'emailverification': {
			return [
			   check('verificationtoken','please provide email address').exists()	

			]
		}

		case 'getvendordetails': {
			return [
				check('userid','please provide userid').exists()	

			]
		}


		case 'addproperty': {
			return [

				check('propertytitle','Please provide valid property tile').exists(),
				check('propertydescription','Please provide valid property description').exists(),
				check('propertylocation', 'Please provide location of proeprty').exists(),
				check('propertystatus', 'Please provide property status').exists(),
				check('telephonenumber','Please provide valid telephone number').exists(),
				check('requiredfunding', 'Please provide required funding ').exists(),
				check('acquiredfunding', 'Please provide if any ').exists(),
				check('holdingperiod','Please provide preferrable holding period').exists()
			]
		}
	}
}




module.exports={validators};
