const { response } = require('express');
const dal=require('../models/seller');
exports.myproducts= async function(req, res){  
    let result=[];
    result=await dal.myproducts(req);
    res.send(result); 
};

exports.insert=async(req, res)=>{
let result=[];
result=await dal.insert(req);
res.send(result);
};



exports.remove=async (req, res)=>{
    let result=[];
    result=await dal.remove(req.params.id)
    res.send(result);
};
exports.edit=async (req, res)=>{
    let result=[];
    result=await dal.edit(req)
    res.send(result);
};