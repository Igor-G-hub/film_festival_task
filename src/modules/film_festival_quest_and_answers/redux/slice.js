import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answersData: null,
  isSucceed: false,
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
  },
});

export const { setAnswersData, setIsSucceed } = appSlice.actions;
