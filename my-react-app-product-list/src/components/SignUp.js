// src/components/SignUp.js
import React from 'react';
import './SignUp.css';

function SignUp({ onClose }) {
  return (
    <main className='signup-content'>
      <div className="wrapper">
        <h1>Signup</h1>
        <form id="signUpForm">
          <div>
            <label htmlFor="firstname">
              <svg /* SVG content */ />
            </label>
            <input required type="text" id="firstname" placeholder="First name" />
          </div>
          <div>
            <label htmlFor="lastname">
              <svg /* SVG content */ />
            </label>
            <input required type="text" id="lastname" placeholder="Last name" />
          </div>
          <div>
            <label htmlFor="email">
              <span>@</span>
            </label>
            <input required type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">
              <svg /* SVG content */ />
            </label>
            <input required type="password" id="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="confirmpassword">
              <svg /* SVG content */ />
            </label>
            <input required type="password" id="confirmpassword" placeholder="Confirm Password" />
          </div>
          <button type="submit" id="signUpButton">Signup</button>
        </form>
        <p>Already have an Account? <a href="login.html">Login</a></p>
        <div className="popup" id="popup">
          <img src="/assets/images/check_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt='' className="svg-image" />
          <h2 style={{ color: '#75FB4C' }}>Successful!</h2>
          <p>You have successfully registered an account.</p>
          <button onClick={onClose}>Ok</button>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
