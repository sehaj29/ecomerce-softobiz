import PaymentController from '../controllers/paymentController.js';
import Payment from '../models/payment.js'


export default function (app) {
    let paymentmgr=new Payment()
    let paymentController=new PaymentController(paymentmgr)
    


    app.route('/api/payment')
            .post(paymentController.insert)  
    

};