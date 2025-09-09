import { Link } from "react-router-dom"; // For navigation links
import { useTheme } from "../contexts/ThemeContext";
import Settings from "./Settings";
import Search from "./search";
import Profile from "./Profile";
import Cart from "./Cart";

function Header() {
  const { theme, headerTextColor } = useTheme();

  return (
    <header>
      <nav
        className="flex items-center justify-between px-[60px] py-[15px]"
        style={{
          backgroundColor: theme?.headerBackgroundColor || "#ffffff",
          color: headerTextColor || "#ffffff",
          fontFamily:
            theme?.fontFamily || "system-ui, -apple-system, sans-serif",
        }}
      >
        <div className="left-nav">
          <Link
            className="text-[16px] font-medium uppercase"
            to="/"
            style={{
              color: headerTextColor || "#111111",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            className="text-[16px] font-medium uppercase"
            to="/Category"
            style={{
              color: headerTextColor || "#111111",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Category
          </Link>
          <Link
            className="text-[16px] font-medium uppercase"
            to="/shop"
            style={{
              color: headerTextColor || "#111111",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Shop
          </Link>
        </div>
        <div className="center-nav">
          <h1
            className="uppercase lg:text-[32px] font-medium"
            style={{ color: headerTextColor || "#111111" }}
          >
            Store name
          </h1>
          <img src=""></img>
        </div>
        <div className="right-nav flex items-center gap-4">
          <Link
            className="text-[16px] font-medium uppercase"
            to="/shop"
            style={{
              color: headerTextColor || "#111111",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            About Us
          </Link>
          <Link
            className="text-[16px] font-medium uppercase"
            to="/about"
            style={{
              color: headerTextColor || "#111111",
              margin: "0 1rem",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
          <Search />
          <Profile />
          <Cart />
          <Settings />
        </div>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
}

export default Header;
