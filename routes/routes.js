const express = require('express');

/* Call all controllers which will be use in routes */

const getdata = require('../controllers/getrequest.js');
const signupuser = require('../controllers/registerationcontroller.js');
const loginuser  = require('../controllers/logincontroller.js');
const vendordetails = require('../controllers/vendordetails.js');
const validators = require('../utils/validators.js');
const addproperty = require('../controllers/addpropertycontroller.js');

const router = express.Router();


router.get('/',getdata.getdata);
router.post('/register',validators.validators('createuservalidation'),signupuser.registerationcontroller);
router.post('/login',validators.validators('loginuservalidation'),loginuser.loginfunction);
router.post('/vendordetails', validators.validators('vendordetails'),vendordetails.vendordetails);
router.get('/getvendordetails',vendordetails.getvendordetails);
router.post('/addproperty',validators.validators('addproperty'),addproperty.addpropertycontroller);

module.exports = router;


