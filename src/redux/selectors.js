import { createSelector } from "@reduxjs/toolkit";

export const getCities = (state) => state.cities.items;
export const getCitiesError = (state) => state.cities.error;
export const getCitiesIsLoading = (state) => state.cities.isLoading;

export const getTutors = (state) => state.tutors.items;
export const getTutorsError = (state) => state.tutors.error;
export const getTutorsIsLoading = (state) => state.tutors.isLoading;

export const selectFaculties = (state) => state.faculties.items;
export const selectFacultiesIsLoading = (state) => state.faculties.isLoading;
export const selectFacultiesError = (state) => state.faculties.error;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export const selectCountStatesInRedux = createSelector(
  [getTutors, selectFaculties],
  (tutors, universitate) => {
    return 1;
  }
);
