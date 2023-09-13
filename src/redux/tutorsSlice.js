import { createSlice, nanoid } from "@reduxjs/toolkit";

const tutorsInitialState = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    phone: "+1 302-865-7394",
    email: "johnsmith@goit.global",
    city: "New York",
    options: "Group creation",
  },
  {
    id: 2,
    firstName: "Antonio",
    lastName: "García",
    phone: "+34 456 890 302",
    email: "antonio.garcia@goit.global",
    city: "Madrid",
    options: "Group creation, editing teacher profiles",
  },
];

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: tutorsInitialState,
  reducers: {
    addTutor: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(tutor) {
        return {
          payload: {
            id: nanoid(),
            ...tutor,
          },
        };
      },
    },
  },
});

export const { addTutor } = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;
