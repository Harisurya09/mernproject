const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brand:{
        type: String
    },
    productName: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    productImage:{
        type: String
    },
    productSize:{
        type: String
    }
})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel;