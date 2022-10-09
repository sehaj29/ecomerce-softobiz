import ProductController from '../controllers/productscontroller.js';
import Products from '../models/products.js'


export default function (app) {
    let productmgr=new Products()
    let productController=new ProductController(productmgr)
    


    app.route('/api/allproducts')
            .get(productController.getAll)  //remove existing task whose id =12
   




    

};