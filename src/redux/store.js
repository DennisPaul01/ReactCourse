import { configureStore } from "@reduxjs/toolkit";
import { tutorsReducer } from "./tutorsSlice";
import { citiesReducer } from "./citiesSlice";
import { facultiesReducer } from "./facultiesSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    tutors: tutorsReducer,
    cities: citiesReducer,
    faculties: facultiesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
