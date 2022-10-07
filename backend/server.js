import express from 'express'

import userRoutes from './router/users';
import 
const categoriesRoutes=require('./router/admin');
const userRoutes=require('./router/users');
const vendorRoutes=require('./router/vendors');
const sellerRoutes=require('./router/seller');
const app=express();
const cors=require('cors');
app.use(cors());


app.set('view engine','ejs');
//middleware configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());
categoriesRoutes(app);
userRoutes(app)
vendorRoutes(app)
sellerRoutes(app)
app.get('/user/register',(req,res)=>{
    res.render("../views/register")
})
app.get('/user/login',(req,res)=>{
    res.render("../views/userLogin")
})
app.listen(8000,()=>{
    console.log("App server is listening on port 7000");
})