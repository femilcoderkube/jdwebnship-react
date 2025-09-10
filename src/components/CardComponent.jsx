import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import whatsapp from "../assets/Whatsapp.svg";
import save from "../assets/heart.svg";

const CardComponent = ({ productName, price, imageSrc }) => {
  const { textColor } = useTheme();

  return (
    <div
      className="text-start relative card-element"
      style={{
        height: "491px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        className="bg-[#F8F8F8] rounded-[18px] flex flex-col align-items-center justify-center"
        style={{ height: "418px", borderRadius: "18px", overflow: "hidden" }}
      >
        <img
          src={imageSrc}
          alt={productName}
          style={{
            width: "100%",
            objectFit: "contain",
            transform: "rotate(0deg)",
            opacity: 1,
          }}
        />
      </div>
      <div className="hover-content absolute left-0 right-0 h-100">
        <div className="flex justify-between h-100">
          <span className="bg-[#1111116b] uppercase text-[14px] px-[15px] py-[8px] rounded-[8px] absolute top-[15px] left-[8px] font-bold text-white">
            Out Of Stock
          </span>
          <div className="social-icon absolute top-[15px] flex flex-col gap-2 right-[15px]">
            <a
              href=""
              className="bg-[#25D366] p-[9px] w-[42px] h-[42px] inline-block rounded-[8px]"
            >
              <img src={whatsapp} alt="" srcset="" />
            </a>

            <button className="bg-[#1111116b] p-[9px] w-[42px] h-[42px] inline-block rounded-[8px]">
              <img src={save} alt="" srcset="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3
          className="line-clamp-1 mb-[6px]"
          style={{ margin: 0, fontSize: "18px" }}
        >
          <a href="">{productName}</a>
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
