var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/user/login', require('./login'));
router.use('/register', require('./register'));
router.use('/user/profile',require('./user/update'));
router.use('/booking-service', require('./service/booking-service'));
router.use('/booking', require('./service/booking'));
router.use('/checkout', require('./service/checkout'));
router.use('/admin/service', require('./admin/service'));
router.use('/admin/product', require('./admin/product'));
router.use('/admin/emp',require('./admin/employee'));
router.use('/invoice', require('./user/dashboard'));
router.use('/employee/dashboard', require('./employee/dashboard'));
router.use('/product',require('./product/product'))
module.exports = router;
