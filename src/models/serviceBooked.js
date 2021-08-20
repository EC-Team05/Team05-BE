const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idsb: { type: Number },
  idservice: { type: Number },
  price: { type: String },
  amount: { type: Number }
},
  {
    collection: 'SERVICE_BOOKED'
  });

module.exports = mongoose.model('SERVICE_BOOKED', schema);
