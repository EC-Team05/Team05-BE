const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idproduct: { type: Number },
  amount: { type: Number },
  name: { type: String },
  brand: { type: String },
  price: { type: String },
  img: {type: String} 
},
  {
    collection: 'PRODUCT'
  });
module.exports =mongoose.model('PRODUCT', schema);
