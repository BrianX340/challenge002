const mongoose = require('mongoose');

const Products = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    barcode: String,
    imgPath: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', Products)