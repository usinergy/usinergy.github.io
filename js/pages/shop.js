/**
 * @file pages/shop.js
 * @description Shop page with category filters and product grid.
 */

import { CATS, PRODUCTS } from '../data.js';
import { curCat, setCurCat } from '../store.js';
import { pcard } from '../components.js';
import { render } from '../router.js';

export function shopHTML() {
  const items = curCat === 'Tümü'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === curCat);

  const pills = CATS.map((cat, i) =>
    `<button class="cat-pill${cat === curCat ? ' active' : ''}" onclick="filterCat(${i})">${cat}</button>`
  ).join('');

  const cards = items.length
    ? items.map(p => pcard(p)).join('')
    : '<div class="empty-s" style="grid-column:1/-1">Bu kategoride ürün bulunamadı.</div>';

  return `
    <div class="page-content">
      <h2>Koleksiyon</h2>
      <p class="muted">${PRODUCTS.length} ürün · ${CATS.length - 1} kategori · Gerçek stok fotoğrafları ile demo mağaza.</p>
      <div class="cats">${pills}</div>
      <div class="pgrid">${cards}</div>
    </div>
  `;
}

/**
 * Filter by category (by index into CATS array).
 * @param {number} idx
 */
export function filterCat(idx) {
  setCurCat(CATS[idx] || 'Tümü');
  if (location.hash === '#shop') render('shop');
}
