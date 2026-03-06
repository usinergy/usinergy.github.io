/**
 * @file store.js
 * @description Cart state management for modamood.
 */

import { BRAND } from './config.js';
import { PRODUCTS } from './data.js';
import { showToast, updateBadge } from './components.js';

/** @type {Array<{id:number, name:string, cat:string, price:number, img:string, size:string, qty:number}>} */
export let cart = [];

/** Currently selected category */
export let curCat = 'Tümü';

/** Checkout step: 'bag' | 'shipping' | 'payment' | 'done' */
export let ckStep = 'bag';

/** Selected shipping method */
export let selShip = 'Standart';

/** Selected payment method */
export let selPay = 'Kredi Kartı';

/** Selected installment count */
export let selInst = 1;

// --- Setters for mutable state ---
export function setCurCat(v) { curCat = v; }
export function setCkStep(v) { ckStep = v; }
export function setSelShip(v) { selShip = v; }
export function setSelPay(v) { selPay = v; }
export function setSelInst(v) { selInst = v; }

// --- Price helpers ---

/** Format price with currency symbol */
export function fmt(v) { return BRAND.currency + v.toFixed(2); }

/** Cart subtotal */
export function sub() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/** Shipping cost based on selection and subtotal */
export function shipCost() {
  if (selShip === 'Ekspres') return BRAND.expressShipping;
  return sub() >= BRAND.freeShippingMin ? 0 : BRAND.standardShipping;
}

/** Total = subtotal + shipping */
export function tot() { return sub() + shipCost(); }

// --- Cart actions ---

/**
 * Add a product to the cart by its ID.
 * @param {number} id
 */
export function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      cat: product.cat,
      price: product.price,
      img: product.img,
      size: product.size,
      qty: 1,
    });
  }

  updateBadge();
  showToast(product.name + ' sepete eklendi.');
}

/**
 * Update item quantity. Removes item if qty drops to 0.
 * @param {number} id
 * @param {number} delta
 */
export function updQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateBadge();
}

/** Clear all items from cart */
export function clearCart() {
  cart.length = 0;
  ckStep = 'bag';
  updateBadge();
}
