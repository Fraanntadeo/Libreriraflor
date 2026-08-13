import{t as e}from"./cart.DgfxsXkZ.js";document.querySelectorAll(`.add-to-cart-btn`).forEach(t=>{t.addEventListener(`click`,n=>{if(n.stopPropagation(),t.disabled)return;let r=t.dataset.product;if(!r)return;let i=JSON.parse(r);if(e(i,1),window.dispatchEvent(new CustomEvent(`cart-open`)),t.dataset.variant===`page`){let e=t.innerHTML,n=[`bg-[#8E6F62]`,`hover:bg-[#6F554A]`];t.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Agregado al carrito
        `,t.classList.remove(...n),t.classList.add(`bg-[#B8C6B2]`),setTimeout(()=>{t.innerHTML=e,t.classList.add(...n),t.classList.remove(`bg-[#B8C6B2]`)},2e3)}})});