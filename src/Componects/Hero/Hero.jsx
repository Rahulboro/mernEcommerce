import React from "react";
import "./Hero.css";
import sale_icon from "../assets/icons/sale.png";
import hero_image from "../assets/icons/hero-model.png";

const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={sale_icon} alt="sale icon two"></img>
        </div>
      </div>
      <div className="hero-right">
        <img style={{ width: "100%" }} src={hero_image} alt="hero image"></img>
      </div>
    </div>
  );
};
export default Hero;
