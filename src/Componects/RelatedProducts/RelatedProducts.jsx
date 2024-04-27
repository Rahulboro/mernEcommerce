import React from "react";
import "./RelatedProducts.css";
import all_product from "../assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {all_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price_new={item.new_price}
              price_old={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
