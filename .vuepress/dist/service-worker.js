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
    "revision": "90e83eba267221814fbc7d6506ff82f3"
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
    "url": "assets/js/4.d96317ce.js",
    "revision": "d6cf8dcea174d43fe711b7a53772db18"
  },
  {
    "url": "assets/js/app.c846650f.js",
    "revision": "cd2602c4f371ee17edccc920d7360cc0"
  },
  {
    "url": "index.html",
    "revision": "9b8291e314ae667500e9eb75f7c21518"
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
