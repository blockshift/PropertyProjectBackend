
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: path.join('/home/muhammadobaid/Desktop/JawwadBhai/backend', '.env') });


var databasename = process.env.databasename;
var connectionurl = process.env.connectionurl;
var username = process.env.username;
var password = process.env.password;



var knex = require('knex')({
	client: 'mysql',
	debug: true,
	connection:{

	host: connectionurl,
	user: username,
	password: password,
	database: databasename,
	port: 3306
	}
});



module.exports = {knex};