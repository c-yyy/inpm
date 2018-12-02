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
    "revision": "a01ad71ed6d08632b9bd89f4bc0b582f"
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
    "url": "assets/js/app.38945cf9.js",
    "revision": "929637f13e9b0fb6e3d4523a5375f59f"
  },
  {
    "url": "index.html",
    "revision": "53b2e38ca9fedccd1aa0eda1a3ba5a42"
  },
  {
    "url": "logo.jpg",
    "revision": "f42ba549f4521a03a9f202c35ee29809"
  },
  {
    "url": "original/index.html",
    "revision": "00e4362c099da465b07839c4e2b9895b"
  },
  {
    "url": "web/index.html",
    "revision": "887b6cfda82da075ab1f933204cdb3fe"
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
