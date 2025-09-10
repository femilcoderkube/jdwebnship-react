import { Link } from "react-router-dom"; // For navigation links
import { useTheme } from "../contexts/ThemeContext";
import Settings from "./Settings";
import Search from "./Search";
import Profile from "./Profile";
import Cart from "./Cart";
import { useState, useEffect } from "react";

function Header() {
  const { theme, headerTextColor } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav
        className="flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-[60px] py-[12px] lg:py-[15px]"
        style={{
          backgroundColor: theme?.headerBackgroundColor || "#ffffff",
          color: headerTextColor || "#ffffff",
          fontFamily:
            theme?.fontFamily || "system-ui, -apple-system, sans-serif",
        }}
      >
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Hamburger for mobile */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-black/10 hover:bg-black/15 transition"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke={headerTextColor || "#111111"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="left-nav hidden lg:flex items-center">
            <Link
              className="text-[14px] xl:text-[16px] font-medium uppercase hover:underline transition-all duration-300"
              to="/"
              style={{
                color: headerTextColor || "#111111",
                margin: "0 1rem 0 0",
              }}
            >
              Home
            </Link>
            <Link
              className="text-[14px] xl:text-[16px] font-medium uppercase hover:underline transition-all duration-300"
              to="/shop"
              style={{
                color: headerTextColor || "#111111",
                margin: "0 1rem",
              }}
            >
              Category
            </Link>
            <Link
              className="text-[14px] xl:text-[16px] font-medium uppercase hover:underline transition-all duration-300"
              to="/product"
              style={{
                color: headerTextColor || "#111111",
                margin: "0 1rem",
              }}
            >
              Shop
            </Link>
          </div>
        </div>

        <div className="center-nav flex-1 flex items-center justify-center">
          <h1
            className="uppercase text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] font-medium text-center"
            style={{ color: headerTextColor || "#111111" }}
          >
            Store name
          </h1>
        </div>
        <div className="right-nav flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center">
            <Link
              className="text-[14px] xl:text-[16px] font-medium uppercase hover:underline transition-all duration-300"
              to="/shop"
              style={{
                color: headerTextColor || "#111111",
                margin: "0 1rem",
              }}
            >
              About Us
            </Link>
            <Link
              className="text-[14px] xl:text-[16px] font-medium uppercase hover:underline transition-all duration-300"
              to="/about"
              style={{
                color: headerTextColor || "#111111",
                margin: "0 1rem",
              }}
            >
              Contact Us
            </Link>
          </div>
          <Search />
          <Profile />
          <Cart />
          <Settings />
        </div>
        {/* Add more links as needed */}
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 h-full w-72 max-w-[80%] z-50 lg:hidden transform transition-transform duration-300 ease-out border-r border-black/10`}
        style={{
          backgroundColor: theme?.headerBackgroundColor || "#ffffff",
          color: headerTextColor || "#111111",
          fontFamily:
            theme?.fontFamily || "system-ui, -apple-system, sans-serif",
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
          <span className="uppercase font-semibold">Store name</span>
          <button
            type="button"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-black/10 hover:bg-black/15 transition"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            autoFocus
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke={headerTextColor || "#111111"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-2 items-start">
          <Link
            to="/"
            className="px-3 py-2 rounded hover:bg-black/10 transition uppercase text-sm"
            style={{ color: headerTextColor || "#111111" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Category"
            className="px-3 py-2 rounded hover:bg-black/10 transition uppercase text-sm"
            style={{ color: headerTextColor || "#111111" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Category
          </Link>
          <Link
            to="/shop"
            className="px-3 py-2 rounded hover:bg-black/10 transition uppercase text-sm"
            style={{ color: headerTextColor || "#111111" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/shop"
            className="px-3 py-2 rounded hover:bg-black/10 transition uppercase text-sm"
            style={{ color: headerTextColor || "#111111" }}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 rounded hover:bg-black/10 transition uppercase text-sm"
            style={{ color: headerTextColor || "#111111" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </aside>
    </header>
  );
}

export default Header;
