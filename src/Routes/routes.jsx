import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import OrderFailure from "../pages/OrderFailure";
import OrderSuccess from "../pages/OrderSuccess";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import ResetPassword from "../pages/ResetPassword";
import Shop from "../pages/Shop";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AuthGuard from "../utils/AuthGuard";

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Product />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/categories" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />

      {/* Protected routes */}
      <Route element={<AuthGuard />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-failure" element={<OrderFailure />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
