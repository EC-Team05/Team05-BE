const mongoose = require('mongoose');
const sv_bk = require('../models/serviceBooked')

const schema = new mongoose.Schema({
    ide: { type: Number },
    img: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    rate: { type: Number },
},{
    collection: 'FREE_EMP'
});

module.exports = mongoose.model('FREE_EMP',schema);
