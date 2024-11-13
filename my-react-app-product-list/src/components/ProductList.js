// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart }) {
  return (
    <div className="gallery">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
