/**
 * @file app.js
 * @description Application entry point. Imports all modules and exposes
 *              global handlers required by inline onclick attributes.
 *
 * Architecture: ES modules with hash-based SPA routing.
 * All interactive functions are exposed on `window` for onclick compatibility.
 */

import { go, initRouter } from './router.js';
import { cart, addToCart, updQty, clearCart } from './store.js';
import { showToast, updateBadge } from './components.js';
import { filterCat } from './pages/shop.js';
import { quickBundle } from './pages/home.js';
import {
  refreshCart, goStep, pickShip, pickPay, pickInst, fakePay
} from './checkout.js';

// ── Expose cart reference for badge updates ──
window.__mmCart = cart;

// ── Expose functions to global scope for inline onclick handlers ──
window.go         = go;
window.addToCart   = addToCart;
window.updQty      = updQty;
window.clearCart    = clearCart;
window.showToast    = showToast;
window.filterCat    = filterCat;
window.quickBundle  = quickBundle;
window.refreshCart  = refreshCart;
window.goStep       = goStep;
window.pickShip     = pickShip;
window.pickPay      = pickPay;
window.pickInst     = pickInst;
window.fakePay      = fakePay;

// ── Initialize ──
initRouter();

// Re-export updateBadge for other modules
updateBadge();
