const CACHE_NAME = 'flashcards-v4';

// Diese Dateien werden sofort beim ersten Laden der Seite gespeichert
const PRE_CACHE = [
  './',
  './index.html',
  './lib/katex.min.css',
  './lib/katex.min.js',
  './lib/contrib/auto-render.min.js'
];

// Installation: Grundgerüst in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRE_CACHE))
  );
  self.skipWaiting();
});

// Aktivierung: Alte Caches löschen, wenn wir die Version (v4) erhöhen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
});

// Fetch-Strategie: Cache-First für Schnelligkeit & Offline-Nutzung
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // TRICK: Jede Datei, die 'cards_' im Namen hat oder aus 'lib/' kommt,
        // wird automatisch für die Offline-Nutzung gespeichert.
        if (
          event.request.url.includes('cards_') || 
          event.request.url.includes('lib/') ||
          event.request.url.endsWith('.woff2') // KaTeX Schriftarten
        ) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      // Fallback: Wenn Netzwerk weg und Datei nicht im Cache
      console.log("Datei offline nicht verfügbar:", event.request.url);
    })
  );
});
