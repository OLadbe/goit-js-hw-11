import{a as d,S as f,i}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const m={key:"55964404-2a93521496c9cce28db3b5c43",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(s){const r={...m};return r.q=s,d.get("https://pixabay.com/api/",{params:r}).then(e=>e.data)}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const r=s.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}"/>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${e.likes}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${e.views}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${e.comments}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${e.downloads}</span>
                </p>
            </div>
        </a>
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){u.innerHTML=""}function L(){p.classList.remove("is-hidden")}function a(){p.classList.add("is-hidden")}const l=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');a();l.addEventListener("submit",s=>{s.preventDefault();const r=w.value.trim();if(r===""){i.error({message:"Please enter a search query!",position:"topRight"});return}b(),L(),h(r).then(e=>{if(a(),e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),l.reset()}).catch(e=>{a(),i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(e)})});
//# sourceMappingURL=index.js.map
