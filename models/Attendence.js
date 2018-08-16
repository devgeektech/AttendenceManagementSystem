var mongoose = require('mongoose');
 
var attendenceDetailsSchema = mongoose.Schema({
    email:
    {
        type:String,
        required:true
    },
    checkIn:{
        type: Boolean,
        require:true  
    },
   

    created: { 
        type: Date,
        default: Date.now
    }
});
 
 mongoose.model('Attendence', attendenceDetailsSchema);
 