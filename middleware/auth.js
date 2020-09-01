const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
// const cookieparser = require('cookie-parser');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','');
        // console.log(token)
        const decoded = jwt.verify(token, process.env.JWT);
        // console.log(decoded)
        const user = await User.findOne({_id: decoded._id, 
                                            'tokens.token' : token});

        if(!user){
            throw new error('Invalid User')
        }
        // console.log(user)
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({error: 'Please login in!!!'})
    }
}

module.exports = auth;