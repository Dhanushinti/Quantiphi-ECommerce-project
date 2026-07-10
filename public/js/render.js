const CATEGORY_EMOJI = { Electronics: '📱', Apparel: '👕', Footwear: '👟', Accessories: '🎒' };

function renderStars(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function renderProducts(products) {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');

  resultCount.textContent = `${products.length} item${products.length !== 1 ? 's' : ''} found`;

  if (products.length === 0) {
    grid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    grid.innerHTML = '';
    return;
  }

  emptyState.classList.add('hidden');
  grid.classList.remove('hidden');

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-thumb ${p.category.toLowerCase()}">${CATEGORY_EMOJI[p.category] || '🛍️'}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
      <div>
        <span class="stars">${renderStars(p.rating)}</span>
        <span class="rating-num">${p.rating}</span>
      </div>
    </div>
  `).join('');
}