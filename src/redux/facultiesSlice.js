// locul unde se modifica global state
// - aici sunt executate functiile care modifica state

import { createSlice } from "@reduxjs/toolkit";
import { addFaculty, fetchFaculties } from "./operations";

// construim o magazie de data ce poate fi acesata de orice componenta din aplicatia noastra
const facultiesSlice = createSlice({
  name: "faculties",

  // state = initalState
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: "",
  },

  // reducers pt a modifica state, fara influenta unui server
  reducers: {},

  // extra Reducers pt a modifica statea, adaugand/primind data de la server
  extraReducers: {
    [fetchFaculties.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [addFaculty.pending](state) {
      state.isLoading = true;
    },
    [addFaculty.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addFaculty.rejected](state, payload) {
      state.isLoading = false;
      state.error = payload.action;
    },
  },
});

export const facultiesReducer = facultiesSlice.reducer;
