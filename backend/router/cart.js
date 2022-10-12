import CartController from '../controllers/cartcontroller.js';


export default function (app) {

    let cartController=new CartController(productmgr)
    


    app.route('/api/allcartitem')
            .get(cartController.getAll)  //remove existing task whose id =12
   
    
    app.route('/api/cartitembyId/:id')
            .get(cartController.getById)
    app.route('/api/removeitembyId')
            .get(cartController.removeItem)
    app.route('/api/updatecart/:id')
            .put(cartController.updateItem)



    

};