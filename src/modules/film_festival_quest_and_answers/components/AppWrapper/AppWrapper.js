import React from "react";
import PropTypes from "prop-types";
import { AppContainer, ContentContainer, ImageContainer } from "./styled";

export const AppWrapper = ({ children }) => {
  return (
    <AppContainer>
      <ImageContainer></ImageContainer>
      <ContentContainer>{children}</ContentContainer>
    </AppContainer>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
};
