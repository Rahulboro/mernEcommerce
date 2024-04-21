import React, { useCallback, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Componects/BreadCrums/BreadCrum";
import ProductDisplay from "../Componects/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};
export default Product;
