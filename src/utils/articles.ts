import axios from "axios";

export type Article = {
  id: string;
  author: {
    name: string;
    photo: string;
  };
  content: string;
  createdAt: string;
  image: string | null;
  title: string;
  type: string;
  views: number;
};

export enum ArticleFilter {
  ALL,
  NEWS,
  BLOGS,
}

export enum ArticleSorter {
  DATE,
  TITLE,
  VIEWS,
}

const responseToAppType: { [key: string]: string } = {
  news: ArticleFilter[ArticleFilter.NEWS],
  blog: ArticleFilter[ArticleFilter.BLOGS],
};

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const result = await axios.get(
      "https://frontend-test-task.free.beeceptor.com/articles"
    );

    if (!result.data.articles) {
      throw new Error("API response doesn't have articles");
    }

    // The "views" value is only used in the app, it's not available in the response
    const articles: Omit<Article, "views">[] = result.data.articles;

    // Transform articles to the type that we use in the app
    return articles.map((a) => ({
      ...a,
      type: responseToAppType[a.type],
      views: 0,
    }));
  } catch (err) {
    console.error("Couldn't fetch articles:", err);
    return [];
  }
};
