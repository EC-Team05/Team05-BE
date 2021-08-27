const express = require('express');
const router = express.Router();
const appoint = require('../../models/Appointment');
const serviceBooked = require('../../models/serviceBooked')
const Service = require('../../models/service')
const Customer = require('../../models/customer')
const sv = {}
router.get('/',async (req,res,next)=>{
    const temp = await appoint.find()
    res.json({
        appoint: await appoint.aggregate([
            {
                $lookup: {
                    from: 'CUSTOMER',
                    localField: 'customer',
                    foreignField: 'idc',
                    as: 'cus'}
                },
                { 
                    $project : { 
                        _id:1,price:1,date_reserved:1,start_time:1,status:1,ida:1,
                        cus: { name:1}
                    } 
                }
        ])
    })
})
router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    try 
    {
        const temp = await appoint.findOne({ida:id});
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
        console.log(error)
    }
});
router.post('/update',async (req,res,next)=>{
    console.log(req.body)
})
module.exports = router;