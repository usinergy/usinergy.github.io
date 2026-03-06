# modamood — Architecture Documentation

> Turkish baby clothing e-commerce demo — static SPA running on GitHub Pages.

## Tech Stack

| Layer       | Technology                                       |
| ----------- | ------------------------------------------------ |
| Hosting     | GitHub Pages (static files only)                 |
| Modules     | ES Modules (`<script type="module">`)            |
| Routing     | Hash-based SPA router (`#home`, `#shop`, etc.)   |
| Styling     | Vanilla CSS with custom properties (design tokens) |
| Fonts       | Google Fonts — Manrope (400–800)                 |
| Images      | Pexels stock photography (CDN)                   |
| Payment     | Simulated iyzico checkout (no real transactions) |
| Language    | Turkish (UTF-8)                                  |

## File Structure

```
modamood/
├── index.html                  # HTML shell — header, nav, footer, <main id="app">
├── assets/
│   └── logo.svg                # Brand logo (double-arch "m" on amber gradient)
├── css/
│   ├── variables.css           # Design tokens (colors, shadows, radii, layout)
│   ├── base.css                # Reset, typography, form elements, utilities
│   ├── components.css          # Reusable UI (buttons, cards, badges, toast, etc.)
│   ├── layout.css              # Page structure (header, footer, hero, grids)
│   └── responsive.css          # Media queries (1120px / 860px / 640px)
├── js/
│   ├── app.js                  # Entry point — imports modules, exposes globals
│   ├── config.js               # Brand constants & configuration
│   ├── data.js                 # Product catalog (27 items, 9 categories)
│   ├── store.js                # Cart state management (add, remove, totals)
│   ├── router.js               # SPA hash router (go, render, initRouter)
│   ├── components.js           # Shared UI (product card, toast, badge)
│   ├── checkout.js             # 4-step checkout flow
│   └── pages/
│       ├── home.js             # Home page (hero, trust badges, featured)
│       ├── shop.js             # Shop page (category filter, product grid)
│       ├── cart.js             # Cart + checkout page
│       ├── info.js             # About, FAQ, Contact, Shipping, Returns
│       └── legal.js            # Privacy, KVKK, Terms (Mesafeli Satış)
├── background.jpeg             # Background asset
├── ARCHITECTURE.md             # This file
├── .gitignore                  # Git ignore rules
└── _build.py                   # Build script (generates all files)
```

## Architecture Decisions

### 1. ES Modules without Build Tools

Since GitHub Pages serves static files only, we use native ES Modules (`<script type="module">`) with `import`/`export` — no bundler, no transpiler. All modern browsers support this natively.

### 2. Global Function Exposure

ES modules have their own scope. Since product cards and checkout panels use inline `onclick` handlers in dynamically-generated HTML, the handler functions must be accessible globally. This is handled in `app.js`:

```js
// app.js
import { go } from './router.js';
import { addToCart } from './store.js';
window.go = go;
window.addToCart = addToCart;
// ... etc.
```

### 3. Hash-Based SPA Routing

The router listens for `hashchange` events and renders the appropriate page into `<main id="app">`. Routes:

| Hash         | Handler           | Page                       |
| ------------ | ----------------- | -------------------------- |
| `#home`      | `homeHTML()`      | Landing page               |
| `#shop`      | `shopHTML()`      | Product catalog            |
| `#cart`      | `cartPageHTML()`  | Cart + checkout            |
| `#about`     | `aboutHTML()`     | About us                   |
| `#faq`       | `faqHTML()`       | FAQ (accordion)            |
| `#contact`   | `contactHTML()`   | Contact form               |
| `#shipping`  | `shippingHTML()`  | Shipping info              |
| `#returns`   | `returnsHTML()`   | Return policy              |
| `#privacy`   | `privacyHTML()`   | Privacy policy             |
| `#kvkk`      | `kvkkHTML()`      | KVKK disclosure            |
| `#terms`     | `termsHTML()`     | Distance sales agreement   |

### 4. CSS Architecture

Styles are split into 5 files following a **design token → base → components → layout → responsive** methodology:

- **variables.css** — Single source of truth for colors, shadows, radii, and layout constraints. Change a token here and it propagates everywhere.
- **base.css** — Browser reset, body styling, typography scale, form element defaults.
- **components.css** — Self-contained UI components (cards, buttons, badges, modals, toasts, FAQ accordion, etc.).
- **layout.css** — Page-level structure: header/footer, navigation, hero sections, grid systems, checkout panel.
- **responsive.css** — Three breakpoints (1120px, 860px, 640px) for tablet and mobile layouts.

### 5. State Management

Cart state lives in `store.js` as module-level variables with exported getter/setter functions:

```
store.js
├── cart[]          — Array of {id, name, cat, price, img, size, qty}
├── curCat          — Current category filter
├── ckStep          — Checkout step (bag → shipping → payment → done)
├── selShip         — Selected shipping method
├── selPay          — Selected payment method
├── selInst         — Selected installment count
├── addToCart(id)   — Add product to cart
├── updQty(id, ±1) — Update quantity / remove
├── clearCart()     — Empty cart
├── fmt(n)          — Format price with ₺ symbol
├── sub()           — Subtotal
├── shipCost()      — Shipping cost
└── tot()           — Grand total
```

### 6. Checkout Flow

The checkout is a 4-step wizard inside the cart page:

```
Step 1: Sepet (Bag)      → Review items, see totals
Step 2: Kargo (Shipping) → Address form + carrier selection
Step 3: Ödeme (Payment)  → Payment method, iyzico card form, installments
Step 4: Onay (Done)      → Order confirmation (simulated)
```

All checkout logic lives in `checkout.js`. The panel re-renders via `refreshCart()` after each state change.

## Module Dependency Graph

```
app.js (entry)
├── router.js
│   ├── pages/home.js   → data.js, components.js, store.js
│   ├── pages/shop.js   → data.js, store.js, components.js, router.js
│   ├── pages/cart.js   → store.js, checkout.js
│   ├── pages/info.js   → config.js, store.js
│   └── pages/legal.js  → config.js
├── store.js            → config.js, data.js, components.js
├── components.js       → store.js
└── checkout.js         → config.js, store.js, components.js
```

## Product Catalog

27 products across 9 categories:

| Category     | Turkish     | Count |
| ------------ | ----------- | ----- |
| All          | Tümü        | 27    |
| Jumpsuits    | Tulum       | 4     |
| Pajamas      | Pijama      | 3     |
| Dresses      | Elbise      | 3     |
| Sets         | Takım       | 4     |
| Outerwear    | Dış Giyim   | 3     |
| Shoes        | Ayakkabı    | 4     |
| Hats         | Şapka       | 3     |
| Newborn      | Yenidoğan   | 3     |

## Professional Practices Applied

- **ES Modules** — Clean import/export, no global pollution (except explicit `window` exposure for onclick handlers)
- **`const` / `let`** — No `var` anywhere in the codebase
- **Template literals** — All HTML builders use backtick template strings for readability
- **JSDoc comments** — Type annotations on key functions and data structures
- **Separation of Concerns** — CSS split by purpose, JS split by feature
- **Design Tokens** — All magic values extracted to CSS custom properties
- **Responsive Design** — Mobile-first with 3 breakpoints
- **Semantic HTML** — `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`
- **UTF-8 Turkish** — Proper character encoding throughout

## Running Locally

```bash
# Any static file server works:
python3 -m http.server 8000
# Then open http://localhost:8000

# Or use VS Code Live Server extension
```

> **Note**: Opening `index.html` directly via `file://` protocol will NOT work because ES modules require HTTP(S) due to CORS restrictions.

## Deployment

Push to the `main` branch of a GitHub repository with Pages enabled. GitHub Pages serves static files with correct MIME types for ES modules.
