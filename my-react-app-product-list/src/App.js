// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SignUp from './components/SignUp'; // Import the SignUp component

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false); // State to control sign-up page visibility

  useEffect(() => {
    fetch('./db.json')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setError('Products data is not in the correct format.');
          console.error('Products data is not an array:', data.products);
        }
      })
      .catch((error) => {
        setError('Failed to fetch products.');
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // Function to handle the "Sign Up" button click
  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  // Function to close the sign-up form
  const closeSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="App">
      <Header onSignUpClick={handleSignUpClick} />
      {showSignUp ? (
        <SignUp onClose={closeSignUp} /> // Render SignUp component if showSignUp is true
      ) : (
        <main className="main-content">
          <ProductList products={products} addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
      )}
    </div>
  );
}

export default App;
