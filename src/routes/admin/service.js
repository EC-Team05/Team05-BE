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
        duration: new_sv.duration
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
        /*if(sv_temp.img){
            await service.updateOne({idservice:sv_temp.id},{img:sv_temp.img})
        }
        else
            if(sv_temp.name){
                await service.updateOne({idservice:sv_temp.id},{name:sv_temp.name})  
            }
            else
                if(sv_temp.price){
                    await service.updateOne({idservice:sv_temp.id},{price:sv_temp.price}) 
                }
                else
                    if(sv_temp.duration){
                        await service.updateOne({idservice:sv_temp.id},{duration:sv_temp.duration}) 
                    }
                    else
                        if(sv_temp.duration&&sv_temp.name){
                            await service.updateOne({idservice:sv_temp.id},{duration:sv_temp.duration,name:sv_temp.name}) 
                        }
                        else
                            if(sv_temp.duration&&sv_temp.price){
                                await service.updateOne({idservice:sv_temp.id},{duration:sv_temp.duration,price:sv_temp.price}) 
                            }
                            else
                                if(sv_temp.price&&sv_temp.name){
                                    await service.updateOne({idservice:sv_temp.id},{price:sv_temp.price,name:sv_temp.name}) 
                                }
                                else
                                    await service.updateOne({idservice:sv_temp.id},{name:sv_temp.name,price:sv_temp.price,duration:sv_temp.duration})
        */

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
router.post('/delete',async function(req,res,next){

})
module.exports = router;