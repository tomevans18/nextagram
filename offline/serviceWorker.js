const DEBUG = true

const CACHE_NAME = "advance cache v1.0.0";
const fileToCache = [
  "/",
  "/static/dora.png",
  "/static/font-awesome/css/font-awesome.min.css",
  "/static/font-awesome/fonts/fontawesome-webfont.eot",
  "/static/font-awesome/fonts/fontawesome-webfont.svg",
  "/static/font-awesome/fonts/fontawesome-webfont.ttf",
  "/static/font-awesome/fonts/fontawesome-webfont.woff",
  "/static/font-awesome/fonts/fontawesome-webfont.woff2",
]

// activate event
self.addEventListener("install", event => {
  if (DEBUG) {
    console.log('[sw] install event')
  }

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(fileToCache))
      .then(() => {
        if (DEBUG) {
          console.log('[SW] Cached assets: main', fileToCache)
        }
        self.skipWaiting()
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  )
})

// activate event
self.addEventListener('activate', (event) => {
  if (DEBUG) {
    console.log('[SW] Activate event')
  }

  event.waitUntil(
    caches.keys().then((cacheList) => {
      return Promise.all(
        cacheList.map((cacheName) => {
          if (DEBUG) {
            console.log('[SW] Checking cache', cacheName)
          }
          // Delete the caches that are not the current one.
          if (cacheName === CACHE_NAME) {
            return null
          }
          if (DEBUG) {
            console.log('[SW] Delete old cache', cacheName)
          }
          return caches.delete(cacheName)
        })
      )
    })
  )

  return self.clients.claim()
})

// self.addEventListener('message', (event) => {
//   switch (event.data.action) {
//     case 'skipWaiting':
//       if (self.skipWaiting) {
//         self.skipWaiting()
//         self.clients.claim()
//       }
//       break
//     default:
//       break
//   }
// })

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (DEBUG && response) {
        console.log('[SW] Fetch', event.request.url)
      }
      return response || fetch(event.request)
    })
  )
})
