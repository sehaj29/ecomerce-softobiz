import sql from '../services/Db/db.js'
import jwt from 'jsonwebtoken';
import secret from '../config.js'

export default class ChangePassword{
    construcor(){  }
    changePassword= function (req) {
        return new Promise(resolve => {
            console.log(req.body)
            var post = {
               password: req.body.password,
               confirmpassword:req.body.confirmpassword,
            }
           

    var query = "UPDATE ?? SET ??=?  WHERE ??=? ";

        var table = ["user", "password",post.confirmpassword, "password",post.password];

        query = sql.format(query, table);
        console.log(query)
          
            sql.query(query, (err, rows, fields) => {
                if (err) throw err
                console.log(rows)
                
                    resolve(  "Updated" );
            
            })
        
        })
    
    };


}