const mongoose = require('mongoose');

const laptopschema = mongoose.Schema({
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
    specs:{
        ram:{
            type:String
        },
        processor:{
            type:String
        },
        display:{
            type:String
        },
        storage:{
            type:String
            
        },
        battery:{
            type:String
        }
        
    },
    category:{
        type:String
    }


});
const laptops = mongoose.model('laptop',laptopschema)
module.exports = laptops