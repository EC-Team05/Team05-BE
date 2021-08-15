var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/user/login', require('./login'));
router.use('/register', require('./register'));

router.use('/admin', require('./admin/index'));
router.use('/invoice', require('./user/dashboard'));
router.use('/employee', require('./employee/dashboard'));

module.exports = router;
