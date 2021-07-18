const express = require('express');
const router = express.Router();
const blogCategory = require('../models/blogCategory');
const blog = require('../models/blog');
const employee = require('../models/employee');
const service = require('../models/service');
const review = require('../models/review');

router.get('/', async function (req, res, next) {
    res.json({
        blogCategory : await blogCategory.all(),
        blog: await blog.all(),
        employee : await employee.top5(),
        service : await service.all(),
        review: await review.all()
    });
});

module.exports = router;