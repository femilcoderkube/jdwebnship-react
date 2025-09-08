import { Link } from "react-router-dom"; // For navigation links
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { theme, setFontFamily, setBackgroundColor, setButtonBackgroundColor } =
    useTheme();
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-blue-500">
        <div className="left-nav">
          <Link
            to="/"
            style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}
          >
            About
          </Link>
        </div>
        <div className="center-nav">
          <h1>My Vite App</h1>
          <img src=""></img>
        </div>
        <div className="right-nav flex items-center gap-2">
          <Link
            to="/"
            style={{
              color: "white",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: "white",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            About
          </Link>
          <select
            value={theme?.fontFamily || "system-ui, -apple-system, sans-serif"}
            onChange={(e) => setFontFamily(e.target.value)}
            className="ml-4 p-1 rounded"
            aria-label="Select font family"
          >
            <option value={"system-ui, -apple-system, sans-serif"}>
              System UI
            </option>
            <option value={'"Roboto", system-ui, -apple-system, sans-serif'}>
              Roboto
            </option>
            <option value={'"Inter", system-ui, -apple-system, sans-serif'}>
              Inter
            </option>
            <option value={"Georgia, serif"}>Georgia</option>
            <option value={"Courier New, monospace"}>Courier New</option>
          </select>
          <label style={{ color: "white", marginLeft: "1rem" }}>
            BG
            <input
              type="color"
              value={theme?.backgroundColor || "#ffffff"}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="ml-2 align-middle"
              aria-label="Select background color"
            />
          </label>
          <label style={{ color: "white", marginLeft: "0.75rem" }}>
            Button
            <input
              type="color"
              value={theme?.buttonBackgroundColor || "#007bff"}
              onChange={(e) => setButtonBackgroundColor(e.target.value)}
              className="ml-2 align-middle"
              aria-label="Select button background color"
            />
          </label>
        </div>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
}

export default Header;
