import{a as e,c as t,i as n,n as r,o as i,r as a,s as o}from"./cart.DgfxsXkZ.js";import{n as s,t as c}from"./utils.C5DRjOeR.js";var l=document.getElementById(`cart-drawer-overlay`),u=document.getElementById(`cart-drawer`),d=document.getElementById(`cart-close-btn`),f=document.getElementById(`cart-empty-state`),p=document.getElementById(`cart-items`),m=document.getElementById(`cart-footer`),h=document.getElementById(`cart-total-qty`),g=document.getElementById(`cart-qty-label`),_=document.getElementById(`cart-subtotal`),v=document.getElementById(`cart-shipping`),y=document.getElementById(`cart-total`),b=document.getElementById(`cart-whatsapp-btn`),x=()=>{l?.classList.remove(`opacity-0`,`pointer-events-none`),u?.classList.remove(`translate-x-full`),document.body.style.overflow=`hidden`},S=()=>{l?.classList.add(`opacity-0`,`pointer-events-none`),u?.classList.add(`translate-x-full`),document.body.style.overflow=``},C=()=>{let s=r(),l=a(),u=n(),d=i(),b=e();if(h&&(h.textContent=String(l)),g&&(g.textContent=l===1?`producto`:`productos`),_&&(_.textContent=c(u)),v&&(v.textContent=d===0?`Gratis`:c(d),v.className=d===0?`text-sm font-semibold text-[#B8C6B2]`:`text-sm font-semibold text-[#332C29]`),y&&(y.textContent=c(b)),s.length===0){f?.classList.remove(`hidden`),p?.classList.add(`hidden`),m?.classList.add(`hidden`);return}f?.classList.add(`hidden`),p?.classList.remove(`hidden`),m?.classList.remove(`hidden`),p&&(p.innerHTML=s.map(({product:e,quantity:t})=>`
        <div class="flex gap-3.5 pb-4 border-b border-[#E6DDD6] last:border-0" data-item-id="${e.id}">
          <div class="w-[72px] h-[88px] rounded-[10px] overflow-hidden bg-[#F9F5EF] flex-shrink-0">
            <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-[#332C29] leading-tight mb-0.5 truncate">${e.name}</p>
            <p class="text-xs text-[#8C817B] mb-3">${c(e.price)}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center border border-[#E6DDD6] rounded-full">
                <button
                  class="drawer-qty-minus w-7 h-7 flex items-center justify-center text-[#665C57] hover:text-[#332C29] transition-colors"
                  data-id="${e.id}"
                  data-qty="${t}"
                  aria-label="Disminuir cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <span class="w-7 text-center text-xs font-medium text-[#332C29]">${t}</span>
                <button
                  class="drawer-qty-plus w-7 h-7 flex items-center justify-center text-[#665C57] hover:text-[#332C29] transition-colors"
                  data-id="${e.id}"
                  data-qty="${t}"
                  aria-label="Aumentar cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
              <button
                class="drawer-remove text-[#8C817B] hover:text-[#332C29] transition-colors"
                data-id="${e.id}"
                aria-label="Eliminar producto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join(``),p.querySelectorAll(`.drawer-qty-minus`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.id??``,r=parseInt(e.dataset.qty??`1`,10);t(n,r-1)})}),p.querySelectorAll(`.drawer-qty-plus`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.id??``,r=parseInt(e.dataset.qty??`1`,10);t(n,r+1)})}),p.querySelectorAll(`.drawer-remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id??``;o(t)})}))};b?.addEventListener(`click`,()=>{let e=r();if(e.length===0)return;let t=s(e);window.open(t,`_blank`,`noopener,noreferrer`)}),d?.addEventListener(`click`,S),l?.addEventListener(`click`,S),window.addEventListener(`cart-open`,x),window.addEventListener(`cart-updated`,C),C();