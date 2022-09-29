var authController=require('../controllers/authcontrollerseller');
var vendorController=require('../controllers/sellerController');

//HTTP request mapping is done using routing technique
module.exports=function(app){
   
            
            
    app.route('/api/seller/add-products')
             .post(vendorController.insert)  //remove existing task whose id =12
    app.route('/api/vendor/delete-products')
            .delete(vendorController.remove)

    app.route('/api/seller/edit-products')
            .put(vendorController.edit)


    app.route('/api/seller/my-products')
            .post(vendorController.myproducts)




    app.route('/api/seller/login')
            .post(authController.login);
    app.route('/api/seller/register')
            .post(authController.register);
   
};