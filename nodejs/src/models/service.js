const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idservice: { type: Number },
  idcategory: { type: Number },
  name: { type: String },
  duration: { type: String },
  price: { type: String }
},
  {
    collection: 'SERVICE'
  });
  module.exports =mongoose.model('SERVICE', schema);
