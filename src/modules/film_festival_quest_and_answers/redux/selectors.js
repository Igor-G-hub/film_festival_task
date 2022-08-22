import { createSelector } from "@reduxjs/toolkit";
export const appSelector = (state) => state.app;

export const answersDataSelector = createSelector(
  appSelector,
  (app) => app.answersData
);

export const isSucceedSelector = createSelector(
  appSelector,
  (app) => app.isSucceed
);

export const errorSelector = createSelector(appSelector, (app) => app.error);
