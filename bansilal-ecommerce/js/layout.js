// ===================================================
// BANSILAL TEXTILE — Shared Header & Footer HTML
// Injected by layout.js on every page
// ===================================================

const HEADER_HTML = `
<!-- Announcement Bar -->
<div class="announcement-bar" id="announcement-bar">
  <span>Free shipping on orders above ₹5,000 &nbsp;•&nbsp; 30-day easy returns &nbsp;•&nbsp; Open all 7 days: 10 AM – 9:30 PM</span>
</div>

<!-- Site Header -->
<header class="site-header" id="site-header">
  <!-- Top Bar (Desktop) -->
  <div class="site-header__top">
    <div class="container">
      <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-on-surface-variant);">
        <div style="display:flex;align-items:center;gap:1.75rem;">
          <span style="display:flex;align-items:center;gap:0.375rem;">
            <span class="material-symbols-outlined" style="font-size:0.875rem;color:var(--color-secondary);">location_on</span>
            Alandi-Moshi Road, Alandi, Pune - 412105
          </span>
          <span style="display:flex;align-items:center;gap:0.375rem;">
            <span class="material-symbols-outlined" style="font-size:0.875rem;color:var(--color-secondary);">schedule</span>
            10:00 AM – 9:30 PM (All 7 Days)
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:1rem;">
          <span style="letter-spacing:0.1em;color:var(--color-secondary);font-weight:600;">Heirloom Paithani &amp; Bridal Silks</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Nav Bar -->
  <div class="container">
    <div class="site-header__main">
      <!-- Logo -->
      <a href="index.html" class="site-header__logo" aria-label="Bansilal Textile — Home">
        <div class="site-header__logo-text">
          <span class="site-header__logo-name">Bansilal Textile</span>
          <span class="site-header__logo-hindi">बंसीलाल टेक्सटाइल</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="site-nav" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="shop.html">Shop</a>
        <a href="shop.html?cat=royal-sarees">Sarees</a>
        <a href="shop.html?cat=womens-couture">Women</a>
        <a href="shop.html?cat=mens-regalia">Men</a>
        <a href="shop.html?cat=childrens-pavilions">Children</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>

      <!-- Actions -->
      <div class="site-header__actions">
        <button class="icon-btn" data-open-search aria-label="Search">
          <span class="material-symbols-outlined">search</span>
        </button>
        <a href="wishlist.html" class="icon-btn" aria-label="Wishlist" style="position:relative;">
          <span class="material-symbols-outlined">favorite_border</span>
          <span class="icon-btn__badge" data-wishlist-count style="display:none;">0</span>
        </a>
        <button class="icon-btn" data-open-cart aria-label="Shopping cart" style="position:relative;">
          <span class="material-symbols-outlined">shopping_bag</span>
          <span class="icon-btn__badge" data-cart-count style="display:none;">0</span>
        </button>
        <a href="index.html#inquiry" class="btn-primary" style="padding:0.5rem 1rem;font-size:0.625rem;display:none;" id="header-cta">
          Visit Store
        </a>
        <!-- Mobile Menu -->
        <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Mobile Navigation Drawer -->
<div class="mobile-nav" id="mobile-nav" role="dialog" aria-label="Navigation menu">
  <div class="mobile-nav__overlay" id="mobile-nav-overlay"></div>
  <div class="mobile-nav__panel">
    <div class="mobile-nav__header">
      <div>
        <span style="font-family:var(--font-display);font-size:1.1rem;font-weight:600;color:var(--color-primary);">Bansilal Textile</span>
        <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-secondary);margin-top:0.1rem;">बंसीलाल टेक्सटाइल</p>
      </div>
      <button id="mobile-nav-close" aria-label="Close menu" style="color:var(--color-on-surface-variant);background:none;border:none;cursor:pointer;">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="mobile-nav__links">
      <a href="index.html" class="mobile-nav__link">
        <span>Home</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html" class="mobile-nav__link">
        <span>All Products</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html?cat=royal-sarees" class="mobile-nav__link">
        <span>Royal Sarees</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html?cat=dress-materials" class="mobile-nav__link">
        <span>Dress Materials</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html?cat=womens-couture" class="mobile-nav__link">
        <span>Women's Couture</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html?cat=mens-regalia" class="mobile-nav__link">
        <span>Men's Regalia</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html?cat=childrens-pavilions" class="mobile-nav__link">
        <span>Children's Pavilions</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="shop.html?cat=textiles-bolts" class="mobile-nav__link">
        <span>Textiles &amp; Bolts</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="wishlist.html" class="mobile-nav__link">
        <span>Wishlist</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="about.html" class="mobile-nav__link">
        <span>About Us</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="contact.html" class="mobile-nav__link">
        <span>Contact</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
      <a href="faq.html" class="mobile-nav__link">
        <span>FAQ</span>
        <span class="material-symbols-outlined" style="font-size:1rem;color:var(--color-on-surface-variant);">chevron_right</span>
      </a>
    </div>
    <div class="mobile-nav__footer">
      <p style="font-size:0.75rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-secondary);margin-bottom:0.375rem;">Flagship Store</p>
      <p style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;line-height:1.5;">Alandi-Moshi Road, Near Dehu Phata,<br>Alandi Devachi, Pune – 412105</p>
      <p style="font-size:0.75rem;font-weight:600;color:var(--color-secondary);margin-top:0.5rem;">Open All 7 Days • 10 AM – 9:30 PM</p>
    </div>
  </div>
</div>

<!-- Cart Drawer -->
<div class="cart-drawer" id="cart-drawer" role="dialog" aria-label="Shopping cart">
  <div class="cart-drawer__overlay"></div>
  <div class="cart-drawer__panel">
    <div class="cart-drawer__header">
      <div>
        <h2 style="font-family:var(--font-display);font-size:1.1rem;font-weight:600;color:var(--color-primary);">Your Cart</h2>
        <p style="font-size:0.75rem;color:var(--color-on-surface-variant);font-weight:400;margin-top:0.1rem;" id="cart-item-count-label">0 items</p>
      </div>
      <button id="cart-drawer-close" aria-label="Close cart" style="color:var(--color-on-surface-variant);background:none;border:none;cursor:pointer;">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="cart-drawer__body" id="cart-drawer-body">
      <div class="empty-state">
        <div class="empty-state__icon"><span class="material-symbols-outlined">shopping_bag</span></div>
        <p class="empty-state__title">Your cart is empty</p>
        <p class="empty-state__text">Discover our curated handloom collections.</p>
        <a href="shop.html" class="btn-primary" style="margin-top:0.5rem;" onclick="cartManager.closeCartDrawer()">Shop Now</a>
      </div>
    </div>
    <div class="cart-drawer__footer">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
        <span style="font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-on-surface-variant);">Subtotal</span>
        <span style="font-size:1.1rem;font-weight:500;color:var(--color-primary);" id="cart-drawer-total">₹0</span>
      </div>
      <p style="font-size:0.75rem;color:var(--color-on-surface-variant);margin-bottom:1rem;font-weight:300;">Shipping and taxes calculated at checkout.</p>
      <div style="display:flex;flex-direction:column;gap:0.5rem;">
        <a href="checkout.html" class="btn-primary" style="width:100%;justify-content:center;padding:0.875rem;" onclick="cartManager.closeCartDrawer()">
          <span class="material-symbols-outlined" style="font-size:1rem;">lock</span>
          Proceed to Checkout
        </a>
        <a href="cart.html" class="btn-secondary" style="width:100%;justify-content:center;" onclick="cartManager.closeCartDrawer()">View Full Cart</a>
      </div>
    </div>
  </div>
</div>

<!-- Search Overlay -->
<div id="search-overlay" style="position:fixed;inset:0;z-index:300;background:rgba(26,20,18,0.85);backdrop-filter:blur(8px);display:none;align-items:flex-start;justify-content:center;padding:5rem 1rem 2rem;" role="search">
  <div style="width:100%;max-width:40rem;background:var(--color-surface);box-shadow:var(--shadow-drawer);">
    <div style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.25rem;border-bottom:1px solid var(--border-hairline);">
      <span class="material-symbols-outlined" style="color:var(--color-secondary);">search</span>
      <input id="search-input" type="search" placeholder="Search sarees, silk, lehenga, kurta..." autocomplete="off"
        style="flex:1;background:none;border:none;outline:none;font-size:1rem;font-weight:300;color:var(--color-on-surface);font-family:var(--font-body);" aria-label="Search products">
      <button id="search-close" aria-label="Close search" style="color:var(--color-on-surface-variant);background:none;border:none;cursor:pointer;">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div id="search-results" style="max-height:65vh;overflow-y:auto;padding:1rem 1.25rem;">
      <p style="font-size:0.75rem;color:var(--color-on-surface-variant);letter-spacing:0.08em;text-transform:uppercase;font-weight:400;">Popular Searches</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem;">
        ${['Paithani Saree','Bridal Lehenga','Men Sherwani','Banarasi Silk','Chanderi','Kids Ethnic'].map(s =>
          `<button onclick="document.getElementById('search-input').value='${s}';document.getElementById('search-input').dispatchEvent(new Event('input'));" class="filter-chip">${s}</button>`
        ).join('')}
      </div>
    </div>
  </div>
</div>`;

const FOOTER_HTML = `
<!-- Footer -->
<footer class="site-footer">
  <div class="container" style="padding-top:3rem;padding-bottom:1.5rem;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2.5rem;padding-bottom:2.5rem;border-bottom:1px solid rgba(209,196,192,0.3);">
      
      <!-- Brand Column -->
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div>
          <p style="font-family:var(--font-display);font-size:1.25rem;font-weight:600;color:var(--color-primary);">Bansilal Textile</p>
          <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-secondary);margin-top:0.125rem;">बंसीलाल टेक्सटाइल • ALANDI</p>
        </div>
        <p style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;line-height:1.6;">Curators of pure handloom weaves, mastercrafted Paithani sarees, and bespoke bridal couture. Sustaining authentic Maharashtrian textile legacies since 1994.</p>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <span style="font-size:0.6875rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:0.25rem 0.5rem;border:1px solid rgba(197,160,89,0.3);color:var(--color-secondary);">HANDLOOM AUTHENTIC</span>
          <span style="font-size:0.6875rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:0.25rem 0.5rem;border:1px solid rgba(197,160,89,0.3);color:var(--color-secondary);">PURE SILK</span>
          <span style="font-size:0.6875rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:0.25rem 0.5rem;border:1px solid rgba(197,160,89,0.3);color:var(--color-secondary);">SILK MARK</span>
        </div>
      </div>

      <!-- Quick Links -->
      <div style="display:flex;flex-direction:column;gap:0.625rem;">
        <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-primary);padding-bottom:0.5rem;border-bottom:1px solid rgba(209,196,192,0.2);">Collections</p>
        <a href="shop.html?cat=royal-sarees" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Royal Sarees</a>
        <a href="shop.html?cat=dress-materials" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Dress Materials</a>
        <a href="shop.html?cat=womens-couture" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Women's Couture</a>
        <a href="shop.html?cat=mens-regalia" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Men's Regalia</a>
        <a href="shop.html?cat=childrens-pavilions" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Children's Pavilions</a>
        <a href="shop.html?cat=textiles-bolts" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Textiles &amp; Bolts</a>
      </div>

      <!-- Help Links -->
      <div style="display:flex;flex-direction:column;gap:0.625rem;">
        <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-primary);padding-bottom:0.5rem;border-bottom:1px solid rgba(209,196,192,0.2);">Information</p>
        <a href="about.html" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">About Bansilal</a>
        <a href="contact.html" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Contact Us</a>
        <a href="faq.html" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">FAQ</a>
        <a href="size-guide.html" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Size Guide</a>
        <a href="shipping-policy.html" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Shipping Policy</a>
        <a href="returns-policy.html" style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Returns Policy</a>
      </div>

      <!-- Store Info + Newsletter -->
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-primary);padding-bottom:0.5rem;border-bottom:1px solid rgba(209,196,192,0.2);">Festive Previews</p>
        <p style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;line-height:1.6;">Receive private salon showings, new Paithani releases, and wedding trousseau edits.</p>
        <div style="border-bottom:1px solid rgba(26,20,18,0.3);display:flex;align-items:center;padding-bottom:0.5rem;" id="footer-email-wrap">
          <input id="footer-email" type="email" placeholder="Your email for private releases" style="flex:1;background:none;border:none;outline:none;font-size:0.875rem;font-weight:300;color:var(--color-on-surface);font-family:var(--font-body);" aria-label="Email for newsletter">
          <button onclick="footerNewsletterSubmit()" style="color:var(--color-primary);background:none;border:none;cursor:pointer;transition:color 150ms;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-primary)'" aria-label="Subscribe">
            <span class="material-symbols-outlined" style="font-size:1.125rem;">arrow_forward</span>
          </button>
        </div>
        <p style="font-size:0.625rem;color:var(--color-on-surface-variant);opacity:0.7;letter-spacing:0.05em;">Strict discretion guaranteed. No unsolicited communications.</p>
        
        <!-- Store Details -->
        <div style="padding-top:0.5rem;border-top:1px solid rgba(209,196,192,0.2);">
          <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-secondary);margin-bottom:0.375rem;">Flagship Store</p>
          <p style="font-size:0.8125rem;color:var(--color-on-surface-variant);font-weight:300;line-height:1.5;">Alandi-Moshi Road, Near Dehu Phata,<br>Alandi Devachi, Pune – 412105</p>
          <p style="font-size:0.8125rem;color:var(--color-secondary);font-weight:600;margin-top:0.375rem;">Open All 7 Days · 10 AM – 9:30 PM</p>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div style="padding-top:1.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;">
      <p style="font-size:0.6875rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-on-surface-variant);">© 2025 BANSILAL TEXTILE (बंसीलाल टेक्सटाइल). ALL RIGHTS RESERVED.</p>
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:1.5rem;">
        <a href="shipping-policy.html" style="font-size:0.6875rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-on-surface-variant);transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Shipping Policy</a>
        <a href="returns-policy.html" style="font-size:0.6875rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-on-surface-variant);transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Returns</a>
        <a href="faq.html" style="font-size:0.6875rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-on-surface-variant);transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">FAQ</a>
        <a href="contact.html" style="font-size:0.6875rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-on-surface-variant);transition:color 150ms;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-on-surface-variant)'">Contact</a>
      </div>
    </div>
  </div>
</footer>`;

// Inject into page
document.addEventListener('DOMContentLoaded', () => {
  // Insert header before first child of body
  const headerDiv = document.createElement('div');
  headerDiv.id = 'site-header-wrapper';
  headerDiv.innerHTML = HEADER_HTML;
  document.body.insertBefore(headerDiv, document.body.firstChild);

  // Insert footer at end of body
  const footerDiv = document.createElement('div');
  footerDiv.innerHTML = FOOTER_HTML;
  document.body.appendChild(footerDiv);

  // Show header CTA on desktop
  const cta = document.getElementById('header-cta');
  if (cta && window.innerWidth >= 640) cta.style.display = 'inline-flex';

  // Sticky header with announcement bar offset
  const annBar = document.getElementById('announcement-bar');
  const header = document.getElementById('site-header');
  if (annBar && header) {
    // Announcement bar is not fixed, so header is positioned below it
    document.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = '0 1px 8px rgba(0,0,0,0.04)';
      }
    });
  }

  // Update cart count label
  document.addEventListener('cart:updated', (e) => {
    const count = e.detail.cart.reduce((s, i) => s + i.qty, 0);
    const label = document.getElementById('cart-item-count-label');
    if (label) label.textContent = count + ' item' + (count !== 1 ? 's' : '');
  });
});

function footerNewsletterSubmit() {
  const input = document.getElementById('footer-email');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }
  input.value = '';
  showToast('Thank you! You\'ll receive our exclusive collection updates soon.', 'success');
}
