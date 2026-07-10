const products = require('../data/products');

// Safely parses a query value to a number, returns null if missing/invalid.
// null = "no constraint" -> this is what powers graceful null handling.
function toNum(val) {
  if (val === undefined || val === '') return null;
  const n = Number(val);
  return isNaN(n) ? null : n;
}

function getProducts(req, res) {
  const { categories, minPrice, maxPrice, minRating, sortBy } = req.query;

  const categoryList = categories
    ? categories.split(',').map(c => c.trim()).filter(Boolean)
    : [];
  const min = toNum(minPrice);
  const max = toNum(maxPrice);
  const rating = toNum(minRating);

  // Combinatorial Intersect Filtering: a product only survives if it
  // satisfies category AND price AND rating.
  let result = products.filter(product => {
    const categoryOk = categoryList.length === 0 || categoryList.includes(product.category);
    const priceOk = (min === null || product.price >= min) && (max === null || product.price <= max);
    const ratingOk = rating === null || rating === 0 || product.rating >= rating;
    return categoryOk && priceOk && ratingOk;
  });

  // Sort AFTER filtering: reduce the working set first, then order the survivors.
  if (sortBy === 'price-asc') {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'rating-desc') {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  res.json({ count: result.length, products: result });
}

module.exports = { getProducts };