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
<<<<<<< HEAD
    "revision": "ee46dc2fbe1a48fa73e580b7ec4002b3"
=======
<<<<<<< HEAD
    "revision": "40d90a2b729803d0976d9ac4b4ab49bb"
=======
    "revision": "4e054fa85831f9a42b8dd20c1d9f76aa"
>>>>>>> 514343de8895805b23859de2168096f648777da3
>>>>>>> 20c52eb867dd78f8f5f744c901a09e44b2d7c1f7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 20c52eb867dd78f8f5f744c901a09e44b2d7c1f7
    "url": "assets/js/4.55d62415.js",
    "revision": "840355f9fa109c2e9bdf8f175bb08d78"
  },
  {
    "url": "assets/js/5.26263c3e.js",
    "revision": "fbbd5becbb081ae866cd53259e6c04a2"
<<<<<<< HEAD
=======
=======
    "url": "assets/js/4.e4a93fa1.js",
    "revision": "00b8d03fd93f1fd4577b0fdc9e175824"
  },
  {
    "url": "assets/js/5.80b86223.js",
    "revision": "fa4b754adaf1e0bedc3f799f2b4af978"
>>>>>>> 514343de8895805b23859de2168096f648777da3
>>>>>>> 20c52eb867dd78f8f5f744c901a09e44b2d7c1f7
  },
  {
    "url": "assets/js/6.d0949b9a.js",
    "revision": "76038b93a38bb8374998d2944e15f499"
  },
  {
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    "url": "assets/js/app.0b76c296.js",
    "revision": "adb69f575c496973fdc8406666a4cd31"
  },
  {
    "url": "index.html",
    "revision": "d2b0c114888db21b3bc6facea6000121"
  },
  {
    "url": "original/index.html",
    "revision": "b10e09b929568722d7caf5366db965b2"
  },
  {
    "url": "web/index.html",
    "revision": "b52428dbbcdb0bcc2777d5a5d037e8fa"
=======
    "url": "assets/js/app.36f0f6ef.js",
    "revision": "44997e6f3f24208e121aecc7de0a32a5"
  },
  {
    "url": "index.html",
    "revision": "b8588bbb0ac2dd9310e796153fa2ff0f"
  },
  {
    "url": "original/index.html",
    "revision": "6d99e6baa236f19db388549aa55fceaf"
  },
  {
    "url": "web/index.html",
    "revision": "096e250af9e87393dc27b71f90fd4e70"
>>>>>>> 514343de8895805b23859de2168096f648777da3
>>>>>>> 20c52eb867dd78f8f5f744c901a09e44b2d7c1f7
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
