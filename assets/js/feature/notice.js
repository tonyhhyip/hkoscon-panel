'use strict';

export default function sendNotice(content) {
  return navigator.serviceWorker.getRegistration()
    .then(registration => registration.active)
    .then(client => client.postMessage({content, type: 'notice'}));
}