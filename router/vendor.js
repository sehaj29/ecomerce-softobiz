var authController=require('../controllers/authcontrollerVendor');
var vendorController=require('../controllers/vendorcontroller');

//HTTP request mapping is done using routing technique
module.exports=function(app){
   
            
            
    app.route('/api/vendor/add-products')
             .post(vendorController.insert)  //remove existing task whose id =12
    app.route('/api/vendor/delete-products')
            .delete(vendorController.remove)

    app.route('/api/vendor/edit-products')
            .put(vendorController.edit)


    app.route('/api/vendor/my-products')
            .post(vendorController.myproducts)




    app.route('/api/vendors/login')
            .post(authController.login);
    app.route('/api/vendors/register')
            .post(authController.register);
   
};