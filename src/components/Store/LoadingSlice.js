import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { isActive: false },
  reducers: {
    loadingStart(state, action) {
      return { ...state, isActive: true };
      //   state.push({
      //     id: action.payload.id,
      //     text: action.payload.text,
      //     completed: false,
      //   });
    },
    loadingStop(state, action) {
      return { ...state, isActive: false };
      //   const todo = state.find((todo) => todo.id === action.payload);
      //   todo.completed = !todo.completed;
    },
  },
});

export const { loadingStart, loadingStop } = loadingSlice.actions;
export const loadingState = (state) => state.loading;
export default loadingSlice.reducer;
