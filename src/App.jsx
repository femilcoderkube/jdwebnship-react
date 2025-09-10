import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import CommonHeader from "./components/CommonHeader";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import MyAccount from "./pages/MyAccount";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import ScrollSmoother from "./gsap-bonus/ScrollSmoother"; // Local file import
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFailure from "./pages/OrderFailure";
import "./App.css";

// Register plugins once at the module level
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useLayoutEffect(() => {
    // Verify elements exist
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (wrapper && content) {
      // Initialize ScrollSmoother
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Smoothing duration (seconds)
        effects: true, // Enable data-speed/data-lag effects
        normalizeScroll: true, // Improves touch device scrolling
      });

      // Cleanup on unmount
      return () => {
        smoother && smoother.kill();
      };
    } else {
      console.warn("ScrollSmoother: Wrapper or content element not found.");
    }
  }, []); // Empty dependency array: run once after mount

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
          <Route path="/shop" element={<Product />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Shop />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
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
