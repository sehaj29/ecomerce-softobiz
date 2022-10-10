import sql from '../services/Db/db.js'
export default class Users {
    consrtuctor() { }
    getAll = function () {
        return new Promise(resolve => {
            let command = "SELECT * FROM user";
            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };
    getALLsellers = function () {
        return new Promise(resolve => {
            let command = "SELECT * FROM vendor";
            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };
    getALLvendors = function () {
        return new Promise(resolve => {
            let command = "SELECT * FROM delivery_partner";
            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };
    update = function (req) {
        return new Promise(resolve => {
            var telephone = req.body.telephone
            var email = req.body.email
            let user = "select * from user";
            sql.query(user, (err, rows, fields) => {
                let see = rows.find((person) => (person.email === email))
                console.log(see)
                if (rows.find((person) => (person.email === email))) {

                    let command = `UPDATE user SET telephone= ? WHERE email= ?`;
                    let data = [telephone, email]
                    sql.query(command, data, (err, rows, fields) => {
                        if (err) throw err
                        resolve(rows)
                    })

                }

            });

        })
    }


    getById = function (id) {
        return new Promise(resolve => {
            let command = "SELECT * FROM user  WHERE id=" + id;
            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    };



    insert = function (req) {
        return new Promise(resolve => {
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
                resolve(rows);
            })
        })
    }

    remove = function (id) {
        return new Promise(resolve => {
            let command = "DELETE FROM user Where id=" + id;
            sql.query(command, (err, rows, fields) => {
                resolve(rows);
            })
        })
    }
}
