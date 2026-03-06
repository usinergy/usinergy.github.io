/**
 * @file router.js
 * @description Hash-based SPA router for modamood.
 */

import { homeHTML } from './pages/home.js';
import { shopHTML } from './pages/shop.js';
import { cartPageHTML } from './pages/cart.js';
import { aboutHTML, faqHTML, contactHTML, shippingHTML, returnsHTML } from './pages/info.js';
import { privacyHTML, kvkkHTML, termsHTML } from './pages/legal.js';
import { updateBadge } from './components.js';

/** Page registry mapping route keys to render functions */
const PAGES = {
  home:     homeHTML,
  shop:     shopHTML,
  cart:     cartPageHTML,
  about:    aboutHTML,
  faq:      faqHTML,
  contact:  contactHTML,
  shipping: shippingHTML,
  returns:  returnsHTML,
  privacy:  privacyHTML,
  kvkk:     kvkkHTML,
  terms:    termsHTML,
};

/**
 * Navigate to a page.
 * @param {string} page — route key
 */
export function go(page) {
  location.hash = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const nav = document.querySelector('nav');
  if (nav) nav.classList.remove('open');
  render(page);
}

/**
 * Render a page into #app.
 * @param {string} page
 */
export function render(page) {
  const app = document.getElementById('app');
  if (!app) return;

  // Update active nav link
  document.querySelectorAll('nav a').forEach(link => {
    const onclick = link.getAttribute('onclick') || '';
    link.classList.toggle('active', onclick.includes("'" + page + "'"));
  });

  // Render page content
  const renderFn = PAGES[page] || PAGES.home;
  app.innerHTML = renderFn();
  updateBadge();
}

/** Initialize router: listen for hash changes and render initial page */
export function initRouter() {
  const getPage = () => location.hash.slice(1) || 'home';

  window.addEventListener('hashchange', () => render(getPage()));
  window.addEventListener('DOMContentLoaded', () => render(getPage()));

  // If script loads after DOM ready
  if (document.readyState !== 'loading') {
    render(getPage());
  }
}
