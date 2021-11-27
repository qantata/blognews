import { Articles } from "../components/Articles";
import { ArticleToolbar } from "../components/ArticleToolbar";
import { styled } from "../stitches.config";

const ArticlesTitle = styled("h1", {
  fontFamily: "$robotoMono400",
  fontSize: "$24",
  color: "$darkGray",
  margin: "$5 0",
});

const HomePage = () => {
  return (
    <>
      <ArticlesTitle>Articles</ArticlesTitle>

      <ArticleToolbar />

      <Articles />
    </>
  );
};

export default HomePage;
