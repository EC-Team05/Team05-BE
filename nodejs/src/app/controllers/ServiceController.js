
class ServiceController {

    index(req,res){
        res.render('Service');
    }
};

module.exports = new ServiceController;