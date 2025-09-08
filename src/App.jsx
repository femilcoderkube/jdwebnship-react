import { Outlet, Routes, Route } from "react-router-dom"; // NEW: Import Routes and Route
import Home from "./pages/Home"; // NEW: Import pages
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          {" "}
          {/* NEW: Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed, e.g., <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* Note: Outlet is not needed if using Routes directly; this setup uses Routes for simplicity */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
