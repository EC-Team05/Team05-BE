const express = require('express');
const router = express.Router();

const regisController = require('../app/controllers/RegisterControllers');

router.get('/',regisController.show);
router.post('/store',regisController.store);

module.exports = router;