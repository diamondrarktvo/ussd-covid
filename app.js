const express = require('express');
const bodyParser = require('body-parser');
const ussdRoute = require('./routes/ussdRoute');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/ussd', ussdRoute);

module.exports = app;