import React from "react";
import "./Hero.css";
import sale_icon from "../assets/icons/sale.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      </div>
      <div>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={sale_icon} alt="sale_icon" />
          <p>Collection</p>
          <p>for everyone</p>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};
export default Hero;
