import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";
import { StylesProvider } from "@material-ui/core";

export const ActionButton = ({ label }) => {
  return <StyledButton variant="contained">{label}</StyledButton>;
};

ActionButton.propTypes = {
  label: PropTypes.string,
};
