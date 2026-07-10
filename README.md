# Quantiphi E-Commerce Product Filter

A full-stack e-commerce product filtering application built using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**.

## Features

- Category-based filtering
- Price range filtering
- Minimum rating filter
- Sort products by:
  - Price (Low to High)
  - Top Rated
- Dynamic product count
- Empty state with reset option
- Responsive product grid
- Sticky filter sidebar
- Backend-driven filtering and sorting

## Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```
ecommerce-multi-filter-sidebar
│
├── controllers
│   └── productController.js
├── data
│   └── products.js
├── routes
│   └── productRoutes.js
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│   │   ├── api.js
│   │   ├── app.js
│   │   ├── render.js
│   │   └── state.js
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Quantiphi-ECommerce-project.git
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node server.js
```

Open your browser:

```
http://localhost:3000
```

## API

### Get Products

```
GET /api/products
```

### Query Parameters

| Parameter | Description |
|-----------|-------------|
| categories | Comma-separated categories |
| minPrice | Minimum price |
| maxPrice | Maximum price |
| minRating | Minimum product rating |
| sortBy | price-asc or rating-desc |

Example:

```
/api/products?categories=Electronics,Footwear&minPrice=500&maxPrice=3000&minRating=4&sortBy=price-asc
```

## Backend Logic

All filtering and sorting logic is implemented on the server side.

Workflow:

1. Receive filter parameters.
2. Filter products based on category, price, and rating.
3. Apply sorting to the filtered result.
4. Return JSON response.
5. Frontend renders the received products.

## Time Complexity

- Filtering: **O(n)**
- Sorting: **O(n log n)**

## Author

**Sai Dhanush Inti**
