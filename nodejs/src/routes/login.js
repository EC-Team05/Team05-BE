const express = require('express');
const router = express.Router();
const CustomerModel = require('../models/customer');
const bcrypt = require('bcrypt')

router.get('/', function (req, res, next) {
    res.render('login');
});

module.exports = router;
