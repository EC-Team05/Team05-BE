var express = require('express');
var router = express.Router();
const emp = require('../../models/employee')
function makeid(length) {
    var result = '';
    var characters = '123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
};
router.post('/add',async function(req,res,next){
    const new_emp=req.body.data;
    const add= new_emp.street.toString()+' '+new_emp.ward.toString()+' '+new_emp.dist.toString()+' '+new_emp.city.toString()+' '+new_emp.nation.toString();
    console.log(new_emp)
    try{
    emp.create({
        email: new_emp.email,
        ide: String(makeid(2)),
        dob: new_emp.dob,
        img: new_emp.img,
        firstname: new_emp.firstname,
        lastname: new_emp.lastname,
        phone: new_emp.phone,
        rate: "",
        attended: "",
        experience: "",
        gender:req.body.gender,
        attended:"",
        biography:new_emp.biography,
        employee_type:"",
        fburl: new_emp.fburl,
        twitterurl: new_emp.twitterurl,
        igurl: new_emp.igurl,
        pinteresturl: new_emp.pinteresturl,
        address: add
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
/*router.put('/update',async function(req,res,next){
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
})*/
module.exports = router;