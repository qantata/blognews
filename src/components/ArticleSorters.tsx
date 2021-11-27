import React from "react";

import { styled } from "../stitches.config";
import { ArticleSorter } from "../utils/articles";
import { enumKeys } from "../utils/enum-keys";
import { FilterSorterButton } from "./FilterSorterButton";
import { setSorterSelector, sorterSelector, useStore } from "../utils/store";
import { Separator } from "./Separator";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const SorterButton = styled(FilterSorterButton, {
  fontFamily: "$robotoMono500",
  fontSize: "$14",
  letterSpacing: "1px",
  border: "none",
});

export const ArticleSorters = () => {
  const sorter = useStore(sorterSelector);
  const setSorter = useStore(setSorterSelector);
  const keys = enumKeys(ArticleSorter);

  return (
    <Container>
      {keys.map((value, index) => (
        <React.Fragment key={value}>
          <SorterButton
            active={ArticleSorter[value] === sorter ? "yes" : "no"}
            onClick={() => setSorter(ArticleSorter[value])}
          >
            {value}
          </SorterButton>

          {index < keys.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </Container>
  );
};
