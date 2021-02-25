const users = require('../controllers/student.server.controller');
const comment = require('../controllers/comment.server.controller')
// Define the routes module' method
module.exports = function(app) {

  
    // Set up the 'users' base routes
	app.route('/signup')
	   .post(users.create)
	     
    app.route('/signin',users.login)
       .post(users.authenticatebystudents)	
    
    app.route('/submit_comments')
    .post(comment.create)
    
    app.route('/comments')
    .post(comment.commentsByStudent)
    
   
};    