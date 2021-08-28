const mongoose = require('mongoose');
const service = require('./service');
const appointment = require('./Appointment');

var schema = new mongoose.Schema({
  idsb: { type: Number },
  idservice: { type: String },
  price: { type: String },
  amount: { type: Number },
  duration: {type: String}
},
  {
    collection: 'SERVICE_BOOKED'
  });
const service_booked = mongoose.model('SERVICE_BOOKED',schema)
module.exports = mongoose.model('SERVICE_BOOKED',schema);
module.exports = {
  async create_sv(idsb, idservice, price, duration){
    service_booked.create({
      idsb:idsb,
      idservice:idservice,
      price:price,
      duration:duration
    })
  },
  async detail_appointment(id_app){
    return await service_booked.aggregate(
      [
        
        {
          $lookup: {
            from: 'APPOINTMENT',
            localField: 'idsb',
            foreignField: 'sv_booked' ,
            as: 'Appointment'
          },
        },
        {
          $project: {
            idsb: 1,
            idservice: 1,
            price: 1,
              duration: 1,
            Appointment: {
              ida: 1,
              start_time: 1,
              end_time: 1,
              status: 1,
              payment: 1
            }
          }
        },
        { "$match": { "Appointment.ida" : id_app},
        },
      ]
    )
  }
}
