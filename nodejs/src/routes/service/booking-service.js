const express = require('express');
const router = express.Router();
const Service = require('../../models/service')

router.get('/', async function (req, res, next) {
    await Service.find({})
        .then(res.setHeader('Content-type','service'))
        .then(service => res.json(service))
});
module.exports = router;