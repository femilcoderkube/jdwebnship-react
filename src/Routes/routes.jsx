// import { Route, Routes } from "react-router-dom";
// import About from "../pages/About";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import ForgotPassword from "../pages/ForgotPassword";
// import Home from "../pages/Home";
// import MyAccount from "../pages/MyAccount";
// import OrderFailure from "../pages/OrderFailure";
// import OrderSuccess from "../pages/OrderSuccess";
// import Payment from "../pages/Payment";
// import Product from "../pages/Product";
// import ProductDetail from "../pages/ProductDetail";
// import ResetPassword from "../pages/ResetPassword";
// import Shop from "../pages/Shop";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
// import AuthGuard from "../utils/AuthGuard";

// function AppRoutes() {
//   return (
//     <Routes>
//       {/* Public routes */}
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPassword />} />
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/shop" element={<Product />} />
//       <Route path="/shop/:id" element={<ProductDetail />} />
//       <Route path="/categories" element={<Shop />} />
//       <Route path="/cart" element={<Cart />} />

//       {/* Protected routes */}
//       <Route element={<AuthGuard />}>
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/my-account" element={<MyAccount />} />
//         <Route path="/order-success" element={<OrderSuccess />} />
//         <Route path="/order-failure" element={<OrderFailure />} />
//       </Route>
//     </Routes>
//   );
// }

// export default AppRoutes;


import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Routes
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

// ✅ ProtectedRoute: Only logged-in users can access
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("isAuthenticated 1",isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

// ✅ GuestRoute: Only guests can access (redirect logged-in users)
const GuestRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("isAuthenticated 2",isAuthenticated);
  return !isAuthenticated ? children : <Navigate to="/" replace />;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Guest-only routes */}
      <Route
        path="/signin"
        element={
          <GuestRoute>
            <SignIn />
          </GuestRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <GuestRoute>
            <SignUp />
          </GuestRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <GuestRoute>
            <ForgotPassword />
          </GuestRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <GuestRoute>
            <ResetPassword />
          </GuestRoute>
        }
      />

      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Product />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/categories" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />

      {/* Protected routes */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-success"
        element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-failure"
        element={
          <ProtectedRoute>
            <OrderFailure />
          </ProtectedRoute>
        }
      />

      {/* Catch-all for invalid routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
