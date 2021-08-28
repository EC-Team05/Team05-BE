const mongoose = require('mongoose');
const service = require('./service');
const appointment = require('./Appointment');

var schema = new mongoose.Schema({
  idsb: { type: Number },
  idservice: { type: String },
  price: { type: String },
  amount: { type: Number },
  duration: {type: String}
},
  {
    collection: 'SERVICE_BOOKED'
  });
module.exports = mongoose.model('SERVICE_BOOKED',schema);