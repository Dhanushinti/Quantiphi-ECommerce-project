async function fetchProducts() {
  const params = new URLSearchParams();
  if (state.categories.length) params.set('categories', state.categories.join(','));
  params.set('minPrice', state.minPrice);
  params.set('maxPrice', state.maxPrice);
  if (state.minRating > 0) params.set('minRating', state.minRating);
  if (state.sortBy !== 'default') params.set('sortBy', state.sortBy);

  const res = await fetch(`/api/products?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}