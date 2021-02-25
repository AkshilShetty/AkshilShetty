const { json } = require('body-parser');
const session = require('express-session');
const { Collection } = require('mongoose');
const { use } = require('../../server');

// Load the 'User' Mongoose model
const User = require('mongoose').model('Student');

//'create' controller method to create a new user
exports.create = function(req, res, next) {
	//Create a new instance of the 'User' Mongoose model
	const user = new User(req.body);

	//Use the 'User' instance's 'save' method to save a new user document
	user.save((err) => {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.render('signin',{
				title:'Welcome'

			});
		 
		}
	});
};
exports.authenticatebystudents = function (req,res,next){

        const username = req.body.username;
		const password= req.body.password;
		console.log(username)
		console.log(password)

       User.findOne({
		   firstName:username,
		   password:password
	   },(err,user)=>{
	   if(err){
		   console.log(err)
	   }
	   else{
		 req.user = user;
		 req.password=user;
	     var jsonUser = JSON.parse(JSON.stringify(user));
         console.log(jsonUser)
		 if(jsonUser!=null){
			 res.render('Students',{
				 user:jsonUser
			 })
		 }
		 else{
			 console.log(err)
		 }
		 next();
		
	   }
	});

	
};
