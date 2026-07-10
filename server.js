const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});