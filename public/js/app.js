async function updateAndRender() {
  try {
    const data = await fetchProducts();
    renderProducts(data.products);
  } catch (err) {
    console.error(err);
  }
}

document.querySelectorAll('.category-checkbox').forEach(cb => {
  cb.addEventListener('change', (e) => {
    if (e.target.checked) {
      state.categories.push(e.target.value);
    } else {
      state.categories = state.categories.filter(c => c !== e.target.value);
    }
    updateAndRender();
  });
});

const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const priceMinLabel = document.getElementById('priceMinLabel');
const priceMaxLabel = document.getElementById('priceMaxLabel');

function handlePriceChange(e) {
  let minVal = parseInt(priceMin.value, 10);
  let maxVal = parseInt(priceMax.value, 10);

  if (minVal > maxVal) {
    if (e.target === priceMin) { priceMin.value = maxVal; minVal = maxVal; }
    else { priceMax.value = minVal; maxVal = minVal; }
  }

  state.minPrice = minVal;
  state.maxPrice = maxVal;
  priceMinLabel.textContent = `₹${minVal.toLocaleString('en-IN')}`;
  priceMaxLabel.textContent = `₹${maxVal.toLocaleString('en-IN')}`;
  updateAndRender();
}

priceMin.addEventListener('input', handlePriceChange);
priceMax.addEventListener('input', handlePriceChange);

document.querySelectorAll('input[name="rating"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    state.minRating = parseInt(e.target.value, 10);
    updateAndRender();
  });
});

document.getElementById('sortBy').addEventListener('change', (e) => {
  state.sortBy = e.target.value;
  updateAndRender();
});

document.getElementById('resetFilters').addEventListener('click', () => {
  state.categories = [];
  state.minPrice = 0;
  state.maxPrice = 25000;
  state.minRating = 0;
  state.sortBy = 'default';

  document.querySelectorAll('.category-checkbox').forEach(cb => cb.checked = false);
  priceMin.value = 0;
  priceMax.value = 25000;
  priceMinLabel.textContent = '₹0';
  priceMaxLabel.textContent = '₹25,000';
  document.querySelector('input[name="rating"][value="0"]').checked = true;
  document.getElementById('sortBy').value = 'default';

  updateAndRender();
});

updateAndRender();