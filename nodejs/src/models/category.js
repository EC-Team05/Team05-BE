const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idcategory: { type: Number },
  name: { type: String }
},
  {
    collection: 'CATEGORY'
  });

module.exports = mongoose.model('CATEGORY', schema);
