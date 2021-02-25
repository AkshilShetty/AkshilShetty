const { json } = require('body-parser');
const session = require('express-session');
const { Collection } = require('mongoose');
const mongoose = require('../../config/mongoose');
const { use } = require('../../server');

const Comment= require('mongoose').model('Comment');
const User = require('mongoose').model('Student');
exports.create = function(req, res, next) {
	//Create a new instance of the 'User' Mongoose model
	const comment = new Comment(req.body);
     const user = new User(req.body)
	//Use the 'User' instance's 'save' method to save a new user document
	comment.save((err) => {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.render('Students',{
				title:'Welcome'

			});
		 
		}
	});
    user.save((err) => {
        if(err){
            return next (err);
        }
        else{
            res.render('Students',{
                title:'Welcome'
            });
        }
    
    });
};





exports.commentsByStudent = function (req, res, next) {
    const email = req.body.email;
    		console.log(email)

       Comment.find({
		   email:email,
	   },(err,user)=>{
	   if(err){
		   console.log(err)
	   }
	   else{
		 req.user = user;
		 var jsonUser = JSON.parse(JSON.stringify(user));
         console.log(jsonUser)
		 if(jsonUser!=null){
             res.render('thankyou',{
                 comments:jsonUser
                
             });

         } 
         else{
             console.log('invalid email')
         }
         next();
       	
	   }
	});
   
};