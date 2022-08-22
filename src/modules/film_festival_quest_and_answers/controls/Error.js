import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, ErrorContainer, ErrorTitle, ErrorText } from "./styles";
import { deleteError, errorSelector } from "../redux";

export const Error = () => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      if (!error) return;
      dispatch(deleteError());
    }, 1500);
    if (isHover) {
      clearTimeout(time);
    }
    return () => clearTimeout(time);
  }, [error, isHover]);

  const errorAnimations = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: 0, transition: {} },
    exit: {
      opacity: [1, 0, 0, 0, 0, 0],
      y: "-100%",
      position: "relative",
      transition: {},
    },
  };

  return reactDom.createPortal(
    <ErrorContainer>
      <AnimatePresence key="ErrorParent">
        {error?.map((err, index) => {
          const indToNum = index.toString();
          return (
            <ErrorMessage
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              variants={errorAnimations}
              initial="initial"
              animate="animate"
              exit="exit"
              // style={{ zIndex: -index }}
              key={index}
            >
              <ErrorTitle>{err.title}</ErrorTitle>
              <ErrorText>{err.detail}</ErrorText>
            </ErrorMessage>
          );
        })}
      </AnimatePresence>
    </ErrorContainer>,
    document.getElementById("errors")
  );
};
