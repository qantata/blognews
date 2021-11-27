import { keyframes, styled } from "../stitches.config";

const skeletonAnimation = keyframes({
  "100%": {
    transform: "translateX(100%)",
  },
});

// A skeleton loading animation for virtually any content
// Requires text elements to have a line-height set
export const Skeleton = styled("span", {
  backgroundColor: "$skeletonBg",
  width: "100%",
  height: "100%",
  display: "block",
  position: "relative",
  overflow: "hidden",
  zIndex: "1",

  "&::before": {
    content: "\\00a0",
    display: "block",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(
        90deg,
        $skeletonBg,
        $skeletonFg,
        $skeletonBg
    )`,
    transform: "translateX(-100%)",
    animation: `${skeletonAnimation} 1.5s ease-in-out infinite`,
  },
});
