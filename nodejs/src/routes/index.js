var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/user/login', require('./login'));
router.use('/register', require('./register'));
router.use('/user/profile',require('./user/update'));
router.use('/booking-service', require('./service/booking-service'));
router.use('/booking', require('./service/booking'));
router.use('/admin', require('./admin/index'));
router.use('/invoice', require('./user/dashboard'));
router.use('/employee', require('./employee/dashboard'));

module.exports = router;
