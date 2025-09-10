import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import AdvertismentImg from "../assets/images/Advertisment.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Advertisment() {
  const { theme, bottomFooterTextColor, buttonTextColor } = useTheme();
  return (
    <div
      className="py-[15px]"
      style={{
        backgroundColor: theme?.bottomFooterBackgroundColor || "#1f2937",
        color: bottomFooterTextColor || "#ffffff",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <Marquee>
        <div className="flex gap-4 text-[14px]">
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
        </div>
      </Marquee>
      <div
        className="py-[24px] px-4 sm:px-6 lg:px-10 xl:px-[60px] rounded-[34px] relative"
        style={{
          width: "100%",
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
            width: "100%",
            height: "100%",
            borderRadius: "34px",
            objectFit: "cover",
          }}
        />
        <div className="absolute top-1/2 left-1/2 w-full max-w-[320px] sm:max-w-[730px] -translate-x-1/2 -translate-y-1/2 category-title p-[20px] sm:p-[40px] md:p-[60px] rounded-[34px] overflow-hidden">
          <div className="flex flex-col gap-[15px]">
            <h2
              className="text-lg font-bold text-[26px] lg:text-[42px] text-white"
              style={{ whiteSpace: "normal" }}
            >
              Browse Our Fashion Paradise!
            </h2>
            <p
              className="text-[16px] lg:text-[22px] text-white"
              style={{ whiteSpace: "normal" }}
            >
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
            <div>
              <Link
                to={"/shop"}
                className="inline-flex gap-2 btn px-[24px] py-[15px] rounded-lg text-sm font-medium focus:outline-none items-center w-max justify-center"
              >
                View Collection
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke={buttonTextColor}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/* <p className="text-md text-gray-600">{item.price}</p> */}
        </div>
      </div>
      <Marquee>
        <div className="flex gap-4 text-[14px]">
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
          <span>Step into style </span> • <span> Empower your look</span> •
        </div>
      </Marquee>
    </div>
  );
}
export default Advertisment;
