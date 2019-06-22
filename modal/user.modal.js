const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Contact = require('./contact.modal');
const Address = require('./address.modal');


// let userSchema = new Schema({
//     name:String,
//     email:String,
//     dob:String,
//     contact:[{ type: Schema.Types.ObjectId, ref: 'Contact'  }],
//     address: [{ type: Schema.Types.ObjectId , ref:'Address '} ]
// });

let userSchema = new Schema({
    name:String,
    email:String,
    dob:String
});

// userSchema.pre('save',function( next ){
//     console.log(this,'userschema');
//     next();
// });

const User = mongoose.model('User',userSchema);
module.exports = User;