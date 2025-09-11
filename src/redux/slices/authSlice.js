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
      console.log("response", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
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
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
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
      });
  },
});

export const { logout, setCredentials, updateCustomer } = authSlice.actions;
export default authSlice.reducer;
