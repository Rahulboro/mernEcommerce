import React from "react";
import Hero from "../Componects/Hero/Hero";
import Popular from "../Componects/Popular/Popular";
import Offers from "../Componects/Offers/Offers";
import NewCollections from "../Componects/NewCollections/NewCollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
