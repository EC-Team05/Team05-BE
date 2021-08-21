const mongoose = require('mongoose');
const employee = require('./employee');
var schema = new mongoose.Schema({
    star: {type:Number} ,
    review: {type:String} , 
    time: {type: String},
    customer: {type:Number} ,
    employee: {type: Number}
},{
    collection: 'REVIEW',
});
const review = mongoose.model('REVIEW',schema)
module.exports = {
    async all(){
      return await review.aggregate([ 
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
                    _id:0 , review:1 , star:1 , time:1 ,
                    emp: { firstname:1 , lastname:1},
                    cus: { name:1 , img :1}
                } 
            }
        ],function (err,res) {
            if (err) throw err;
            console.log(err);
        })
    }
}


