
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const data = require('./config/db/data.js');
const users = [] ;
//ma hoa
const bcrypt = require('bcrypt');
//thu vien authentication
const passport = require('passport');
const initializePassport = require('../src/app/controllers/passport-config');
//mail
const nodemailer = require('nodemailer');
const { timingSafeEqual } = require('crypto');

//connect db
data.connect();
//HTTP
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false}))

//template
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'));
//
//route init

route(app);
/*app.get('/login',(req,res) =>{
    res.render('login')
}
)
function makeid(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const randID = toString(makeid(6));
const mail = users.email;
const smtpConfig = {
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


app.get('/register',(req,res)=> {
    res.render('register');
})
app.post('/register',async (req,res) => {
    try{
        const hashed = await bcrypt.hash(req.body.pass,10)
        users.push({
            idc: req.body.idc,
            name: req.body.name,
            email: req.body.email,
            pass: hashed
        })
        res.send('check your email to activate your account')
        tranporter.sendMail(mailOptions,function(error,info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent:'+info.res);
        });
    }
    catch{
        res.redirect('/register')
        console.error();
    }
    console.log(users)
})


console.log(makeid(6));
console.log(users.email);*/
app.listen(port, () => console.log('Example app listening at ...'))
