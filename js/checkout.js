/**
 * @file checkout.js
 * @description Checkout panel logic: steps, shipping, payment, order confirmation.
 */

import { BRAND, SHIPPING_OPTIONS, PAYMENT_OPTIONS, INSTALLMENTS } from './config.js';
import {
  cart, ckStep, selShip, selPay, selInst,
  setCkStep, setSelShip, setSelPay, setSelInst,
  fmt, sub, shipCost, tot, clearCart
} from './store.js';
import { updateBadge, showToast } from './components.js';

/** Render cart items list */
export function cartProductsHTML() {
  if (!cart.length) {
    return '<div class="empty-s">Sepetiniz boş. Koleksiyonumuza göz atarak alışverişe başlayabilirsiniz.</div>';
  }
  let h = '<div class="cart-list">';
  for (const c of cart) {
    h += `<div class="cart-item">
      <img class="cart-thumb" src="${c.img}" alt="${c.name}">
      <div>
        <h4>${c.name}</h4>
        <div class="muted" style="font-size:.82rem">${c.cat} · ${c.size}</div>
        <div class="qty-row">
          <button class="qty-btn" onclick="updQty(${c.id},-1)">−</button>
          <strong>${c.qty}</strong>
          <button class="qty-btn" onclick="updQty(${c.id},1)">+</button>
        </div>
      </div>
      <div class="line-price">${fmt(c.price * c.qty)}</div>
    </div>`;
  }
  return h + '</div>';
}

/** Render checkout panel with stepper + active section */
export function checkoutPanelHTML() {
  const steps = [
    { k: 'bag',      l: '1. Sepet' },
    { k: 'shipping', l: '2. Kargo' },
    { k: 'payment',  l: '3. Ödeme' },
    { k: 'done',     l: '4. Onay' },
  ];
  const order = steps.map(s => s.k);
  const ci = order.indexOf(ckStep);

  // Stepper
  let st = '<div class="stepper">';
  steps.forEach((s, i) => {
    let cls = 'step';
    if (i === ci) cls += ' active';
    else if (i < ci) cls += ' done';
    st += `<div class="${cls}">${s.l}</div>`;
  });
  st += '</div>';

  // Section 1: Bag
  const sc = sub() >= BRAND.freeShippingMin ? 0 : BRAND.standardShipping;
  const bag = `<div class="psec${ckStep === 'bag' ? ' active' : ''}">
    <div class="totals">
      <div class="trow"><span>Ara Toplam</span><span>${fmt(sub())}</span></div>
      <div class="trow"><span>Kargo</span><span>${sub() >= BRAND.freeShippingMin ? 'Ücretsiz' : fmt(BRAND.standardShipping)}</span></div>
      <div class="trow"><strong>Toplam</strong><strong>${fmt(sub() + sc)}</strong></div>
    </div>
    <div class="pnl-act">
      <button class="btn btn-p" ${cart.length ? '' : 'disabled'} onclick="goStep('shipping')">Kargo Bilgilerine Geç</button>
      <button class="btn btn-g" onclick="clearCart();refreshCart()">Sepeti Temizle</button>
    </div>
  </div>`;

  // Section 2: Shipping
  let shipOpts = '';
  SHIPPING_OPTIONS.forEach(opt => {
    const isFree = sub() >= BRAND.freeShippingMin && opt.id !== 'Ekspres';
    const cost = opt.id === 'Ekspres' ? fmt(BRAND.expressShipping) : (isFree ? 'Ücretsiz' : fmt(BRAND.standardShipping));
    shipOpts += `<div class="opt-card${selShip === opt.id ? ' sel' : ''}" onclick="pickShip('${opt.id}',this)">
      <div><strong>${opt.label}</strong><span>${opt.time} · ${cost}</span></div>
      <div class="radio"></div>
    </div>`;
  });

  const ship = `<div class="psec${ckStep === 'shipping' ? ' active' : ''}">
    <div class="field-g">
      <div class="field full"><label>E-posta</label><input id="ck-email" type="email" placeholder="anne@ornek.com"></div>
      <div class="field"><label>Ad</label><input id="ck-fn" placeholder="Ayşe"></div>
      <div class="field"><label>Soyad</label><input id="ck-ln" placeholder="Yılmaz"></div>
      <div class="field full"><label>Adres</label><input id="ck-addr" placeholder="Atatürk Cad. No:12 Daire:3"></div>
      <div class="field"><label>İl</label><input id="ck-city" placeholder="İstanbul"></div>
      <div class="field"><label>İlçe</label><input id="ck-dist" placeholder="Kadıköy"></div>
      <div class="field"><label>Posta Kodu</label><input id="ck-zip" placeholder="34710" inputmode="numeric"></div>
      <div class="field"><label>Telefon</label><input id="ck-phone" placeholder="0532 123 45 67" inputmode="tel"></div>
    </div>
    <h4 style="margin:14px 0 6px">Kargo Seçenekleri</h4>
    <div class="ship-opts">${shipOpts}</div>
    <div class="pnl-act">
      <button class="btn btn-p" onclick="goStep('payment')">Ödemeye Geç</button>
      <button class="btn btn-g" onclick="goStep('bag')">← Sepete Dön</button>
    </div>
  </div>`;

  // Section 3: Payment
  let instH = '';
  INSTALLMENTS.forEach(n => {
    instH += `<div class="inst-opt${selInst === n ? ' sel' : ''}" onclick="pickInst(${n})">
      <strong>${n === 1 ? 'Tek Çekim' : n + ' Taksit'}</strong>${fmt(tot() / n)} / ay
    </div>`;
  });

  let payOpts = '';
  PAYMENT_OPTIONS.forEach(opt => {
    payOpts += `<div class="opt-card${selPay === opt.id ? ' sel' : ''}" onclick="pickPay('${opt.id}',this)">
      <div><strong>${opt.label}</strong><span>${opt.desc}</span></div>
      <div class="radio"></div>
    </div>`;
  });

  const pay = `<div class="psec${ckStep === 'payment' ? ' active' : ''}">
    <div class="demo-note">⚠️ Ödeme tamamen simülasyondur. Gerçek bir ödeme işlemi yapılmaz, kart bilgileri kaydedilmez. iyzico arayüzü görsel amaçlıdır.</div>
    <div class="pay-badges">
      <span class="badge">iyzico Güvencesi</span><span class="badge">256-bit SSL</span>
      <span class="badge">Visa</span><span class="badge">Mastercard</span>
      <span class="badge">Troy</span><span class="badge">BKM Express</span>
    </div>
    <h4>Ödeme Yöntemi</h4>
    <div class="pay-opts">${payOpts}</div>
    <div class="iyzico-form">
      <div class="iyz-head">
        <div class="iyz-logo">iyzico</div>
        <div><strong>Güvenli Ödeme Formu</strong><div class="muted" style="font-size:.82rem">Demo — gerçek işlem yapılmaz</div></div>
      </div>
      <div class="field-g">
        <div class="field full"><label>Kart Numarası</label><input id="ck-card" placeholder="5528 7900 0000 0008" inputmode="numeric" maxlength="19"></div>
        <div class="field"><label>Son Kullanma</label><input id="ck-exp" placeholder="12/30" inputmode="numeric" maxlength="5"></div>
        <div class="field"><label>CVV / CVC</label><input id="ck-cvv" placeholder="123" inputmode="numeric" maxlength="4"></div>
        <div class="field full"><label>Kart Üzerindeki İsim</label><input id="ck-cname" placeholder="AYSE YILMAZ"></div>
      </div>
      <h4 style="margin:14px 0 6px">Taksit Seçenekleri</h4>
      <div class="inst-row">${instH}</div>
    </div>
    <div style="margin:10px 0">
      <label style="display:flex;gap:8px;align-items:start;cursor:pointer">
        <input type="checkbox" id="ck-terms" style="width:auto;margin-top:4px">
        <span class="muted" style="font-size:.84rem">
          <a href="#terms" style="text-decoration:underline" onclick="go('terms')">Mesafeli Satış Sözleşmesi</a>'ni ve
          <a href="#privacy" style="text-decoration:underline" onclick="go('privacy')">Gizlilik Politikası</a>'nı okudum, kabul ediyorum.
        </span>
      </label>
    </div>
    <div class="totals">
      <div class="trow"><span>Ara Toplam</span><span>${fmt(sub())}</span></div>
      <div class="trow"><span>Kargo</span><span>${fmt(shipCost())}</span></div>
      <div class="trow"><strong>Genel Toplam</strong><strong>${fmt(tot())}</strong></div>
      ${selInst > 1 ? `<div class="trow"><span>${selInst} Taksit</span><span>${fmt(tot() / selInst)} × ${selInst}</span></div>` : ''}
    </div>
    <div class="pnl-act">
      <button class="btn btn-a" onclick="fakePay()">Siparişi Tamamla (Demo)</button>
      <button class="btn btn-g" onclick="goStep('shipping')">← Kargo Bilgilerine Dön</button>
    </div>
  </div>`;

  // Section 4: Done
  const done = `<div class="psec${ckStep === 'done' ? ' active' : ''}">
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:3rem;margin-bottom:12px">✅</div>
      <h3>Demo Sipariş Onaylandı!</h3>
      <p class="muted">Sipariş numarası: <strong>#MM${String(Date.now()).slice(-6)}</strong></p>
      <p class="muted">Bu tamamen simüle edilmiş bir işlemdir. Gerçek bir sipariş oluşturulmamış, ödeme alınmamış ve kişisel veri kaydedilmemiştir.</p>
      <div class="actions" style="justify-content:center;margin-top:18px">
        <button class="btn btn-p" onclick="go('shop')">Alışverişe Devam Et</button>
        <button class="btn btn-g" onclick="go('home')">Ana Sayfaya Dön</button>
      </div>
    </div>
  </div>`;

  const sbox = '<div class="sbox show info" id="sbox">Ürün ekleyerek demo alışveriş deneyimini başlatabilirsiniz.</div>';

  return st + bag + ship + pay + done + sbox;
}

// --- Checkout actions ---

/** Refresh cart + checkout panel in DOM */
export function refreshCart() {
  const cp = document.getElementById('cartProducts');
  const ck = document.getElementById('ckPanel');
  if (cp) cp.innerHTML = cartProductsHTML();
  if (ck) ck.innerHTML = checkoutPanelHTML();
}

/** Navigate to a checkout step with validation */
export function goStep(step) {
  if (step === 'shipping' && !cart.length) return;
  if (step === 'payment') {
    const ids = ['ck-email', 'ck-fn', 'ck-ln', 'ck-addr', 'ck-city', 'ck-phone'];
    const allFilled = ids.every(id => {
      const el = document.getElementById(id);
      return el && el.value.trim();
    });
    if (!allFilled) {
      showSbox('Lütfen tüm kargo bilgilerini doldurun.', 'err');
      return;
    }
  }
  setCkStep(step);
  refreshCart();
}

/** Select shipping option */
export function pickShip(method, el) {
  setSelShip(method);
  document.querySelectorAll('.ship-opts .opt-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

/** Select payment option */
export function pickPay(method, el) {
  setSelPay(method);
  document.querySelectorAll('.pay-opts .opt-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

/** Select installment count */
export function pickInst(n) {
  setSelInst(n);
  refreshCart();
}

/** Simulate payment */
export function fakePay() {
  if (!cart.length) { showSbox('Sepetiniz boş.', 'err'); return; }
  const cb = document.getElementById('ck-terms');
  if (!cb || !cb.checked) { showSbox('Lütfen sözleşmeleri onaylayın.', 'err'); return; }
  setCkStep('done');
  cart.length = 0;
  updateBadge();
  refreshCart();
}

/** Show status box message */
export function showSbox(msg, type) {
  const el = document.getElementById('sbox');
  if (!el) return;
  el.textContent = msg;
  el.className = 'sbox show ' + type;
}
