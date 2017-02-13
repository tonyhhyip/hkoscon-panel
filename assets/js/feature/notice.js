'use strict';

export default function sendNotice(content) {
  const message = {
    content,
    type: 'notice'
  };
  if (navigator.serviceWorker.controller) {
    return navigator.serviceWorker.controller.postMessage(message);
  } else {
    return navigator.serviceWorker.getRegistration()
      .then(registration => registration.active)
      .then(controller => controller.postMessage(message));
  }
}