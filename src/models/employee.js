const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  email: { type: String },
  ide: { type: String },
  idstore: { type: Number },
  img: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String },
  phone: { type: String },
  rate: { type: Number },
  attended: { type: Number },
  experience: { type: String },
  dob: {type: String},
  gender:{type:String},
  biography:{type:String},
  employee_type:{type:Number},
  fburl: {type:String},
  twitterurl:{type:String},
  igurl: {type:String},
  pinteresturl: {type:String},
  address:{type:String}
},
  {
    collection: 'EMPLOYEE'
  });

module.exports = mongoose.model('EMPLOYEE', EmployeeSchema);


