import styled from "styled-components/macro";
import { screenSizes } from "shared/theme/screenSizes";

export const TitleStyled = styled.h1`
  text-align: center;
  font-weight: 500;

  @media ${screenSizes.tablet} {
    font-size: 35px;
  }

  @media ${screenSizes.smallDevice} {
    font-size: 32px;
  }
`;
