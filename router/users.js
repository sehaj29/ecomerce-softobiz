var authController=require('../controllers/authcontrollerUser');
var userController=require('../controllers/usercontroller');

//HTTP request mapping is done using routing technique
module.exports=function(app){
    app.route('/api/users')
            .get(userController.getAll)  // get all tasks
            .post(userController.insert) 
            .put(userController.update) 
    app.route('/api/users/:id')
             .delete(userController.remove)  
             .get(userController.getById)  //get  existing task whose id =12
             
    app.route('/api/users/login')
            .post(authController.login);
    app.route('/api/users/register')
            .post(authController.register);
            
            
            
            
            };



