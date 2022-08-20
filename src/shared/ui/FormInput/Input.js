import React from "react";
import PropTypes from "prop-types";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControlStyled } from "./styled";

export const FormInput = ({ label, onChange, fullWidth }) => {
  return (
    <FormControlStyled variant="standard" fullWidth={fullWidth}>
      <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <LocalMoviesIcon />
          </InputAdornment>
        }
      />
    </FormControlStyled>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
};
