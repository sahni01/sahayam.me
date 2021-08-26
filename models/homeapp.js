const mongoose = require('mongoose');

const homeappschema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgurl:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    discription:{
        type:String
    },
    warranty:{
        type:String

    },
    category:{
        type:String
    }


});
const homeapps = mongoose.model('homeapp',homeappschema)
module.exports = homeapps