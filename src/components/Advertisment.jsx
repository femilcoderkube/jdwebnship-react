import React from "react";
import { useTheme } from "../contexts/ThemeContext";

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
      <span>Advertisment</span>
    </div>
  );
}
export default Advertisment;
