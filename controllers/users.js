var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var models = require('mongoose').models;
var app = express();



exports.create = (req, res) =>{
    console.log(req.body, 'testing')
    var obj = {};
    obj.Email = req.body.email;
    obj.Name = req.body.name;
    var employee = new models.Employee(obj);
    employee.save(function(err, data) {
    if (err) throw err;
    console.log('EmployeeInfo successfully saved.');
   
    return res.send(data)
  });
}
exports.getData = (req,res) =>{
models.Employee.find({})
        .exec(function (err, result) {
            if (err) throw err;
         console.log(result)
       return res.send(result)
        });
// exports.getData = (req,res) =>{
//    models.Employee.find({},function(err,result){
//         if (err) throw err;
//         console.log(result)
//     //   return res.send(result)
//       });
        
        }
    
    
    

