import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { clearState, loadState, saveState } from "../utils/sessionStorage";
import authSlice from "../redux/slices/authSlice"; 
// import cartReducer from "./slices/cartSlice";
// import wishlistReducer from "./slices/wishlistSlice";
// import storeReducer from "./slices/storeSlice";
// import productReducer from "./slices/productSlice";
// import checkoutReducer from "./slices/checkoutSlice";
// import filtersReducer from "./slices/filterSlice";
// import ordersReducer from "./slices/ordersSlice";
// import accountDetailsReducer from "./slices/accountDetailsSlice";
// import shippingAddressReducer from "./slices/shippingAddressSlice";
// import { loadState, saveState, clearState } from "../utils/sessionStorage";

// --- combine all slices
const appReducer = combineReducers({
  auth: authSlice,
  // cart: cartReducer,
  // orders: ordersReducer,
  // accountDetails: accountDetailsReducer,
  // shippingAddress: shippingAddressReducer,
  // wishlist: wishlistReducer,
  // store: storeReducer,
  // products: productReducer,
  // checkout: checkoutReducer,
  // filters: filtersReducer,
});

// --- root reducer with RESET_APP handling
const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    clearState(); // clear localStorage
    state = undefined; // reset all slices to initialState
  }
  return appReducer(state, action);
};

// --- load persisted state
const persistedState = loadState();

// --- create store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

// --- persist selected reducers on every change
store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    cart: store.getState().cart,
    wishlist: store.getState().wishlist,
    store: store.getState().store,
    products: store.getState().products,
    filters: store.getState().filters,
  });
});

export default store;
