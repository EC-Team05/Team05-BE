const express = require('express');
const router = express.Router();
const product =  require('../../models/Product')

router.get('/', async function (req, res, next) {
    res.json({
        product: await product.find()
    });
});
module.exports = router;
