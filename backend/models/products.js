import sql from '../services/Db/db.js'
import jwt from 'jsonwebtoken';
import secret from '../config.js'

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
    myproducts = function (req) {
        return new Promise(resolve => {
            let authKey = "Authorization";
            let token = req.header(authKey);
            let extractedData = jwt.verify(token, secret.jwtSecretKey)
            console.log(extractedData)
            let username = extractedData.username

            var query = "SELECT * FROM ?? WHERE ??=? ";

            var table = ["products", "supplier_username", username];

            query = sql.format(query, table);
            console.log(query)

            sql.query(query, (err, rows, fields) => {
                if (err) throw err
                
                    resolve(rows);
                
            })
        })
    };
}

