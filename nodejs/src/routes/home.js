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
        employee : await employee.find({},{_id:0,attended:1,experience:1,img:1,firstname:1,lastname:1,rate:1}),
        review: await review.all(),
        blog: await blog.all()
    });
});
router.get('/booking-stylist', async function (req, res, next) {
    res.json({
        employee : await employee.find(),
    });
});
module.exports = router;
