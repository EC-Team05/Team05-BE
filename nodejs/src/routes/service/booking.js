const express = require('express');
const router = express.Router();
const EmployeeShift = require('../../models/employeeShift');
const appoint = require('../../models/Appointment')

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
    await appoint.updateOne({ida:id_app},{date_reserved:date,start_time:time+':00',date_created:date_cr})
    res.json({
        detail_shift: await EmployeeShift.detail_shift(date, time),
        save : true
    })
});

router.get('/booking-stylist', async function (req, res) {
    //res.json(req.query.date)  
    test = '2021-07-26@20' 
    //test = condition
    console.log(test)
    date = test.slice(0,test.indexOf("@"))
    time = parseInt(test.slice(test.indexOf("@")+1,test.length))
    res.json({
        detail_shift: await EmployeeShift.detail_shift(date, time)
    })
});

module.exports = router;