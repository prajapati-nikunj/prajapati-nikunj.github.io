'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8b6839d2f292e47efd9b0b098438028a",
"index.html": "11077979b57493f19a66aa2acfefb427",
"/": "11077979b57493f19a66aa2acfefb427",
"main.dart.js": "97fe96665b25c0a8370a103f77c13bcd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "795b140fb7418eb62b2b462ee116f192",
"icons/Icon-192.png": "ab3d10c1d28c67ab70ff3571b3b80d46",
"icons/Icon-maskable-192.png": "ab3d10c1d28c67ab70ff3571b3b80d46",
"icons/Icon-maskable-512.png": "7b5f738c661474589018c488cb1b61e7",
"icons/Icon-512.png": "7b5f738c661474589018c488cb1b61e7",
"manifest.json": "4f9118723e3595f1b163b2fd2562851f",
"assets/AssetManifest.json": "4a1c691aeaec2247c20ebd1ffe24acb0",
"assets/NOTICES": "0de630f1a5b82d9983c75d483611fd05",
"assets/FontManifest.json": "1b5d69be6ae5440d49dfeed28f44ff2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "304c88d3f1403c010bb5dbb2d46900f7",
"assets/fonts/MaterialIcons-Regular.otf": "fc935976d770d8ac708f42f671edac9a",
"assets/assets/images/ebiz.png": "a3cfd3a52089da2c6df87854aa140b2f",
"assets/assets/images/invx.png": "a42cde2b3db250e8cc502a8d365d7298",
"assets/assets/images/NIC.png": "0f8d741b664c66c60d8f6c727199802a",
"assets/assets/images/linkedin.svg": "6712343c29ebd9580f1179f9ed536fd5",
"assets/assets/images/NP.png": "4295626f5b0803bad51e94cc0003675c",
"assets/assets/fonts/Montserrat-Bold.otf": "5a6aef823dd8d1b22aacd78aebb653d6",
"assets/assets/fonts/Montserrat-Light.otf": "f5e955efb2bef154ac6dd150903f2d45",
"assets/assets/fonts/Montserrat-Thin.otf": "cb2144b361907d6549a80a5203f07347",
"assets/assets/fonts/Montserrat-ExtraLight.otf": "2ec7cecb19c1b42ca9ca709971016156",
"assets/assets/fonts/SourceSans3-Regular.ttf": "04f1a4f0fdf585fc5b56885fefc9e8d2",
"assets/assets/fonts/SourceSans3-Black.ttf": "cb41cc6e7fffbba0ce2bb37d1f914c7c",
"assets/assets/fonts/SourceSans3-Bold.ttf": "a923b66a888fa07af060554d8c28644b",
"assets/assets/fonts/Montserrat-Medium.otf": "d815b0a29adf3450c55f56e2fb813be4",
"assets/assets/fonts/SourceSans3-ExtraLight.ttf": "209823e84515591cd28c642063f3fcab",
"assets/assets/fonts/SourceSans3-Light.ttf": "d1772158694ce0228a41fef9bec396b3",
"assets/assets/fonts/SourceSans3-Medium.ttf": "fda30e61e2b62c05a0e900f055f0ce29",
"assets/assets/fonts/SourceSans3-SemiBold.ttf": "cf5be8398a1f0d84582ce6b3723c031d",
"assets/assets/fonts/Montserrat-Regular.otf": "27e50ffd6a14cbc8221c9dbd3b5208dc",
"assets/assets/fonts/Montserrat-ExtraBold.otf": "433ac418a603294fc5891dde6a73cd24",
"assets/assets/fonts/SourceSans3-ExtraBold.ttf": "f0c824c74353b6b2202bd4387a7455d1",
"assets/assets/fonts/Montserrat-Black.otf": "f86a4fdb233e1ca195b64712ac9c7cbe",
"assets/assets/fonts/Montserrat-SemiBold.otf": "cbdf3ab950d15019fff93460614948b7",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
