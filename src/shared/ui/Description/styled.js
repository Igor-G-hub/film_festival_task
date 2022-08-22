import styled from "styled-components/macro";
import { theme } from "shared/theme";

const defaultStyle = (theme) => `
color: ${theme.colors.dark};
opacity: 0.5;
`;

const small = (theme) => `
color: ${theme.colors.dark};
opacity: 0.5;
margin-top: 10px;
font-size : 18px;
`;

const variants = {
  small,
};

export const DescriptionStyled = styled.div`
  ${({ theme }) => defaultStyle(theme)};
  ${({ variant, theme }) => variant && variants[variant](theme)};
`;
