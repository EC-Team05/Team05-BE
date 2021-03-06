const jwt = require('jsonwebtoken');

module.exports = function (req,res,next) {
    const token = req.body.token;
    if (!token) return res.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token,"secret");
        req.user = verified;
        next();
    }catch (err){
        res.status(400).send('Invalid token')
    }
}