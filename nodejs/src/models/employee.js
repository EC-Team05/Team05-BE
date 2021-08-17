const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  email: { type: String },
  ide: { type: Number },
  idstore: { type: Number },
  img: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String },
  phone: { type: String },
  rate: { type: Number },
  attended: { type: Number },
  experience: { type: Number }
},
  {
    collection: 'EMPLOYEE'
  });

module.exports = mongoose.model('EMPLOYEE', EmployeeSchema);


