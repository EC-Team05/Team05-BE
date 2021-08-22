const express = require('express');
const router = express.Router();
const EmployeeShift = require('../../models/employeeShift');

router.post('/', async function (req, res) {
    condition = req.body.chosen_date
    console.log(condition)
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