'use strict';

const babel = require('babel-jest');

module.exports = babel.createTransformer({
  plugins: ['transform-flow-strip-types']
});