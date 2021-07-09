
const CustomerModel = require('../models/customer');
const user = []
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { timingSafeEqual } = require('crypto');


/*const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587 ,
    secure: false,
    logger: true,
    debug: true,
    secureConnection: false,
    auth : {
        user: 'tin.nguyenba1803@gmail.com',
        pass: 'tbwhpfmamnujrqcc'
    },
    tls:{rejectUnAuthorized:true}
};
const tranporter = nodemailer.createTransport(smtpConfig);
const mailOptions = {
    from : '"Nang Beauty"',
    to : 'acquycodon1803@gmail.com',
    subject : 'Activate Account',
    text : 'Hello',
    html: '<b>randID</b>'
};
*/
class RegisterController {

    show(req,res,next){
        res.render('register');
    }
    async store(req,res,next) {
        try{
            function makeid(length) {
                var result           = '';
                var characters       = '0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
            }
            return result;
            };
            const hashed = await bcrypt.hash(req.body.password,5)
            CustomerModel.create({
                idc : toString(makeid(6)),
                name: req.body.name,
                email: req.body.email,
                password: hashed
            })
            //res.json(formData);
            res.redirect('/login')
        }
        catch{
            res.redirect('/register')
            console.error();
        }
        console.log(user)
    }
};

module.exports = new RegisterController;