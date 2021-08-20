const express = require('express');
const router = express.Router();
const Service = require('../../models/service')

router.get('/', async function (req, res, next) {
    res.json({
        service: await Service.find()
    })
});
module.exports = router;