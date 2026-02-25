const CACHE_NAME = 'analysis-flashcards-v1';
const ASSETS_TO_CACHE = [
  '/analysis-flashcards/',
  '/analysis-flashcards/index.html',
  '/analysis-flashcards/manifest.json',
  // KaTeX vom CDN für Offline-Nutzung cachen
  'https://cdn.jsdelivr.net',
  'https://cdn.jsdelivr.net',
  'https://cdn.jsdelivr.net'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Rückgabe aus Cache, falls vorhanden, sonst Netzwerk
      return response || fetch(event.request).then((networkResponse) => {
        // Optional: Dynamisch neue Schriftarten von KaTeX cachen
        if (event.request.url.includes('fonts/')) {
            return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });
        }
        return networkResponse;
      });
    })
  );
});
