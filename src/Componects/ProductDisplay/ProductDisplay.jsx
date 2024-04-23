import React from "react";
import "./productdisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <div className="productdisplay-image-list">
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
