import { Cross1Icon, Link2Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import { styled } from "../stitches.config";

const Container = styled("div", {
  position: "absolute",
  inset: "0 0 auto auto",

  width: "$19",
  height: "100vh",
  padding: "$4",

  backgroundColor: "#fff",
  boxShadow: `
    -2.8px 0px 2.2px rgba(0, 0, 0, 0.02),
    -6.7px 0px 5.3px rgba(0, 0, 0, 0.028),
    -12.5px 0px 10px rgba(0, 0, 0, 0.035),
    -22.3px 0px 17.9px rgba(0, 0, 0, 0.042),
    -41.8px 0px 33.4px rgba(0, 0, 0, 0.05),
    -100px 0px 80px rgba(0, 0, 0, 0.07)
  `,

  "@md": {
    display: "none",
  },
});

const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Title = styled("h1", {
  fontFamily: "$roboto500",
});

const CloseIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  cursor: "pointer",
});

const Links = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  marginTop: "$4",
  fontSize: "20px",
  color: "$darkGray",
});

const MenuLink = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  fontFamily: "$robotoMono500",
  fontSize: "$16",
});

type Props = {
  links: string[];
  onClose: () => void;
};

export class MobileMenu extends React.Component<Props> {
  componentDidMount() {
    document.body.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflowY = "visible";
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Links</Title>

          <CloseIcon onClick={this.props.onClose}>
            <Cross1Icon width="28px" height="28px" />
          </CloseIcon>
        </Header>

        <Links>
          {this.props.links.map((link) => (
            <Link key={link} to="/">
              <MenuLink>
                <Link2Icon width="20px" height="20px" />
                <p>{link}</p>
              </MenuLink>
            </Link>
          ))}
        </Links>
      </Container>
    );
  }
}
