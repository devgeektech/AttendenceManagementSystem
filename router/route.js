const user_controller = require('../controllers/users');
const attendence_controller = require ('../controllers/attendence');
var express = require('express');


module.exports.configure = function(app) {
    app.post('/employeecreate',user_controller.create)
    app.get('/employeeinfo',user_controller.getData); 
    app.post('/attendence',attendence_controller.create);  
}