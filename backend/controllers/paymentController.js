
export default class PaymentController {
    constructor(mgr){
        this.repoManager=mgr;
        }
    getAll = async(req, res)=> {
        let result = await this.repoManager.getAll();
        res.send(result);
    };

    getById = async (req, res)=> {
        let result = [];
        result = await this.repoManager.getById(req.params.id);
        res.send(result);
    };

    insert = async (req, res) => {
        let result = [];
        result = await this.repoManager.post(req);
        res.send(result);
    };

   

    
}