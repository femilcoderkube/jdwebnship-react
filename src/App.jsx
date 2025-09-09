import { Outlet, Routes, Route } from "react-router-dom"; // NEW: Import Routes and Route
import Home from "./pages/Home"; // NEW: Import pages
import About from "./pages/About";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import CommonHeader from "./components/CommonHeader";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <main className="main-content">
        <Routes>
          {" "}
          {/* NEW: Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Add more routes as needed, e.g., <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* Note: Outlet is not needed if using Routes directly; this setup uses Routes for simplicity */}
      </main>
      <BottomFooter />
      <Footer />
    </div>
  );
}

export default App;
