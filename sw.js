if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),f={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-legacy.fef682e2.js",revision:null},{url:"assets/index.33832af2.css",revision:null},{url:"assets/index.a4050eb5.js",revision:null},{url:"assets/polyfills-legacy.63222cc2.js",revision:null},{url:"index.html",revision:"841743545e280eb449e474d1f69d8f04"},{url:"registerSW.js",revision:"f52b5a3eb2f71016648d5f4b88958506"},{url:"manifest.webmanifest",revision:"56790f5efbbb3e0b259587897a244cb9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
