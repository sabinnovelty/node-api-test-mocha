var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let contactSchema = new Schema({
 phoneNumber:String,
 isPrimary:false,
 userId:{ type:Schema.Types.ObjectId , ref:'User'}
});

const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;