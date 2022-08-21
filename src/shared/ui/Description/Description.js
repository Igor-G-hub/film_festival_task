import React from "react";
import PropTypes from "prop-types";
import { DescriptionStyled } from "./styled";

export const Description = ({ html, text, margin, variant }) => {
  return (
    <DescriptionStyled margin={margin} variant={variant}>
      {html || text}
    </DescriptionStyled>
  );
};

Description.propTypes = {
  html: PropTypes.array,
  text: PropTypes.string,
  variant: PropTypes.string,
};
