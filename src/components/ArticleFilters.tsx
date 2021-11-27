import { styled } from "../stitches.config";
import { ArticleFilter } from "../utils/articles";
import { enumKeys } from "../utils/enum-keys";
import { FilterSorterButton } from "./FilterSorterButton";
import { filterSelector, setFilterSelector, useStore } from "../utils/store";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const FilterButton = styled(FilterSorterButton, {
  fontFamily: "$robotoMono500",
  fontSize: "$14",
  letterSpacing: "1px",
  border: "1px solid $darkGray",
  padding: "$1 $3",
});

export const ArticleFilters = () => {
  const filter = useStore(filterSelector);
  const setFilter = useStore(setFilterSelector);

  return (
    <Container>
      {enumKeys(ArticleFilter).map((value) => (
        <FilterButton
          key={value}
          active={ArticleFilter[value] === filter ? "yes" : "no"}
          onClick={() => setFilter(ArticleFilter[value])}
        >
          {value}
        </FilterButton>
      ))}
    </Container>
  );
};
