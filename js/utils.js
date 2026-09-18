// ===================================================
// BANSILAL TEXTILE — Wishlist Manager
// ===================================================

const wishlistManager = (() => {
  const KEY = 'bansilal_wishlist';

  function getWishlist() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }

  function save(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
    updateBadge();
    document.dispatchEvent(new CustomEvent('wishlist:updated', { detail: { list } }));
  }

  function toggle(productId, btnEl) {
    const list = getWishlist();
    const idx = list.indexOf(productId);
    if (idx === -1) {
      list.push(productId);
      if (btnEl) {
        btnEl.classList.add('is-wished');
        btnEl.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 1";
        btnEl.setAttribute('aria-label', 'Remove from wishlist');
      }
      showToast('Added to wishlist', 'success');
    } else {
      list.splice(idx, 1);
      if (btnEl) {
        btnEl.classList.remove('is-wished');
        btnEl.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 0";
        btnEl.setAttribute('aria-label', 'Add to wishlist');
      }
      showToast('Removed from wishlist', 'success');
    }
    save(list);
  }

  function add(productId) {
    const list = getWishlist();
    if (!list.includes(productId)) {
      list.push(productId);
      save(list);
    }
  }

  function remove(productId) {
    const list = getWishlist().filter(id => id !== productId);
    save(list);
  }

  function isWished(productId) {
    return getWishlist().includes(productId);
  }

  function updateBadge() {
    const count = getWishlist().length;
    document.querySelectorAll('[data-wishlist-count]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  return { getWishlist, toggle, add, remove, isWished, updateBadge };
})();


// ===================================================
// BANSILAL TEXTILE — Toast Notifications
// ===================================================
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined toast__icon" style="font-size:1.1rem">${type === 'success' ? 'check_circle' : 'error'}</span>
    <span class="toast__text">${message}</span>
    <button class="toast__close" onclick="this.parentElement.remove()" aria-label="Dismiss">
      <span class="material-symbols-outlined" style="font-size:1rem">close</span>
    </button>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast--out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


// ===================================================
// BANSILAL TEXTILE — Scroll Reveal
// ===================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}


// ===================================================
// BANSILAL TEXTILE — Mobile Navigation
// ===================================================
function initMobileNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (!btn || !nav) return;

  function open() {
    nav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', open);
  if (overlay) overlay.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}


// ===================================================
// BANSILAL TEXTILE — Cart Drawer Global Bindings
// ===================================================
function initCartDrawer() {
  const openBtns = document.querySelectorAll('[data-open-cart]');
  const overlay = document.querySelector('.cart-drawer__overlay');
  const closeBtn = document.getElementById('cart-drawer-close');

  openBtns.forEach(btn => btn.addEventListener('click', cartManager.openCartDrawer));
  if (overlay) overlay.addEventListener('click', cartManager.closeCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', cartManager.closeCartDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') cartManager.closeCartDrawer(); });
}


// ===================================================
// BANSILAL TEXTILE — Search Overlay
// ===================================================
function initSearch() {
  const openBtns = document.querySelectorAll('[data-open-search]');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!overlay) return;

  function openSearch() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input && input.focus(), 100);
  }
  function closeSearch() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (results) results.innerHTML = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  if (input && results) {
    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const q = input.value.trim();
        if (q.length < 2) { results.innerHTML = ''; return; }
        const found = searchProducts(q).slice(0, 8);
        renderSearchResults(found, q, results);
      }, 250);
    });
  }

  // Close on overlay click
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
}

function renderSearchResults(products, query, container) {
  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding:2rem;">
        <span class="material-symbols-outlined" style="font-size:2rem;color:var(--color-on-surface-variant)">search_off</span>
        <p class="empty-state__title" style="font-size:1rem;">No results for "${query}"</p>
        <p class="empty-state__text">Try searching for sarees, lehenga, silk, or kurta.</p>
      </div>`;
    return;
  }

  container.innerHTML = `
    <p style="font-size:0.75rem;color:var(--color-on-surface-variant);padding:0 0 0.5rem;font-weight:400;letter-spacing:0.05em;text-transform:uppercase;">${products.length} result${products.length > 1 ? 's' : ''}</p>
    ${products.map(p => `
      <a href="product.html?slug=${p.slug}" class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('is-open');document.body.style.overflow='';" style="display:flex;align-items:center;gap:0.875rem;padding:0.75rem 0;border-bottom:1px solid var(--border-hairline);text-decoration:none;color:inherit;transition:opacity 150ms;">
        <img src="${p.images[0]}" alt="${p.name}" style="width:3.5rem;height:4.25rem;object-fit:cover;flex-shrink:0;background:var(--color-surface-container);">
        <div style="flex:1;min-width:0;">
          <p style="font-size:0.9rem;font-weight:500;font-family:var(--font-display);color:var(--color-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</p>
          <p style="font-size:0.75rem;color:var(--color-secondary);margin-top:0.125rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">${p.categoryLabel}</p>
          <p style="font-size:0.9rem;font-weight:500;color:var(--color-on-surface);margin-top:0.25rem;">${formatPrice(p.price)}</p>
        </div>
      </a>`).join('')}
    <div style="padding-top:0.75rem;">
      <a href="search.html?q=${encodeURIComponent(query)}" class="btn-ghost" style="font-size:0.75rem;">View all results →</a>
    </div>`;
}


// ===================================================
// BANSILAL TEXTILE — Accordion
// ===================================================
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');
      // Close all in same group
      const group = item.closest('.accordion-group');
      if (group) {
        group.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
      }
      if (!isOpen) item.classList.add('is-open');
    });
  });
}


// ===================================================
// BANSILAL TEXTILE — Set Active Nav Item
// ===================================================
function setActiveNavItem() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    a.classList.remove('is-active');
    const href = a.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === 'index.html') ||
        (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });
}


// ===================================================
// GLOBAL INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  cartManager.updateCartUI();
  wishlistManager.updateBadge();
  initScrollReveal();
  initMobileNav();
  initCartDrawer();
  initSearch();
  initAccordions();
  setActiveNavItem();
});
