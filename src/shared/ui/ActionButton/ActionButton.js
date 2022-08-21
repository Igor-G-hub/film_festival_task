import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";
import { StylesProvider } from "@material-ui/core";

export const ActionButton = ({ label, type, onClick }) => {
  return (
    <StyledButton type={type} variant="contained" onClick={onClick}>
      {label}
    </StyledButton>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
