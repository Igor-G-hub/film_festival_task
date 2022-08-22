import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isSucceed, children }) => {
  if (!isSucceed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

PrivateRoute.propTypes = { isSucceed: PropTypes.bool.isRequired };
