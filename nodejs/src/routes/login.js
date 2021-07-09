const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/SiteController');

router.use('/',loginController.login);

module.exports = router;