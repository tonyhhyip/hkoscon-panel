'use strict';

const {assets} = global.serviceWorkerOption;
const files = ['/assets/app.css', ...assets];

const CACHE_NAME = 'hkoscon-backend';

self.addEventListener('install', (event) => {
  event.waitUntil(
    global.caches.open(CACHE_NAME)
      .then(cache => cache.addAll(files))
      .then(() => console.log('Cache Installed'))
  );
});
