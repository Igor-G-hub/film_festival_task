import React from "react";
import PropTypes from "prop-types";
import { TitleStyled } from "./styled";

export const Title = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

Title.propTypes = {
  title: PropTypes.string,
};
