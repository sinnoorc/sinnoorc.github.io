'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"favicon.ico": "f3886ef3373103a0ce2b274fc01411db",
"index.html": "163b1f44acaae7c1cbc786ee86bc3aa6",
"/": "163b1f44acaae7c1cbc786ee86bc3aa6",
"CNAME": "e7a1a56ae21f884cf1750317b08708f7",
"main.dart.js": "d107c59454192c9259adc7fa7844cac5",
"404.html": "20a84ef6ddcbbf060e10971f2622e02f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "fd0fcdf6c42202bdabdba65096b06792",
"icons/Icon-maskable-192.png": "fd0fcdf6c42202bdabdba65096b06792",
"icons/Icon-maskable-512.png": "e0fb17d6d1db1c76728c28c4c2ccf4ef",
"icons/Icon-512.png": "e0fb17d6d1db1c76728c28c4c2ccf4ef",
"manifest.json": "7facd14d39e6f944e6879527f4515bb1",
".git/ORIG_HEAD": "ca99bd2ef2b9794ae66da0f78957b108",
".git/config": "affc53704f2598d3f4694a43d2740982",
".git/objects/61/b697a45b6d14913bc09d10191d0f57db17f0f4": "b52626ae8ffd1b83b8a6fdcd977485bc",
".git/objects/0d/cd79b2851605e03c98a24f84fa9fe8e264f8e2": "f1bb0b1739fae5b6a6dc2771501a06ec",
".git/objects/95/965ba9c99905ad897eeda6ae66782f78b74030": "4352f28e40f0127e07458c2402bfc1e5",
".git/objects/66/80c347853ff4e821a8f67b1988cd87d4dc4b0d": "5969b64a8ce31a71a1675a7b68b71cfe",
".git/objects/3b/84e905f785f82c6ddbeaed2540356f07afbb6c": "5c6afd3a0131392fdc63fb43d2fd814c",
".git/objects/51/7bc53aa61cb3ae58ed711bf3df4d6d9fbf78fb": "70aec5d95c4f4fca2c4e7d24a695b7f6",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/67/715e4d7d1771a4ac554bd408136afd1d5c2ebf": "590c8e487ca5a749e5a510e3169e1d13",
".git/objects/93/8368c9afa51717a59bd36c9170245a7cd3c9b8": "3dd5497a5f7ec2f9682039803aebb747",
".git/objects/94/203472a5a9b2fffea6726a185fe61055c1d760": "a9857cac8d805c67f6997a6e6314caee",
".git/objects/94/fa006f4c087e68a09ae7601c56b413021c4a8f": "08800e2d56d45865f5eeae6ce26e23b0",
".git/objects/a4/4c5282da59cabeeba48b2738d3cd6d882fe6ef": "72e4f3da2c2bbb206683b18ee8b3b890",
".git/objects/b2/3c0a2806313b768b7fa78837502f4e739f75b8": "4410a0c6ce1b13d707c5fa1a41ac122d",
".git/objects/da/52acd3152fb27fec1d4961f7e60cd2e549658e": "12c07c05fae9cde59034e07caab63e93",
".git/objects/b4/3cdb193000909e0e5678ae216894f76b76cfb0": "1f0835ce6547b3b00b8b6dfd88f21e05",
".git/objects/ae/c0a4ce2141af7e3152cc3059965df165cba357": "4bce1be1511185b5e710122375b6e8a0",
".git/objects/e5/61612c7c1ada27f0289e99c0d6f5970f2c44f6": "3365afcbf54531a574eca4fcdc09b9be",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/336ba75cf80afb35b18786debb155d94ae8331": "93c20531b59294fcfc61335f12f7df75",
".git/objects/c7/f5c506b1a65f67e8c1ec6de9f5b210ab9ba4ae": "609af7645085ead0eafe5e67a0608e6e",
".git/objects/fc/8e5b4b30afaa0064b05689b3c9caa07a9ea918": "71f2d3a430f0987a0ff5389d01c2f478",
".git/objects/f5/3a9af2f3ab85f2d8ee4bef62ca284aaef2663e": "d62c6500fd0ddebf07f80fc3ba92a396",
".git/objects/ca/2c4e49a1e2092c290c2c3540907d95b904c3cd": "85bd3ff174d27be431804102641cd8ed",
".git/objects/fb/1684767ff13afb7d6bdfcfd66808b1fdc6bc3b": "3cb9d8ebe21817f682319a0060275b6c",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/20/4912382eafc6b7e2f068ca27a4aae68afcc36b": "4ff2de848f5e8c242d144fac67c1dab5",
".git/objects/7d/2538dd3c2f347f6cd2c71d66a00c0fb63a590e": "65bdbaa9cdacdd15bcc515a4d99e5f3a",
".git/objects/29/5f2f636cb9add948751191ac94522102232fe2": "e532de11792aa4683d96e3bc668b81d7",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/73/71fab2f4aa9800fdd1bb935d2e8a4ef2f33fc6": "2749eb32a33ecf7a605a2c1925e70cd9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/10/c6efc697c105ebac4b308fb86015dcd9a266f1": "d0fb92c805b96219bfd45a56b6d902a9",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/2a/1cb263650d40575915374807a32c680ba78830": "af74b7a47f11dc4b25f10a8e0adfb25e",
".git/objects/9f/dc3d81609860ba18dd6d5a8f706ad874dce84a": "2610499e2ebf4767da263be6e36ec332",
".git/objects/6b/a0de1a61660bf33dba9ef705e7a49049188e64": "3d7418fafd952152ca08bc264bb5fc4a",
".git/objects/38/8eaeccff5c13f2623375497d06fd5514d756bc": "6430b05cb69c180b4358ce121ace521d",
".git/objects/38/11e95e265b4d3275889ea7432cec71a7bb3b68": "dc97d53bfb0d24a39820c2d92fbb9b65",
".git/objects/9a/9eaa82a5709c502f80b3b6fe3b44c09a8d741e": "69081664516fce71f4cb9e2b2eb14886",
".git/objects/31/6d26b7fe111ed0e118929bab10c57c228cef5e": "7a0754371b7ac71c5b2a979a8e80301c",
".git/objects/96/bf19d5033dac9ee78eef1dfe72cba6d5c2b712": "7bbc72c7d385c4b5293cb0b9e96c9cfd",
".git/objects/3a/0c3a49f5ccf5b4dbc0e331ba3223b66243f19d": "2772ca17829fb7f7568ba39dc207ef5f",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/521d6c293647ed8ea2d57533577c4397ce3abd": "7178854d5a4e0e3b9b0232caa61bc361",
".git/objects/0a/fd1b0873413a9eb024307d8e1f0917b4a91579": "152c1799d1a9db452a918207a5ecb209",
".git/objects/64/acabfae7300d4cee6928c2f69e0eaed2e94b44": "77e94ca11ab8347499da494fbc2ffb79",
".git/objects/ba/16a7f8ef0b34c8d06611f391f2f42c1f149732": "4b265a9d7306ebc7bdb14c3b2d8506a3",
".git/objects/a7/e19660fcaf92f873b6b855ba10dc2b22e6ec9c": "3f7c7f6d6faf44c826d1369929a8a466",
".git/objects/b8/e4a80aa85b654485b5790d7a11340c8db900e9": "21216f26a7f511ac24d1432c818d11e8",
".git/objects/b7/540cd9dfbe4b421d2690bd1d4c2e2ed6584440": "6377e649a9e69600dd2409aa93575788",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/70419f154d31dbb3d4f550ececa5903131eea4": "c671f5c6914f3b32f1214c2218e7bc56",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/b0/56b4ca848fed03a7fca23f10c8059025328383": "3bbf7d0658a3fd66ad90cbf5dc40bd82",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/a23d5c985a0400ab385767f2c1333d8874a5c0": "164eea3ee5081c52c1199f252ded22a2",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f7/2c4a6f9d70ded9522c9db8cd52c75559cc4794": "37d1f431610d88273cddd854ddcf2734",
".git/objects/fa/1dd2edc4fe5c368dd6b989792248b9b2d98679": "b0c4ee4ae308a358b4113663d8cf9a84",
".git/objects/c5/1c1adbefb442f26ec469379711500485df4429": "6ea39bafba7ea5a9258a701d15bbfb62",
".git/objects/c5/a3eae92bd0eff9c6c80aa4520106ef5014bf0c": "65afdc9f13b44ecc2795ee4756948787",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/cae0caf885b4d3868e8f261c77b78f3647f547": "db0f405eb5cdb34b5eca700934bfbaf7",
".git/objects/4a/93e2356aa304384f8e9a3bce9b715020ab4430": "2bb97e295915a9a8f53171ffd4bbc74d",
".git/objects/23/4f172e3bcc31772f1a7f4966d7762b57ff64cb": "ba0b1336a428ffde9481ea50f63c4397",
".git/objects/12/4becb03ccd2006592d7876b51a7f8aa5253b3a": "0f37294d1ea338ac38c0379adc391710",
".git/objects/2b/45659826c26b39e0bc03dc25ffa1dbbd2e7edb": "5a93020045e71dd26d64c35608de85c8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/14/449ba90aa0ccf38a6fb9649a4c5e30ef8d909b": "635059398a7ae7d5fbbcafb54b138d7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67dd5d5be811f44b6c5bfacb7ad09584",
".git/logs/refs/heads/dev": "45330a97c142112a1298649cdf45dc0e",
".git/logs/refs/heads/main": "32a486f39ef332d348fa5d620a7b0385",
".git/logs/refs/remotes/origin/dev": "8e43d556aaaeb9306b19e14e30aeb239",
".git/logs/refs/remotes/origin/main": "a892addb08ee2e5ab4834e641247bb78",
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
".git/refs/heads/dev": "ca99bd2ef2b9794ae66da0f78957b108",
".git/refs/heads/main": "a187dfb55cd69042328dec65b4dfc79a",
".git/refs/remotes/origin/dev": "64182480ee72892c0d7891d7d9ec9f1c",
".git/refs/remotes/origin/main": "a187dfb55cd69042328dec65b4dfc79a",
".git/index": "5e93d381b733fb0f78dceec8d8cc84f6",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/FETCH_HEAD": "4c8bf836e46e49979a9b909e7ab0bf42",
"projects.zip": "d4b234a9389d98d73cb069a3d4b585a6",
"assets/AssetManifest.json": "efba698009f7ac6312b97ffb5251636b",
"assets/NOTICES": "457a5d3975c45e733fac564323e11911",
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
