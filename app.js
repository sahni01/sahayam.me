const express = require('express');
const app = express();
const path = require('path')


const PORT = process.env.PORT||5555;

app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

require('./db/conn')


const router = require('./routes/router');
app.use('/products',router)
    

    app.listen(PORT,()=>{
        console.log(`server is listening at http://localhost:${PORT}`)
    })
