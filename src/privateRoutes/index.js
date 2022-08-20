import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

PrivateRoute.propTypes = { isAuth: PropTypes.bool.isRequired };
