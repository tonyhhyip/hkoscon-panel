'use strict';

export default function sendNotice(content) {
  return navigator.serviceWorker.controller.postMessage({content, type: 'notice'});
}