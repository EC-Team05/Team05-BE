const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomerSchema = new Schema({
    idc: { type: String},
    name: { type: String},
    phone: { type: String},
    email: { type: String },
    password: { type: String },
    address: { type: String },
    dob: { type: String, default: Date.now }
  },
  {
    collection: 'CUSTOMER'
  });
const CustomerModel = mongoose.model('customer', CustomerSchema);
module.exports = CustomerModel;