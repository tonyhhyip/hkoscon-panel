'use strict';

const express = require('express');
const debug = require('debug')('server');
const bodyParser = require('body-parser');
const {wrapResponse} = require('./sse');
const redis = require('./redis');
const app = express();

app.use(function (req, res, next) {
  debug('%s %s', req.method, req.originalUrl);
  next();
});

app.get('/sse', function (req, res) {
  debug('SSE connect');
  wrapResponse(res);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/eventbrite', require('./eventbrite'));
app.use('/api', require('./endpoints'));

module.exports = app;