import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function CommonHeader({ className = "", ...props }) {
  const { theme, bottomFooterTextColor } = useTheme();
  const location = useLocation();

  // Dynamic content based on route
  let innerContent;
  if (location.pathname === "/") {
    innerContent = (
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Home Page Header</h1>
        <nav className="flex gap-4">
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    );
  } else if (location.pathname === "/about") {
    innerContent = (
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">About Page Header</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </nav>
      </div>
    );
  } else {
    innerContent = (
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Default Header</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <header
      className={`${className}`}
      style={{
        backgroundColor: theme?.bottomFooterBackgroundColor || "#ffffff",
        color: bottomFooterTextColor || "#111111",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
      {...props}
    >
      {innerContent}
    </header>
  );
}

export default CommonHeader;
