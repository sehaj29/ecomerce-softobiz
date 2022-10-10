import ChangePasswordController from '../controllers/changePasswordController.js';
import ChangePassword from '../models/ChangePassword.js'


export default function (app) {
    let passmgr=new ChangePassword()
    let changePasswordController=new ChangePasswordController(passmgr)
    


    app.route('/api/changePassword')
            .put(changePasswordController.changePassword)  //remove existing task whose id =12
   



};