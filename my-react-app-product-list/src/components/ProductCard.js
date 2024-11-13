// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image.desktop} alt={product.name} />
      <article className="item">
        <p className="food">{product.category}</p>
        <strong>{product.name}</strong>
        <p className="price">${product.price.toFixed(2)}</p>
      </article>
      <button className="btn" onClick={() => addToCart(product)}>
        <i className="fa-solid fa-cart-plus"></i> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
