self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // service worker активирован
});

self.addEventListener("fetch", (event) => {
  // пока просто пропускаем запросы
});
