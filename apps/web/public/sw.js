if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const f=e=>c(e,r),d={module:{uri:r},exports:n,require:f};s[r]=Promise.all(i.map((e=>d[e]||f(e)))).then((e=>(a(...e),n)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7256325bccd7ada82e83e5e5bf365e4f"},{url:"/_next/static/bbYiKdjVcd1rRQ4ffrpuV/_buildManifest.js",revision:"24150d8ca612ef5c2ffa8c58f6f79be4"},{url:"/_next/static/bbYiKdjVcd1rRQ4ffrpuV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1486-55a2db2dd61a54cb.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/1586-c61042359689d2e7.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/1711-d39aca03ec46d920.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/1738-11b18d0e9bf2c2d0.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/174688e1-faabd33301ec663e.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/204-ee1a5e8029d20625.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/2171-ac60a023c097c5d0.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/2457-1777e63e61c8dc4f.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/2567-e46b886308932edb.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/2843-e1544e08b6c9421e.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/3298-56695c23aa25e1a5.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/3751-044b8688a0b65791.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/3977.9c1da067f0e158ee.js",revision:"9c1da067f0e158ee"},{url:"/_next/static/chunks/404.39b485d46e3def06.js",revision:"39b485d46e3def06"},{url:"/_next/static/chunks/4073-c066003fc54de7da.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/433-e7bbe63a2b5b9cd4.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/4758-f214f7906caf6ce9.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/5010-e42fe90464bccf99.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/5073-b306677e1dac776e.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/5404-8dc521b35a07a14f.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/5522-bb64b68604915759.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/5649.335f5130ba56e07c.js",revision:"335f5130ba56e07c"},{url:"/_next/static/chunks/6376-27305f639f9ebcfa.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/6474-1fb2ee55ffcb3b79.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/648-8792b64219c17b8f.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/6499.4a03a0fc5fe8b18d.js",revision:"4a03a0fc5fe8b18d"},{url:"/_next/static/chunks/6924-6657c1dfd5534cb9.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/7068-8f0ad27b3cf8a43b.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/7087-ed476430d4805371.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/755-08c09d695b65fc6a.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/7735.2661439298a530b1.js",revision:"2661439298a530b1"},{url:"/_next/static/chunks/8040-9be69f48a68f7b7d.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/8265.58d66fe634498d33.js",revision:"58d66fe634498d33"},{url:"/_next/static/chunks/873-d6cb9b78b2f514a7.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/8850-3481e997887b4af2.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/9281-9d31e4f6268811ba.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/9341-8fb4c86da9a36ec5.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/9658-645cc7d447f2983c.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/9832.838467573a34d1c7.js",revision:"838467573a34d1c7"},{url:"/_next/static/chunks/9949-c0daa51749a63fa6.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/9e33a154-83c20c71ca4f4230.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/_not-found-7cf939170954a7cd.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/character/%5Bid%5D/page-52cbfcadbedf9660.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/character/%5Bid%5D/stories/page-ebf9c1f7a1cb5826.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/character/%5Bid%5D/story/%5BstoryId%5D/page-95acfcee7a38feb1.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/characters/page-4484818a522be704.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/chats/page-06822854fcba8902.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/crystal/terms/page-fce239b6ce767ba8.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/crystals/page-43b7faa674163fd5.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/dmca/page-1bcf67d72648ac4d.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/global-error-bfdb251288211be4.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/image/%5Bid%5D/page-107601e1a9705412.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/images/page-a3c23e08613a0390.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/layout-e569cf7a7148a3b9.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/loading-1a58e16b79226303.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/models/page-0359f49c2b28bf6d.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/my-characters/create/page-8faaedb6e79c7851.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/my-characters/page-028fc3192de53954.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/my-personas/page-31253464cf43ecac.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/my/page-247cd3bed49d54ae.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/page-a5fa66a97e5ae7aa.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/safety/page-37cc51aab6e73b8a.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/search/page-ec3477114568cea6.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/sign-in/page-99db32e2b334e0c1.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/app/stories/page-a3aeb1e19f0575d9.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/e5c2b562-0bf1a69cc43bf9fb.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/framework-af9b1d45774ad36d.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/main-app-b480f28cb93d88ad.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/main-fb17a78bbab524da.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/pages/_app-ba325febef9e5857.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/pages/_error-3cb3ad2da4ff4990.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d246afa514709906.js",revision:"bbYiKdjVcd1rRQ4ffrpuV"},{url:"/_next/static/css/27533bd8096db9e2.css",revision:"27533bd8096db9e2"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/5dfb1d0134f1564c-s.p.otf",revision:"8088caee968a1baa9e8ff0ed9cd84b98"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/circles.svg",revision:"2517f9eb2aa231a483a2b0c27da9d454"},{url:"/locales/af.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/ar.json",revision:"ae1670a124757a6956e72b289f825da3"},{url:"/locales/ca.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/cs.json",revision:"e5fd9d7d96bfb3aefc7c134042ff1081"},{url:"/locales/da.json",revision:"b6bf16b8c987db5451e3f4b5b73cb337"},{url:"/locales/de.json",revision:"4ff04b9ca2465df8ed1ae98130d4a926"},{url:"/locales/el.json",revision:"11467a2a34c7fe961596e6402f23f674"},{url:"/locales/en.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/es.json",revision:"eaf75352c3707e2a75f2e941ae785a8d"},{url:"/locales/fi.json",revision:"a64788aa3c10d3ae4b72d35d35982688"},{url:"/locales/fr.json",revision:"8dbfeb2c212c22e4fb8e281d014de866"},{url:"/locales/he.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/hi.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/hu.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/it.json",revision:"82a7604ac856bde696bc401a479ec9fe"},{url:"/locales/ja.json",revision:"339412d77dec42f2ce6e10ac333f5e80"},{url:"/locales/ko.json",revision:"287fe67350206ca5227b3f3bbbf1a8a9"},{url:"/locales/nl.json",revision:"bf8d158de32a223f8e326f0ae23e6901"},{url:"/locales/no.json",revision:"9790a1ccc0a14dbd4b87f81eb374de3f"},{url:"/locales/pl.json",revision:"f85f9f7fd2892c407ab6989d9cd5fe3a"},{url:"/locales/pt.json",revision:"6b6f8986a781f706e14ad2546dccb086"},{url:"/locales/ro.json",revision:"f4d8c8a8e6f442237c1ee23f77ba8b28"},{url:"/locales/ru.json",revision:"3babdeff2cb164453be1461df3f79283"},{url:"/locales/source/en.json",revision:"f8e96a803b76e6c1e79fe30f08865c50"},{url:"/locales/sr.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/sv.json",revision:"67e2603dced67b2aa97e7bc6e30a7640"},{url:"/locales/tr.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/uk.json",revision:"4b3ecf76beca4cf22c534b00cd00ede0"},{url:"/locales/vi.json",revision:"8c46f7c44bdf31bb344ed361ce671b5f"},{url:"/locales/zh.json",revision:"b3e560198a76d9d1ba64b4bb2339f757"},{url:"/models/claude.png",revision:"3e6e8330027dc9369c471b634cfd28b1"},{url:"/models/google.png",revision:"886f3b5d416d9e0ceb1c587c50797dca"},{url:"/models/meta.png",revision:"55e27bfec4c68cbd5b21bb0252678774"},{url:"/models/mistral.png",revision:"1a54eaf9c7ff9879ae5d032aa0e77a3d"},{url:"/models/openai.png",revision:"9da0c2d23c2b268a1071ce3b2011c462"},{url:"/models/perplexity.png",revision:"e4434a95089af43db6bd32f7ca4584d0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.jpg",revision:"98b161f61316f31901ff7a3266b144d5"},{url:"/orp.svg",revision:"07332768de5358184d92c5a977393e84"},{url:"/privacy.html",revision:"0ecec27f9cd4c82812480272940e0020"},{url:"/pwa/icon-192x192.png",revision:"859e7d6fe5a01910373047b0fed65803"},{url:"/pwa/icon-256x256.png",revision:"aedf90f2f2f95573340e21b912bc9537"},{url:"/pwa/icon-384x384.png",revision:"086fa31184c5a778d2b81d2cb8488710"},{url:"/pwa/icon-512x512.png",revision:"2c63d2935cb270ec246c4fc2f636255e"},{url:"/pwa/ipad_splash.png",revision:"7655d6918b8ff4e764e6c1da197d5c20"},{url:"/pwa/ipadpro1_splash.png",revision:"f955f1c6cc06ffebc034bb3e06301d99"},{url:"/pwa/ipadpro2_splash.png",revision:"f40870d0ed9edf36196329564abf82b1"},{url:"/pwa/ipadpro3_splash.png",revision:"3fcf0e196e70b273d300650c88cf981f"},{url:"/pwa/iphone5_splash.png",revision:"1f94f04b3902a30a50176512ab25e0c4"},{url:"/pwa/iphone6_splash.png",revision:"afabcb45720d56730ab3d1e92796df9f"},{url:"/pwa/iphoneplus_splash.png",revision:"c7e1a49efe949e8dd38e68e7603ea3f8"},{url:"/pwa/iphonex_splash.png",revision:"42177ac18901b678a6aecbc5d6ff5540"},{url:"/pwa/iphonexr_splash.png",revision:"8b2fffae58a4c3445dfee23e85d5a379"},{url:"/pwa/iphonexsmax_splash.png",revision:"906544cebcb4a262c40205f2d37653c6"},{url:"/robots.txt",revision:"ea3a379c50c3bfc7b4965c6119cf0bff"},{url:"/shop/crystal.png",revision:"b8c4b1daffa4c8cdb824737494ba5124"},{url:"/shop/orp+.jpg",revision:"936479aa319462038eb84b9e17ef7cd1"},{url:"/shop/tier1.png",revision:"176f821f15c960ef3350708e755212ae"},{url:"/shop/tier2.png",revision:"126fc5a824f2a77e9916d08a43075b85"},{url:"/shop/tier3.png",revision:"0ee1ff597285e2f7e587016f52dd6438"},{url:"/shop/tier4.png",revision:"5cd8ad170a688ddd9e93064040ecd9b0"},{url:"/shop/tier5.png",revision:"373b07998284f2fe6fd6379b77eb1856"},{url:"/shop/tier6.png",revision:"18ce4f0c1c2f0b5aa67003cfb009ed36"},{url:"/terms.html",revision:"e25e377b1ece6dec65c0af3b3748ffc9"},{url:"/turborepo.svg",revision:"3d86b98e3d7c252c00dad343f37e6191"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
