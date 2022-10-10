import sql from '../services/Db/db.js'

export default class Products {
    getAll= function () {
        return new Promise(resolve => {
            let command = "SELECT * FROM products";

            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };
    getById = function (id) {
        return new Promise(resolve => {
            let command = "SELECT * FROM products  WHERE id=" + id;
            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };
}

