export default class ProductController {
    constructor(productmgr){
        this.repoManager=productmgr;
        }
    getAll = async(req, res)=> {
        console.log("hello")
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
    update = async (req, res) => {
        let result = [];
        result = await this.repoManager.update(req);
        res.send(result);
    };
    myproducts = async (req, res) => {
        let result = [];
        result = await this.repoManager.myproducts(req);
        res.send(result);
    };
}