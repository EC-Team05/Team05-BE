const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    idshift: { type: Number},
    hour_start: { type: Number},
    hour_end: { type: Number}
  },
  {
    collection: 'SHIFT'
  });

module.exports = mongoose.model('SHIFT', schema);
