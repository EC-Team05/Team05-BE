const express = require('express');
const router = express.Router();
const CustomerModel = require('../models/customer');
const EmpModel = require('../models/employee')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const Passport = require('passport')
const Local = require('passport-local').Strategy

//router.use(bodyParser.urlencode({extended: true}))
router.use(Passport.initialize())
router.use(Passport.session())

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/',async function(req,res,next) {
    Passport.authenticate('local',{failureRedirect:'/login'})
    Passport.use(new Local(
        (username,pass,done) => {
            const usrecord = CustomerModel.find({email : username})
        }
    ))
});
module.exports = router;
