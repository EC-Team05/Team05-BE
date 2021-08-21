const express = require('express');
const router = express.Router();
const Service = require('../../models/service')

router.get('/', async function (req, res, next) {
    res.json({
        service: await Service.find()
    })
});

//lấy mảng sv_id từ FE về
router.post('/', async function (req, res, next) {
    console.log('ádsadasd')
    const sv = req.body.data;
    console.log(sv);
});
module.exports = router;