
export class UserController {
    constructor(usermgr){
        this.dal=usermgr
    }
    getAll = async function (req, res) {
        let result = [];
        result = await this.dal.getAll();
        res.send(result);
    };

    getById = async function (req, res) {
        let result = [];
        result = await this.dal.getById(req.params.id);
        res.send(result);
    };

    insert = async (req, res) => {
        let result = [];
        result = await this.dal.insert(req);
        res.send(result);
    };

    update = async (req, res) => {
        let result = [];
        result = await this.dal.update(req);
        res.send(result);
    };

    remove = async (req, res) => {
        let result = [];
        result = await this.dal.remove(req.params.id)
        res.send(result);
    };
    getALLsellers = async (req, res) => {
        let result = [];
        result = await this.dal.getALLsellers()
        res.send(result);
    };
    getALLvendors = async function (req, res) {
        let result = [];
        result = await this.dal.getALLvendors();
        res.send(result);
    };
}