import AuthControllerVendor from '../controllers/authControllerVendor.js';
export default function (app) {
        let authController=new AuthControllerVendor() ;


        app.route('/api/vendors/login')
                .post(authController.login);
        app.route('/api/vendors/register')
                .post(authController.register);

};
