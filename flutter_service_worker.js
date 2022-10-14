'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"favicon.ico": "f3886ef3373103a0ce2b274fc01411db",
"index.html": "46f5fb6dbcc41b318f144863d470ee92",
"/": "46f5fb6dbcc41b318f144863d470ee92",
"main.dart.js": "d165e0403f2e2ba3c16d54056785f15c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "fd0fcdf6c42202bdabdba65096b06792",
"icons/Icon-maskable-192.png": "fd0fcdf6c42202bdabdba65096b06792",
"icons/Icon-maskable-512.png": "e0fb17d6d1db1c76728c28c4c2ccf4ef",
"icons/Icon-512.png": "e0fb17d6d1db1c76728c28c4c2ccf4ef",
"manifest.json": "7facd14d39e6f944e6879527f4515bb1",
".git/config": "71eb08a251ed0c9b0b1d92b40c13802e",
".git/objects/0d/cd79b2851605e03c98a24f84fa9fe8e264f8e2": "f1bb0b1739fae5b6a6dc2771501a06ec",
".git/objects/95/965ba9c99905ad897eeda6ae66782f78b74030": "4352f28e40f0127e07458c2402bfc1e5",
".git/objects/66/80c347853ff4e821a8f67b1988cd87d4dc4b0d": "5969b64a8ce31a71a1675a7b68b71cfe",
".git/objects/3b/84e905f785f82c6ddbeaed2540356f07afbb6c": "5c6afd3a0131392fdc63fb43d2fd814c",
".git/objects/51/7bc53aa61cb3ae58ed711bf3df4d6d9fbf78fb": "70aec5d95c4f4fca2c4e7d24a695b7f6",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/93/8368c9afa51717a59bd36c9170245a7cd3c9b8": "3dd5497a5f7ec2f9682039803aebb747",
".git/objects/94/fa006f4c087e68a09ae7601c56b413021c4a8f": "08800e2d56d45865f5eeae6ce26e23b0",
".git/objects/a4/4c5282da59cabeeba48b2738d3cd6d882fe6ef": "72e4f3da2c2bbb206683b18ee8b3b890",
".git/objects/b2/3c0a2806313b768b7fa78837502f4e739f75b8": "4410a0c6ce1b13d707c5fa1a41ac122d",
".git/objects/b4/3cdb193000909e0e5678ae216894f76b76cfb0": "1f0835ce6547b3b00b8b6dfd88f21e05",
".git/objects/e5/61612c7c1ada27f0289e99c0d6f5970f2c44f6": "3365afcbf54531a574eca4fcdc09b9be",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/336ba75cf80afb35b18786debb155d94ae8331": "93c20531b59294fcfc61335f12f7df75",
".git/objects/c7/f5c506b1a65f67e8c1ec6de9f5b210ab9ba4ae": "609af7645085ead0eafe5e67a0608e6e",
".git/objects/f5/3a9af2f3ab85f2d8ee4bef62ca284aaef2663e": "d62c6500fd0ddebf07f80fc3ba92a396",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/20/4912382eafc6b7e2f068ca27a4aae68afcc36b": "4ff2de848f5e8c242d144fac67c1dab5",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/10/c6efc697c105ebac4b308fb86015dcd9a266f1": "d0fb92c805b96219bfd45a56b6d902a9",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/2a/1cb263650d40575915374807a32c680ba78830": "af74b7a47f11dc4b25f10a8e0adfb25e",
".git/objects/9f/dc3d81609860ba18dd6d5a8f706ad874dce84a": "2610499e2ebf4767da263be6e36ec332",
".git/objects/6b/a0de1a61660bf33dba9ef705e7a49049188e64": "3d7418fafd952152ca08bc264bb5fc4a",
".git/objects/9a/9eaa82a5709c502f80b3b6fe3b44c09a8d741e": "69081664516fce71f4cb9e2b2eb14886",
".git/objects/31/6d26b7fe111ed0e118929bab10c57c228cef5e": "7a0754371b7ac71c5b2a979a8e80301c",
".git/objects/96/bf19d5033dac9ee78eef1dfe72cba6d5c2b712": "7bbc72c7d385c4b5293cb0b9e96c9cfd",
".git/objects/3a/0c3a49f5ccf5b4dbc0e331ba3223b66243f19d": "2772ca17829fb7f7568ba39dc207ef5f",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/521d6c293647ed8ea2d57533577c4397ce3abd": "7178854d5a4e0e3b9b0232caa61bc361",
".git/objects/ba/16a7f8ef0b34c8d06611f391f2f42c1f149732": "4b265a9d7306ebc7bdb14c3b2d8506a3",
".git/objects/b8/e4a80aa85b654485b5790d7a11340c8db900e9": "21216f26a7f511ac24d1432c818d11e8",
".git/objects/b7/540cd9dfbe4b421d2690bd1d4c2e2ed6584440": "6377e649a9e69600dd2409aa93575788",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/b0/56b4ca848fed03a7fca23f10c8059025328383": "3bbf7d0658a3fd66ad90cbf5dc40bd82",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/fa/1dd2edc4fe5c368dd6b989792248b9b2d98679": "b0c4ee4ae308a358b4113663d8cf9a84",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/cae0caf885b4d3868e8f261c77b78f3647f547": "db0f405eb5cdb34b5eca700934bfbaf7",
".git/objects/2b/45659826c26b39e0bc03dc25ffa1dbbd2e7edb": "5a93020045e71dd26d64c35608de85c8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/14/449ba90aa0ccf38a6fb9649a4c5e30ef8d909b": "635059398a7ae7d5fbbcafb54b138d7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2ec3894d6cc69579d83c3b64bb11eb0",
".git/logs/refs/heads/main": "766379f571614c4076e407d802bdee97",
".git/logs/refs/remotes/origin/main": "0238f35e64f53da686de01b12f5e25d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "51b3f6d2808caec66207abb2a8a2c51e",
".git/refs/remotes/origin/main": "56a7fd1f2b2b605e167dcbcc7ec85b42",
".git/index": "0c4bdbb2db5cee723ea4e41ad382367c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "d66ef6519b1a4e79203881724a20035e",
"assets/AssetManifest.json": "efba698009f7ac6312b97ffb5251636b",
"assets/NOTICES": "06096b52d82726326624d1ce90c1c1f9",
"assets/FontManifest.json": "e4ed5db2cda0adf967960098c5913f0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/shaders/ink_sparkle.frag": "7c6178e26f01e2be2904673ea8e0a778",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/swallet.png": "808d8dd1357416cdbebf049fc2b7e111",
"assets/assets/icons/image.svg": "8a05fc04af42547e54fc6b4331a659e1",
"assets/assets/fonts/NType82-Regular.otf": "93d7ca1749db2332b0bf112a6c626c82",
"assets/assets/fonts/Pixeled.ttf": "645f3e428b900baae797d1874d48fd76",
"assets/assets/fonts/nothing.ttf": "c338fc9f2148676baf42fb01bdea64aa",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
