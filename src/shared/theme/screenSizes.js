const sizes = {
  xsm: "300px",
  sm: "578px",
  md: "768px",
  lg: "769px",
};

export const screenSizes = {
  extraSmallDevice: `(max-width: ${sizes.xsm})`,
  smallDevice: `(max-width: ${sizes.sm})`,
  tablet: `(max-width: ${sizes.md})`,
  desktop: `(min-width: ${sizes.lg})`,
};
