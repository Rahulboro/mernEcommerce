import React from "react";
import "./Navbar.css";
import logo from "../assets/icons/e-commerce-high-resolution-logo-transparent.png";
import cart_icon from "../assets/icons/cart-solid-24.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img style={{ width: "60px" }} src={logo} alt="logo-image" />
        <p>ECOM</p>
      </div>
      <ul className="nav-links">
        <li>
          Shop
          <hr />
        </li>
        <li>men</li>
        <li>women</li>
        <li>kids</li>
      </ul>
      <div className="navbar-cart">
        <button>Login</button>
        <img src={cart_icon} />
        <div className="navbar-count">0</div>
      </div>
    </nav>
  );
};
export default Navbar;
