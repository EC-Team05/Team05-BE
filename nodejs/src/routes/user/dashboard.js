const express = require('express');
const router = express.Router();
const appoint = require('../../models/Appointment');
const emp = require('../../models/customer');
const verify = require('../../controllers/verify')

router.get('/', verify,async(req, res, next) => {
    user=req.user;
    res.json({
        Lich: await appoint.Lich_Cus(user._id)
    });
});

module.exports = router;