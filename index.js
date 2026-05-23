import{a as f,S as m,i}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l={key:"55964404-2a93521496c9cce28db3b5c43",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(s){return{...l},f.get("https://pixabay.com/api/",{params:l}).then(o=>o.data)}const p=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`<li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}"/>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${t.likes}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${t.views}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${t.comments}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${t.downloads}</span>
                </p>
            </div>
        </a>
    </li>`).join("");p.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){p.innerHTML=""}function L(){d.classList.remove("is-hidden")}function a(){d.classList.add("is-hidden")}const u=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');a();u.addEventListener("submit",s=>{if(s.preventDefault(),w.value.trim()===""){i.error({message:"Please enter a search query!",position:"topRight"});return}b(),L(),h().then(t=>{if(a(),t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),u.reset()}).catch(t=>{a(),i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(t)})});
//# sourceMappingURL=index.js.map
