var express = require('express');
var router = express.Router();
const service = require('../../models/service')

router.post('/add',async function(req,res,next){
    const new_sv=req.body;
    try{
    service.create({
        idservice:Number(new_sv.id),
        name:new_sv.name,
        price: new_sv.price,
        duration: new_sv.duration,
        img: new_sv.img
    })
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
router.put('/update',async function(req,res,next){
    const sv_temp=req.body;
    const key = Object.keys(sv_temp)
    sv_temp.idservice=String(sv_temp.idservice)
    console.log(sv_temp,key)
    try{
        const sv = await service.findOne({idservice:sv_temp.idservice})
        if(!sv) {
            return res.status(404).send("Can not find this task!")
        }
        key.forEach((update) => sv[update]=sv_temp[update])
        await sv.save();
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
router.post('/del',async function(req,res,next){
    let id = String(Object.keys(req.body))
    try{
        await service.findOneAndDelete({idservice:id})
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