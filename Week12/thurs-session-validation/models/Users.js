const {mongoose} = require("../db")

const User = new mongoose.Schema({
    //add the properties that correlate to the Collection documents
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// once we setup the schema - we need to export it for use in auth.js

module.exports = mongoose.model("user", User);