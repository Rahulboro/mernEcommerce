import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { Product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="ShopCategory-indexShort"></div>
    </div>
  );
};

export default ShopCategory;
