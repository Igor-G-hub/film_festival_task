import styled from "styled-components/macro";

const defaultStyle = (theme, margin, marginFirstOfType) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%; 
  font-size: 20px;
  margin-top: ${margin || theme.spaces.margin.lg};

  &:
  :first-of-type {
    margin-top: 100px;
  }
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
  ${({ theme, margin, marginFirstOfType }) =>
    defaultStyle(theme, margin, marginFirstOfType)};
  ${({ variant, theme }) => variant && variants[variant](theme)};
`;
