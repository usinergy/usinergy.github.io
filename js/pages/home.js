/**
 * @file pages/home.js
 * @description Home page with hero, trust badges, and featured products.
 */

import { PRODUCTS } from '../data.js';
import { pcard } from '../components.js';
import { addToCart } from '../store.js';
import { showToast } from '../components.js';

/** Featured product indices */
const FEATURED_INDICES = [0, 5, 8, 12, 15, 19, 22, 24];

export function homeHTML() {
  const featured = FEATURED_INDICES
    .filter(i => PRODUCTS[i])
    .map(i => PRODUCTS[i]);
  const cards = featured.map(p => pcard(p)).join('');

  return `
    <section class="hero">
      <div class="card hero-txt">
        <div class="eyebrow">Özenle Seçilmiş Bebek Modası</div>
        <h1>Minik bedenler için büyük koleksiyon.</h1>
        <p>Türkiye’nin en sevilen online bebek giyim mağazasına hoş geldiniz. Yumuşak kumaşlar, pastel renkler ve 8 farklı kategoride yüzlerce ürün sizi bekliyor. Güvenli iyzico ödeme altyapısı ile alışveriş yapın.</p>
        <div class="actions">
          <button class="btn btn-p" onclick="go('shop')">Koleksiyonu İncele</button>
          <button class="btn btn-g" onclick="quickBundle()">Başlangıç Paketi Ekle</button>
        </div>
      </div>
      <div class="card hero-img">
        <img src="https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Bebek kıyafetleri koleksiyonu">
        <div class="hero-ov">
          <strong>İlkbahar Kapsül Koleksiyonu</strong>
          <p>Pastel nötr tonlar, sıcak örgüler ve günlük setler.</p>
        </div>
      </div>
    </section>
    <section class="trust">
      <div class="trust-c"><small>Kargo</small><strong>150₺ üzeri ücretsiz</strong></div>
      <div class="trust-c"><small>Ödeme</small><strong>iyzico güvencesi</strong></div>
      <div class="trust-c"><small>İade</small><strong>14 gün koşulsuz</strong></div>
      <div class="trust-c"><small>Taksit</small><strong>9 taksit imkanı</strong></div>
    </section>
    <div style="margin-bottom:14px">
      <h2>Öne Çıkan Ürünler</h2>
      <p class="muted">Her kategoriden el ile seçilmiş en popüler ürünler.</p>
    </div>
    <div class="pgrid">${cards}</div>
    <div style="text-align:center;padding:20px 0">
      <button class="btn btn-a" onclick="go('shop')">Tüm Koleksiyonu Gör →</button>
    </div>
  `;
}

/** Add a starter bundle to cart */
export function quickBundle() {
  addToCart(1);
  addToCart(5);
  showToast('Başlangıç paketi sepete eklendi!');
}
