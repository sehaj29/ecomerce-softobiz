export default class ChangePasswordController {
    constructor(passmgr){
        this.repoManager=passmgr;
        }
    changePassword = async(req, res)=> {
        let result = await this.repoManager.changePassword(req);
        res.send(result);
    };

    
   

    
}