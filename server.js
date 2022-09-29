const express=require('express');
const usersRoutes=require('./router/users');
const categoriesRoutes=require('./router/admin');
const userRoutes=require('./router/users');
const vendorRoutes=require('./router/vendors');
const sellerRoutes=require('./router/seller');
const app=express();
//middleware configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());
categoriesRoutes(app);
userRoutes(app)
vendorRoutes(app)
sellerRoutes(app)
app.listen(7000,()=>{
    console.log("App server is listening on port 7000");
})