import React, { createContext } from "react";
import Product from "../Componects/assets/product";

export const Shopcontext = createContext(null);
const ShopcontextProvider = (props) => {
  //state
  const contextValue = { Product };
  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
