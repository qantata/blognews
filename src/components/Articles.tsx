import { styled } from "../stitches.config";
import {
  articlesSelector,
  filterSelector,
  sorterSelector,
  useStore,
} from "../utils/store";
import { ArticleBlock } from "./ArticleBlock";
import { ArticleFilter, ArticleSorter } from "../utils/articles";

const Container = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  columnGap: "$3",
  rowGap: "$8",

  "> *": {
    gridColumn: "span 12",
  },

  "@md": {
    "> *": {
      gridColumn: "span 6",
    },
  },
  "@xl": {
    "> *": {
      gridColumn: "span 4",
    },
  },
  "@xxl": {
    "> *": {
      gridColumn: "span 3",
    },
  },
});

export const Articles = () => {
  const articles = useStore(articlesSelector);
  const filter = useStore(filterSelector);
  const sorter = useStore(sorterSelector);

  const filteredArticles = articles.filter(
    (a) => filter === ArticleFilter.ALL || a.type === ArticleFilter[filter]
  );
  const sortedArticles = filteredArticles.sort((a, b) => {
    switch (sorter) {
      case ArticleSorter.DATE:
        return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
      case ArticleSorter.TITLE:
        return a.title < b.title ? -1 : 1;
      case ArticleSorter.VIEWS:
        if (a.views > b.views) return -1;
        if (b.views > a.views) return 1;
        return 0;
      default:
        console.error("Unknown sorter:", sorter);
        return 0;
    }
  });

  return (
    <Container>
      {sortedArticles.map((article) => (
        <ArticleBlock key={article.id} article={article} />
      ))}
    </Container>
  );
};
