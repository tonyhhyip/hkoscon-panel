//@flow
'use strict';

const autoprefixer = require('autoprefixer');

module.exports = [
  autoprefixer({
    browsers: ['last 5 version']
  }),
];