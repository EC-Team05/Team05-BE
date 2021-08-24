const mongoose = require('mongoose');

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

module.exports = mongoose.model('SERVICE_BOOKED', schema);
