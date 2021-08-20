const express = require('express');
const router = express.Router();
const Customer = require('../../models/customer')
const verify =  require('../../controllers/verify')

router.get('/',verify, async(req, res, next) => {
    //res.send(req.user);
    console.log(req.user)
    const cus = Customer.findOne({_id:req.user})
    res.json(cus)
});

module.exports = router;