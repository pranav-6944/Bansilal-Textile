# BANSILAL TEXTILE — AI Notes
## Project Context
- **Workspace**: `c:\Users\prana_b2roblq\Downloads\Main Projects\Bansilal Textile Parallax Website`
- **Ecommerce folder**: `bansilal-ecommerce/`
- **Original Stitch design**: `/stitch_bansilal_textile_parallax_website/code.html` and `DESIGN.md`

## Design System (SOURCE OF TRUTH: DESIGN.md)
- **Colors**: `--color-primary: #000`, `--color-secondary: #775a19` (Gold), `--color-background: #fcf9f3` (Kora Cream)
- **Typography**: Playfair Display (headings), Outfit (body)
- **Borders**: Sharp 90° corners — NO border-radius on buttons/cards
- **Gold hairline**: `rgba(197, 160, 89, 0.35)` on card bodies

## Files Created (Session 2)
```
bansilal-ecommerce/
├── css/
│   └── bansilal.css         # Full design system tokens + all shared components
├── data/
│   └── products.js          # 15 products across 6 categories + helpers (buildProductCardHTML, formatPrice, etc.)
├── js/
│   ├── cart.js              # localStorage cart manager (add/remove/qty/clear/drawer render)
│   ├── utils.js             # wishlist, toast, scroll-reveal, mobile nav, search overlay, accordion
│   └── layout.js            # Shared header/footer HTML injection (announcement bar, nav, cart drawer, search)
├── index.html               # Full homepage (hero parallax, collections grid, featured products, gallery, location, inquiry form)
├── shop.html                # Shop with filter sidebar, category pills, sort, mobile filter sheet, pagination
├── product.html             # PDP: image gallery, zoom lightbox, color/size selector, cart/wishlist, accordions, related products
├── cart.html                # Cart page: item management, qty, order summary, coupon codes
├── checkout.html            # Multi-step checkout: address form, shipping/payment options, success modal
└── wishlist.html            # Wishlist with move-to-cart, add-all, remove
```

## Key Code Patterns

### Script loading order (REQUIRED on every page)
```html
<script src="data/products.js"></script>   <!-- products, helpers -->
<script src="js/cart.js"></script>          <!-- cartManager -->
<script src="js/utils.js"></script>         <!-- wishlistManager, showToast, initScrollReveal, initMobileNav, initSearch, initAccordions -->
<script src="js/layout.js"></script>        <!-- injects header+footer HTML into DOM -->
```

### Add to Cart (from product card)
- `cartManager.addToCart(productId, qty, btnEl, selectedSize, selectedColor)`

### Wishlist Toggle
- `wishlistManager.toggle(productId, btnEl)`

### Cart Drawer
- `cartManager.openCartDrawer()` / `cartManager.closeCartDrawer()`

### Product Card Builder
- `buildProductCardHTML(product, wishlistArray)` — returns full card HTML string

### Price Format
- `formatPrice(number)` → `₹24,500`

## Products (15 total, 6 categories)
| Category | Count |
|---|---|
| royal-sarees | 5 (s001–s005) |
| dress-materials | 2 (d001–d002) |
| womens-couture | 3 (w001–w003) |
| mens-regalia | 3 (m001–m003) |
| childrens-pavilions | 2 (c001–c002) |
| textiles-bolts | 3 (t001–t003) |

## Coupon Codes (checkout.html)
- `SILK10` → 10%, `BANSILAL15` → 15%, `BRIDAL20` → 20%, `WELCOME5` → 5%

## Pages Completed
- `index.html` — Homepage
- `shop.html` — Catalog with filters
- `product.html` — Product details
- `cart.html` — Shopping cart
- `checkout.html` — Multi-step checkout
- `wishlist.html` — Wishlist
- `about.html` — Brand story & heritage
- `contact.html` — Store locator & contact form
- `faq.html` — Accordion FAQ

## Git Repository
- **Remote**: `https://github.com/pranav-6944/Bansilal-Textile.git`
- **Branch**: `main`
- **Commit**: `feat: complete Bansilal Textile ecommerce website with design system, shop, cart, checkout, pdp, and static server setup`

## Known Patterns / Gotchas
- Header offset: pages need `padding-top: 4.5rem` for main (header fixed)
- Announcement bar adds 2.5rem on top — index.html handles this with a spacer div
- layout.js is NOT used on checkout.html (uses minimal header instead)
- All pages include announcement bar spacer: `<div style="height:2.5rem;background:var(--color-tertiary-container);">`
- search overlay is in the header HTML; `initSearch()` is called in utils.js DOMContentLoaded
- Product images: Google AID public URLs (working in browser)
- Dev server running at `http://localhost:3000` (serving `bansilal-ecommerce/` via `python -m http.server 3000 --directory bansilal-ecommerce`)

## Mobile & Tablet Responsiveness (Resolved)
- **Horizontal Overflow Prevention**: `html, body { overflow-x: clip; }` added in `bansilal.css:107, 120`.
- **Visit Button Overflow**:
  - Hero actions (`.hero__actions` in `index.html:150`): stacks vertically on mobile (<640px) with `width: 100%; max-width: 20rem;` and responsive padding `0.875rem 1.5rem` (`letter-spacing: 0.14em`), switching to row only at `>= 640px`.
  - Header CTA (`#header-cta` in `bansilal.css:604`): hidden on mobile and tablet (`display: none !important`), only displays on desktop (`@media (min-width: 1280px)`), eliminating header overcrowding.
- **Left-Stuck Grids (Trust & Prestige, Physical Destination, Journey in Numbers)**:
  - Removed erroneous outer `grid-template-columns: repeat(2, 1fr)` wrappers in `index.html:798, 870, 979, 1053` and `about.html:73, 104`.
  - Replaced with clean responsive classes `.store-grid`, `.why-grid`, `.stage-grid`, `.stats-grid`, `.values-grid`, `.loc-grid`, `.appt-grid`, and `.form-row-2` in `bansilal.css:1337-1450`:
    - Mobile (<640px): 1 column (100% full width, centered)
    - Tablet (640px–1023px): 2 columns
    - Desktop (>=1024px): 4 columns (or 3 columns for 3-item sets)
- **Image Below Hero (About Master Weaver)**:
  - Constrained `.about-image-wrapper` to `max-width: 32rem; margin: 0 auto;` on mobile/tablet (`index.html:464`).
  - `.about-image-main`: `aspect-ratio: 16/10; max-height: 320px;` on mobile, `4/3; max-height: 380px;` on tablet, `4/5; max-height: 520px;` on desktop. Removed inline `aspect-ratio: 4/5` override on `<img>`.
  - `.about-image-inset`: `right: 0` on tablet, `right: -1.5rem` on desktop (prevents breaking past viewport edge).
- **Hamburger Menu & Mobile Drawer**:
  - Button (`.mobile-menu-btn` in `bansilal.css:644`): styled with border, gold hover, visible on all viewports `< 1280px`.
  - Delegated click handling in `utils.js:124` on `document` to guarantee zero race condition with dynamic `layout.js` injection.
  - Automatically closes on backdrop click, close button, Escape key, or tapping any `.mobile-nav__link` / CTA.
  - Added "Plan A Store Visit" CTA inside the drawer footer (`layout.js:146`).

## Card & Section Compact Scaling (Resolved)
- **Root Problem**: Sections, images, and cards were measuring 900px–1200px in height due to 4/5 portrait ratios, 7rem padding, and full 100svh viewport min-heights, forcing excessive scrolling.
- **Section Padding**:
  - `.section-py` in `bansilal.css:245`: Reduced from `7rem` (desktop) / `4rem` (mobile) to `2.75rem` (desktop) / `1.75rem` (mobile).
- **Hero Section**:
  - `min-height`: Reduced from `100svh` to `75svh` (`index.html:33`).
  - `.hero__content`: Padding reduced to `padding-top: 4.5rem; padding-bottom: 2rem;` (`index.html:77`).
  - `.hero__title`: Reduced from `clamp(2.5rem, 8vw, 4.5rem)` to `clamp(2rem, 5.5vw, 3.5rem)`.
  - `.hero__metrics` & `.metric-card`: Reduced padding (`0.75rem 1rem`), metric icon from `3rem` to `2.25rem`, value font to `1.2rem`.
- **Collection Cards**:
  - `.collection-card__img-wrap` in `index.html:279`: Changed aspect ratio from `4/5` (portrait ~500px) to `16/10` landscape with `max-height: 195px;`.
  - `.collection-card__body`: Reduced padding to `0.875rem 1rem`, description clamped to 2 lines (`-webkit-line-clamp: 2; line-clamp: 2;`). Total card height cut in half (~280px vs ~580px).
- **Product Cards**:
  - `.product-card__image-wrap` in `bansilal.css:346`: Changed from `4/5` to `1/1` square with `max-height: 210px;` (desktop) and `max-height: 150px;` (mobile).
  - `.product-card__name`: Added 1-line clamp (`-webkit-line-clamp: 1; line-clamp: 1;`).
- **Lookbook Gallery**:
  - `.gallery-item` in `index.html:426`: Changed from `aspect-ratio: 3/4` to `4/3` with `max-height: 200px;`.
- **Pillars & Flagship Store**:
  - `.pillar-card` & store cards: Padding reduced from `2rem` to `1.25rem 1.5rem;`, icon circles reduced from `4rem` / `3.5rem` to `2.5rem`.
  - Flagship Store Banner: Reduced height from `20rem` to `12rem;` (`index.html:920`).
  - Location `.map-placeholder`: Reduced height from `24rem` to `14rem;` (`index.html:548`).
  - Appointment `.appt-form-card`: Padding reduced from `2.5rem 3rem` to `1.75rem 2rem;` (`bansilal.css:1520`).
- **About Page (`about.html`)**:
  - Hero banner reduced from `32rem` to `22rem;`.
  - Weaving process image reduced from `aspect-ratio: 4/5` to `16/10; max-height: 280px;`.
  - Milestone stats and values cards padded to `1.25rem 1.5rem` with `2.5rem` icons.
