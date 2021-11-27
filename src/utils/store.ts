import create from "zustand";

import { Article, ArticleFilter, ArticleSorter } from "./articles";

export type State = {
  articles: Article[];
  filter: ArticleFilter;
  sorter: ArticleSorter;
  setArticles: (value: Article[]) => void;
  setFilter: (value: ArticleFilter) => void;
  setSorter: (value: ArticleSorter) => void;
  addViewToArticle: (article: Article) => void;
};

// See https://github.com/pmndrs/zustand#memoizing-selectors
export const articlesSelector = (state: State) => state.articles;
export const filterSelector = (state: State) => state.filter;
export const sorterSelector = (state: State) => state.sorter;
export const setArticlesSelector = (state: State) => state.setArticles;
export const setFilterSelector = (state: State) => state.setFilter;
export const setSorterSelector = (state: State) => state.setSorter;
export const addViewToArticleSelector = (state: State) =>
  state.addViewToArticle;

export const useStore = create<State>((set) => ({
  articles: [],
  filter: ArticleFilter.ALL,
  sorter: ArticleSorter.DATE,
  setArticles: (value: Article[]) => set({ articles: value }),
  setFilter: (value: ArticleFilter) => set({ filter: value }),
  setSorter: (value: ArticleSorter) => set({ sorter: value }),
  addViewToArticle: (article: Article) =>
    set((state) => ({
      articles: state.articles.map((a) => {
        if (a.id !== article.id) {
          return a;
        } else {
          return {
            ...a,
            views: a.views + 1,
          };
        }
      }),
    })),
}));
