/**
 * @file pages/cart.js
 * @description Cart page combining products list and checkout panel.
 */

import { setCkStep } from '../store.js';
import { cartProductsHTML, checkoutPanelHTML } from '../checkout.js';

export function cartPageHTML() {
  setCkStep('bag');
  return `
    <div class="page-content">
      <h2>Sepetiniz &amp; Ödeme</h2>
      <div class="lay">
        <div id="cartProducts">${cartProductsHTML()}</div>
        <aside class="ckpanel" id="ckPanel">${checkoutPanelHTML()}</aside>
      </div>
    </div>
  `;
}
