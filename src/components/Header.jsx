import { Link } from "react-router-dom"; // For navigation links
import { useTheme } from "../contexts/ThemeContext";
import Settings from "./Settings";

function Header() {
  const { theme, headerTextColor } = useTheme();

  return (
    <header>
      <nav
        className="flex items-center justify-between p-4"
        style={{
          backgroundColor: theme?.headerBackgroundColor || "#3b82f6",
          color: headerTextColor || "#ffffff",
          fontFamily:
            theme?.fontFamily || "system-ui, -apple-system, sans-serif",
        }}
      >
        <div className="left-nav">
          <Link
            to="/"
            style={{
              color: headerTextColor || "#ffffff",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: headerTextColor || "#ffffff",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </div>
        <div className="center-nav">
          <h1 style={{ color: headerTextColor || "#ffffff" }}>My Vite App</h1>
          <img src=""></img>
        </div>
        <div className="right-nav flex items-center gap-4">
          <Link
            to="/"
            style={{
              color: headerTextColor || "#ffffff",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: headerTextColor || "#ffffff",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            About
          </Link>
          <Settings />
        </div>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
}

export default Header;
