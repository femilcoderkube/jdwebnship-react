import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import AdvertismentImg from "../assets/images/Advertisment.png";
import Marquee from "react-fast-marquee";

function Advertisment() {
  const { theme, bottomFooterTextColor } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme?.bottomFooterBackgroundColor || "#1f2937",
        color: bottomFooterTextColor || "#ffffff",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <Marquee>
        <div className="flex gap-3">
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
        </div>
      </Marquee>
      <div
        style={{
          width: "1800px",
          height: "780px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={AdvertismentImg}
          alt="Advertisement"
          style={{
            width: "1770px",
            height: "780px",
            borderRadius: "34px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
export default Advertisment;
