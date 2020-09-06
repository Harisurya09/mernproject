const express = require('express');
const productRouter = new express.Router();


// product model 
const product = require('../Models/productModel')


productRouter.get('/prod/riding-jacket', async (req,res)=>{
    
    try {
        const data = await product.find({category: 'jacket'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})

productRouter.get('/prod/riding-helmet', async (req,res)=>{
    
    try {
        const data = await product.find({category: 'helmet'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})

productRouter.get('/prod/riding-pant', async (req,res)=>{
    
    try {
        const data = await product.find({category: 'pant'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})

productRouter.get('/prod/boots', async (req,res)=>{
    try {
       const data = await product.find({category: 'boots'});
       res.status(200).send(data);
   } catch (err) {
       res.status(400).send(err)
   }
})


productRouter.get('/prod/riding-luggage', async (req,res)=>{
    try {
        const data = await product.find({category: 'luggage'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})


productRouter.get('/prod/accessories', async (req,res)=>{
    try {
        const data = await product.find({category: 'accessories'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})

productRouter.get('/prod/riding-gloves', async (req,res)=>{
    // return res.status(200).send('Hello Backend Server');
    try {
        const data = await product.find({category: 'gloves'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})

productRouter.get('/prod/safety-guards', async (req,res)=>{
    // return res.status(200).send('Hello Backend Server');
    try {
        const data = await product.find({category: 'guards'});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})

productRouter.get('/products/:id', async (req,res)=>{
    // return res.status(200).send('Hello Backend Server');
    // console.log(req.params)
    try {
        const data = await product.findById(req.params.id);
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err)
    }
})


module.exports = productRouter;