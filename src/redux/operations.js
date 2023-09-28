import { createAsyncThunk } from "@reduxjs/toolkit";
import { tutorApi, citiesApi, facultiesApi } from "../api/api";
import { db } from "../firebase";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  collection,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

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

export const fetchFaculties = createAsyncThunk(
  "faculties/fetchFaculties",
  async (_, thunkAPI) => {
    try {
      // Identificare user
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;

      const userDocRef = doc(db, "users", userId);
      const facultiesCollectionRef = collection(userDocRef, "faculties");
      const documentsFaculties = await getDocs(facultiesCollectionRef);

      const facultiesData = [];
      documentsFaculties.forEach((doc) => {
        const facultyData = doc.data();
        facultiesData.push({ ...facultyData, id: doc.id });
      });

      return facultiesData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFaculty = createAsyncThunk(
  "faculties/addFaculty",
  async (faculty, thunkAPI) => {
    try {
      // Identificare user
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;

      const userDocRef = doc(db, "users", userId);
      const facultiesCollectionRef = collection(userDocRef, "faculties");
      const docRef = await addDoc(facultiesCollectionRef, { name: faculty });
      const addedData = (await getDoc(docRef)).data();
      console.log(addedData);
      // const exempluDoc = {
      //   users: {
      //     userid1: { faculties: [{ id: "unicId", name: "Uvt" }] },
      //     userid2: { faculties: [{ id: "unicId", name: "Uvt" }] },
      //   },
      // };

      // const response = await facultiesApi.create({ name: faculty });
      return { id: docRef.id, ...addedData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFaculty = createAsyncThunk(
  "faculties/deleteFaculty",

  async (facultyId, thunkAPI) => {
    console.log(facultyId);
    // Identificare user
    const currState = thunkAPI.getState();
    const userId = currState.user.user.uid;

    const userDocRef = doc(db, "users", userId);
    const facultiesCollectionRef = collection(userDocRef, "faculties");
    const facultyDocRef = doc(facultiesCollectionRef, facultyId);

    await deleteDoc(facultyDocRef);

    return facultyId;
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    return response.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
