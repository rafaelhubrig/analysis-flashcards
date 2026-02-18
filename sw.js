const CACHE_NAME = 'math-cache-v1';
const ASSETS = [
  '/analysis-flashcards/',
  '/analysis-flashcards/index.html',
  '/analysis-flashcards/manifest.json'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
