Working :


Registeration Process:

1- Registeration page will contain following pages which includes basic kyc

1- First Name
2- Middle Name
3- Last Name
4- Gender
5- DOB
6- Residency
7- Permanent Address
8- Mobile Number
9- Password
10- Email


Confirmation Steps:

1- Email confirmation before first login

Login:

1- Email Address
2- Password


Dashboard:


1- View all properties
2- Favourites
3- Developer Dashboard Manage
	a-) Fill out form related to developer profile
	b-) Add property with basic detail which will be shown in pending state


Tables:
 1- User tables;
 2- User roles table
 	a-) Developer
 	b-) Investor	
 
 3- Property table
	a-) Property title
	b-) Proeprty description
	c-) Property location
	d-) Proeprty Status
	e-) Telephone Number
	f-) Required funding
	g-) Acquired funding
	h-) No of investors
    i-) Property vetted (Pending , confirm)
    j-) Property Cover Image



4- Property Images:
	a-) ProeprtyId (foreign key)
	b-) Image Url 
	c-) Coverimage boolean


5- Property verification documents:
	a-) PropertyId(foreign key)
	b-) Property document url 


6- Developer Profile:

	a-) Developer Title
	b-) Developer intro
	c-) Telephone Number
	d-) Website Url
	e-) Vetted (Pending, confirm)


7- Favourite Properties:
	a-) Userid (foreign key)
	b-) PropertyId (foreign key)


Add Proeprty Conditions:

1- Developer can not add proeprties unless developer is vetted from admin
2- Once developer is added he can add proeprty but property will first itself be in pending state


Create Table Commands :

 User registeration table:

 create table users (userid int not null AUTO_INCREMENT,firstname varchar(255) not null,lastname varchar(255) not null,gender varchar(255) not null,dateofbirth varchar(255) not null,residency varchar(255) not null,permanentaddress varchar(255) not null,mobilenumber varchar(255) not null,email varchar(255) not null,password varchar(255) not null, primary key (userid));


 Property Table:

 create table property (propertyid int not null AUTO_INCREMENT,propertytitle varchar(255) not null,propertydescription varchar(255) not null,propertylocation varchar(255) not null,propertystatus varchar(255) not null,telephonenumber varchar(255) not null,requiredfunding varchar(255) not null,acquiredfunding varchar(255) not null,investors int not null,propertyvetted varchar(255) not null,userid int not null,primary key (propertyid),foreign key (userid) REFERENCES users(userid))


 Developer Table:

 create table developer (developerid int not null AUTO_INCREMENT,developertitle varchar(255) not null,developerintro varchar(255) not null,telephonenumber varchar(255) not null,websiteurl varchar(255),vetted varchar(100) not null, userid int not null,PRIMARY KEY (developerid), foreign key (userid) REFERENCES users(userid) );

 USerroles table;


 create table userrolestable (userrolesid  int not null AUTO_INCREMENT,userid int not null,investorstatus int not null,developerstatus int not null, PRIMARY KEY (userrolesid), foreign key (userid) REFERENCES users(userid));



 Vendor Status:

 1- On frontend it will show vendor details with option to edit and their status
 2- Once vendor add information it will in pending status 
 3- ON backend it will first check whether vendor status exist or not . if yes then it will edit those details and vendor status would be again in pending state.


 What do I need to store in cookies ?


 1- Userid
 2- expiry time


 




