const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    idc: { type: String},
    name: { type: String},
    phone: { type: String},
    email: { type: String },
    password: { type: String },
    address: { type: String },
    dob: { type: String}
  },
  {
    collection: 'CUSTOMER'
  });
module.exports = mongoose.model('CUSTOMER', schema);