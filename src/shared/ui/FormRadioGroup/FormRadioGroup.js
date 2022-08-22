import React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroupStyled } from "./styled";

export const FormRadioGroup = ({
  label,
  handleOnChange,
  minRating,
  maxRating,
  isRequired,
  questionId,
}) => {
  const renderDom = () => {
    let radioButtons = [];
    for (let i = minRating; i <= Number(maxRating); i++) {
      radioButtons.push(
        <FormControlLabel
          value={i}
          control={
            <Radio
              required={isRequired}
              onChange={(e) => handleOnChange(questionId, e.target.value)}
            />
          }
          label={i}
          key={i}
        />
      );
    }
    return radioButtons;
  };
  return (
    <FormControl>
      <FormLabel required id="demo-row-radio-buttons-group-label">
        {label}
      </FormLabel>
      <RadioGroupStyled
        required={true}
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
  questionId: PropTypes.string,
  handleOnChange: PropTypes.func,
  minRating: PropTypes.number,
  maxRating: PropTypes.number,
  isRequired: PropTypes.bool,
};
