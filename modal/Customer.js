const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../modal/Product')

const customerSchema = new Schema({
    cname:String,
    address:{
        type:Array
    },
    products:[{ type:Schema.Types.ObjectId , ref:Product }]
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;