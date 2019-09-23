const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes.js');
const dotenv = require('dotenv');
const morgan = require('morgan');
var winston = require('./winston');



dotenv.config();

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: winston.stream })); 

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
 res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization , Cache-Control, Credentials");
  next();
});

app.use(routes); 


 
//app.listen(process.env.PORTS, () => console.log(`Example app listening on port ${process.env.PORTS}`))
 
 app.listen(process.env.PORT);
module.exports = app;