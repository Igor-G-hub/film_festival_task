import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "shared/theme";
import { useSelector } from "react-redux";
import {
  Error,
  IndexPage,
  isSucceedSelector,
  SuccessPage,
} from "modules/film_festival_quest_and_answers";
import { routes } from "modules/main/routes";
import { PrivateRoute } from "privateRoutes";
import { AppWrapper } from "modules/film_festival_quest_and_answers/components/AppWrapper/AppWrapper";

const App = () => {
  const isSucceed = useSelector(isSucceedSelector);
  return (
    <ThemeProvider theme={theme}>
      <Error />
      <Router>
        <AppWrapper>
          <Routes>
            <Route exact path={routes.home} element={<IndexPage />} />
            <Route
              exact
              path={routes.success}
              element={
                <PrivateRoute isSucceed={isSucceed}>
                  <SuccessPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
