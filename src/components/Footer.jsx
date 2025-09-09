// src/components/Footer.jsx
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const { theme, footerTextColor } = useTheme();

  return (
    <footer
      className="p-4 text-center"
      style={{
        backgroundColor: theme?.footerBackgroundColor || "#1f2937",
        color: footerTextColor || "#ffffff",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <p>&copy; 2025 My Vite App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
