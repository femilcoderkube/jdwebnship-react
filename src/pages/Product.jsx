import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";

function Product() {
  // State for price range slider
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Women's Classic Watch",
      category: "Women's Watch",
      price: 199.99,
      inStock: true,
    },
    {
      id: 2,
      name: "Men's Sport Perfume",
      category: "Perfumes for Men",
      price: 49.99,
      inStock: false,
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      category: "T-Shirts",
      price: 29.99,
      inStock: true,
    },
    {
      id: 4,
      name: "Luxury Women's Watch",
      category: "Women's Watch",
      price: 299.99,
      inStock: true,
    },
    {
      id: 5,
      name: "Casual T-Shirt",
      category: "T-Shirts",
      price: 19.99,
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <CommonHeader />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Product Page</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Filters */}
          <div className="w-full md:w-1/4 p-6 ">
            <h3 className="text-xl font-semibold mb-4">Filters</h3>

            {/* Availability Filter */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Availability</h4>
              <label className="flex items-center mb-2">
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
              <h4 className="text-lg font-medium mb-2">Category</h4>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Women's Watch
              </label>
              <label className="flex items-center mb-2">
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
              <h4 className="text-lg font-medium mb-2">Price Range</h4>
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
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p
                    className={`text-sm ${
                      product.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
