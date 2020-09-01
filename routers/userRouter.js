const express = require('express');
const router = new express.Router();

const userModel = require('../Models/userModel');
const auth = require('../middleware/auth')

// const React = require('react');
// const ReactDOMServer = require('react-dom/server')
// const fs = require('fs');
const path = require('path');

router.get('/', (req, res,)=>{
    res.status(200).sendFile(path.join(__dirname, '../client/build/index.html'))
})

router.post('/user/register', async (req, res)=>{
    const user = new userModel(req.body.values);

    // console.log(user)
    try {
        await user.save();
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.post('/user/login', async (req, res)=> {
     const values = req.body.values;
    // console.log(req.body)
     try {
         const User = await userModel.findByCredentials(values.emailID, values.password);
         // console.log(User);
         const token = await User.generateTokens()
         // res.cookies('auth_token', token)
         res.status(200).send({User, token})
     } catch (error) {
         res.status(400).send(error)
     }
})

router.post('/user/logout', auth, async (req, res)=>{
    try {   
        req.user.tokens = req.user.tokens.filter((token)=>{
        return token.token !== req.token
        })
        await req.user.save();
        console.log('logged out')
        res.status(200).send()

} catch (error) {
    res.status(500).send({"error" : "Went something wrong"})
}
})


router.put('/user/me', auth, async (req,res) => {
    const userUpdates = Object.keys(req.body.values)
    const userAllowedUpdates = ['firstName','lastName','emailID', 'username', 'address','state', 'pincode','phoneNumber']
    const isValidOpertion = userUpdates.every((update)=> userAllowedUpdates.includes(update))

    if(!isValidOpertion){
        return res.status(404).send({error : 'Invalid updations!!!'})
    }

    try {
        userUpdates.forEach((update)=> req.user[update] = req.body.values[update]  ) // loop the each and every string in the object
        await req.user.save()  // schema pre() middleware tiggering point. 
        console.log('updated')
        const user = req.user
        res.status(200).send(user)
    }catch (error) {
        res.status(400).send(error)
    }

})


router.delete('/user/me/delete', auth, async (req, res) => {
    try {
        await req.user.remove();
        res.status(200).send({'Message': 'User profile deleted successfully'})

    } catch (error) {
        res.status(500).send(error)       
    }

})




module.exports = router;