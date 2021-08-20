const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idblogcate: { type: Number },
  name: { type: String }
},
  {
    collection: 'BLOG_CATEGORY'
  });

const blogCategory = mongoose.model('BLOG_CATEGORY', schema);


module.exports = {
  async all() {
    return await blogCategory.find({});
  }
};

