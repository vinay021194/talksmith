const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ratesheet = new Schema({

    customer:{
        type: String
    },
    vendor:{
        type: String
    },

    carrier: {
        type: String
    },
    Tecprefix:{
        type: String
    },
    Quality:{
        type: String
    },
    UploadDate:{
        type: String,
        default: Date.now
    },
    file:{
        type: Buffer
    }, 
    


})
module.exports = mongoose.model('ratesheet', ratesheet);