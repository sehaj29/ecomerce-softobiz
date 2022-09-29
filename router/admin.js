var categoriesController=require('../controllers/adminController');
var userController=require('../controllers/usercontroller');
//HTTP request mapping is done using routing technique
module.exports=function(app){
    app.route('/api/categories')
            .get(categoriesController.getAll)  
            .post(categoriesController.insert) 
            
    app.route('/api/categories/:id')
             .delete(categoriesController.remove) 
             .get(categoriesController.getById) 
             .post(categoriesController.postById)
    app.route('/api/products')
        .get(categoriesController.getAllProducts) 
        .put(categoriesController.update)
    app.route('/api/admin/users')
        .get(userController.getAll) 
    app.route('/api/sellers')
        .post(userController.getALLsellers) 
};

