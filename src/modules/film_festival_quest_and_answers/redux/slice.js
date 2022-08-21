import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answersData: null,
  isSucceed: false,
  error: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAnswersData: (state, action) => {
      state.answersData = action.payload;
    },
    setIsSucceed: (state, action) => {
      state.isSucceed = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    deleteError: (state) => {
      state.error = null;
    },
  },
});

export const { setAnswersData, setIsSucceed, setError, deleteError } =
  appSlice.actions;
