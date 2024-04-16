import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Componects/assets/icons/chevrons-down-regular-24.png";
import Item from "../Componects/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-12 </span>out of 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt=""></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
