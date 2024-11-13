// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);  

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
