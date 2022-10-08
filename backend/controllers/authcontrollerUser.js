import sql from './db.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
export default class AuthControllerUser {
    login = (req, res) => {
        let data = req.body
        var post = {
            password: req.body.password,
            email: req.body.email
        }

        var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";

        var table = ["user", "password", post.password, "email", post.email];

        query = sql.format(query, table);

        sql.query(query, (err, rows, fields) => {
            console.log(query)
            if (err) throw err
            else {
                if (rows.length == 1) {
                    let userData = {
                        time: Date(),
                        email: data.email,
                    };

                    var token = jwt.sign(userData, config.secret, {
                        expiresIn: 50 * 3600,


                    });
                    console.log(token);



                }
                else {
                    res.status(403).send("Invalid User");
                }

            }
            res.status(200).render(index.html);

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