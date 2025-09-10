import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const CardComponent = ({ productName, price, imageSrc }) => {
  const { textColor } = useTheme();

  return (
    <div
      className="text-start"
      style={{
        width: "334.79998779296875px",
        height: "491px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <img
        src={imageSrc}
        alt={productName}
        style={{
          width: "334.79998779296875px",
          height: "418px",
          borderRadius: "18px",
          objectFit: "cover",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      />
      <div className="hover-content">
        <span className="category-title uppercase text-[14px]">
          Out Of Stock
        </span>
        <div className=""></div>
      </div>
      <div>
        <h3
          className="line-clamp-1 mb-[6px]"
          style={{ margin: 0, fontSize: "18px" }}
        >
          {productName}
        </h3>
        <div className="flex gap-2">
          <p
            className="font-bold"
            style={{ margin: 0, fontSize: "18px", color: textColor }}
          >
            ₹{price}
          </p>
          <p
            className="font-regular line-through"
            style={{ margin: 0, fontSize: "18px", color: "#555" }}
          >
            ₹19,999
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
