const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  idblog: { type: Number },
  idblogcate: { type: Number },
  img: { type: String },
  date: { type: Date },
  cmt: { type: Number },
  content: { type: String },
  link: { type: String },
},
  {
    collection: 'BLOG'
  });


const blog = mongoose.model('BLOG', schema);
module.exports = {
  async all() {
    return await blog.aggregate( [ { $project : { _id: 0, img : 1 , date : 1 , content : 1 , link : 1 } } ] );
  }
};
