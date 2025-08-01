import{a as u,S as f,i as n}from"./assets/vendor-rOMtvQ2t.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="51396557-8635804b4a1d4712ba232ab38";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".loader-text");let h=new f(".gallery a");function g(s){const o=s.map(t=>`
      <li>
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div>
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden"),d.classList.remove("hidden")}function b(){l.classList.add("hidden"),d.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search term!"});return}L(),w();try{const t=await y(o);t.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(t.hits)}catch{n.error({message:"Something went wrong. Try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map
