const mongoose = require('mongoose');

const mobileschema = mongoose.Schema({
    title:{
        type:String,
        
    },
    imgurl:{
        type:String,
        
    },
    price:{
        type:String,
        
    },
    Price:{
        type:Number
    }
    ,
    url:{
        type:String,
        
    },
    specs:{
        memory:{
            type:String
        },
        processor:{
            type:String
        },
        display:{
            type:String
        },
        camera:{
            
            rear:{
                type:String
            },
            front:{
                type:String
            }
        }
        
    }

    


});
const mobiles = mongoose.model('mobile',mobileschema)
module.exports = mobiles