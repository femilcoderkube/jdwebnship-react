import React from "react";
import { useTheme } from "../contexts/ThemeContext";
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
        <div className="flex">
          <span>Step into style </span> • <span> Empower your look</span>
        </div>
      </Marquee>
    </div>
  );
}
export default Advertisment;
