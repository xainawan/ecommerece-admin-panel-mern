import { createSlice } from "@reduxjs/toolkit";

// initial redux state
const initialState = {
  mode: "light",
  userId: "63701cc1f03239b7f700000e",
};

// reducers to get redux state data
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
