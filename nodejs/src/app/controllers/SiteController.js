
const bcrypt = require('bcrypt');
class SiteController {

    home(req,res){
        res.render('home');
    }
    login(req,res){
        res.render('login');
    }
};

module.exports = new SiteController;