var express = require('express');
var router = express.Router();
const product = require('../../models/Product')

router.post('/add',async function(req,res,next){
    const new_sv=req.body;
    console.log(new_sv)
    try{
    product.create({
        idproduct:(new_sv.idproduct),
        name:new_sv.name,
        price: new_sv.price,
        brand: new_sv.brand,
        amount: (new_sv.amount),
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
    console.log(sv_temp);
    const key = Object.keys(sv_temp)
    sv_temp.idproduct=String(sv_temp.idproduct)
    console.log(sv_temp,key)
    try{
        const sv = await product.findOne({idproduct:sv_temp.idproduct})
        if(!sv) {
            return res.status(404).send("Can not find this product!")
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
    let id = req.body.id;
    try{
        await product.findOneAndDelete({idproduct:id})
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