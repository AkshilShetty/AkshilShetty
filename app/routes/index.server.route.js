// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
    app.get('/', index.render);
    //renders add_user.ejs if a get request is made to /add_user path
    app.get('/signup', index.renderAddUser);
    app.get('/signin',index.rendersignin);
   
    app.get('/submit_comments',index.rendersubmitcomments);
    app.get('/comments',index.rendercomments);
    
};