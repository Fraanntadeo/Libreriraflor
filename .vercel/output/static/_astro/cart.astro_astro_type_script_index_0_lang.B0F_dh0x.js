import{a as e,c as t,i as n,n as r,o as i,r as a,s as o}from"./cart.DgfxsXkZ.js";import{n as s,t as c}from"./utils.C5DRjOeR.js";var l=document.getElementById(`cart-empty`),u=document.getElementById(`cart-content`),d=document.getElementById(`cart-items-list`),f=document.getElementById(`summary-qty`),p=document.getElementById(`summary-subtotal`),m=document.getElementById(`summary-shipping`),h=document.getElementById(`shipping-notice`),g=document.getElementById(`summary-total`),_=document.getElementById(`page-whatsapp-btn`),v=()=>{let t=r(),o=a(),s=n(),_=i(),v=e();if(t.length===0){l?.classList.remove(`hidden`),u?.classList.add(`hidden`);return}l?.classList.add(`hidden`),u?.classList.remove(`hidden`),f&&(f.textContent=String(o)),p&&(p.textContent=c(s)),g&&(g.textContent=c(v)),m&&(m.textContent=_===0?`Gratis`:c(_),m.className=_===0?`text-[#B8C6B2] font-semibold`:`text-[#332C29] font-semibold`),h&&(s<3e3?(h.textContent=`Te faltan ${c(3e3-s)} para el envío gratis`,h.classList.remove(`hidden`)):h.classList.add(`hidden`)),d&&(d.innerHTML=t.map(({product:e,quantity:t})=>`
        <div class="flex gap-5 p-4 bg-[#FFFDFC] border border-[#E6DDD6] rounded-[16px]" data-item-id="${e.id}">
          <a href="/product/${e.id}" class="w-24 h-28 rounded-[10px] overflow-hidden bg-[#F9F5EF] flex-shrink-0 block">
            <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" loading="lazy" />
          </a>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-semibold text-[#332C29] text-sm leading-snug">${e.name}</h3>
              <button
                class="page-remove text-[#8C817B] hover:text-[#332C29] transition-colors ml-2 flex-shrink-0"
                data-id="${e.id}"
                aria-label="Eliminar ${e.name}"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            <p class="text-xs text-[#8C817B] mb-4 capitalize">${e.category}</p>
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="inline-flex items-center border border-[#E6DDD6] rounded-full overflow-hidden">
                <button
                  class="page-qty-minus w-8 h-8 flex items-center justify-center text-[#665C57] hover:bg-[#F9F5EF] transition-colors"
                  data-id="${e.id}"
                  data-qty="${t}"
                  aria-label="Disminuir cantidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <span class="w-8 text-center text-xs font-medium text-[#332C29]">${t}</span>
                <button
                  class="page-qty-plus w-8 h-8 flex items-center justify-center text-[#665C57] hover:bg-[#F9F5EF] transition-colors"
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
              <span class="font-semibold text-[#332C29]">${c(e.price*t)}</span>
            </div>
          </div>
        </div>
      `).join(``),y())},y=()=>{d?.querySelectorAll(`.page-remove`).forEach(e=>{e.addEventListener(`click`,()=>o(e.dataset.id??``))}),d?.querySelectorAll(`.page-qty-minus`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.id??``,r=parseInt(e.dataset.qty??`1`,10);t(n,r-1)})}),d?.querySelectorAll(`.page-qty-plus`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.id??``,r=parseInt(e.dataset.qty??`1`,10);t(n,r+1)})})};_?.addEventListener(`click`,()=>{let e=r();e.length!==0&&window.open(s(e),`_blank`,`noopener,noreferrer`)}),v(),window.addEventListener(`cart-updated`,v);