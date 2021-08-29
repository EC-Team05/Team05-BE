const express = require('express');
const router = express.Router();
const Customer = require('../../models/customer')
const verify =  require('../../controllers/verify')
const appoint = require('../../models/Appointment')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

router.post('/', verify,async(req, res, next) => {
    const id= req.user._id;
    const cus= await Customer.findOne({_id:id})
    res.json({
        info:cus
    })
    //const cus = Customer.findOne({_id:req.user})
    //res.json(cus)
});
router.get('/:token',async(req,res,next)=>{
    const token=req.params.token;
    const id = jwt.verify(token,"secret");
    //console.log(id._id)
    const info = await Customer.findOne({_id:id._id})
    res.json({
        info: info,
        appoint: await appoint.aggregate([
            {
                $lookup: {
                    from: 'EMPLOYEE',
                    localField: 'employee',
                    foreignField: 'ide',
                    as: 'emp'}
                },
                { 
                    $project : { 
                        _id:1,price:1,date_reserved:1,start_time:1,status:1,ida:1,date_created:1,customer:1,
                        emp: { firstname:1,lastname:1}
                    } 
                }
        ])
    })
})
router.post('/update',async(req, res, next) => {
    const cus_temp=req.body
    const key = Object.keys(cus_temp)
    try{
        const cus = await Customer.findOne({idc:cus_temp.idc})
        if(!cus) {
            return res.status(404).send("Can not find this customer!")
        }
        key.forEach((update) => cus[update]=cus_temp[update])
        await cus.save();
        res.json({
            save:true
        })
    }catch(error){
            console.log(error);
            res.json({
                save:false
            })
        }
});
router.post('/update_pass',async(req, res, next) => {
    const cus_temp=req.body
    const cus = await Customer.findOne({idc:cus_temp.idc})
    const validPass = await bcrypt.compare(cus_temp.password,cus.password);
    if(!validPass) {
       res.json({
            save:false,
            status:'-1'
        });
    }
    else 
        if(validPass){
            if(cus_temp.newpassword != cus_temp.check_new){
                res.json({
                    save:false,
                    status:'0'
                })
            }else{
                const salt = await bcrypt.genSalt(10);
                const hashed = await bcrypt.hash(cus_temp.newpassword,salt)
                Customer.updateOne({idc:cus_temp.idc},{password:hashed})
                res.json({
                    save:true,
                    status:'1'
                })
            }
        }
});
module.exports = router;