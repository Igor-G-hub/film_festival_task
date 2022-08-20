import React from "react";
import PropTypes from "prop-types";
import { FlexContainerStyled } from "./styled";

export const FlexContainer = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  width,
  margin,
  ...otherProps
}) => {
  return (
    <FlexContainerStyled
      width={width}
      flexDirection={flexDirection}
      {...otherProps}
    >
      {children}
    </FlexContainerStyled>
  );
};

FlexContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  width: PropTypes.string,
};
