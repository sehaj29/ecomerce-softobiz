
const sql=require('./db');
const fsModule=require('fs')

exports.getAll=function(){
   return new Promise(resolve=>{
        let command="SELECT * FROM product_categories";

        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
    }) 
};


exports.getById=function(id){
    return new Promise(resolve=>{
         let command="SELECT * FROM product_categories  WHERE id="+id;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };

 

 exports.insert=function(req){
    return new Promise(resolve=>{
       
        var name=req.body.cayegory_name
        console.log(name)

        let command=`INSERT INTO product_categories(cayegory_name) VALUES (?)`;
        sql.query(command,[name],(err, rows, fields)=>{
            resolve(rows);
        })
})
}


exports.remove=function(id){
    return new Promise(resolve=>{
        let command="DELETE FROM product_categories Where id="+id ;
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
})
}
exports.postById=function(id){

    return new Promise(resolve=>{
        
         let command="SELECT * FROM products";
         sql.query(command,(err, rows, fields)=>{
             let result=[]
             for(let i=0; i<rows.length; i++){
                 console.log(rows[i].category_id)
                 if(parseInt(id)===rows[i].category_id){
                    console.log(id)
                     result.push(rows[i])
 
 
                     
                 }
 
             }
             resolve(result);
         })
     }) 
 };
 exports.getAllProducts=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM products";
 
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
