import React from "react";

const CardComponent = ({ productName, price, imageSrc }) => {
  return (
    <div
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
      <div>
        <h3 style={{ margin: 0, fontSize: "18px" }}>{productName}</h3>
        <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>${price}</p>
      </div>
    </div>
  );
};

export default CardComponent;
