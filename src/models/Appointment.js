const mongoose = require('mongoose');
const sv_bk = require('../models/serviceBooked')

const schema = new mongoose.Schema({
    ida: {type:String},
    customer: {type:String},
    sv_booked: {type:Number},
    employee: {type:String},
    store: {type:Number},     
    date_created: {typme:String},
    start_time: {type:Number},
    end_time: {type:Number},
    price: {type:String},
    canceled: {type:Boolean},
    cancled_reason: {type:String},
    payment: {type:String},
    date_reserved: {type:String},
    status: {type:String}
},{
    collection: 'APPOINTMENT'
});

module.exports = mongoose.model('APPOINTMENT',schema);
/*module.exports = {
    async Lich_Emp(){
        return await appointment.findById(id).aggregate([
            {
                $lookup: {
                    from: 'EMPLOYEE',
                    localField: 'employee',
                    foreignField: 'ide',
                    as: 'emp'}
                },
                {
                    $lookup: {
                        from: 'CUSTOMER',
                        localField: 'customer',
                        foreignField: 'idc',
                        as: 'cus'}
                    },
                { 
                    $project : { 
                        _id:0 , date_created:1 , start_time:1 , date_reserved:1 , price:1 ,
                        emp: { firstname:1 , lastname:1},
                        cus: { name:1 }
                    } 
                }
            ],function (err,res) {
                if (err) throw err;
                console.log(err);
            })
    },
    async Lich_Cus(){
        return await appointment.findById(id).aggregate([
            {
                $lookup: {
                    from: 'EMPLOYEE',
                    localField: 'employee',
                    foreignField: 'ide',
                    as: 'emp'}
                },
                {
                    $lookup: {
                        from: 'CUSTOMER',
                        localField: 'customer',
                        foreignField: '_id',
                        as: 'cus'}
                    },
                { 
                    $project : { 
                        _id:0 , date_created:1 , start_time:1 , date_reserved:1 , price:1 ,
                        emp: { firstname:1 , lastname:1},
                        cus: { name:1 }
                    } 
                }
            ],function (err,res) {
                if (err) throw err;
                console.log(err);
            })
    },
    async invoice(){
        return await appointment.aggregate([
                {
                    $lookup: {
                    from: 'CUSTOMER',
                    localField: 'customer',
                    foreignField: 'idc',
                    as: 'cus'}
                },
                {
                    $lookup: {
                        from: 'SERVICE_BOOKED',
                        localField: 'sv_booked',
                        foreignField: 'idsb',
                        as: 'sv_b'}
                    },
                { 
                    $project : { 
                        _id:0 ,ida:1, date_reserved:1 , price:1 , payment:1 , 
                        cus: { name:1},
                        sv_b: { amount:1 , price:1 }
                    } 
                }
            ],function (err,res) {
                if (err) throw err;
                console.log(err);
            })
    },
    async all(){
       return await appointment.findOne({});
    }
}
*/