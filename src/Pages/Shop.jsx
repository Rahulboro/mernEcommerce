import React from "react";
import Hero from "../Componects/Hero/Hero";
import Popular from "../Componects/Popular/Popular";
import Offers from "../Componects/Offers/Offers";
import NewCollections from "../Componects/NewCollections/NewCollections";
import Newletter from "../Componects/Newsletter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newletter />
    </div>
  );
};

export default Shop;
