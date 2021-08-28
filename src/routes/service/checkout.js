const express = require('express');
const router = express.Router();
const sb = require('../../models/serviceBooked');
const appoint = require('../../models/Appointment');

router.post('/', async function (req, res) {
    id_app = req.body.id_appoint;
    res.json({
        detail_app: await sb.detail_appointment(id_app),
    })
});

router.post('/save-checkout',async function(req,res){
    const data=req.body;
    console.log(data);
    try{
        await appoint.updateOne({ida:data.ida},{status:data.status,end_time:data.end_time,price:data.total,payment:data.payment})
        res.json({
            save:true
        })
    }catch(error){
        console.log(error)
        res.json({
            save:false
        })
    }
    
})

// router.get('/x', async function (req, res, next) {
//     test = id_app;
//     console.log("id" + id_app)
//     res.json({
//         detail_app: await sb.detail_appointment(test),
//     });
// });
module.exports = router;