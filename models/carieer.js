const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let carieer = new Schema({
    name: {
        type: String
     },
    retail: {
        type: String
       
    },
    wholesale: {
        type: String
       
    },
    location: {
        type: String
    },
    NOCLocation: {
        type: String
       
    },
    nocemailid: {
        type: String
       
    },
    accountmanager: {
        type: String
       
    },
    amcontactnumber: {
        type: String
       
    },
    amemailid: {
        type: String
       
    },
    email2: {
        type: String
       
    },
    banificaryname: {
        type: String
       
    },
    bankname: {
        type: String
       
    },
    accountnumber: {
        type: String
       
    },
    ifsc: {
        type: String
       
    },
    swift: {
        type: String
       
    },
    bankaddress: {
        type: String
       
    },
    billdurationdays: {
        type: String
       
    },
    Duedays: {
        type: String
       
    },
    dynamiccreditlimit: {
        type: String
       
    },
    contractcreditlimit: {
        type: String
       
    }
})

module.exports = mongoose.model('carieer', carieer);