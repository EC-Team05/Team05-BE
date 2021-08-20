const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const cors = require('cors')

const app = express();
const port = process.env.port|| 3000;
const database = require('./src/config/db/connectDB.js');

//CORS
app.use(cors())

//Connect DB
database.connect();

//HTTP
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
var indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

//Template
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs','ejs');
app.set('views',path.join(__dirname,'resources\\views'));

app.listen(port, () => console.log('Example app listening at ...'))
