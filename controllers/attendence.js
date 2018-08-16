var models = require('mongoose').models;

exports.create = (req,res) =>{
    console.log(req.body)
    var attendence = new models.Attendence({
         email : req.body.email,
         checkIn:req.body.checkIn,

    })

    attendence.save(function(err, data) {

        if (err) throw err;
        console.log(data)
        res.send(data);

        console.log(' successfully saved.');
      
      });

    }