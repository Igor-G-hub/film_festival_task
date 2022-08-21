import RadioGroup from "@mui/material/RadioGroup";
import styled from "@emotion/styled";
import { theme } from "shared/theme";

export const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  justify-content: space-around;

  span.Mui-checked {
    color: ${theme.colors.primary};
  }
`;
