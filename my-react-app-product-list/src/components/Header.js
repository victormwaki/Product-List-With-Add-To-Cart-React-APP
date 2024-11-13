// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo"><a href="#">Dessert</a></div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="btn-container">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
