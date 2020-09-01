const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName : {
        type: String,
        require: true,
        trim: true
    },
    emailID: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    username: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    }, 
    password: {
        type: String,
        require: true,
        trim: true,
        minlenght: 8,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    address: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    state: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    pincode: {
        type: Number,
        require: true,
        trim: true
    },
    phoneNumber : {
        type: Number,
        require: true,
        trim: true
    },
    tokens: [{
        token : {
            type: String,
            
        }
    }]
},{
    timestamps : true
})

// password encryption middleware (triggers before saving the user data)
userSchema.pre('save', async function (next){
    const user = this;
    if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8)
	};
})

// hide user data from exposing.
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    // console.log(userObject)
    return userObject
}

//generate tokens while logging in 
userSchema.methods.generateTokens = async function () {
    const user = this  ;
    // console.log(user)
    const token = jwt.sign({_id : user._id.toString()}, process.env.JWT)
    //adding tokens into the db documents
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

//find user credentails 
userSchema.statics.findByCredentials = async (emailID, password) => {

    const user = await userDetial.findOne({ emailID })

    if (!user) {
        throw new Error('Invalid Credentials!!!')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    // console.log(isMatch)

    if (!isMatch) {
        throw new Error('Invalid Credentials!!!')
    }

    return user
}

const userDetial = mongoose.model('userDetial', userSchema);

module.exports = userDetial;