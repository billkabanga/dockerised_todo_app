const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// setup the express app
const app = express();

// log requests to console
app.use(logger('dev'));

// parse request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the app',
}));

module.exports = app;
