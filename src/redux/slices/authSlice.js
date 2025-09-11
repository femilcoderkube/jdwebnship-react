// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// --- Thunks
export const login = createAsyncThunk(
  "auth/login",
  async ({ credentials, navigate }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/customer/login", credentials);
      if (response?.data?.success || response?.status) {
        navigate("/")
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async ({ navigate }, { rejectWithValue, dispatch }) => {
    console.log("sdhjksdffghjskdfghjs");
    try {
      const response = await axiosInstance.post("/customer/logout", {
        user_token: import.meta.env.VITE_API_KEY,
      });
      console.log("response",response);
      if (response?.data?.success || response?.status) {
        // Clear state
        dispatch(logout());
        dispatch({ type: "RESET_APP" }); // if you have global reset
        // dispatch(clearCart()); // if cart slice

        // Redirect to login
        navigate("/");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Logout failed"
      );
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
    updateCustomer: (state, action) => {
      if (state.user && state.user.customer) {
        state.user.customer = {
          ...state.user.customer,
          ...action.payload,
        };
      }
    },
    updateAccountDetailsSuccess: (state, action) => {
      if (state.user && state.user.customer) {
        state.user.customer.firstname = action.payload.firstname;
        state.user.customer.lastname = action.payload.lastname;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        state.isAuthenticated = false;
      })

      // logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export const { logout, setCredentials, updateCustomer } = authSlice.actions;
export default authSlice.reducer;
