var authController=require('../controllers/authcontrollerseller');
var sellerController=require('../controllers/sellerController');

//HTTP request mapping is done using routing technique
module.exports=function(app){
   
            
            
    app.route('/api/seller/addproducts')
             .post(sellerController.insert)  //remove existing task whose id =12
    app.route('/api/seller/deleteproducts')
            .delete(sellerController.remove)

    app.route('/api/seller/editproducts')
            .put(sellerController.edit)


    app.route('/api/seller/myproducts')
            .post(sellerController.myproducts)




    app.route('/api/seller/login')
            .post(authController.login);
    app.route('/api/seller/register')
            .post(authController.register);
   
};