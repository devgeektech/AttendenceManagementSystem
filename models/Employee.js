var mongoose = require('mongoose');
 
var employeeinfoSchema = mongoose.Schema({
        email: {
            type: String
    
        },
        name: {
            type:String

        },
      created: { 
        type: Date,
        default: Date.now
    }
});
 
 mongoose.model('Employee', employeeinfoSchema);
 
