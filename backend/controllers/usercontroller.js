
export default class UserController {
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
        result = await this.repoManager.insert(req);
        res.send(result);
    };

    update = async (req, res) => {
        let result = [];
        result = await this.repoManager.update(req);
        res.send(result);
    };

    remove = async (req, res) => {
        let result = [];
        result = await this.repoManager.remove(req.params.id)
        res.send(result);
    };
    getALLsellers = async (req, res) => {
        let result = [];
        result = await this.repoManager.getALLsellers()
        res.send(result);
    };
    getALLvendors = async  (req, res)=> {
        let result = [];
        result = await this.repoManager.getALLvendors();
        res.send(result);
    };
}