const express = require('express');
const router = express.Router();
const Service = require('../../models/service')
const Service_b = require('../../models/serviceBooked')
const appoint =  require('../../models/Appointment')
router.get('/', async function (req, res, next) {
    res.json({
        service: await Service.find()
    })
});
function makeid(length) {
    var result = '';
    var characters = '123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
};
router.get('/', function (req, res, next) {
    res.render('register');
});
//lấy mảng sv_id từ FE về
router.post('/', async function (req, res, next) {
    const sv_id = req.body;
    var today = new Date;
    const day = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let sum =0;
    let id_app=makeid(2);
    let idsb =makeid(2); 
    sv_id.map(async id => {
       let temp = await Service.findOne({idservice:id})
       Service_b.create({
           idsb:idsb,
           idservice:temp.idservice,
           price:temp.price,
           duration:temp.duration
       })
       console.log(sum+=(Number(temp.price)))
    })
    console.log(sum);
    appoint.create({
        ida:id_app,
        sv_booked:idsb,
        date_created:String(day),
        price:String(sum)
    })
    res.json({
        save: true,
        id_apppoint: id_app     
    });
});
module.exports = router;