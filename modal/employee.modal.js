const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employeeSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    position:String,
    salary:String
});



const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;