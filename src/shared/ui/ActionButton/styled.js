import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { theme } from "shared/theme";

export const StyledButton = styled(Button)`
  background-color: ${theme.colors.primary};
  border-radius: 20px;
  width: 50%;
  padding: 10px;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    background-color: ${theme.colors.primary};
  }
`;
