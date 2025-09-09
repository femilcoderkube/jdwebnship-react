import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { getContrastingColor } from "../utils/colorUtils";

function BottomFooter({}) {
  const { theme, bottomFooterTextColor } = useTheme();

  return (
    <footer
      className="p-4 text-center"
      style={{
        backgroundColor: theme?.bottomFooterBackgroundColor || "#1f2937",
        color: bottomFooterTextColor || "#ffffff",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <p>&copy; 2025 My Vite App. All rights reserved.</p>
    </footer>
  );
}

export default BottomFooter;
