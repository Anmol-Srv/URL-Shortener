const mongoose = require('mongoose');

const urlSchema =new mongoose.Schema({
    shortId:{
        type: String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type: String,
        unique:true,
    },
    visitHistory:[
        {
            timestamp : {type: Number}
        }
    ],
},{timestamps:true});

const URL = mongoose.Model("url",urlSchema);

module.exports = {
    URL,
}