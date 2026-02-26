const CACHE_NAME = 'flashcards-v6';

// Diese Dateien MÜSSEN offline verfügbar sein, damit das Menü startet
const PRE_CACHE = [
  './',
  './index.html',
  './decks.json',
  './lib/katex.min.css',
  './lib/katex.min.js',
  './lib/auto-render.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRE_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => { if (key !== CACHE_NAME) return caches.delete(key); })
    ))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Wenn im Cache (Offline), dann nimm die Cache-Version
      if (cachedResponse) return cachedResponse;

      // Sonst vom Netzwerk holen und AUTOMATISCH für das nächste Mal speichern
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
        // Notfall-Rückgabe für Offline-Fehler
        return new Response("Offline-Fehler");
    })
  );
});
