var authController=require('../controllers/authcontrollerVendor');
module.exports=function(app){
    

    app.route('/api/vendors/login')
            .post(authController.login);
    app.route('/api/vendors/register')
            .post(authController.register);
            
};
