import sql from '../services/Db/db.js'
import jwt from 'jsonwebtoken'
import secret from '../config.js'
export default class AuthControllerSeller {
    login = (req, res) => {
        var post = {
            password: req.body.password,
            username: req.body.username
        }

        var query = "SELECT ??,?? FROM ??,?? WHERE ??=? AND ??=?";

        var table = ["username", "password", "seller", "user", "username", post.username, "password", post.password];

        query = sql.format(query, table);
        sql.query(query, (err, rows, fields) => {
            let userData = {
                username: post.username,
                password: post.password
            };

            if (err) throw err
            else {
                if (rows.length == 1) {
                    console.log("hello")
                    var token = jwt.sign(userData, secret.jwtSecretKey, {
                        expiresIn: 1440

                    });
                    console.log(token)
                    res.status(200).send(token);


                }
                else {
                    message = "Invalid User";
                }
            }

        })
    }
    register = (req, res) => {
        let firstname = req.body.first_name;
        console.log(firstname)
        let lastname = req.body.last_name;
        let location = req.body.location;
        let username = req.body.username;
        let password = req.body.password;
        let address = req.body.address;
        let telephone = req.body.telephone;
        let email = req.body.email;
        console.log(email)
        let command = `INSERT INTO user(first_name,last_name,username,password,address,telephone,email) VALUES (?,?,?,?,?,?,?)`;
        sql.query(command, [firstname, lastname, username, password, address, telephone, email], (err, rows, fields) => {
            if (err) throw err
            res.send("new user registrations...")
        })

    }
}