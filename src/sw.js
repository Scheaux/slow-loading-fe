/* eslint-disable */
const staticCacheName = 'static-cache';
const assets = ['/', '/index.html', 'img/favicon.svg',
  'css/style.css'];

self.addEventListener('install', async (evt) => {
  // evt.waitUntil(
  // caches.open(staticCacheName).then((cache) => {
  //   cache.addAll(assets);
  // });
  // );
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assets);
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      // return fetch(evt.request) || cacheRes;
      return cacheRes || fetch(evt.request);
    })
  );
});
