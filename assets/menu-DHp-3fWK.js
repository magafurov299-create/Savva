import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,s as p,t as m,u as h,v as g}from"./chrome-D0DKKoiH.js";function _(e){let t=o(e);document.querySelector(`[data-menu-title]`).textContent=t.menuPage.title,document.querySelector(`[data-menu-subtitle]`).textContent=t.menuPage.subtitle,document.querySelector(`[data-menu-rating]`).textContent=`${g.rating} · ${g.reviewCount.toLocaleString()} ${e===`ar`?`تقييم`:`reviews`}`,document.querySelector(`[data-menu-hours]`).textContent=e===`ar`?g.hours_ar:g.hours_en}function v(t){let n=o(t),r=document.querySelector(`[data-filter-track]`);r.innerHTML=`<button class="filter-pill is-active" data-filter="all">${n.menuPage.all}</button>`+e.map(e=>`<button class="filter-pill" data-filter="${e.id}">${c(e,t)}</button>`).join(``)}function y(e,t){let n=o(t),{src:s,srcset:c}=r(e.slot);return`
    <article class="menu-item-card reveal">
      <div class="menu-item-thumb">
        <img src="${s}" srcset="${c}" sizes="(max-width:640px) 50vw, (max-width:980px) 33vw, 25vw" alt="${i(e,t)}" loading="lazy">
        ${e.popular?`<span class="menu-item-badge">${n.menuPage.popular}</span>`:``}
      </div>
      <div class="menu-item-body">
        <div class="menu-item-name">${i(e,t)}</div>
        <div class="menu-item-row">
          <span class="menu-item-price">${f(e.price)}</span>
          <a class="menu-item-order" href="${a(t,i(e,t))}" target="_blank" rel="noopener" aria-label="${n.menuPage.orderItem} ${i(e,t)}">${p.arrow}</a>
        </div>
      </div>
    </article>`}function b(t){let n=document.querySelector(`[data-menu-categories]`);n.innerHTML=e.map(e=>`
      <div class="menu-category" id="${e.id}">
        <div class="container">
          <div class="section-head"><h2>${c(e,t)}</h2></div>
          <div class="menu-item-grid">${e.items.map(e=>y(e,t)).join(``)}</div>
        </div>
      </div>`).join(``)}function x(t){let n=document.querySelector(`[data-filter-track]`),r=Array.from(n.querySelectorAll(`.filter-pill`)),i=e.map(e=>document.getElementById(e.id)).filter(Boolean);if(r.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.filter;if(t===`all`){window.scrollTo({top:0,behavior:`smooth`});return}let n=document.getElementById(t);if(n){let e=n.getBoundingClientRect().top+window.pageYOffset-84;window.scrollTo({top:e,behavior:`smooth`})}})}),`IntersectionObserver`in window){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&r.forEach(t=>t.classList.toggle(`is-active`,t.dataset.filter===e.target.id))})},{rootMargin:`-40% 0px -55% 0px`,threshold:0});i.forEach(t=>e.observe(t))}}function S(e){let t=o(e),n=document.querySelector(`[data-sticky-order]`);n.querySelector(`a`).textContent=t.menuPage.stickyOrder,n.querySelector(`a`).href=a(e)}function C(e){n(e),u(e),_(e),v(e),b(e),S(e),m(e),d(),x(e),requestAnimationFrame(t)}var w=h();C(w),s(),document.querySelectorAll(`[data-lang-toggle]`).forEach(e=>{e.addEventListener(`click`,()=>{w=w===`en`?`ar`:`en`,l(w),C(w)})});