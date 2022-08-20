import React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroupStyled } from "./styled";

export const FormRadioGroup = ({ label, onChange, maxRating }) => {
  const renderDom = () => {
    let radioButtons = [];
    for (let i = 1; i <= Number(maxRating); i++) {
      radioButtons.push(
        <FormControlLabel value={i} control={<Radio />} label={i} key={i} />
      );
    }
    return radioButtons;
  };
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroupStyled
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {renderDom()}
      </RadioGroupStyled>
    </FormControl>
  );
};

FormRadioGroup.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  maxRating: PropTypes.number,
};
