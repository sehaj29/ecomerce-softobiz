import dal from '../models/users'
export class UserController {

    getAll = async function (req, res) {
        let result = [];
        result = await dal.getAll();
        res.send(result);
    };

    getById = async function (req, res) {
        let result = [];
        result = await dal.getById(req.params.id);
        res.send(result);
    };

    insert = async (req, res) => {
        let result = [];
        result = await dal.insert(req);
        res.send(result);
    };

    update = async (req, res) => {
        let result = [];
        result = await dal.update(req);
        res.send(result);
    };

    remove = async (req, res) => {
        let result = [];
        result = await dal.remove(req.params.id)
        res.send(result);
    };
    getALLsellers = async (req, res) => {
        let result = [];
        result = await dal.getALLsellers()
        res.send(result);
    };
    getALLvendors = async function (req, res) {
        let result = [];
        result = await dal.getALLvendors();
        res.send(result);
    };
}