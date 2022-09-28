const { response } = require('express');
const dal=require('../models/admin');

exports.getAll= async function(req, res){  
    let result=[];
    result=await dal.getAll();
    res.send(result); 
};

exports.getById= async function(req, res){  
    let result=[];
    result=await dal.getById(req.params.id);
    res.send(result); 
};

exports.insert=async(req, res)=>{
let result=[];
result=await dal.insert(req);
res.send(result);
};

exports.update=async(req, res)=>{
    let result=[];
result=await dal.update(req);
res.send(result);

};

exports.remove=async (req, res)=>{
    let result=[];
    result=await dal.remove(req.params.id)
    res.send(result);
};
exports.postById=async (req, res)=>{
    let result=[];
    result=await dal.postById(req.params.id)
    res.send(result);
};
exports.getAllProducts=async (req, res)=>{
    let result=[];
    result=await dal.getAllProducts()
    res.send(result);
};