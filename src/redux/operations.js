import { createAsyncThunk } from "@reduxjs/toolkit";
import { tutorApi, citiesApi } from "../api/api";

export const fetchTutors = createAsyncThunk(
  "tutors/fetchTutors",
  async (_, thunkAPI) => {
    try {
      const response = await tutorApi.getAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTutor = createAsyncThunk(
  "tutors/addTutor",
  async (tutor, thunkAPI) => {
    try {
      const response = await tutorApi.create(tutor);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (_, thunkAPI) => {
    try {
      const response = await citiesApi.getAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCity = createAsyncThunk(
  "cities/addCity",
  async (city, thunkAPI) => {
    try {
      const response = await citiesApi.create({ name: city });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCity = createAsyncThunk(
  "cities/deleteCity",
  async (id, thunkAPI) => {
    try {
      const response = await citiesApi.delete(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCity = createAsyncThunk(
  "cities/editCity",
  async (city, thunkAPI) => {
    try {
      const response = await citiesApi.update(city.id, { name: city.newName });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
