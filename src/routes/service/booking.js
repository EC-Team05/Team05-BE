const express = require('express');
const router = express.Router();
const EmployeeShift = require('../../models/employeeShift');
const appoint = require('../../models/Appointment')
const detail_shift=[]

router.post('/', async function (req, res) {
    temp = req.body.chosen_date;
    id_app= req.body.id_appoint;
    date = temp.slice(0,temp.indexOf("@"))
    time = parseInt(temp.slice(temp.indexOf("@")+1,temp.length))
    const today = new Date();
    const day = today.getDate();        // 24
    const month = today.getMonth()+1;     // 10 (Month is 0-based, so 10 means 11th Month)
    const year = today.getFullYear();   // 2020
    const date_cr = (year.toString()+'-'+month.toString()+'-'+day.toString()).toString()
    console.log(date.toString());
    await appoint.updateOne({ida:id_app},{date_reserved:date,start_time:time,date_created:date_cr,status:'Chưa xác nhận'})
    res.json({
        detail_shift: await EmployeeShift.detail_shift(date, time),
        save : true
    })
});

router.get('/booking-stylist/', async function (req, res) {
    //res.json(req.query.date)  
    //const date_pick=req.params.date;
    //test = condition
    //date = date_pick.slice(0,date_pick.indexOf("@"))
   // time = parseInt(date_pick.slice(date_pick.indexOf("@")+1,date_pick.length))
    res.json({
        detail_shift: await EmployeeShift.detail_shift()
    })
});
router.post('/save-stylist',async function(req,res){
    const temp=req.body;
    try{
        await appoint.updateOne({ida:temp.id_app},{employee:temp.id_emp.toString()})
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
module.exports = router;