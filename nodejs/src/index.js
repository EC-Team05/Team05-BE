const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
// Mã Hóa
const bcrypt = require('bcrypt');
// Authentication
const passport = require('passport');
const initializePassport = require('./controllers/passport-config');

// Email Authentication
const nodemailer = require('nodemailer');
const { timingSafeEqual } = require('crypto');

const app = express();
const port = 3000;
const database = require('./config/db/connectDB.js');

//Connect DB
database.connect();

//HTTP
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false}))
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

//Template
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs','ejs');
app.set('views',path.join(__dirname,'resources\\views'));

app.listen(port, () => console.log('Example app listening at ...'))
