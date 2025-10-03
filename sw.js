// This service worker is designed to "self-destruct" and unregister itself.
// This is a robust way to remove a service worker that might be causing issues
// in a development environment, especially if it's caching files aggressively.

self.addEventListener('install', () => {
  // Skip waiting to immediately become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // Unregister the service worker.
  self.registration.unregister()
    .then(() => {
      // After unregistering, find all clients (open tabs) controlled by this
      // service worker and force them to reload.
      return self.clients.matchAll();
    })
    .then(clients => {
      clients.forEach(client => client.navigate(client.url));
    });
});