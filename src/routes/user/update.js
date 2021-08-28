const express = require('express');
const router = express.Router();
const Customer = require('../../models/customer')
const verify =  require('../../controllers/verify')

router.post('/', verify,async(req, res, next) => {
    const id= req.user._id;
    const cus= await Customer.findOne({_id:id})
    res.json({
        info:cus
    })
    //const cus = Customer.findOne({_id:req.user})
    //res.json(cus)
});

module.exports = router;