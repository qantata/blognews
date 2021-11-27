import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { ScrollToTop } from "./components/ScrollToTop";
import ArticlePage from "./pages/Article";
import HomePage from "./pages/Home";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="articles">
          <Route path=":id" element={<ArticlePage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
