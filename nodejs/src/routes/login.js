const express = require('express');
const router = express.Router();
const CustomerModel = require('../models/customer');
const EmpModel = require('../models/employee');
const {loginValidate} = require('../controllers/Validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');


dotenv.config();

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/',async function (req,res,next){
    const { error } = loginValidate(req.body);
    if (error)  return res.status(400).send(error.details[0].message);
        //check email
        user= req.body;
        const customer = await CustomerModel.findOne({email:user.email});
        if (!customer) return res.status(400).send('Email is wrong');
            //check password
            const validPass = await bcrypt.compare(user.password,customer.password);
            if(!validPass) return res.status(400).send('password is wrong');
            console.log(process.env.TOKEN_SECRECT);
            //create token
            const token = jwt.sign({_id:customer._id},"secret");
            res.header('auth-token',token).send(token);
            
})
module.exports = router;
