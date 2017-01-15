'use strict';
require('babel-core/register');
require('dotenv').load();
require('../src/server').listen(8080, () => {
  console.log('Start listening');
});