const express = require('express');
const router = express.Router();
const appoint = require('../../models/Appointment');
const Employee = require('../../models/employee');

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
            const emp =  await Employee.find({ide : temp.employee},{_id:0,lastname:1,firstname:1,rate:1})
            res.json({
                invoice: temp,
                emp : emp
            })
        }       
    } 
    catch (error) 
    {
        console.log(error)
    }
});
router.post('/update',async (req,res,next)=>{
    const data = req.body.status;
    let id = data.substring(0, 2);
    let status=data.substring(3,data.length)
    try{
        await appoint.updateOne({ida:id},{status:status})
        res.json({
            save:true
        })
    }catch(error){
        console.log(error);
        res.json({
            save:false
        })
    }

})
module.exports = router;