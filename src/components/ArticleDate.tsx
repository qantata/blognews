import React from "react";

import { styled } from "../stitches.config";
import { Article } from "../utils/articles";

const Container = styled("p", {
  fontFamily: "$robotoMono500",
  fontSize: "$12",
  color: "#6b6b6b",
});

const Year = styled("span", {
  marginLeft: "$1",
});

type Props = {
  article: Article;
};

export class ArticleDate extends React.Component<Props> {
  render() {
    const date = new Date(this.props.article.createdAt);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return (
      <Container>
        {`${day}.${month}.`}
        <Year>{year}</Year>
      </Container>
    );
  }
}
