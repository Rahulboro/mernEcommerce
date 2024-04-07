import React from "react";
import "./Popular.css";
import product_Data from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="Popular">
      <h1>Popular In Men</h1>
      <hr />
      <div className="products-item">
        {product_Data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price_new={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
