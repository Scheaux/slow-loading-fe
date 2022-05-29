function l(){import("data:text/javascript,")}const a=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};a();class i{init(){this.activateSW(),this.fetchSomeData()}activateSW(){"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this.sw=await navigator.serviceWorker.register("sw.js")})}async fetchSomeData(){try{const t=await fetch("https://slow-loading-be.herokuapp.com/data");this.response=await t.json(),this.renderNews()}catch(t){console.warn(t),i.showLoadingError()}}renderNews(){if(!this.response)return;const t=document.getElementById("news-posts");t.innerHTML="",this.response.forEach(o=>{t.innerHTML+=`
        <div class="news_post">
          <div class="news_post_header">${o.name}</div>
          <div class="flex">
            <div class="news_post_image_a"></div>
            <div>
              <div class="news_post_description">
                ${o.description}
              </div>
            </div>
          </div>
        </div>
      `})}static showLoadingError(){document.getElementById("loading-error-modal").classList.remove("hidden")}}const c=new i;c.init();export{l as __vite_legacy_guard};
