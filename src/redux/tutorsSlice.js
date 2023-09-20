import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTutors, addTutor } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTutors.pending]: handlePending,
    [fetchTutors.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTutors.rejected]: handleRejected,
    [addTutor.pending]: handlePending,
    [addTutor.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addTutor.rejected]: handleRejected,
  },
});

export const tutorsReducer = tutorsSlice.reducer;
