const sql=require('../models/db');
exports.login=(req, res)=>{
    var email=req.body.email
    console.log(email)
    let user = "select * from user";
    sql.query(user,(err,rows,fields)=>{
       
        if(rows.find((person)=>(person.email===email))){
           res.send("welcome")
        }
    else{
        message="Invalid User";
    }
    })
}
exports.register=(req, res)=>{
    console.log(req.body)
    let firstname=req.body.Firstname;
    console.log(firstname)
    let lastname=req.body.Lastname;
    let location=req.body.location;
    let username=req.body.Username;
    let password=req.body.password;
    let address=req.body.Address;
    let telephone=req.body.Telephone;
    let email=req.body.email;
    console.log(email)
    console.log(address)
    console.log(telephone)
    console.log(username)
    console.log(password)
    let command=`INSERT INTO user(first_name,last_name,username,password,address,telephone,email) VALUES (?,?,?,?,?,?,?)`;
    sql.query(command,[firstname,lastname,username,password,address,telephone,email],(err, rows, fields)=>{
        if (err) throw err
        res.send("new user registrations...")
    })
 
}
