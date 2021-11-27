import { createStitches } from "@stitches/react";

export const maxContentWidth = "1920px";
export const minNonMobileWidth = "768px";

const layoutSizes = {
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  7: "56px",
  8: "64px",
  9: "72px",
  10: "80px",
  11: "88px",
  12: "96px",
  13: "104px",
  14: "112px",
  15: "120px",
  16: "128px",
  17: "192px",
  18: "256px",
  19: "384px",
  20: "512px",
  navbarHeight: "64px",
  maxContentWidth,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      active: "#001aff",
      darkGray: "#303030",
      skeletonBg: "#ebebeb",
      skeletonFg: "#f5f5f5",
    },
    space: layoutSizes,
    sizes: layoutSizes,
    fonts: {
      roboto400: "Roboto400",
      roboto500: "Roboto500",
      robotoMono400: "RobotoMono400",
      robotoMono500: "RobotoMono500",
    },
    fontSizes: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      36: "2.25rem",
    },
    lineHeights: {
      24: "1.5rem",
      28: "1.75rem",
      46: "2.875rem",
    },
  },
  media: {
    // From bootstrap v5
    sm: "(min-width: 576px)",
    md: `(min-width: ${minNonMobileWidth})`,
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
});
