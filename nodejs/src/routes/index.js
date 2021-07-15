var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/login', require('./login'));
router.use('/register', require('./register'));

router.use('/admin', require('./admin/index'));
router.use('/user', require('./user/index'));
router.use('/employee', require('./employee/index'));

module.exports = router;
