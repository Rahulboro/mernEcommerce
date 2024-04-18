import React from "react";
import right_arrow from "../assets/icons/chevron-right-regular-24.png";
import "./BreadCrum.css";

const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="breadCrum">
      Home
      <img src={right_arrow} alt="" />
      SHOP
      <img src={right_arrow} alt="" />
      {product.category} <img src={right_arrow} alt="" />
      {product.name}
    </div>
  );
};

export default BreadCrums;
