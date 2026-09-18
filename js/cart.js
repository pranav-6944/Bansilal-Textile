// ===================================================
// BANSILAL TEXTILE — Cart Manager
// localStorage-based cart with events
// ===================================================

const cartManager = (() => {
  const CART_KEY = 'bansilal_cart';

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartUI();
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
  }

  function addToCart(productId, qty = 1, btnEl = null, selectedSize = null, selectedColor = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const key = productId + (selectedSize || '') + (selectedColor || '');
    const existing = cart.find(i => i.key === key);

    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 10);
    } else {
      cart.push({
        key,
        productId,
        name: product.name,
        price: product.price,
        image: product.images[0],
        slug: product.slug,
        fabric: product.fabric.split('—')[0].trim(),
        selectedSize: selectedSize || (product.sizes[0] || ''),
        selectedColor: selectedColor || (product.colors[0] || ''),
        qty,
        categoryLabel: product.categoryLabel
      });
    }

    saveCart(cart);

    if (btnEl) {
      const orig = btnEl.textContent;
      btnEl.textContent = 'Added!';
      btnEl.style.background = 'var(--color-secondary)';
      setTimeout(() => {
        btnEl.textContent = orig;
        btnEl.style.background = '';
      }, 1200);
    }

    showToast(product.name + ' added to cart', 'success');
    openCartDrawer();
  }

  function removeFromCart(key) {
    const cart = getCart().filter(i => i.key !== key);
    saveCart(cart);
  }

  function updateQty(key, delta) {
    const cart = getCart();
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(10, item.qty + delta));
    saveCart(cart);
  }

  function setQty(key, qty) {
    const cart = getCart();
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(10, qty));
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  function getCount() {
    return getCart().reduce((s, i) => s + i.qty, 0);
  }

  function getSubtotal() {
    return getCart().reduce((s, i) => s + i.price * i.qty, 0);
  }

  function updateCartUI() {
    const count = getCount();
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
    renderCartDrawer();
  }

  function renderCartDrawer() {
    const body = document.getElementById('cart-drawer-body');
    const total = document.getElementById('cart-drawer-total');
    if (!body) return;

    const cart = getCart();
    if (cart.length === 0) {
      body.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon"><span class="material-symbols-outlined">shopping_bag</span></div>
          <p class="empty-state__title">Your cart is empty</p>
          <p class="empty-state__text">Discover our curated handloom collections and add your favourites.</p>
          <a href="shop.html" class="btn-primary" style="margin-top:0.5rem;" onclick="closeCartDrawer()">Shop Now</a>
        </div>`;
      if (total) total.textContent = '₹0';
      return;
    }

    body.innerHTML = cart.map(item => `
      <div class="cart-item" data-key="${item.key}">
        <img class="cart-item__image" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="cart-item__details">
          <p class="cart-item__name">${item.name}</p>
          <p class="cart-item__variant">${item.selectedColor}${item.selectedSize ? ' • ' + item.selectedSize : ''}</p>
          <p class="cart-item__price">${formatPrice(item.price)}</p>
          <div class="cart-item__controls">
            <button class="qty-btn" onclick="cartManager.updateQty('${item.key}', -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="cartManager.updateQty('${item.key}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-item__remove" onclick="cartManager.removeFromCart('${item.key}')">Remove</button>
        </div>
      </div>`).join('');

    if (total) total.textContent = formatPrice(getSubtotal());
  }

  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      renderCartDrawer();
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  // Public
  return { getCart, addToCart, removeFromCart, updateQty, setQty, clearCart, getCount, getSubtotal, updateCartUI, openCartDrawer, closeCartDrawer, renderCartDrawer };
})();

// expose globally
window.openCartDrawer = cartManager.openCartDrawer;
window.closeCartDrawer = cartManager.closeCartDrawer;
