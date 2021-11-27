import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { ArticleDate } from "../components/ArticleDate";
import { styled } from "../stitches.config";
import {
  addViewToArticleSelector,
  articlesSelector,
  useStore,
} from "../utils/store";

const Container = styled("div", {
  width: "100%",
  marginTop: "$6",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "$3",
});

const Side = styled("div", {
  gridColumn: "span 0",

  "@md": {
    gridColumn: "span 1",
  },
  "@xl": {
    gridColumn: "span 2",
  },
});

const Content = styled("div", {
  gridColumn: "span 12",
  maxWidth: "$maxContentWidth",

  "@md": {
    gridColumn: "span 10",
  },
  "@xl": {
    gridColumn: "span 8",
  },
});

const BackButton = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$1",
  cursor: "pointer",
  fontFamily: "$robotoMono500",
  fontSize: "$16",
});

const Image = styled("div", {
  width: "100%",
  aspectRatio: "16 / 9",
  marginBottom: "$4",

  "> img": {
    width: "100%",
    height: "100%",
  },
});

const PublishDate = styled("div", {
  margin: "$3 0",
});

const Title = styled("h1", {
  fontFamily: "$roboto500",
  fontSize: "$36",
  lineHeight: "$46",
  color: "$darkGray",
});

const Text = styled("p", {
  fontFamily: "$roboto400",
  fontSize: "$18",
  lineHeight: "$28",
  color: "$darkGray",
});

const ArticlePage = () => {
  const articles = useStore(articlesSelector);
  const addViewToArticle = useStore(addViewToArticleSelector);
  const navigate = useNavigate();
  const params = useParams();

  const article = articles.find((a) => a.id === params.id);

  useEffect(() => {
    if (article) {
      addViewToArticle(article);
    }
  }, []);

  if (!article) {
    navigate("/");
    return null;
  }

  return (
    <Container>
      <Side>
        <Link to="/">
          <BackButton>
            <DoubleArrowLeftIcon />
            Back
          </BackButton>
        </Link>
      </Side>

      <Content>
        {article.image && (
          <Image>
            <img src={article.image} />
          </Image>
        )}

        <Title>{article.title}</Title>
        <PublishDate>
          <ArticleDate article={article} />
        </PublishDate>

        <Text>{article.content}</Text>
      </Content>

      <Side />
    </Container>
  );
};

export default ArticlePage;
