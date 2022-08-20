const sizes = {
  xsm: "300px",
  sm: "578px",
  md: "768px",
  lg: "1200px",
};

export const deviceWidths = {
  extraSmallDevice: `(max-width: ${sizes.xsm})`,
  smallDevice: `(max-width: ${sizes.sm})`,
  tablet: `(max-width: ${sizes.md})`,
  desktop: `(min-width: ${sizes.lg})`,
};
