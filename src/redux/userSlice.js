import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const userReducer = userSlice.reducer;
