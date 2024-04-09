import React from "react";
import "./Offers.css";
import exclusiveofferimage from "../assets/icons/hero-model2.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers only for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>SHOP NOW</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveofferimage} alt="" />
      </div>
    </div>
  );
};

export default Offers;
