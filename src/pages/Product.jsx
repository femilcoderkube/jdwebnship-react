import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";
import s01 from "../assets/images/s-01.jpg";
import s02 from "../assets/images/s-02.jpg";
import s03 from "../assets/images/s-03.jpg";
import s04 from "../assets/images/s-04.jpg";
import s05 from "../assets/images/s-05.jpg";
import CardComponent from "../components/CardComponent";

function Product() {
  // State for price range slider
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Dummy product data
  const products = [
    {
      id: 1,
      productName: "Women's Classic Watch",
      category: "Women's Watch",
      price: 199.99,
      inStock: true,
      imageSrc: s01,
    },
    {
      id: 2,
      productName: "Men's Sport Perfume",
      category: "Perfumes for Men",
      price: 49.99,
      inStock: false,
      imageSrc: s02,
    },
    {
      id: 3,
      productName: "Graphic T-Shirt",
      category: "T-Shirts",
      price: 29.99,
      inStock: true,
      imageSrc: s03,
    },
    {
      id: 4,
      productName: "Luxury Women's Watch",
      category: "Women's Watch",
      price: 299.99,
      inStock: true,
      imageSrc: s04,
    },
    {
      id: 5,
      productName: "Casual T-Shirt",
      category: "T-Shirts",
      price: 19.99,
      inStock: false,
      imageSrc: s05,
    },
  ];

  return (
    <div className="">
      <CommonHeader />
      <div className="mx-auto py-[50px] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 sm:px-6 lg:px-10 xl:px-[60px]">
          {/* Left Column: Filters */}
          <div className="lg:col-span-2 text-start">
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase text-[14px] text-[#111111]">
                Filter By <span>(2)</span>
              </h4>
              <span className="underline">Clear All</span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Filters</h3>

            {/* Availability Filter */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2 uppercase text-[14px] text-[#111111]">
                Availability
              </h4>
              <label className="flex items-center mb-2 text-[14px]">
                <input type="checkbox" className="mr-2" defaultChecked />
                In Stock
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Out of Stock
              </label>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2 uppercase text-[14px] text-[#111111]">
                Category
              </h4>
              <label className="flex items-center mb-2 text-[14px]">
                <input type="checkbox" className="mr-2" />
                Women's Watch
              </label>
              <label className="flex items-center mb-2 text-[14px]">
                <input type="checkbox" className="mr-2" />
                Perfumes for Men
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                T-Shirts
              </label>
            </div>

            {/* Price Range Slider */}
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase text-[14px] text-[#111111]">
                Price Range
              </h4>
              <div className="flex justify-between mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([+e.target.value, priceRange[1]])
                }
                className="w-full mb-2"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], +e.target.value])
                }
                className="w-full"
              />
            </div>
          </div>

          {/* Right Column: Product Display */}
          <div className="lg:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product, index) => (
                <CardComponent
                  key={index}
                  productName={product.productName}
                  price={product.price}
                  imageSrc={product.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
