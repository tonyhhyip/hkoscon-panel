'use strict';

const url = require('url');
const express = require('express');
const checkIn = require('./handlers/checkin');
const router = express.Router();

router.post('/check-in', function (req, res) {
  const path = url.parse(req.body.api_url).pathname;
  const id = path.repalce(/^\/|\/$/, '').split('/').pop();
  checkIn(req, res, id);
});

module.exports = router;