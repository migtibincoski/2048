// Choose a cache name
const cacheName = '2048-migplayer6032-v1';
// List the files to precache
const filesToCache = ['/2048/',
'/2048/index.html',
'/2048/assets/style/main.css',
'/2048/assets/js/animframe_polyfill.js',
'/2048/assets/js/application.js',
'/2048/assets/js/bind_polyfill.js',
'/2048/assets/js/classlist_polyfill.js',
'/2048/assets/js/game_manager.js',
'/2048/assets/js/grid.js',
'/2048/assets/js/html_actuator.js',
'/2048/assets/js/tile.js',
'/2048/assets/js/local_storage_manager.js',
'/2048/assets/js/keyboard_input_manager.js',
'/2048/assets/js/button_install_pwa.js'];

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
