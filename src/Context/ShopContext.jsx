import React, { createContext } from "react";
import all_product from "../Componects/assets/product";

export const ShopContext = createContext(null);
const getDefault = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  //state
  const [cartItems, setCartItems] = React.useState(getDefault());
  const contextValue = { all_product, cartItems };
  //methods
  const addToCart = (ItemId) => {
    setCartItems({ ...cartItems, [ItemId]: cartItems[ItemId] + 1 });
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
