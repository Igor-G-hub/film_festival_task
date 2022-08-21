import styled from "styled-components/macro";
import { screenSizes } from "shared/theme/screenSizes";
import backgroudImage from "shared/assets/images/pexels-serkan-bayraktar-8003049.jpg";

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  background-image: url(${backgroudImage});
  background-repeat: repeat;
  background-size: 660px 1000px;
  backdrop-filter: blur(10px);

  @media ${screenSizes.tablet} {
    background-image: none;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.3);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
  background: ${({ theme }) => theme.colors.light}};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 50; 

  @media ${screenSizes.desktop} {
    width: 582px;
    padding: 0 50px 50px 50px;
    border-radius: 15px;
    align-self: center;
    margin-top: 70px;
    overflow: hidden;
  }

  @media ${screenSizes.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    border: none;
    padding: 20px;
    position: relative;
    border: none;
  }
`;
