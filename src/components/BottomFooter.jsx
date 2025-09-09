import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { getContrastingColor } from "../utils/colorUtils";

function BottomFooter({}) {
  const { theme, bottomFooterTextColor } = useTheme();

  return (
    <div
      className="text-center lg:py-[70px] rounded-t-none rounded-3xl -mb-[70px] z-1"
      style={{
        backgroundColor: theme?.bottomFooterBackgroundColor || "#1f2937",
        color: bottomFooterTextColor || "#ffffff",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <form class="mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-[32px] lg:text-[42px] font-bold">
          Join Our Newsletter
        </h2>
        <p className="text-[18px] lg:text-[22px]">
          We love to surprise our subscribers with occasional gifts.
        </p>
        <div className="flex justify-center items-stretch">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
            className="px-[24px] py-[15px] md:w-[300px] rounded-l-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-0"
          />
          <button
            className="btn px-[24px] py-[15px] bg-black text-white  rounded-r-lg text-sm font-medium focus:outline-none"
            type="submit"
          >
            SUBSCRIBE
          </button>
          {/* <button
            type="submit"
            className="px-[24px] py-[15px] rounded-r-lg bg-black text-white text-sm font-medium hover:bg-black focus:outline-none"
          >
            SUBSCRIBE
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default BottomFooter;
