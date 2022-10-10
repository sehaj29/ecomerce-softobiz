import sql from '../services/Db/db.js'
import jwt from 'jsonwebtoken';
import secret from '../config.js'

export default class Orders{
    construcor(){  }
    myorders = function (req) {
        return new Promise(resolve => {
            let authKey="Authorization";
    let token =req.header(authKey);
    let extractedData=jwt.verify(token,secret.jwtSecretKey)
    console.log(extractedData)
    let username=extractedData.username

    var query = "SELECT ?? FROM ?? WHERE ??=? ";

        var table = ["customer_id", "customer", "username",username];

        query = sql.format(query, table);
        console.log(query)
          
            sql.query(query, (err, rows, fields) => {
                if (err) throw err
                console.log(rows)
                var query2="SELECT * FROM ?? WHERE ??=? "
                var table1= [ "orders", "customer_id",rows];
                query2=sql.format(query, table1);
                sql.query(query2, (err, rows, fields) => {
                    if (err)throw err
                    resolve(rows);
            })
            })
        })
    };


}