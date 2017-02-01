'use strict';

const url = require('url');
const express = require('express');
const checkIn = require('./handlers/checkin');
const debug = require('debug')('router:eventbrite');
const router = express.Router();

router.post('/check-in', function (req, res) {
  const path = url.parse(req.body.api_url).pathname;
  let id = null;
  const pieces = path.replace(/^\/|\/$/, '').split('/');
  while (!id) {
    id = pieces.pop();
  }
  checkIn(req, res, id);
});

module.exports = router;