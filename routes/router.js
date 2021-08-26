
const express = require('express');
const router = express.Router();



const mobiles = require('../models/mobile');
const laptops = require('../models/laptop');
const homeapps = require('../models/homeapp');
router.get('/mobiles',async(req,res)=>{
    try{
        
        const data = await mobiles.find();
        res.json(data);

    }catch{

        res.status(400).send('Error' + err);
    }
})

router.post('/mobiles',async(req,res)=>{
    console.log(req.body)    

    const data = new mobiles({
        title:req.body.title,
        imgurl:req.body.imgurl,
        price:req.body.price,
        url:req.body.url,
        specs:req.body.specs,
        Price:req.body.Price
    

    }
    )
    try{
        
        const data_return = await data.save()
        console.log("data saved" + req.body);
        res.status(200).json(data_return)

    }
    catch{
        (err)=>{
            console.log(err);
            res.status(400).send('Error' + err);
        }

    }
})
router.get('/laptops',async(req,res)=>{
    try{
        
        const data = await laptops.find();
        res.json(data);

    }catch{

        res.status(400).send('Error' + err);
    }
})

router.post('/laptops',async(req,res)=>{
    const data = new laptops({
        title:req.body.title,
        imgurl:req.body.imgurl,
        price:req.body.price,
        url:req.body.url,
        specs:req.body.specs,
        

    })
    try{
        
        const data_return = await data.save()
        console.log("data saved" + req.body);
        res.status(200).json(data_return)

    }
    catch{
        (err)=>{
            console.log(err);
            res.status(400).send('Error' + err);
        }

    }
})
router.get('/homeapps',async(req,res)=>{
    try{
        
        const data = await homeapps.find();
        res.json(data);

    }catch{

        res.status(400).send('Error' + err);
    }
})

router.post('/homeapps',async(req,res)=>{
    const data = new homeapps({
        title:req.body.title,
        imgurl:req.body.imgurl,
        price:req.body.price,
        url:req.body.url,
        specs:req.body.specs,
        

    })
    try{
        
        const data_return = await data.save()
        console.log("data saved" + req.body);
        res.status(200).json(data_return)

    }
    catch{
        (err)=>{
            console.log(err);
            res.status(400).send('Error' + err);
        }

    }
})



module.exports = router