import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchCities, addCity, deleteCity, editCity } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const citiesSlice = createSlice({
  name: "cities",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchCities.pending]: handlePending,
    [fetchCities.fulfilled](state, action) {
      console.log(state.items);
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchCities.rejected]: handleRejected,
    [addCity.pending]: handlePending,
    [addCity.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addCity.rejected]: handleRejected,
    [deleteCity.rejected]: handlePending,
    [deleteCity.fulfilled](state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },
    [deleteCity.rejected]: handleRejected,
    [editCity.pending]: handlePending,
    [editCity.fulfilled](state, action) {
      state.items.map((city) =>
        city.id === action.payload.id ? (city.name = action.payload.name) : city
      );
      state.isLoading = false;
      state.error = null;
    },
    [editCity.rejected]: handleRejected,
  },
});

export const citiesReducer = citiesSlice.reducer;
