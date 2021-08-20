const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idstore: { type: Number },
  name: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: String }
},
  {
    collection: 'STORE'
  });

module.exports = mongoose.model('STORE', schema);
