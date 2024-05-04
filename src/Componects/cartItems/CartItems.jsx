import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../assets/icons/minus-regular-24.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
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
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartItems-format">
              <img
                src={e.image}
                style={{ width: "350px" }}
                alt=""
                className="carticon-product-icon"
              />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img
                src={removeIcon}
                onClick={() => {
                  removeFromCart(e.id);
                }}
              />
            </div>
          );
        }
      })}

      <hr />
    </div>
  );
};

export default CartItems;
