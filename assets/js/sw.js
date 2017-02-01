//@flow

import messaging from './messaging';

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
    .then(() => console.info('Service Worker Installed'));
  event.waitUntil(store);
});

self.addEventListener('activate', (event) => {
  // Clean the caches
  event.waitUntil(
    caches.keys().then((cacheNames: Array<string>) => {
      console.info('Service Worker Activate');
      return Promise.all(
        cacheNames.map((cacheName) => {
          return cacheName === CACHE_NAME ? caches.delete(CACHE_NAME) : null;
        })
      );
    })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  let found = false;
  for (let file of files) {
    if (event.request.url.endsWith(file) && event.request.url.startsWith('https://') && event.request.method === 'GET') {
      found = true;
      break;
    }
  }
  if (!found) return;

  event.respondWith(caches.open(CACHE_NAME).then((cache: Cache) => {
    return cache.match(event.request).then((response: FetchResponse) => {
      return response || fetch(event.request).then((response: FetchResponse) => {
          cache.put(event.request, response.clone());
          console.info(`Cache Request: ${event.request.url}`);
          return response;
        });
    })
  }));
});

messaging.setBackgroundMessageHandler(payload => {
  console.log(payload);
  const {data} = payload;
  const title = `${data.type} ${data.name} Check In`;
  return self.registration.showNotification(title, {
    icon: 'https://hkoscon.org/logo.png'
  });
});

self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();
  event.waitUntil(self.clients.matchAll({
    type: "window"
  }).then(function(clients: Array<WindowClient>) {
    for (let client of clients) {
      if ('focus' in client) {
        return client.focus();
      }
    }
    return self.clients.openWindow('/dashboard/attendee');
  }));
});