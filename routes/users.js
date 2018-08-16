var express = require('express');
var router = express.Router();
// var MongoClient =require('mongodb').MongoClient;



/* GET users listing. */
// router.get('/', function(req, res) {
//   var MongoClient =require('mongodb').MongoClient;
//   var url = "mongodb://localhost:27017/mydb"
//   MongoClient.connect(url,function(err,db){
//     console.log("connected");
//     var dbo = db.db('mydb');
//     dbo.collection("employeeinfo").find({}).toArray(function(err,result) {
//       if(err) throw err;
//       console.log(result);
//       res.send(result);
//       db.close();
//     })
//   });
//   });

 


module.exports = router;
