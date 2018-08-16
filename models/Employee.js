var mongoose = require('mongoose');
 
var employeeinfoSchema = mongoose.Schema({
        Email: {
            type: String,
            required: true
        },
        Name: {
            type:String,
            required:true
        },
      created: { 
        type: Date,
        default: Date.now
    }
});
 
 mongoose.model('Employee', employeeinfoSchema);
 
