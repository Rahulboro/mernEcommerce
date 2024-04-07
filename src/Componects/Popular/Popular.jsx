import React from "react";
import "./Popular.css";
import product_Data from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Men</h1>
      <hr />
      <div className="popular-item">
        {product_Data.map((item, i) => {
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

export default Popular;
