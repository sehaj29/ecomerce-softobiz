const { response } = require('express');
const dal=require('../models/users');

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
exports.getALLsellers=async (req, res)=>{
    let result=[];
    result=await dal.getALLsellers()
    res.send(result);
};
exports.getALLvendors= async function(req, res){  
    let result=[];
    result=await dal.getALLvendors();
    res.send(result); 
};