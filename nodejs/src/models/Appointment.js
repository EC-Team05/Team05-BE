const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ida: {type:Number},
    customer: {type:Number},
    sv_booked: {type:Number},
    employee: {type:Number},
    store: {type:Number},     
    date_created: {typme:String},
    start_time: {type:String},
    end_time: {type:String},
    price: {type:Number},
    canceled: {type:Boolean},
    cancled_reason: {type:String},
    payment: {type:String},
    date_reserved: {type:String},
    done: {type:Boolean}
},{collection: 'APPOINTMENT'});

const appointment = mongoose.model('APPOINTMENT',schema);
module.exports = {
    async Lich_Emp(id){
        return await appointment.aggregate([
            {
                $match: {
                    customer : id
                }
            },
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
    async Lich_Cus(id){
        return await appointment.aggregate([
            {
                $match: {
                    customer : id
                }
            },
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
    }
}