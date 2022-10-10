export default class OrdersController {
    constructor(ordermgr){
        this.repoManager=ordermgr;
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

    myorders = async (req, res) => {
        console.log("async")
        let result = [];
        result = await this.repoManager.myorders(req);
        res.send(result);
    };

   

    
}