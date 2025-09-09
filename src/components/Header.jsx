import { Link } from "react-router-dom"; // For navigation links
import Settings from "./Settings";

function Header() {
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
        <div className="right-nav flex items-center gap-4">
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
          <Settings />
        </div>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
}

export default Header;
