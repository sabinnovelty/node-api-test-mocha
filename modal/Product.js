const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    pname:{
        type:String,
        required:true
    },
    price:Number
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;

