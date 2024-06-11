import React from "react";
import "./Popular.css";
import product_Data from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-heading">
        <h1>Popular In Men</h1>
        <hr />
      </div>
      <div className="container-popular-item">
        <div className="popular-item">
          {product_Data.map((itemPara, i) => {
            return (
              <Item
                key={i}
                id={itemPara.id}
                name={itemPara.name}
                image={itemPara.image}
                price_new={itemPara.new_price}
                price_old={itemPara.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
