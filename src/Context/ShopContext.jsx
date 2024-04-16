import React, { createContext } from "react";
import all_product from "../Componects/assets/product";

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  //state
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
