import sql from './db.js'
export default class Orders{
    construcor(){  }
    myorders = function (req) {
        return new Promise(resolve => {
            let authKey="Authorization";
    let token =req.header(authKey);
    let extractedData=jwt.verify(token,jwtSecretKey)
    console.log(extractedData)
    let username=extractedData.client

    var query = "SELECT customer_id FROM ?? WHERE ??=? ";

        var table = ["customer", "username", username];

        query = sql.format(query, table);
        console.log(query)
          
            sql.query(command, (err, rows, fields) => {
                console.log(rows)

                resolve(rows);
            })
        })
    };


}