
import dal from '../models/admin.js'

export default class AdminController {
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
    postById = async (req, res) => {
        let result = [];
        result = await dal.postById(req.params.id)
        res.send(result);
    };
    getAllProducts = async (req, res) => {
        let result = [];
        result = await dal.getAllProducts()
        res.send(result);
    };
}