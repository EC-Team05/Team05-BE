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

  const blog = mongoose.model('SERVICE', schema);
  module.exports = {
    async all() {
      return await blog.aggregate( [ { $project : { _id: 0, name : 1 , duration : 1 , price : 1 } } ] );
    }
  };
