import React from "react";
import PropTypes from "prop-types";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControlStyled } from "./styled";

export const FormInput = ({
  label,
  handleOnChange,
  fullWidth,
  isRequired,
  questionId,
}) => {
  return (
    <FormControlStyled variant="standard" fullWidth={fullWidth}>
      <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
      <Input
        required={isRequired}
        onChange={(e) => handleOnChange(questionId, e.target.value)}
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
  questionId: PropTypes.string,
  handleOnChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  isRequired: PropTypes.bool,
};
