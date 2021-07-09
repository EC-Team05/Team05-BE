const express = require('express');
const router = express.Router();

const serviceController = require('../app/controllers/ServiceController');

router.use('/',serviceController.index);

module.exports = router;