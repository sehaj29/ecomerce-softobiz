import sql from '../models/db.js'
import jwt from 'jsonwebtoken'
import secret from '../config.js'
export default class AuthControllerUser {
    constructor(){  }
    login = (req, res) => {
        var post = {
            password: req.body.password,
            username: req.body.username
        }

        var query = "SELECT ??,?? FROM ??,?? WHERE ??=? AND ??=?";

        var table = ["username", "password", "customer", "user", "username", post.username, "password", post.password];

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
                    res.send("invalid user");
                }
            }

        })
    }
    register = (req, res) => {
        console.log(req.body)
        let firstname = req.body.Firstname;
        console.log(firstname)
        let lastname = req.body.Lastname;
        let location = req.body.location;
        let username = req.body.Username;
        let password = req.body.password;
        let address = req.body.Address;
        let telephone = req.body.Telephone;
        let email = req.body.email;
        console.log(email)
        console.log(address)
        console.log(telephone)
        console.log(username)
        console.log(password)
        let command = `INSERT INTO user(first_name,last_name,username,password,address,telephone,email) VALUES (?,?,?,?,?,?,?)`;
        sql.query(command, [firstname, lastname, username, password, address, telephone, email], (err, rows, fields) => {
            if (err) throw err
            res.send("new user registrations...")
        })

    }
}