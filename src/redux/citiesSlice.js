import { createSlice, nanoid } from "@reduxjs/toolkit";

const citiesInitalState = [
  { id: 1, name: "Kyiv" },
  { id: 2, name: "London" },
  { id: 3, name: "Timisoara" },
];

const citiesSlice = createSlice({
  name: "cities",
  initialState: citiesInitalState,
  reducers: {
    addCity: {
      reducer(state, action) {
        // action.payload = prepare (payload)
        return [...state, action.payload];
      },
      prepare(city) {
        return {
          payload: {
            id: nanoid(),
            city,
          },
        };
      },
    },
    deleteCity: {
      reducer(state, action) {
        return state.filter((city) => city.id !== action.payload.id);
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
    editCity: {
      reducer(state, action) {
        return state.map((city) =>
          city.id === action.payload.id
            ? { id: city.id, name: action.payload.newCity }
            : city
        );
      },
      prepare(id, newCity) {
        return {
          payload: {
            id,
            newCity,
          },
        };
      },
    },
  },
});

export const { addCity, deleteCity, editCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
