const express = require('express');
const router = express.Router();
const CustomerModel = require('../models/customer');
const EmpModel = require('../models/employee');
const {loginValidate} = require('../controllers/Validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();


router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/',async function (req,res,next){
    const { error } = loginValidate(req.body);
    if (error)  return res.status(400).send(error.details[0].message);
        //check email
        user= req.body;
        const customer = await CustomerModel.findOne({email:user.email});
        const employee = await EmpModel.findOne({email:user.email});
        if(customer){
            if (!customer) return res.status(400).send('Email is wrong');
                //check password
                const validPass = await bcrypt.compare(user.password,customer.password);
                if(!validPass) return res.status(400).send('password is wrong');
                //create token
                const token = jwt.sign({_id:customer._id},"secret");
                res.json({
                    token:token,
                    role:"customer"
                });
            }
        if(employee){
            if (!employee) return res.status(400).send('Email is wrong');
                    //check password
                const validPass = await bcrypt.compare(user.password,employee.password);
                if(!validPass) return res.status(400).send('password is wrong');
                    //create token
                if(employee.employee_type ==1 ||employee.employee_type ==1)
                {
                    const token = jwt.sign({_id:employee._id},"secret");
                    res.json({
                    token:token,
                    role:"admin"
                    });
            }
            }
})
module.exports = router;
