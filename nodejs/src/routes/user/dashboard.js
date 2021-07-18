const express = require('express');
const router = express.Router();
const appoint = require('../../models/Appointment');
const emp = require('../../models/customer');

router.get('/', async function (req, res, next) {
    res.json({
        Lich: await appoint.Lich_Cus('1')
    });
});

module.exports = router;