'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"favicon.ico": "f3886ef3373103a0ce2b274fc01411db",
"index.html": "beba741767d0ffe50f43aabb4b19d110",
"/": "beba741767d0ffe50f43aabb4b19d110",
"CNAME": "e7a1a56ae21f884cf1750317b08708f7",
"main.dart.js": "dcc63c510bc98af5ce1476429d852070",
"404.html": "5e86a2a92763c284f9865b1f953140f7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "fd0fcdf6c42202bdabdba65096b06792",
"icons/Icon-maskable-192.png": "fd0fcdf6c42202bdabdba65096b06792",
"icons/Icon-maskable-512.png": "e0fb17d6d1db1c76728c28c4c2ccf4ef",
"icons/Icon-512.png": "e0fb17d6d1db1c76728c28c4c2ccf4ef",
"manifest.json": "7facd14d39e6f944e6879527f4515bb1",
".git/ORIG_HEAD": "025b50af422af072b040085d20aa8224",
".git/config": "71eb08a251ed0c9b0b1d92b40c13802e",
".git/objects/61/b697a45b6d14913bc09d10191d0f57db17f0f4": "b52626ae8ffd1b83b8a6fdcd977485bc",
".git/objects/0d/cd79b2851605e03c98a24f84fa9fe8e264f8e2": "f1bb0b1739fae5b6a6dc2771501a06ec",
".git/objects/95/965ba9c99905ad897eeda6ae66782f78b74030": "4352f28e40f0127e07458c2402bfc1e5",
".git/objects/66/80c347853ff4e821a8f67b1988cd87d4dc4b0d": "5969b64a8ce31a71a1675a7b68b71cfe",
".git/objects/3e/1cfbd783abc76125a2714b1ffdd60a8edfd445": "9a0c76dce15364194e4c87400b4f105c",
".git/objects/50/508ac2d6e78084af144ef700524ebcb5fd1b78": "57ce80d6e7a0a904e093f326e872e739",
".git/objects/3b/84e905f785f82c6ddbeaed2540356f07afbb6c": "5c6afd3a0131392fdc63fb43d2fd814c",
".git/objects/32/03896e6c136e8021dba12357fd7d06475c0bec": "76658f34f40fda02b0020cb606fbaad5",
".git/objects/69/b75541418cbcebeaf87d0d96b93821347975e9": "ebaac255234b4a923f5619c0de29299d",
".git/objects/51/7bc53aa61cb3ae58ed711bf3df4d6d9fbf78fb": "70aec5d95c4f4fca2c4e7d24a695b7f6",
".git/objects/3d/d61f3acb1bd04ffa04c8518e63b06735aa3ed0": "3ccafd160c5c98d55d0b65054faf99f4",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/67/715e4d7d1771a4ac554bd408136afd1d5c2ebf": "590c8e487ca5a749e5a510e3169e1d13",
".git/objects/0b/85c6a5f83a2e4aeddda1377c715083f1ff2e2f": "88832655229647443bb7032dcb8f1d5e",
".git/objects/0b/f400d319a0cccc0212f4ae77b8dc4c1040a19a": "f24a67b70710b39778fcae0ae25e7e19",
".git/objects/93/8368c9afa51717a59bd36c9170245a7cd3c9b8": "3dd5497a5f7ec2f9682039803aebb747",
".git/objects/94/203472a5a9b2fffea6726a185fe61055c1d760": "a9857cac8d805c67f6997a6e6314caee",
".git/objects/94/fa006f4c087e68a09ae7601c56b413021c4a8f": "08800e2d56d45865f5eeae6ce26e23b0",
".git/objects/9d/63c92dc0dc5d0434afdcb7ba359f5d3ae2ee4b": "1274aefdbf1cf57f71ee5e61f026361c",
".git/objects/9c/a7d593df1916d6ea83e223cca8bb03442e2214": "c863c11a5776a2c16fdcb86600b86a08",
".git/objects/a4/4c5282da59cabeeba48b2738d3cd6d882fe6ef": "72e4f3da2c2bbb206683b18ee8b3b890",
".git/objects/a4/dd71b8e6fdd7aaaf0b51a95da49a738dbe5360": "d02c69579a1fb509fb51cd19e3d8e449",
".git/objects/a3/ad6339df3bcc6209e1143ca663df0e992d63e6": "672a16e77533db3e3cb2fb3a46c97d1b",
".git/objects/b2/3c0a2806313b768b7fa78837502f4e739f75b8": "4410a0c6ce1b13d707c5fa1a41ac122d",
".git/objects/ad/3477824096db167427ed825e252e0f902d91c5": "c5fac06e4bcc2fce4b6af6bba70aaf33",
".git/objects/be/79a96edacd9a5f2cd80daafbea69cac34696b7": "ee1eda0bcf1da4734e8490bfe4b704e6",
".git/objects/df/bc8b73595ac8b85460a9790d22a834e8fd2395": "3efbf148e5f4d325fadc155ba6a31fb4",
".git/objects/da/52acd3152fb27fec1d4961f7e60cd2e549658e": "12c07c05fae9cde59034e07caab63e93",
".git/objects/b4/3cdb193000909e0e5678ae216894f76b76cfb0": "1f0835ce6547b3b00b8b6dfd88f21e05",
".git/objects/a5/0bd6c0e9228b24b920dce0105f9b23692caa66": "de84b98540ba69ac407e5e2978fb4336",
".git/objects/d6/54095b86a2d883bde1b15758fd25d652669b01": "115d3b00bbdb3c9a0fb1a8e384d9a801",
".git/objects/bc/18b71ec1314e446633489cc48228090a3fcc3a": "4c945a583a63e37b8a4bb759a588a635",
".git/objects/ae/c0a4ce2141af7e3152cc3059965df165cba357": "4bce1be1511185b5e710122375b6e8a0",
".git/objects/e5/61612c7c1ada27f0289e99c0d6f5970f2c44f6": "3365afcbf54531a574eca4fcdc09b9be",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/336ba75cf80afb35b18786debb155d94ae8331": "93c20531b59294fcfc61335f12f7df75",
".git/objects/f3/72ef8caa8a6fd8d030647a732bc7eec2e1fb69": "49e6a880c74efdc1cc4c4e39ce3146f1",
".git/objects/c7/f5c506b1a65f67e8c1ec6de9f5b210ab9ba4ae": "609af7645085ead0eafe5e67a0608e6e",
".git/objects/c7/50db931d35bb4a35276c05b0d744aea8ad3697": "28420dc80c61572251ddcbae4588affb",
".git/objects/c0/b791e626dd7bcb7950db515683c6b611be46ab": "d0cc1088ab2bd6a939a4aea46c177279",
".git/objects/fc/8e5b4b30afaa0064b05689b3c9caa07a9ea918": "71f2d3a430f0987a0ff5389d01c2f478",
".git/objects/f5/c1ad6c3a43a5e673f2e86253ed280a427edf63": "3cb5ccd44595dd1275da0f9de4d022d9",
".git/objects/f5/3a9af2f3ab85f2d8ee4bef62ca284aaef2663e": "d62c6500fd0ddebf07f80fc3ba92a396",
".git/objects/e3/339247e06c9fb26cd2c0959f35e7206ace6a86": "99254638c93e0f2ee93700deec891307",
".git/objects/cf/2ceb1a242b6e9ccba09ecb5acb7eecd1c98806": "1784d0133cadd52be4d0235e66e29639",
".git/objects/ca/2c4e49a1e2092c290c2c3540907d95b904c3cd": "85bd3ff174d27be431804102641cd8ed",
".git/objects/e4/2cab484eb03a012c48894761965ec666a63c89": "87435c68661b8a32d3170222b5ebd48d",
".git/objects/e4/3e28e498902e5a54da5bc5c9033ab723f73668": "b4750434bde8ee91d6790d0a107c9041",
".git/objects/fb/1684767ff13afb7d6bdfcfd66808b1fdc6bc3b": "3cb9d8ebe21817f682319a0060275b6c",
".git/objects/c1/dda426f0078fe23cfe4de72d820f940b405b6c": "fc32eb0add4e2f258fe49dd902eccf55",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/20/4912382eafc6b7e2f068ca27a4aae68afcc36b": "4ff2de848f5e8c242d144fac67c1dab5",
".git/objects/18/ca29435cc6541991580fc02896c684191f699a": "9c429a1c1350335e1dc1d1059f06f0f1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/5649557ca057bb5a5a0335b0119330754ef987": "292e6b434487dbc66a9fe8c6f0f5a915",
".git/objects/7d/2538dd3c2f347f6cd2c71d66a00c0fb63a590e": "65bdbaa9cdacdd15bcc515a4d99e5f3a",
".git/objects/29/5f2f636cb9add948751191ac94522102232fe2": "e532de11792aa4683d96e3bc668b81d7",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/45/6b05a617655f2cebb382a6b06cf2870e92ba9f": "a9473c082808d8e7fa7cc51c0ae7686b",
".git/objects/73/71fab2f4aa9800fdd1bb935d2e8a4ef2f33fc6": "2749eb32a33ecf7a605a2c1925e70cd9",
".git/objects/80/7524603447dfee222c14b059465ec90915b32a": "f182eb1f50c0de7e808db7465e78948c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/10/ae5ff69b9f366890e48806ff0f0134dc661f12": "b76036b13d67e2544da1f6c66d61d4ee",
".git/objects/10/c6efc697c105ebac4b308fb86015dcd9a266f1": "d0fb92c805b96219bfd45a56b6d902a9",
".git/objects/26/7415b60d903184d3782b9dd3b4d5b98d53dd12": "f34f5a72b022fd1f706dccb92eaf1419",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/2a/06f16e4efa7fc0f7af34ccf447806a88c35eff": "924cce1cf5f4dcc23fc93da0b2bb9ad8",
".git/objects/2a/1cb263650d40575915374807a32c680ba78830": "af74b7a47f11dc4b25f10a8e0adfb25e",
".git/objects/88/18650806b808812e4c450ae472f8bed62c2a72": "8c6467ab7a225ede6d1ede437584e582",
".git/objects/9f/dc3d81609860ba18dd6d5a8f706ad874dce84a": "2610499e2ebf4767da263be6e36ec332",
".git/objects/6b/a0de1a61660bf33dba9ef705e7a49049188e64": "3d7418fafd952152ca08bc264bb5fc4a",
".git/objects/38/8eaeccff5c13f2623375497d06fd5514d756bc": "6430b05cb69c180b4358ce121ace521d",
".git/objects/38/0b43f3b157b3b26ed44bdd8f4b454ad304f75e": "6c6487217451c28b3b92b352aba89e57",
".git/objects/38/11e95e265b4d3275889ea7432cec71a7bb3b68": "dc97d53bfb0d24a39820c2d92fbb9b65",
".git/objects/9a/9eaa82a5709c502f80b3b6fe3b44c09a8d741e": "69081664516fce71f4cb9e2b2eb14886",
".git/objects/36/f9fcfc08dfc00baa822d379448cec7f5b4858c": "f35b82ead94ca28ac604b6efef50a05e",
".git/objects/31/6d26b7fe111ed0e118929bab10c57c228cef5e": "7a0754371b7ac71c5b2a979a8e80301c",
".git/objects/96/bf19d5033dac9ee78eef1dfe72cba6d5c2b712": "7bbc72c7d385c4b5293cb0b9e96c9cfd",
".git/objects/3a/0c3a49f5ccf5b4dbc0e331ba3223b66243f19d": "2772ca17829fb7f7568ba39dc207ef5f",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/2ca279c8fce758dc34b9fd542d63ded52c99f8": "696df8a30e77c273313c5fbad4a28aaf",
".git/objects/6c/888ca4ac821c3ae2f89c385967d7d93af0b9f9": "2a2a094dced6284ea3e452d5c9045a91",
".git/objects/99/aa362afc7ace037b7eb3b80e0f86eadc1666ad": "51ce9dc8095fabd53b900189591f914e",
".git/objects/55/e05d69cd25e1da49499aa2230d88cab95f3182": "b4368219d34d508a2a5e2a57ecf71e70",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/521d6c293647ed8ea2d57533577c4397ce3abd": "7178854d5a4e0e3b9b0232caa61bc361",
".git/objects/0a/fd1b0873413a9eb024307d8e1f0917b4a91579": "152c1799d1a9db452a918207a5ecb209",
".git/objects/64/acabfae7300d4cee6928c2f69e0eaed2e94b44": "77e94ca11ab8347499da494fbc2ffb79",
".git/objects/ba/16a7f8ef0b34c8d06611f391f2f42c1f149732": "4b265a9d7306ebc7bdb14c3b2d8506a3",
".git/objects/a7/e19660fcaf92f873b6b855ba10dc2b22e6ec9c": "3f7c7f6d6faf44c826d1369929a8a466",
".git/objects/b8/e4a80aa85b654485b5790d7a11340c8db900e9": "21216f26a7f511ac24d1432c818d11e8",
".git/objects/b8/fdf9ff4490fae9e3ace316ad8c68b11918a974": "239381ab2fe476e2c8ddf531c5da7bb1",
".git/objects/d5/378b74bcd2a1e480fa213f92acfb20eeaed57d": "2f167b95a6c47743ffceb9b7a1ac7cd6",
".git/objects/aa/0acb5517ee222b72a8cd3d4a1f2eab7c190a8e": "5277c06593ea81dfa07f03a3dea8ba4f",
".git/objects/b7/540cd9dfbe4b421d2690bd1d4c2e2ed6584440": "6377e649a9e69600dd2409aa93575788",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/70419f154d31dbb3d4f550ececa5903131eea4": "c671f5c6914f3b32f1214c2218e7bc56",
".git/objects/de/7518c45540a1ea28c55e79c152bb2d18932a01": "a9b5d532699871fcb4b82871d08e27e9",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/b0/56b4ca848fed03a7fca23f10c8059025328383": "3bbf7d0658a3fd66ad90cbf5dc40bd82",
".git/objects/b0/a01174a90a0bac659dbb1965a0c30a7add5357": "dd1c087b74e2faf3097ea08e509fb501",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/a23d5c985a0400ab385767f2c1333d8874a5c0": "164eea3ee5081c52c1199f252ded22a2",
".git/objects/ea/fc829c3f3631ac7a6ee347552e8c7ff9cf924a": "087433e74bec5b3553c22b290b3a8724",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/2c4a6f9d70ded9522c9db8cd52c75559cc4794": "37d1f431610d88273cddd854ddcf2734",
".git/objects/e8/132944d27f5ed56627712cedb8a91dcbb6196d": "14cd2345542431fb115786b4901087bc",
".git/objects/fa/1dd2edc4fe5c368dd6b989792248b9b2d98679": "b0c4ee4ae308a358b4113663d8cf9a84",
".git/objects/fa/5584d23881611b0b797a0a4ea891ab4de2f26d": "908d9a60d36eadeed1a3d19152e29ef6",
".git/objects/c5/1c1adbefb442f26ec469379711500485df4429": "6ea39bafba7ea5a9258a701d15bbfb62",
".git/objects/c5/08a6ede1580e17c7cd5cd4b8d0a6183038d8b1": "12735a864c22fd6178f6194dfa21445b",
".git/objects/c5/a3eae92bd0eff9c6c80aa4520106ef5014bf0c": "65afdc9f13b44ecc2795ee4756948787",
".git/objects/e7/7a16a35f2bb4fa3bafefe5e22b8438af881184": "db39d0c916c440ecf846516fb56c84b4",
".git/objects/e0/ebaaa0d3e1088d3f7624a4a4ea5451d99c3199": "c6dff44b6226a9bdc04e56d091700a75",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/cae0caf885b4d3868e8f261c77b78f3647f547": "db0f405eb5cdb34b5eca700934bfbaf7",
".git/objects/84/e50e551c665a27b0278e606ef5427aa667ed7b": "d240c60a1da7a8983578cb4be65894ea",
".git/objects/4a/7794c01574185e645a0b64a51a4ed945d67ea0": "b96a18ee69f52c1700a95e2072642d65",
".git/objects/4a/93e2356aa304384f8e9a3bce9b715020ab4430": "2bb97e295915a9a8f53171ffd4bbc74d",
".git/objects/23/4f172e3bcc31772f1a7f4966d7762b57ff64cb": "ba0b1336a428ffde9481ea50f63c4397",
".git/objects/23/d8c3391cac1c0b4067ed0b30bad56954a206a7": "d7ff068330d62f669dd862a309446197",
".git/objects/4f/4a31c188bd0f3c5887c4b54273231cca8c6694": "df653d0b63f105fe4dd7685aeeafd430",
".git/objects/12/4becb03ccd2006592d7876b51a7f8aa5253b3a": "0f37294d1ea338ac38c0379adc391710",
".git/objects/8c/9a0b1e691c1a79000e474c82299d8dc76dc9d4": "ff3c15223a9d8a32d210d8e79aad970d",
".git/objects/8c/889102b99213689d59bbd2d50abd923dd86423": "3e78ce0e3fe7d6d1e5d75cde1caefd6f",
".git/objects/2e/b55e1d00d92b10a361fff0b9dc70219682917a": "5d630be5a261ec4dd0839b8aa548ce2a",
".git/objects/2b/45659826c26b39e0bc03dc25ffa1dbbd2e7edb": "5a93020045e71dd26d64c35608de85c8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/8ae7d7868dfbcbb0ddd8da20ffe4e8a2c54d9c": "09376b9cf7b32c26a2b8084590606790",
".git/objects/8b/845da60e82bbb698f3ba90286caa01fe053975": "7014e70472cbf2f413633c48f21dc3b3",
".git/objects/14/449ba90aa0ccf38a6fb9649a4c5e30ef8d909b": "635059398a7ae7d5fbbcafb54b138d7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "742e79acfe77a48d92f1c099143e6700",
".git/logs/refs/heads/main": "5d04b5b0aebf53553c32c704a0024d2c",
".git/logs/refs/remotes/origin/main": "b5dc22eca12df6612837abe2d0e7f3e5",
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
".git/refs/heads/main": "90bdfb793e8d200f4fded32b7dc751ba",
".git/refs/tags/1.0.0": "f5cb3aa81c714ceb99f3616e5c8a5eb6",
".git/refs/remotes/origin/main": "90bdfb793e8d200f4fded32b7dc751ba",
".git/index": "e4f7255e9d89062e05714738751235c4",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "ec1bebaea2c042beb68f7679ddd106a4",
".git/FETCH_HEAD": "8f1f856dc5e07c84809d8546da0b711e",
"assets/AssetManifest.json": "efba698009f7ac6312b97ffb5251636b",
"assets/NOTICES": "fbc6ba557a0f65af591c708e8c935f3d",
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
