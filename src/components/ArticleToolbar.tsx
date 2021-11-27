import { styled } from "../stitches.config";
import { ArticleFilters } from "./ArticleFilters";
import { ArticleSorters } from "./ArticleSorters";

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "$3",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$4",

  "@md": {
    marginBottom: "$8",

    "> *": {
      width: "auto !important",
    },
  },

  "> *": {
    width: "100%",
  },
});

export const ArticleToolbar = () => {
  return (
    <Container>
      <ArticleFilters />

      <ArticleSorters />
    </Container>
  );
};
