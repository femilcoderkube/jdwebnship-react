import React from "react";
import "../App.css";

import CardSlider from "./CardSlider";

function ShopCategory() {
  return (
    <div className="py-[3.125rem] lg:py-[100px]">
      <p className="uppercase">The Essentials</p>
      <h2 className="text-[2rem] lg:text-[2.625rem] font-bold mb-[1.25rem] lg:mb-[3.125rem]">
        Shop Category
      </h2>
      <CardSlider />
    </div>
  );
}

export default ShopCategory;
