import React from "react";
import { Link } from "react-router-dom";

import { styled } from "../stitches.config";
import { ContentContainer } from "./ContentContainer";

const Container = styled("footer", {
  padding: "$8 0",
  marginTop: "$16",
  backgroundColor: "$darkGray",
});

const Title = styled("h1", {
  fontFamily: "$roboto500",
  color: "#fff",
  marginBottom: "$3",
});

const Info = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "$2",
});

const Copyright = styled("p", {
  fontFamily: "$roboto400",
  fontSize: "$10",
  color: "#fff",
  letterSpacing: "1px",
});

const Links = styled("div", {
  display: "flex",
  gap: "$2",
  color: "#fff",
  fontFamily: "$roboto400",
  fontSize: "$10",
  letterSpacing: "1px",
});

const Icons = styled("div", {
  display: "flex",
  gap: "$2",
});

const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "50%",
  padding: "$1",

  "> img": {
    width: "$2",
    height: "$2",
    borderRadius: "50%",
  },
});

export class Footer extends React.Component {
  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>Blognews</Title>

          <Info>
            <Copyright>
              Copyright ©2022. Blogs & News Corporation. All Rights Reserved.
            </Copyright>

            <Links>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Use</Link>
              <Link to="#">Accessability Statement</Link>
            </Links>

            <Icons>
              <Icon>
                <img src="/images/youtube.png" alt="YouTube icon" />
              </Icon>
              <Icon>
                <img src="/images/facebook.png" alt="Facebook icon" />
              </Icon>
              <Icon>
                <img src="/images/twitter.png" alt="Twitter icon" />
              </Icon>
              <Icon>
                <img src="/images/linkedin.png" alt="LinkedIn icon" />
              </Icon>
              <Icon>
                <img src="/images/instagram.png" alt="Instagram icon" />
              </Icon>
              <Icon>
                <img src="/images/pinterest.png" alt="Pinterest icon" />
              </Icon>
            </Icons>
          </Info>
        </ContentContainer>
      </Container>
    );
  }
}
