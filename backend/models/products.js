import sql from './db.js'

export default class Products {
    getAll= function () {
        return new Promise(resolve => {
            let command = "SELECT * FROM products";

            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };
}

