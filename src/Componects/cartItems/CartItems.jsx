import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../assets/icons/minus-regular-24.png";

const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="cartItems-format">
        <img src="" alt="" className="carticon-product-icon" />
        <p></p>
        <p></p>
        <button className="cartitems-quantity"></button>
        <p></p>
        <img
          src={removeIcon}
          onClick={() => {
            removeFromCart;
          }}
        ></img>
      </div>
      <hr />
    </div>
  );
};

export default CartItems;
