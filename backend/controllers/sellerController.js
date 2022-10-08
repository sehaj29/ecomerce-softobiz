
import dal from '../models/seller.js'


export class SellerController {
    constructor(){ }
    myproducts = async function (req, res) {
        let result = [];
        result = await dal.myproducts(req);
        res.send(result);
    };

    insert = async (req, res) => {
        let result = [];
        result = await dal.insert(req);
        res.send(result);
    };



    remove = async (req, res) => {
        let result = [];
        result = await dal.remove(req.params.id)
        res.send(result);
    };
    edit = async (req, res) => {
        let result = [];
        result = await dal.edit(req)
        res.send(result);
    };
}