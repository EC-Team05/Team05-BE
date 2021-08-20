const express = require('express');
const router = express.Router();
const appoint = require('../../models/Appointment');
const serviceBooked = require('../../models/serviceBooked')
const Service = require('../../models/service')
const Customer = require('../../models/customer')
const sv = {}

router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const temp = await appoint.findOne({_id:id},{_id:0,date_reserved:1,payment:1,price:1,sv_booked:1,customer:1});
    const cus =  await Customer.find({idc : temp.customer},{_id:0,name:1})
    const svb = await serviceBooked.find({idsb : temp.sv_booked},{_id:0,amount:1,price:1,idservice:1})
    const sv = await Service.find({idservice : svb[0].idservice},{_id:0,name:1,price:1})
    res.json({
        invoice: temp,
        sv_b : svb,
        sv: sv,
        cus : cus
    })
});

module.exports = router;