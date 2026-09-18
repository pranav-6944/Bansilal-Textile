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
- Dev server running at `http://localhost:3000` (serving `bansilal-ecommerce/`)
