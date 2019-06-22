var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let addressSchema = new Schema({
  state:String,
  country:String,
  addressLine1:String,
  addressLine2:String,
  isPrimary:false,
  userId:{ type:Schema.Types.ObjectId , ref:'User'}
});

const Address = mongoose.model('Address',addressSchema);
module.exports = Address;