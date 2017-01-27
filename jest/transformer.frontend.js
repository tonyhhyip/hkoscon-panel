'use strict';

const babel = require('babel-jest');

module.exports = babel.createTransformer({
  presets: ['react', 'modern-browsers'],
  plugins: ['transform-flow-strip-types']
});