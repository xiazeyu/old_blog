/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/08/19/hello-world.html","693fa3d25cfd86b430b21c14af634f23"],["/2017/08/19/stdsrc-note.html","80a44fc38332cf455ec2855bd77bc544"],["/2017/08/26/happy-birthday-jhz-2017.html","afee6a70355f3fbddd311beba2b34f2b"],["/2017/10/14/noip2017Preliminary.html","1f0bf6a6de48871bc0febae97dce3332"],["/2017/10/20/2017pP.html","1348e31bcc55f0502fd563f156b09553"],["/2017/10/28/PJOWM.html","ae080496da471f0d5f361ba3f8986162"],["/about/index.html","f7bb82d8f82356d15b423c038a3cb835"],["/android-chrome-144x144.png","91f5ff89a2f9b5038fa3b923cd5cff93"],["/android-chrome-192x192.png","ae5c60361bcc967789a09dcbb84aa6b8"],["/android-chrome-256x256.png","58b6fe0470143bde71b0ccac1cc27750"],["/android-chrome-36x36.png","3e72b43220908e2c123a0028a6111f3e"],["/android-chrome-384x384.png","52c1fa749b6e9da82bc61307dbd42772"],["/android-chrome-48x48.png","89b0e8945419a19c5fb11df202751034"],["/android-chrome-512x512.png","4ebcd62398f8659118e49994f1e5e119"],["/android-chrome-72x72.png","7e5ae742efd436aeee82bde6b0143dce"],["/android-chrome-96x96.png","572049b7e78c12c3af13008ca8578688"],["/apple-touch-icon-114x114-precomposed.png","7380849cc3edd624d3dd8e5d5cad8db6"],["/apple-touch-icon-114x114.png","f0231ac8ac1f554002f71250dc8a1cca"],["/apple-touch-icon-120x120-precomposed.png","0eff3eda04cf507c682f1371827134c4"],["/apple-touch-icon-120x120.png","ce50ae939eedcf8c3c6dc461b5841366"],["/apple-touch-icon-144x144-precomposed.png","3cee9482dca834d75edfae89d307c820"],["/apple-touch-icon-144x144.png","4870f68f86dbc38fffdbec4f5861d4eb"],["/apple-touch-icon-152x152-precomposed.png","4b6baec5b6d62c50979afe0bd0f76db0"],["/apple-touch-icon-152x152.png","f18cbb25bc9d80567d496537a33b34cf"],["/apple-touch-icon-167x167.png","4e4b50e6ccf38083d8f24392d6a3a318"],["/apple-touch-icon-180x180-precomposed.png","2bfa45eb148b7c8a48aea8ea4a82681c"],["/apple-touch-icon-180x180.png","7fe47acdff836007e3b8fd91abb8bb8c"],["/apple-touch-icon-57x57-precomposed.png","680f68e135a0b17a933803e2551f8e25"],["/apple-touch-icon-57x57.png","6cbbf0dd0bb821ae1434352b5f338cc5"],["/apple-touch-icon-60x60-precomposed.png","69c2c2b0c9d61778e0989cffdc2b6db5"],["/apple-touch-icon-60x60.png","193ecfe415e190dd8a762181ed0a6b13"],["/apple-touch-icon-72x72-precomposed.png","34cb8c499f7d25ea1c5f9bb2969aadcb"],["/apple-touch-icon-72x72.png","6378b2b7712a66eb7d4be4ab65a93ac1"],["/apple-touch-icon-76x76-precomposed.png","92cd045b00ad2929d13206c241e8c092"],["/apple-touch-icon-76x76.png","fc45386a85901fce662d06a92c3eb23b"],["/apple-touch-icon-precomposed.png","2bfa45eb148b7c8a48aea8ea4a82681c"],["/apple-touch-icon.png","15b0c712c03e670a856631e4eb72f470"],["/archives/2017/08/index.html","a553ef27ceba313704fd95bf89ceb03a"],["/archives/2017/10/index.html","0e664e5714ca9a9ff003574761f6b82c"],["/archives/2017/index.html","df0391e91a91639cfbc62856a368e9bf"],["/archives/index.html","2df3ef5663f4f84f556b0e9a59b29b3d"],["/baidu_verify_3hSqztKfoM.html","2719048108a712610327533eda60e358"],["/baidu_verify_AreE2VPSL6.html","13ddd94b6c07a817bb6fc5eea3bfdea3"],["/categories/C-编程技巧/index.html","2522a412d352307db0d375d9ec7d47e5"],["/categories/enc/index.html","27f3bd09546159242191dd09663f8d9a"],["/categories/index.html","6b1dbca0bc24a50339f8f8e94496bd46"],["/categories/总结/index.html","da185586510829e1ca0d94b0006dd474"],["/categories/杂记/index.html","b8892a7206ce7ee18ddec5ff3d311564"],["/categories/站点日志/index.html","2017e14b85ee6cccef8c89706d766209"],["/css/gitalk.css","a9e5deb45a77c45a4de7df64b2c2658a"],["/css/main.css","aa09d52c8655bd64102366327b12ffa5"],["/favicon-16x16.png","bdb0327b159a3480994eb24ffb741968"],["/favicon-194x194.png","33ef1d4cd70a4fd74f3dc839a48474d0"],["/favicon-32x32.png","ee013367b3110a191893154d814f7dfd"],["/google1b42336f8dec2ff4.html","091c2a7d09be4b441684c4bb6ea17a4e"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/avatar.gif","c9e87df31492140fe74ef81b8606063b"],["/images/avatar.png","bcc4d79442a2dd610a7b4ceefd929dd2"],["/images/cc-by-nc-nd.svg","dcb4d6f4f5cfe8d4e048981d4c03596d"],["/images/cc-by-nc-sa.svg","ac5adc1eb70c91050fb79e6b5f8a3273"],["/images/cc-by-nc.svg","43ecd125247bc8fbcdb5f87aa41e8f66"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","d1b1c9fbf62e19a1edbe92f7a9df783d"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","258ac6e66eac5ec6f8532bc241c37854"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechat-qcode.png","3f3e8316592673f0831006e08e91055d"],["/images/wechatpay.png","c906cd584fd9f2a91de8c73d825fab5f"],["/index.html","7818a37a3904873158cbcc8467eb426c"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/bootstrap.js","f176fc96755fc82fb09357586881ad3a"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/gitalk.min.js","79f23910d47a681e2cd6b6c7853d66c3"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/motion.js","49733d02ecd787bf770fe87c3b102d86"],["/js/src/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/js/src/post-details.js","979c941aae27c9828db21e1e4699e519"],["/js/src/schemes/pisces.js","ce87385d362ea3860733d13a1523a3b3"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/utils.js","63fe195009fa57955c727a9ba4102dfc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","05383bcd56cd08340d65d31921f8317e"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","87e9e93a3a76210f76ba67f06c7f229c"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a17bba2189ae53459b56d5d029282588"],["/lib/device/device.min.js","719c963c2ea823af63d9d27cad324477"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","05d02ac2ee2cee9ca6018253549e05b4"],["/lib/fancybox/source/fancybox_loading@2x.gif","d81866910128a921a2968454392aa7af"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","6c671000553854c1d5f57497a3442c35"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","33a8567332ec3a8bdc0a2a3768c5e11f"],["/lib/jquery_lazyload/README.html","346d090878be32248347a848ccdc8ae2"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/asuna_04.1024/texture_00.png","9abd93b36ba98782f3d96d7f5f16b769"],["/live2dw/assets/moc/asuna_04.1024/texture_01.png","ccf97da89881a647afbf6979323e31b1"],["/live2dw/assets/moc/asuna_04.1024/texture_02.png","969562bb47a1975dcb69e0ce9d66391f"],["/live2dw/assets/moc/asuna_04.1024/texture_03.png","280a9fb7d747aec3903a5a6137ed9c71"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/mstile-144x144.png","06766fa4bfcaef1f44ed17eeb3660826"],["/mstile-150x150.png","5cae137b99ee3946b76c2bb6bc39d53b"],["/mstile-310x150.png","461ef7cf9aa63e9482d5b455b929ee5f"],["/mstile-310x310.png","071eed3a6995b912319dd4c6c64932f5"],["/mstile-70x70.png","6328df8e9cd4bff1b1bfd87248e36f09"],["/safari-pinned-tab.svg","69e030f24cb01eb049fb2685d1e9e2fc"],["/tags/C/index.html","2806ab0b8a8750cf2c967ea154aebde8"],["/tags/NOIP/index.html","1a41da554e4167f856bcc6ef800cd873"],["/tags/PJOW/index.html","2c5508740e25202acdc3b3d60a25b84b"],["/tags/enc/index.html","67d80d77e915ea197dae519c13d92e73"],["/tags/index.html","f882e0e1302fffb24cbc781fb2671e7e"],["/tags/建站/index.html","eb45278725eb46ecc7119f1749f2dc46"],["/tags/总结/index.html","cd6f1dd00086e8fe76d33463a3193c6b"],["/tags/生日祝福/index.html","522d7d5b8d239a1935a2ea22026a829d"],["/tags/记录/index.html","ebcb6acef20afe6c1239b3fb921856fb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







