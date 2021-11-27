import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import { minNonMobileWidth, styled } from "../stitches.config";
import { useWindowSize } from "../utils/use-window-size";
import { ContentContainer } from "./ContentContainer";
import { MobileMenu } from "./MobileMenu";

const Container = styled("nav", {
  width: "100vw",
  height: "$navbarHeight",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  zIndex: "10",
  top: "0",
  backgroundColor: "#fff",
});

const Title = styled("h1", {
  fontFamily: "$roboto500",
  color: "$darkGray",
});

const Items = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const Links = styled("div", {
  display: "none",
  color: "$darkGray",

  "@md": {
    display: "flex",
    alignItems: "center",
    gap: "$4",
  },
});

const LinkText = styled("p", {
  fontFamily: "$robotoMono500",
  fontSize: "$16",
});

const MenuIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "@md": {
    display: "none",
  },
});

const MobileMenuContainer = styled("div", {
  "@md": {
    display: "none",
  },
});

const links = ["Home", "Articles", "About us"];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth] = useWindowSize();

  return (
    <Container>
      <ContentContainer>
        <Items>
          <Link to="/">
            <Title>Blognews</Title>
          </Link>

          <Links>
            {links.map((link) => (
              <Link key={link} to="/">
                <LinkText>{link}</LinkText>
              </Link>
            ))}
          </Links>

          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerMenuIcon width="28px" height="28px" />
          </MenuIcon>
        </Items>
      </ContentContainer>

      <MobileMenuContainer>
        <MobileMenu
          links={links}
          isOpen={isMenuOpen && windowWidth < parseInt(minNonMobileWidth)}
          onClose={() => setIsMenuOpen(false)}
        />
      </MobileMenuContainer>
    </Container>
  );
};
