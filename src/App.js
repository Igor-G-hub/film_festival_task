import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  IndexPage,
  SuccessPage,
} from "modules/film_festival_quest_and_answers";
import { routes } from "modules/main/routes";
import { PrivateRoute } from "privateRoutes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path={routes.home} element={<IndexPage />} />
          <Route
            exact
            path={routes.success}
            element={
              <PrivateRoute isAuth={false}>
                <SuccessPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
