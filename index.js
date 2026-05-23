import{a as p,S as d,i as f}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a={key:"55964404-2a93521496c9cce28db3b5c43",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function m(s){return a.q=s,p.get("https://pixabay.com/api/",{params:a}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`<li class="gallery-item">
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
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){l.innerHTML=""}function b(){u.classList.remove("is-hidden")}function L(){u.classList.add("is-hidden")}const v=document.querySelector('input[name="search-text"]'),c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();b(),m(o).then(t=>{if(t.hits.length===0)return f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});g(),h(t.hits)}).catch(t=>console.log(t)).finally(()=>L()),c.reset()});
//# sourceMappingURL=index.js.map
