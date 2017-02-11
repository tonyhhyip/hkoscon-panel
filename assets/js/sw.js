//@flow
import {messaging} from './firebase';

const {assets} = global.serviceWorkerOption;
const files = [
  '/assets/app.css',
  '/data/attendee.json',
  '/data/languages.yaml',
  '/data/schedule.yaml',
  '/data/speakers.yaml',
  '/data/tags.yaml',
  '/data/topics.yaml',
  '/data/venues.yaml',
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
  const found = files.some(file => event.request.url.endsWith(file) && event.request.url.startsWith('https://') && event.request.method === 'GET');
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

self.addEventListener('message', (event) => {
  console.log('Handle event: ', event);
  const message = event.data;
  switch (message.type) {
    case 'notice':
      const uri = 'https://fcm.googleapis.com/fcm/send';
      fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `key=${process.env.FIREBASE_MESSAGE_SERVER_KEY}`
        },
        body: JSON.stringify(message.content),
      })
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(response);
          }
        })
        .then(json => {
          console.log('Results: ', json.results)
        })
  }
});
