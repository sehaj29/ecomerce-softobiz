import sql from '../services/Db/db.js'


export default class AuthControllerVendor {
    constructor(){  }
    login = (req, res) => {
        var email = req.body.email
        console.log(email)
        let user = "select * from delivery_partner";
        sql.query(user, (err, rows, fields) => {

            if (rows.find((person) => (person.email === email))) {
                res.send("welcome")
            }
            else {
                message = "Invalid User";
            }
        })
    }
    register = (req, res) => {
        let firstname = req.body.Delivery_partner_name;
        console.log(firstname)
        let location = req.body.location;
        let company_name = req.body.company_name;
        let telephone = req.body.Delivery_partner_contact;
        let email = req.body.Delivery_partner_email;
        console.log(email)
        let command = `INSERT INTO user(first_name,telephone,email,company_name) VALUES (?,?,?,?)`;
        sql.query(command, [firstname, telephone, email, company_name], (err, rows, fields) => {
            if (err) throw err
            res.send("new user registrations...")
        })

    }
}