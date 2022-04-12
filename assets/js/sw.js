// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const filesToCache = ['/',
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
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});