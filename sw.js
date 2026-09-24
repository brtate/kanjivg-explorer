const CACHE_NAME = 'bibi-offline-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/bibi/resources/scripts/bibi.js',
  '/bibi/resources/styles/bibi.css'
  // Add any other core font/icon files used by your Bibi version
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
