import express from 'express'
import expressSession from 'express-session';
import userRoutes from './router/users.js';
import categoriesRoutes from './router/admin.js'
import vendorRoutes from './router/vendors.js'
import sellerRoutes from './router/seller.js';
import productRoutes from './router/products.js'
const app=express();
import cors from 'cors';
app.use(cors());


app.set('view engine','ejs');
//middleware configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());
categoriesRoutes(app);
userRoutes(app)
vendorRoutes(app)
sellerRoutes(app)
productRoutes(app)
app.get('/user/register',(req,res)=>{
    res.render("../views/register")
})
app.get('/user/login',(req,res)=>{
    res.render("../views/userLogin")
})
app.listen(8000,()=>{
    console.log("App server is listening on port 8000");
})