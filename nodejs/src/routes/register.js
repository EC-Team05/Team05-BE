const express = require('express');
const router = express.Router();
const CustomerModel = require('../models/customer');
const user = []
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { timingSafeEqual } = require('crypto');
const hbs = require('express-handlebars')
const {regisValidate} = require('../controllers/Validation')
const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587 ,
    secure: false,
    logger: true,
    debug: true,
    secureConnection: false,
    auth : {
        user: 'nangbeauty.service@gmail.com',
        pass: 'odpwqxbcwoouxyxm'
    },
    tls:{rejectUnAuthorized:true}
};
const tranporter = nodemailer.createTransport(smtpConfig);
//tranporter.use('compile',hbs({
    //viewPath:'./resources/views',
    //extName: 'ejs'
//}))
function makeid(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
};
router.get('/', function (req, res, next) {
    res.render('register');
});
//validate



router.post('/', async function (req, res, next) {
    try {
        const { error } = regisValidate(req.body);
        if (error)  return res.status(400).send(error.details[0].message);
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password,salt)
        CustomerModel.create({
            idc: String(makeid(6)),
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            password: hashed
        })
        const mailOptions = {
            from : '"Nang Beauty"',
            to : String(req.body.email),
            subject : 'Activate Account',
            template : 'mail'
        };
        res.send('check your email to activate your account')
        /*tranporter.sendMail(mailOptions,function(error,info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent:'+info.res);
        });*/
        //res.redirect('/login')
    }
    catch (error) {
        //res.redirect('/register');
        console.log(error);
    }
    console.log(user)
});

module.exports = router;