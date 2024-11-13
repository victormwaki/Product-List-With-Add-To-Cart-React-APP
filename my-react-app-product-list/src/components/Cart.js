// src/components/Cart.js
import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart <span>({cartItems.length})</span></h2>
      <div id="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price.toFixed(2)}</p>
              <button className="remove-item" onClick={() => removeFromCart(index)}>X</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      {cartItems.length > 0 && (
        <button id="confirm-order" onClick={() => alert(`Thank you for your order! Your total is $${totalPrice.toFixed(2)}`)}>
          Confirm Order
        </button>
      )}
    </div>
  );
}

export default Cart;
