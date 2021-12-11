const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const errorMiddleware = require('./middlewares/errors');

//Using middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser()); 

//Importing Routes
const users = require('./routes/user');
const events = require('./routes/event');

 //Routes root URL : http://localhost:4000/api/v1
app.use('/api/v1', users);
app.use('/api/v1', events);
 
//Middleware to handle error.
app.use(errorMiddleware);

module.exports = app;