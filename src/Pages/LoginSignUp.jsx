import React from "react";
import loginSignUp from "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button className="login-btn">Continue</button>
        <div className="loginSignup-login">
          <p>
            Already have Account <span>Login Here</span>
          </p>
        </div>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id=""></input>
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignUp;
