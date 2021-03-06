'use strict';
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//logging
app.use(morgan('dev'));

//body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));

//apiRouter
app.use('/api', require('./api/index.js'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); //Send index.html for any other requests

//error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
