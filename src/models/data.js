const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    regno:{
        type: String,
        required: true
    },
    submissionLink :{
        type: String,
    },
    abstract :{
        type: String,
        required: true
    }

})

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;