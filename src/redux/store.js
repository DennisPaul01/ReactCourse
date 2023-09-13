import { configureStore } from "@reduxjs/toolkit";
import { tutorsReducer } from "./tutorsSlice";
import { citiesReducer } from "./citiesSlice";

export const store = configureStore({
  reducer: {
    tutors: tutorsReducer,
    cities: citiesReducer,
  },
});
