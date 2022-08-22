import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

export const ErrorContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ErrorMessage = styled(motion.div)`
  background-color: #f9dad8;
  border: 1px solid #ddaca8;
  margin: 10px;
  padding: 16px;
  border-radius: 16px;
  color: white;
  width: 90%;
  box-shadow: ${(props) => props.theme.shadows.defalutl};
  @media ${({ theme }) => theme.screenSizes.desktop} {
    max-width: 600px;
  }
`;

export const ErrorTitle = styled.div`
  color: #ab615c;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

export const ErrorText = styled.div`
  color: #ab615c;
  margin-bottom: 10px;
  font-size: 14px;
`;
