'use strict';

const express = require('express');
const checkIn = require('./handlers/checkin');
const router = express.Router();

router.post('/checkin/:id', function (req, res) {
  checkIn(req, res, req.params.id);
});

module.exports = router;