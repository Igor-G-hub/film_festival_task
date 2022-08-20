import React from "react";
import PropTypes from "prop-types";
import { DescriptionStyled } from "./styled";

export const Description = ({ html }) => {
  return <DescriptionStyled>{html}</DescriptionStyled>;
};

Description.propTypes = {
  html: PropTypes.array,
};
