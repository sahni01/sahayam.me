const mongoose = require('mongoose');

const url = 'mongodb+srv://sahni01:Tctfpmz2BpGaqNN@cluster0.kgims.mongodb.net/sahayam?retryWrites=true&w=majority';

mongoose.connect(url,{useNewUrlParser:true});
const con =mongoose.connection;

con.on('open',()=>{
    console.log('database connected...')
})
con.on('close',()=>{
    console.log('database connection closed')
})