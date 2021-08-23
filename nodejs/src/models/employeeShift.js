const mongoose = require('mongoose');
const shift = require('./shift');
const employee = require('./employee');
const appointment = require('./Appointment');

// S1: e_time between start end end, e_date = date
// S2: S1.ide = S2.ide, S2.date = S1.date, S1.e_time not between S2.start and S2.end
const schema = new mongoose.Schema({
    idshift: { type: Number},
    ide: { type: Number},
    date: { type: String},
},
{
    collection: 'EMPLOYEE_SHIFT'
});
const e_shift = mongoose.model('EMPLOYEE_SHIFT',schema)
module.exports = {
async detail_shift(){
    return await e_shift.aggregate([
        {
            
            $lookup: {
                from: 'SHIFT',
                localField: 'idshift',
                foreignField: 'idshift',
                as: 'detail'}
            },
            {
                $lookup: {
                    from: 'EMPLOYEE',
                    localField: 'ide',
                    foreignField: 'ide',
                    as: 'employee_info'
                }
            },
            {
                $lookup: {
                    from: 'APPOINTMENT',
                    localField: 'ide',
                    foreignField: 'employee',
                    as: 'employee_appointment'
                }
            },
            {
                $project : { 
                idshift: 1,
                ide: 1,
                date: 1,
                detail: {
                    hour_end: 1,
                    hour_start: 1
                },
                employee_info: {
                    experience: 1,
                    img: 1,
                    lastname: 1,
                    firstname: 1,
                    rate: 1,
                },
                employee_appointment: {
                    date_reserved: 1,
                    start_time: 1,
                    end_time: 1,
                    status: 1,
                    employee: 1
                }
                } 
            },
            /*{ "$match": { "detail.hour_start" : {$lt: time} },
            },
            { "$match": { "detail.hour_end" : {$gt: time} },
            },
            { "$match": { "date" : date },
            },*/
            { "$match": { "employee_appointment.status" : { $ne: "Hoàn thành" } },
            },
            { "$match": { "employee_appointment.status" : { $ne: "Hủy" } },
            },
            
              // {
              //   $cond: { if: { "employee_appointment.date_reserved" : date }, 
              //     then: { "$match": { "employee_appointment.date_reserved" : date }}, else: { "$match": { "employee_appointment.date_reserved" : date }}, }
              // },
              // {
              //   $match: {
              //     $and : [
              //       { "detail.hour_start" : {$lt: time} },
              //       { "detail.hour_end" : {$gt: time} },
              //     ]}
              // }
        ],function (err,res) {
            if (err) throw err;
            console.log(err);
        })  
},
}
