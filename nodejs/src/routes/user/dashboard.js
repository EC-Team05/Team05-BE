const express = require('express');
const router = express.Router();
const appoint = require('../../models/Appointment');
const serviceBooked = require('../../models/serviceBooked')
const Service = require('../../models/service')
const Customer = require('../../models/customer');
const { listenerCount } = require('../../models/serviceBooked');


router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    try 
    {
        const temp = await appoint.findById(id);
        if(temp)
        {
            const cus =  await Customer.find({idc : temp.customer},{_id:0,name:1})
            let svb = await serviceBooked.find({idsb : temp.sv_booked},{_id:0,amount:1,price:1,idservice:1});
            let service = []
            for(let i = 0 ; i < svb.length; i++)
            {   
                const sv = await Service.findOne({idservice : svb[i].idservice},{_id:0,name:1,price:1});
               
                service.push(sv)
               
            }
          
            res.json({
                invoice: temp,
                sv : service,
                cus : cus
            })
        }       
    } 
    catch (error) 
    {
        
    }
  
});

module.exports = router;