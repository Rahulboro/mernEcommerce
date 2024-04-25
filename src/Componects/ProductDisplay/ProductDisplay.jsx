import React from "react";
import "./productdisplay.css";
import star_icon from "../assets/icons/star-solid-24.png";
import star_dull from "../assets/icons/star-regular-24.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <div className="productdisplay-image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(154)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-old">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-descripttion">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus
            odit ab illo quis harum! Fugiat aut maxime veritatis iusto facilis,
            eos enim, assumenda itaque sapiente debitis perferendis et
            temporibus!.
          </div>
          <div className="productdisplay-right-size">
            <h1>Size:</h1>
            <div className="ProductDisplay-right-size">
              <div className="">S</div>
              <div className="">M</div>
              <div className="">L</div>
              <div className="">XL</div>
              <div className="">XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Category:</span>Women, T-Shirt, Crop-top
          </p>
          <p className="productdisplay-right-category">
            <span>tags:</span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
