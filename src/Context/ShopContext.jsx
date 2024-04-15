import React, { createContext } from "react";
import Product from "../Componects/assets/product";

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  //state
  const contextValue = { Product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
