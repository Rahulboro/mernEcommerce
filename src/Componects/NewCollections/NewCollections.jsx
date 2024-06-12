import React from "react";
import "./NewCollections.css";
import New_Collection_Data from "../assets/new_collection";
import Item from "../Item/Item";
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {New_Collection_Data.map((item, i) => {
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

export default NewCollections;
