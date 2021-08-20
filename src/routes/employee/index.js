var express = require('express');
var router = express.Router();

router.use('/employee/dashboard',require('./dashboard'));
module.exports = router;
