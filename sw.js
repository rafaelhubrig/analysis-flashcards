const CACHE_NAME = 'flashcards-v5';

// Diese Dateien werden sofort beim ersten Laden gespeichert
const PRE_CACHE = [
  './',
  './index.html',
  './decks.json',
  './lib/katex.min.css',
  './lib/katex.min.js',
  './lib/contrib/auto-render.min.js'
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
      keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // SPEZIALFALL: decks.json (Immer Cache zeigen, im Hintergrund updaten)
  if (url.pathname.endsWith('decks.json')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => cachedResponse); // Bei Fehler (Offline) Cache behalten

          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // STANDARD: Cache-First für alle anderen Dateien (Karten, Libs, Fonts)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then((networkResponse) => {
        // Neue Karten-Dateien oder Fonts automatisch in den Cache legen
        if (url.pathname.includes('cards_') || url.pathname.includes('lib/') || url.pathname.endsWith('.woff2')) {
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
