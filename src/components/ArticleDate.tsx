import React from "react";

import { styled } from "../stitches.config";
import { Article } from "../utils/articles";
import { Skeleton } from "./Skeleton";

const Container = styled("p", {
  fontFamily: "$robotoMono500",
  color: "#6b6b6b",
  fontSize: "$12",
  lineHeight: "$12",
});

const Year = styled("span", {
  marginLeft: "$1",
});

type Props = {
  article: Article;
  loading?: boolean;
};

export class ArticleDate extends React.Component<Props> {
  render() {
    if (this.props.loading) {
      return (
        <Container>
          <Skeleton />
        </Container>
      );
    }

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
