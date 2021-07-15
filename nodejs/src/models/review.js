const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    iduser: {type:Number} ,
    idemployee: {type:Number} ,
    star: {type:Number} ,
    review: {type:String} , 
    time: {type: String}
},{
    collection: 'REVIEW',
});

const review = mongoose.model('REVIEW',schema)
module.exports = {
    async rv() {
        return await review.aggregate([
            {
                $lookup: {
                from: 'CUSTOMER',
                localField: 'idc',
                foreignField: 'iduser',
                as: 'cus'
                }
            },
            /*{$unwind: "$cus"},
            {
                $lookup: {
                from: 'EMPLOYEE',
                localField: 'ide',
                foreignField: 'idemployee',
                as: 'emp'
                }
            },
            {$unwind: "$emp"},*/
            {$limit:2}
            ],function (err,res) {
                if (err) throw err;
                console.log(res);
            }
            );
    }
}

