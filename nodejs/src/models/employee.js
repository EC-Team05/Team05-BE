const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  email: { type: String },
  ide: { type: Number },
  idstore: { type: Number },
  img: { type: String },
  name: { type: String },
  password: { type: String },
  phone: { type: String },
  rate: { type: Number },
  attended: { type: Number },
  experience: { type: Number }
},
  {
    collection: 'EMPLOYEE'
  });

const employee = mongoose.model('EMPLOYEE', EmployeeSchema);
module.exports = {
  async top5(){
    return await employee.aggregate( [ { $project : { _id: 0, name : 1 , img : 1 , phone : 1 , attended : 1, experience : 1 } } ] );
  }
};
