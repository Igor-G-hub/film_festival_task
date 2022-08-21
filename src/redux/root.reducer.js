import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "modules/film_festival_quest_and_answers";

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export default rootReducer;
