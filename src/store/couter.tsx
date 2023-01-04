import { createSlice } from "@reduxjs/toolkit";

const inittialState = {
  counter: 1,
};

const counterSlice = createSlice({
  name: "cc",
  initialState: inittialState,
  reducers: {
    increament(state) {
      state.counter++;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
