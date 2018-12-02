/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ee46dc2fbe1a48fa73e580b7ec4002b3"
  },
  {
    "url": "assets/css/0.styles.685583ed.css",
    "revision": "81b529d68a652ba2f04c027b997f54f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a8a6536b.js",
    "revision": "bc8ce3b29e91c6477c1c2712ed2ae688"
  },
  {
    "url": "assets/js/3.9beb0cbf.js",
    "revision": "bb8ba28a7e366fad6315821e0b6599f1"
  },
  {
    "url": "assets/js/4.55d62415.js",
    "revision": "840355f9fa109c2e9bdf8f175bb08d78"
  },
  {
    "url": "assets/js/5.26263c3e.js",
    "revision": "fbbd5becbb081ae866cd53259e6c04a2"
  },
  {
    "url": "assets/js/6.d0949b9a.js",
    "revision": "76038b93a38bb8374998d2944e15f499"
  },
  {
    "url": "assets/js/app.2ceff1c8.js",
    "revision": "3c7a234b3249fcdcc77d198480eea4d2"
  },
  {
    "url": "index.html",
    "revision": "c0e0d713a6244c472fe81ee0a43407f3"
  },
  {
    "url": "original/index.html",
    "revision": "f7593cfd9f61b7b28455f387caae5a02"
  },
  {
    "url": "web/index.html",
    "revision": "51a9f6b10f77eee5df751fcbc9b40705"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
