import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import { theme } from "shared/theme";

export const FormControlStyled = styled(FormControl)`
  .MuiInputBase-root {
    &::after {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  }
`;
