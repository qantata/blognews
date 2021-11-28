import { styled } from "../stitches.config";

export const FilterSorterButton = styled("button", {
  textTransform: "uppercase",
  cursor: "pointer",
  color: "$darkGray",
  backgroundColor: "transparent",

  "&:hover": {
    color: "$active",
    borderColor: "$active",
  },

  variants: {
    active: {
      yes: {
        color: "$active",
        borderColor: "$active",
      },
      no: {},
    },
  },
  defaultVariants: {
    active: "no",
  },
});
