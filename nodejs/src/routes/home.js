const express = require('express');
const router = express.Router();
const blogCategory = require('../models/blogCategory');
const blog = require('../models/blog');
const employee = require('../models/employee');
const service = require('../models/service');
const review = require('../models/review');

router.get('/', async function (req, res, next) {
    res.json({
        service : await service.find({},{_id:0,name:1,img:1}),
        employee : await employee.top5(),
        review: await review.all(),
        blog: await blog.all()
    });
});
router.get('/booking-stylist', async function (req, res, next) {
    res.json({
        employee : await employee.top5(),
    });
});
module.exports = router;
