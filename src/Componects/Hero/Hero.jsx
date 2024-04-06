import React from "react";
import "./Hero.css";
import hero_wave_icon from "../assets/icons/wave.png";
import sale_icon from "../assets/icons/sale.png";
import hero_image from "../assets/icons/hero-model.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Hey</p>
            <img src={hero_wave_icon} alt="sale_icon" />
          </div>
          <p>Get Your </p>
          <p>Latest Collection </p>

          <div className="hero-latest-btn">
            <div>Discount Upto 70%</div>
            <img src={sale_icon} alt="sale icon two"></img>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img style={{ width: "100%" }} src={hero_image} alt="hero image"></img>
      </div>
    </div>
  );
};
export default Hero;
