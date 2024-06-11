import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <a href={`/product/${props.id}`}>
        <img
          to={`/product/${props.id}`}
          src={props.image}
          style={{ width: "300px" }}
          alt=""
        />
      </a>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.price_new}</div>
        <div className="item-price-old">${props.price_old}</div>
      </div>
    </div>
  );
};
export default Item;
