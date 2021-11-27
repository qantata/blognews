import { styled } from "../stitches.config";

export const FilterSorterButton = styled("button", {
  textTransform: "uppercase",
  cursor: "pointer",
  color: "$darkGray",

  "&:hover": {
    color: "$active",
    borderColor: "$active",
    backgroundColor: "inherit",
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
