import { styled } from "../stitches.config";

export const ContentContainer = styled("div", {
  width: "100%",
  maxWidth: "$maxContentWidth",
  padding: "0 $3",
  margin: "auto",

  "@md": {
    padding: "0 $5",
  },
});
