import styled from "styled-components/macro";

const defaultStyle = (theme) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%; 
  font-size: 20px;
  padding-top: 6px;
  margin-top: 30px;
`;

const colored = (theme) => `
background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  margin-top: 0;
  margin-left: -50px;
  padding: 50px;
  padding-bottom: 80px;
  border-radius: 0 0 100% 100%;
  
`;

const variants = {
  colored,
};

export const FlexContainerStyled = styled.div`
  ${({ theme }) => defaultStyle(theme)};
  ${({ variant, theme }) => variant && variants[variant](theme)};
`;
