import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/icons/e-commerce-high-resolution-logo-transparent.png";
import cart_icon from "../assets/icons/cart-solid-24.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img style={{ width: "60px" }} src={logo} alt="logo-image" />
        <p>ECOM</p>
      </div>
      <ul className="nav-links">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none " }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} />
        </Link>
        <div className="navbar-count">0</div>
      </div>
    </nav>
  );
};
export default Navbar;
