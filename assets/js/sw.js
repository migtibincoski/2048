// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ['/',
'/index.html',
'/assets/css/style.css',
'/assets/js/game_manager.js',
'/assets/js/animframe_pollyfill.js',
'/assets/js/application.js',
'/assets/js/bind_polyfill.js',
'/assets/js/classlist_polyfill.js',
'/assets/js/game_manager.js',
'/assets/js/grid.js',
'/assets/js/html_actuator.js',
'/assets/js/tile.js',
'/assets/js/local_storage_manager.js',
'/assets/js/keyboard_input_manager.js'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
