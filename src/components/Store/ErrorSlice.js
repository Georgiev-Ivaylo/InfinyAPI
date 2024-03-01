import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: null };
const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    errorSet(state, action) {
      console.log(action.payload.message);
      return { ...state, message: action.payload.message };
    },
    errorClear(state, action) {
      return { ...state, message: null };
    },
  },
});

export const { errorSet, errorClear } = errorSlice.actions;
export const errorState = (state) => state.error;
export default errorSlice.reducer;
