'use strict';

const sse = require('sse-nodejs');
const listeners = new Set();

function addListeners(listener) {
  listeners.add(listener);
}

function iterListeners(func) {
 listeners.forEach(func);
}

function removeListeners(listener) {
  listeners.delete(listener);
}

function wrapResponse(res) {
  const listener = sse(res);
  addListeners(listener);
  listener.disconnect(() => removeListeners(listener));
}

module.exports = {addListeners, iterListeners, removeListeners, wrapResponse};