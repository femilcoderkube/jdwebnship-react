import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import CardComponent from "./CardComponent";

function ProductSection() {
  const products = [
    {
      productName: "Chanel Jumbo Paris Glossy bag with...",
      price: "3,298",
      imageSrc:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      productName: "Sample Product 2",
      price: "49.99",
      imageSrc:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      productName: "Sample Product 3",
      price: "19.99",
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    },
    {
      productName: "Sample Product 1",
      price: "29.99",
      imageSrc:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      productName: "Sample Product 2",
      price: "49.99",
      imageSrc:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      productName: "Sample Product 3",
      price: "19.99",
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      <span>Explore</span>
      <span>New Trending</span>
      <section className="px-4 sm:px-6 lg:px-10 xl:px-[60px] py-[50px] lg:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 xxl:grid-cols-5  gap-4">
          {products.map((product, index) => (
            <CardComponent
              key={index}
              productName={product.productName}
              price={product.price}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProductSection;
