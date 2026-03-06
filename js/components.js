/**
 * @file components.js
 * @description Shared UI components: product card, toast, badge.
 */

import { fmt } from './store.js';

/**
 * Render a product card HTML string.
 * @param {import('./data.js').Product} p
 * @returns {string}
 */
export function pcard(p) {
  return `<article class="pcard">
    <img class="pi" src="${p.img}" alt="${p.name}" loading="lazy">
    <div class="pbody">
      <div class="ptop">
        <div>
          <h3>${p.name}</h3>
          <div class="muted" style="font-size:.86rem">${p.desc}</div>
        </div>
        <span class="tag">${p.tag}</span>
      </div>
      <div class="pmeta">
        <span>${p.size}</span>
        <span>${p.note}</span>
        <span>${p.cat}</span>
      </div>
      <div class="pprice">
        <div class="price">${fmt(p.price)}</div>
        <div class="rating">★ ${p.rating} · ${p.reviews} yorum</div>
      </div>
      <div class="pact">
        <span class="muted">Demo ürün</span>
        <button class="btn btn-p" onclick="addToCart(${p.id})">Sepete Ekle</button>
      </div>
    </div>
  </article>`;
}

/**
 * Show a toast notification.
 * @param {string} msg
 */
export function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 300);
  }, 2200);
}

/** Update the cart badge count in the header. */
export function updateBadge() {
  const el = document.getElementById('cartBadge');
  if (!el) return;
  const n = window.__mmCart ? window.__mmCart.reduce((s, c) => s + c.qty, 0) : 0;
  el.textContent = n;
}
