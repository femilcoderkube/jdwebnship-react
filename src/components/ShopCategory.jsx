import React from "react";
import "../App.css";

import CardSlider from "./CardSlider";

function ShopCategory() {
  return (
    <div className="py-[50px] lg:py-[100px]">
      <p className="uppercase">The Essentials</p>
      <h2 className="text-[32px] lg:text-[42px] font-bold mb-[20px] md-[30px] lg:mb-[50px]">
        Shop by Category
      </h2>
      <CardSlider />
    </div>
  );
}

export default ShopCategory;
