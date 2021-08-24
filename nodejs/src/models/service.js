const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idservice: { type: String },
  idcategory: { type: Number },
  name: { type: String },
  duration: { type: String },
  price: { type: String },
  img: {type: String} 
},
  {
    collection: 'SERVICE'
  });
module.exports =mongoose.model('SERVICE', schema);
