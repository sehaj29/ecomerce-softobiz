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
exports.register=(req, res)=>{let firstname=req.body.first_name;
    console.log(firstname)
    let lastname=req.body.last_name;
    let location=req.body.location;
    let username=req.body.username;
    let password=req.body.password;
    let address=req.body.address;
    let telephone=req.body.telephone;
    let email=req.body.email;
    console.log(email)
    let command=`INSERT INTO user(first_name,last_name,username,password,address,telephone,email) VALUES (?,?,?,?,?,?,?)`;
    sql.query(command,[firstname,lastname,username,password,address,telephone,email],(err, rows, fields)=>{
        if (err) throw err
        res.send("new user registrations...")
    })
 
}