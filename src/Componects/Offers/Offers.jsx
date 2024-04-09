import React from "react";
import "./Offers.css";
import "../assets/women/pic_39.jpg";

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
        <img style={{ width: "500px" }} src="pic_39.jpg" alt="" />
      </div>
    </div>
  );
};

export default Offers;
