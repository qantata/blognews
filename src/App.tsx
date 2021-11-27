import { useEffect } from "react";
import { globalCss } from "@stitches/react";
import { Outlet } from "react-router";

import { ContentContainer } from "./components/ContentContainer";
import { Navbar } from "./components/Navbar";
import { styled } from "./stitches.config";
import { fetchArticles } from "./utils/articles";
import { Footer } from "./components/Footer";
import { setArticlesSelector, useStore } from "./utils/store";

// height: 100%'s are needed for sticky footer
const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    height: "100%",
    fontSize: "16px",
  },
  body: {
    height: "100%",
    backgroundColor: "#e5e5e5",

    "> #root": {
      height: "100%",
    },
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  "@font-face": [
    {
      fontFamily: "RobotoMono400",
      src: "url(/fonts/Roboto_Mono/RobotoMono-Regular.ttf)",
    },
    {
      fontFamily: "RobotoMono500",
      src: "url(/fonts/Roboto_Mono/RobotoMono-Medium.ttf)",
    },
    {
      fontFamily: "Roboto400",
      src: "url(/fonts/Roboto/Roboto-Regular.ttf)",
    },
    {
      fontFamily: "Roboto500",
      src: "url(/fonts/Roboto/Roboto-Medium.ttf)",
    },
  ],
});

// To make footer stick to the bottom on tall screens
const AppContainer = styled("div", {
  height: "100%",
  paddingTop: "$navbarHeight",
  display: "flex",
  flexDirection: "column",
});

const AppContent = styled("div", {
  flex: "1 0 auto",
});

const AppFooter = styled("div", {
  flexShrink: "0",
});

const App = () => {
  const setArticles = useStore(setArticlesSelector);

  useEffect(() => {
    globalStyles();

    fetchArticles().then((result) => {
      setArticles(result);
    });
  }, []);

  return (
    <AppContainer>
      <AppContent>
        <Navbar />

        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </AppContent>

      <AppFooter>
        <Footer />
      </AppFooter>
    </AppContainer>
  );
};

export default App;
