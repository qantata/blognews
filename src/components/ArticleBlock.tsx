import React from "react";
import { styled } from "../stitches.config";
import { ImageIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import { Article, ArticleFilter } from "../utils/articles";
import { ArticleDate } from "./ArticleDate";

const Container = styled("div", {
  width: "100%",
});

const Thumbnail = styled("div", {
  width: "100%",
  aspectRatio: "16 / 9",
  backgroundColor: "#efefef",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "> img": {
    width: "100%",
    height: "100%",
    border: 0,
    outline: 0,
    boxShadow: "none",
  },
});

const ThumbnailMissing = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  fontFamily: "$robotoMono400",
  color: "$darkGray",
});

const Texts = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  marginTop: "$2",
});

const Title = styled("p", {
  fontFamily: "$roboto500",
  fontSize: "$18",
  lineHeight: "$24",
  color: "$darkGray",
});

const BlogAuthorText = styled("p", {
  fontFamily: "$roboto400",
  fontSize: "$14",
  color: "$darkGray",
});

type Props = {
  article: Article;
};

export const ArticleBlock: React.FunctionComponent<Props> = ({ article }) => {
  const isBlog = article.type === ArticleFilter[ArticleFilter.BLOGS];

  return (
    <Container>
      <Thumbnail>
        {article.image && <img src={article.image} />}
        {!article.image && (
          <ThumbnailMissing>
            <ImageIcon />
            No image available
          </ThumbnailMissing>
        )}
      </Thumbnail>

      <Texts>
        <Link to={`/articles/${article.id}`}>
          <Title>{article.title}</Title>
        </Link>

        {isBlog && (
          <BlogAuthorText>BLOG | {article.author.name}</BlogAuthorText>
        )}

        <ArticleDate article={article} />
      </Texts>
    </Container>
  );
};
