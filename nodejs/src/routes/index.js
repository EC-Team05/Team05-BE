const siteRouter = require('./site');
const loginRouter = require('./login');
const regisRouter = require('./register');
const serviceRouter = require('./Service');

function route(app) {
    app.use('/Service',serviceRouter);
    app.use('/login',loginRouter);
    app.use('/register',regisRouter);
    app.use('/',siteRouter);
}
module.exports = route;
