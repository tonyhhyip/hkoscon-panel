//@flow
'use strict';

const {assets} = global.serviceWorkerOption;
const files = [
  '/assets/app.css',
  '/data/attendee.json',
  ...assets
];

const CACHE_NAME = 'hkoscon-backend';

self.addEventListener('install', (event: AppInstallEvent) => {
  const store = caches.open(CACHE_NAME)
    .then(cache => cache.addAll(files))
    .then(() => console.log('Service Worker Installed'));
  event.waitUntil(store);
});

self.addEventListener('activate', (event) => {
  // Clean the caches
  event.waitUntil(
    caches.keys().then((cacheNames: Array<string>) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete the caches that are not the current one.
          return cacheName === CACHE_NAME ? caches.delete(CACHE_NAME) : null;
        })
      );
    })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(caches.open(CACHE_NAME).then((cache: Cache) => {
    return cache.match(event.request).then((response: FetchResponse) => {
      return response || fetch(event.request).then((response: FetchResponse) => {
          cache.put(event.request, response.clone());
          return response;
        });
    })
  }));
});